import { logs } from "@opentelemetry/api-logs";
import {
  BatchLogRecordProcessor,
  LoggerProvider,
} from "@opentelemetry/sdk-logs";
import { OtelSetup } from "@src/otel/otel-setup";

const otelConfig: OtelSetup = {
  otlpLogsEndpoint: {
    endpoint: "/v1/logs",
    host: "192.168.100.2",
    mode: "http",
    port: 4318,
    protocol: "http",
  },
  otlpMetricsEndpoint: {
    endpoint: "/v1/metrics",
    host: "192.168.100.2",
    mode: "http",
    port: 4318,
    protocol: "http",
  },
  otlpTracesEndpoint: {
    endpoint: "/v1/traces",
    host: "192.168.100.2",
    mode: "http",
    port: 4318,
    protocol: "http",
  },
  // prometheusEndpoint: {
  //   endpoint: '/metrics',
  //   host: '192.168.100.2',
  //   mode: 'http',
  //   port: 9465,
  //   protocol: 'http',
  // },
};

async function enableOtelSetup(): Promise<void> {
  const otelSetup = new OtelSetup(otelConfig);

  const loggerProvider = new LoggerProvider();

  loggerProvider.addLogRecordProcessor(
    new BatchLogRecordProcessor(
      OtelSetup.createLogExporter(otelConfig.otlpLogsEndpoint),
      {
        maxExportBatchSize: 512,
        scheduledDelayMillis: 5000,
      },
    ),
  );
  logs.setGlobalLoggerProvider(loggerProvider);
  await otelSetup.start();
}

enableOtelSetup()
  .then(() => {
    console.log("OpenTelemetry setup completed successfully.");
  })
  .catch((error) => {
    console.error("Error setting up OpenTelemetry:", error);
  });
