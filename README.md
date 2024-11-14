/*************  ✨ Codeium Command 🌟  *************/
# Amazon-playwright

## Overview

Amazon-playwright is a test automation project using Playwright, a Node.js library to automate Chromium, Firefox, and WebKit with a single API. This project facilitates end-to-end testing for web applications and ensures compatibility across different browsers.

## Prerequisites

- Node.js (>=16.0.0)
- npm (>=7.0.0)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Avinash-2/amazon-playwright.git
   cd amazon-playwright
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

- Create a `.env` file in the root directory and specify necessary environment variables.
- Update `tests/data/products.json` to include the products you want to test.

## Running Tests

- To run all tests:
  ```bash
  npx playwright test
  ```

- To run a specific test:
  ```bash
  npx playwright test path/to/test.spec.js
  ```

## Project Structure

- `tests/`: Contains all test specifications.
- `tests/data/`: Contains JSON files with test data.
- `package.json`: Project metadata and dependencies.

## Dependencies

- `@playwright/test`: Playwright test runner.
- `dotenv`: Loads environment variables from `.env` file.

## License

This project is licensed under the ISC License.
/******  30c2b273-8507-410d-b180-3c8915fa891f  *******/