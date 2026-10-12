import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 45_000,
  use: {
    baseURL: "http://127.0.0.1:4173/APAAI/",
    viewport: { width: 1440, height: 1000 },
    channel: process.platform === "win32" ? "msedge" : undefined,
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run preview:pages",
    url: "http://127.0.0.1:4173/APAAI/pt/",
    reuseExistingServer: !process.env.CI,
  },
});
