# [stackline.isaac.works](https://stackline.isaac.works)

## Deployment

- This site is deployed to an s3 bucket using AWS CDK (./bin/cdk.ts)
- A CloudFront distribution is configured to serve the s3 bucket
- A CNAME record is configured to point to the CloudFront distribution

## Local Development

- Install `pnpm` v8
- The `node.js` version is managed by `pnpm` in `.npmrc`
- `pnpm install` to install dependencies
- `pnpm dev` to start the local dev server
- `pnpm build` to build the site
- `pnpm test` to run all tests

## Dependencies

- Storybook is used for isolated component testing and development
- TailwindCSS is used for styling
- `rechart` provides a d3-based React charting library
- `@tanstack/react-table` provides a React table library
- `@reduxjs/toolkit` and `@reduxjs/toolkit/query` provide a Redux-based state management solution

## Testing and Linting

- Linting is done via `eslint`
- Type tests are run with `tsc`
- Unit tests are written using `vitest` (see `src/components/product-graph/collect-sales-data.test.ts`)
- React testing is done using `@storybook/test` (see `src/components/app/app.stories.ts`)
- Visual regression tests can be administored through Chromatic (Storybook integration)
- Integration tests are not included, but could be created using Cypress or (preferably) Playwright

## Improvements for Production

- The tests in this codebase are mostly for demonstrating my understanding of different testing practices. In a production environment, much greater test coverage would be required.
- The error handling is not sufficient in this example codebase.
  - More thoughtful `<ErrorBoundary />` components should be created to handle errors in production.
  - More thoughtful api error handling should be added to consumers of the `queryApi`.
- The AWS environment this was deployed to is personal, and so does not have the required best-practice IAM policies for a production environment.
- Increased accessibility, aria labels, tab order qa, etc.
- Better developer documentation
- Increased linting rules
- Depending on the team, pre-commit hooks for test running and branch naming
