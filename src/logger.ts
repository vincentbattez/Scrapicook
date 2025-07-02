const getLevelToString = (label: string) => ({ level: label });

const loggerParameters = {
  formatters: {
    level: getLevelToString,
  },
  base: {
    component: "scrapicook-api",
  },
  timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
  messageKey: "message",
};

export const envToLogger = {
  local: {
    level: "info",
    transport: {
      target: "pino-pretty",
    },
  },
  preprod: {
    level: "info",
    ...loggerParameters,
  },
  development: {
    level: "info",
    ...loggerParameters,
  },
  prod: {
    level: "debug",
    ...loggerParameters,
  },
  test: {
    level: "debug",
    transport: {
      target: "pino-pretty",
    },
  },
};
