## Test automation with Cypress + Cucumber + Allure

### To run tests:

1. Clone this repository:

```sh
git clone https://github.com/natalia-iukhimenko/deinbett-testing.git
```

2. Check Node version or install Node.js if it is missing:

```sh
node -v
```

3. Install Node packages:

```sh
npm install
```

4. Install Allure Reporting

```sh
npm install -g allure-commandline --save-dev
```

5. Navigate to 'deinbett-testing' directory and execute the following command to run tests:

```sh
npm run cy:run
```

6. To generate test report, execute:

```sh
npm run allure:generate
```

7. To open generated report:

```sh
npm run report:open
```