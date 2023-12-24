import { $ } from "zx";

let exitCode = 0;

// required dependency of test-storybook - only chromium is needed
await $`pnpm dlx playwright install chromium --with-deps`;
// build a fresh copy of storybook
await $`pnpm build:storybook --quiet`;
// serve the newly build storybook for testing
const server = $`pnpm exec http-server storybook-static --port 6006 --silent`;
// catch any errors to ensure server is closed properly
try {
  // wait for static server to be ready
  await $`pnpm exec wait-on tcp:6006`;
  // run the tests
  await $`pnpm test-storybook`;
} catch (e) {
  console.error(e);
  // exit with error code
  exitCode = 1;
}
// kill the static server
await server.kill();
// exit process
process.exit(exitCode);
