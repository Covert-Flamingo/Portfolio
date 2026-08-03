# Portfolio
Automated end-to-end testing project for the SauceDemo testing platform using the Page Object Model (POM) architecture with Playwright.
This project was created as part of my QA Automation portfolio to demonstrate:
- UI test automation
- Scalable POM structure
- Assertions and validations
- Cross-browser execution
- HTML reporting
- Clean and maintainable test architecture
---
# Technologies Used
- JavaScript
- Playwright
- Page Object Model (POM)
- HTML Reports
- Node.js
- Claude Sonnet 4.6 (Anthropic) - Error correction and good practices
- Git / GitHub - Version Control
---
# Project Structure
```bash
├── Data/
│   └── users.js
├── Pages/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── InventoryPage.js
│   └── LoginPage.js
├── tests/
│   ├── buggedLogin.spec.js
│   ├── checkout.spec.js
│   ├── failedLogin.spec.js
│   ├── inventory.spec.js
│   └── successfullLogin.spec.js
├── playwright.config.js
└── README.md
```
---
# Automated Test Scenarios
- User login
- Invalid credentials handling
- Product inventory validation
- Add products to cart
- Checkout flow
- Navigation validations
- UI assertions
---
# Dependencies installation
- Clone the repository:
- git clone https://github.com/Covert-Flamingo/Portfolio.git
- npm install
- Install Playwright browsers:
- npx playwright install
---
# Run all tests
- npx playwright test
- Run tests in headed mode:
- npx playwright test --headed
- Open Playwright UI mode:
- npx playwright test --ui
---
Test Report
You can view the generated automation report here:
https://covert-flamingo.github.io/Portfolio/
