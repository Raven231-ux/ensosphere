import { preview } from "vite";
import { build } from "vite";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "lighthouse-reports");

const routes = ["/", "/about", "/services", "/approach", "/work", "/insights", "/contact"];

const routeSlug = (route) => (route === "/" ? "home" : route.replace(/\//g, ""));

async function main() {
  mkdirSync(outDir, { recursive: true });

  console.log("Building production bundle...");
  await build({ root, logLevel: "warn" });

  console.log("Starting preview server...");
  const server = await preview({ root, preview: { port: 4173 } });
  const base = `http://localhost:4173`;

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless=new", "--disable-gpu", "--no-sandbox"],
  });

  const options = {
    logLevel: "error",
    output: ["html", "json"],
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    port: chrome.port,
  };

  const summary = [];

  try {
    for (const route of routes) {
      const url = `${base}${route}`;
      console.log(`Auditing ${url} ...`);
      const result = await lighthouse(url, options);
      const slug = routeSlug(route);

      writeFileSync(path.join(outDir, `${slug}.report.html`), result.report[0]);
      writeFileSync(path.join(outDir, `${slug}.report.json`), result.report[1]);

      const { categories } = result.lhr;
      summary.push({
        route,
        performance: Math.round(categories.performance.score * 100),
        accessibility: Math.round(categories.accessibility.score * 100),
        bestPractices: Math.round(categories["best-practices"].score * 100),
        seo: Math.round(categories.seo.score * 100),
      });
    }
  } finally {
    await chrome.kill();
    await new Promise((resolve) => server.httpServer.close(resolve));
  }

  console.log("\nLighthouse summary (0-100):\n");
  console.table(summary);
  writeFileSync(path.join(outDir, "summary.json"), JSON.stringify(summary, null, 2));
  console.log(`\nFull HTML/JSON reports saved to ${path.relative(root, outDir)}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
