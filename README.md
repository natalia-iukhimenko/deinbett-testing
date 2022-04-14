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

3. Navigate to 'deinbett-testing' directory and execute the following command to run tests:

```sh
npm run cy:run
```

4. To generate test report, execute:

```sh
npm run allure:generate
```

5. To open generated report:

```sh
npm run report:open
```