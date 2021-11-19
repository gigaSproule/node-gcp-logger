/* eslint-disable no-console */
import mockConsole from "jest-mock-console";

beforeAll(() => {
  mockConsole();
});

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe("info", () => {
  it("should log at the info level", () => {
    const { info } = require("../index");
    info({ message: "info-message", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "INFO",
        message: "info-message",
        some: "extra-property"
      })
    );
  });

  it("should set the trace key if initialize called before", () => {
    const { info, initialize } = require("../index");
    initialize("trace-key");
    info({ message: "initialize-info", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "INFO",
        "logging.googleapis.com/trace": `projects/${process.env.GCP_PROJECT_ID}/traces/trace-key`,
        message: "initialize-info",
        some: "extra-property"
      })
    );
  });
});

describe("debug", () => {
  it("should log at the debug level", () => {
    const { debug } = require("../index");
    debug({ message: "debug-message", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "DEBUG",
        message: "debug-message",
        some: "extra-property"
      })
    );
  });

  it("should set the trace key if initialize called before", () => {
    const { debug, initialize } = require("../index");
    initialize("trace-key");
    debug({ message: "initialize-debug", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "DEBUG",
        "logging.googleapis.com/trace": `projects/${process.env.GCP_PROJECT_ID}/traces/trace-key`,
        message: "initialize-debug",
        some: "extra-property"
      })
    );
  });
});

describe("notice", () => {
  it("should log at the notice level", () => {
    const { notice } = require("../index");
    notice({ message: "notice-message", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "NOTICE",
        message: "notice-message",
        some: "extra-property"
      })
    );
  });

  it("should set the trace key if initialize called before", () => {
    const { initialize, notice } = require("../index");
    initialize("trace-key");
    notice({ message: "initialize-notice", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "NOTICE",
        "logging.googleapis.com/trace": `projects/${process.env.GCP_PROJECT_ID}/traces/trace-key`,
        message: "initialize-notice",
        some: "extra-property"
      })
    );
  });
});

describe("warning", () => {
  it("should log at the warning level", () => {
    const { warning } = require("../index");
    warning({ message: "warning-message", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "WARNING",
        message: "warning-message",
        some: "extra-property"
      })
    );
  });

  it("should set the trace key if initialize called before", () => {
    const { initialize, warning } = require("../index");
    initialize("trace-key");
    warning({ message: "initialize-warning", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "WARNING",
        "logging.googleapis.com/trace": `projects/${process.env.GCP_PROJECT_ID}/traces/trace-key`,
        message: "initialize-warning",
        some: "extra-property"
      })
    );
  });
});

describe("error", () => {
  it("should log at the error level", () => {
    const { error } = require("../index");
    error({ message: "error-message", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "ERROR",
        message: "error-message",
        some: "extra-property"
      })
    );
  });

  it("should set the trace key if initialize called before", () => {
    const { error, initialize } = require("../index");
    initialize("trace-key");
    error({ message: "initialize-error", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "ERROR",
        "logging.googleapis.com/trace": `projects/${process.env.GCP_PROJECT_ID}/traces/trace-key`,
        message: "initialize-error",
        some: "extra-property"
      })
    );
  });
});

describe("critical", () => {
  it("should log at the critical level", () => {
    const { critical } = require("../index");
    critical({ message: "critical-message", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "CRITICAL",
        message: "critical-message",
        some: "extra-property"
      })
    );
  });

  it("should set the trace key if initialize called before", () => {
    const { critical, initialize } = require("../index");
    initialize("trace-key");
    critical({ message: "initialize-critical", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "CRITICAL",
        "logging.googleapis.com/trace": `projects/${process.env.GCP_PROJECT_ID}/traces/trace-key`,
        message: "initialize-critical",
        some: "extra-property"
      })
    );
  });
});

describe("alert", () => {
  it("should log at the alert level", () => {
    const { alert } = require("../index");
    alert({ message: "alert-message", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "ALERT",
        message: "alert-message",
        some: "extra-property"
      })
    );
  });

  it("should set the trace key if initialize called before", () => {
    const { alert, initialize } = require("../index");
    initialize("trace-key");
    alert({ message: "initialize-alert", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "ALERT",
        "logging.googleapis.com/trace": `projects/${process.env.GCP_PROJECT_ID}/traces/trace-key`,
        message: "initialize-alert",
        some: "extra-property"
      })
    );
  });
});

describe("emergency", () => {
  it("should log at the emergency level", () => {
    const { emergency } = require("../index");
    emergency({ message: "emergency-message", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "EMERGENCY",
        message: "emergency-message",
        some: "extra-property"
      })
    );
  });

  it("should set the trace key if initialize called before", () => {
    const { emergency, initialize } = require("../index");
    initialize("trace-key");
    emergency({ message: "initialize-emergency", some: "extra-property" });
    expect(console.log).toHaveBeenCalledWith(
      JSON.stringify({
        severity: "EMERGENCY",
        "logging.googleapis.com/trace": `projects/${process.env.GCP_PROJECT_ID}/traces/trace-key`,
        message: "initialize-emergency",
        some: "extra-property"
      })
    );
  });
});
