import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPLogExporter as OTLPLogExporterGRPC } from "@opentelemetry/exporter-logs-otlp-grpc";
import { OTLPLogExporter as OTLPLogExporterHTTP } from "@opentelemetry/exporter-logs-otlp-http";
import { OTLPMetricExporter as OTLPMetricExporterGRPC } from "@opentelemetry/exporter-metrics-otlp-grpc";
import { OTLPMetricExporter as OTLPMetricExporterHTTP } from "@opentelemetry/exporter-metrics-otlp-http";
import { PrometheusExporter } from "@opentelemetry/exporter-prometheus";
import { OTLPTraceExporter as OTLPTraceExporterGRPC } from "@opentelemetry/exporter-trace-otlp-grpc";
import { OTLPTraceExporter as OTLPTraceExporterHTTP } from "@opentelemetry/exporter-trace-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import { NodeSDK } from "@opentelemetry/sdk-node";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";

import { importInstrumentations } from "./Instrumentation";

export interface IExporter {
  host: string;
  port: number;
  endpoint: string;
  mode: "http" | "grpc";
  protocol?: "http" | "https";
  headers?: Record<string, string>;
}

export interface IOtelConfig {
  otlpTracesEndpoint?: IExporter;
  otlpLogsEndpoint?: IExporter;
  otlpMetricsEndpoint?: IExporter;
  prometheusEndpoint?: IExporter;
  retryDelayMs?: number;
}

export class OtelSetup {
  private readonly sdk: NodeSDK | undefined;

  private readonly retrying = false;

  constructor(private readonly config: IOtelConfig) {
    if (config.otlpMetricsEndpoint && config.prometheusEndpoint) {
      throw new Error(
        "Cannot configure both OTLP metrics and Prometheus exporter at the same time. Please choose one.",
      );
    }

    for (const key of [
      "otlpTracesEndpoint",
      "otlpLogsEndpoint",
      "otlpMetricsEndpoint",
      "prometheusEndpoint",
    ] as const) {
      const exporter = config[key];

      if (exporter && exporter.mode === "http" && !exporter.protocol) {
        throw new Error(
          `Exporter "${key}" is set to "http" mode but "protocol" is not defined.`,
        );
      }
    }

    this.sdk = new NodeSDK({
      resource: resourceFromAttributes({
        [ATTR_SERVICE_NAME]: "my-service",
        [ATTR_SERVICE_VERSION]: "1.0.0",
      }),
      instrumentations: [
        getNodeAutoInstrumentations(),
        ...importInstrumentations(),
      ],
      metricReader: config.otlpMetricsEndpoint
        ? OtelSetup.createMetricExporter(config.otlpMetricsEndpoint)
        : config.prometheusEndpoint
          ? OtelSetup.createPrometheusExporter(config.prometheusEndpoint)
          : undefined,
      traceExporter: config.otlpTracesEndpoint
        ? OtelSetup.createTraceExporter(config.otlpTracesEndpoint)
        : undefined,
    });
  }

  public async start(): Promise<void> {
    if (this.sdk) {
      await this.sdk.start();
    }
  }

  public async shutdown(): Promise<void> {
    if (this.sdk) {
      await this.sdk.shutdown();
    }
  }

  public static createTraceExporter(
    config: IExporter,
  ): OTLPTraceExporterHTTP | OTLPTraceExporterGRPC {
    if (config.mode === "grpc") {
      return new OTLPTraceExporterGRPC({
        headers: config.headers ?? {},
        url: `${config.host}:${config.port}${config.endpoint}`,
      });
    }

    // Default to HTTP
    return new OTLPTraceExporterHTTP({
      headers: config.headers ?? {},
      url: `${config.protocol}://${config.host}:${config.port}${config.endpoint}`,
    });
  }

  public static createLogExporter(
    config: IExporter,
  ): OTLPLogExporterGRPC | OTLPLogExporterHTTP {
    if (config.mode === "grpc") {
      return new OTLPLogExporterGRPC({
        headers: config.headers ?? {},
        url: `${config.host}:${config.port}${config.endpoint}`,
      });
    }

    // Default to HTTP
    return new OTLPLogExporterHTTP({
      headers: config.headers ?? {},
      url: `${config.protocol}://${config.host}:${config.port}${config.endpoint}`,
    });
  }

  public static createMetricExporter(
    config: IExporter,
  ): PeriodicExportingMetricReader {
    let exporter;

    if (config.mode === "grpc") {
      exporter = new OTLPMetricExporterGRPC({
        headers: config.headers ?? {},
        url: `${config.host}:${config.port}${config.endpoint}`,
      });
    } else {
      exporter = new OTLPMetricExporterHTTP({
        headers: config.headers ?? {},
        url: `${config.protocol}://${config.host}:${config.port}${config.endpoint}`,
      });
    }

    return new PeriodicExportingMetricReader({ exporter });
  }

  public static createPrometheusExporter(
    config: IExporter,
  ): PrometheusExporter {
    return new PrometheusExporter({
      endpoint: config.endpoint,
      host: config.host,
      port: config.port,
    });
  }
}
