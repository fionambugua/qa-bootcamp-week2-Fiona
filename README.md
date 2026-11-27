# QA Bootcamp – Playwright Automation Suite

## Project Overview

This project contains automated UI and API tests for the Practice Software Testing application using Playwright and TypeScript.

The suite covers:
- Homepage functionality.
- Product search.
- User login.
- Page Object Model implementation.
- API cart creation and product management.
- API negative testing for nonexistent carts.

## Prerequisites

- Node.js
- npm
- Git

## Setup and Execution

### Step 1: Install dependencies and Chromium

```bash
npm install
npx playwright install chromium
```

### Step 2: Configure environment variables

Copy the example environment file:

```bash
cp .env.example .env
```

Add any required environment values to `.env`.

### Step 3: Run the test suite

```bash
npm test
```

## Test Structure

```text
tests/
  homepage.spec.ts
  search.spec.ts
  login.spec.ts
  page-object.spec.ts
  api.spec.ts

pages/
  [Page Object Model files]
```

## Debugging

To open a saved Playwright trace:

```bash
npx playwright show-trace path/to/trace.zip
```

## Tools Used

- Playwright
- TypeScript
- Node.js
- npm

## Cucumber

The optional Cucumber-js scenario was not implemented as it was outside the required core deliverables for this submission.