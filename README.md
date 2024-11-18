# Amazon Playwright

This repository contains a set of automated tests for Amazon's website using Playwright.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Avinash-2/Amazon-playwright.git
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the root directory with the following content:
    ```
    USER1_EMAIL=<your_user1_email>
    USER1_PASSWORD=<your_user1_password>
    USER2_EMAIL=<your_user2_email>
    USER2_PASSWORD=<your_user2_password>
    BANK_NAME=<your_bank_name>
    ```
    
## Usage

To run the tests, use the following command:
```sh
npm run test
```

## Project Structure

- `tests/e2e-tests/`: Contains all the test files.
- `tests/data/`: Contains the test data.
- `tests/locators/`: Contains all the locators.
- `tests/pages/`: Contains page object models.
- `playwright.config.js`: Playwright configuration file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.