# playwright-automation
End-to-end and API test automation framework using Playwright and TypeScript, featuring scalable architecture, CI/CD integration, reporting, and best QA practices.

🚀 Tech Stack
	•	🎭 Playwright
	•	🟦 TypeScript
	•	📦 Node.js
	•	🔄 GitHub Actions (CI/CD)
	•	📊 Playwright HTML Reports

📁 Project Structure
playwright-automation/
│
├── tests/
│   ├── e2e/            # End-to-end tests
│   ├── api/            # API tests
│
├── pages/              # Page Object Model (POM)
├── fixtures/           # Custom fixtures
├── utils/              # Helpers & reusable logic
├── test-data/          # Test data (JSON, mocks)
│
├── .github/workflows/  # CI/CD pipelines
├── playwright.config.ts
├── package.json
└── README.md

⚙️ Prerequisites
Before getting started, make sure you have:
	•	Node.js (>= 18 recommended)
	•	npm or yarn
	•	Git

🧩 Installation & Setup
Clone the repository:
git clone https://github.com/esmartin-hernandez/playwright-automation.git
cd playwright-automation

Install dependencies and browsers:
npm run setup

▶️ Running Tests
Run all tests:
npm test

Run tests in UI mode:
npm run test:ui

Run specific tests:
npx playwright test tests/e2e

Run by tag:
npx playwright test --grep @smoke


📊 Reports
After execution, open the HTML report:
npx playwright show-report

🏷️ Test Tagging Strategy
We use tags to organize execution:
	•	@smoke → critical tests
	•	@regression → full suite
	•	@api → API tests

Example:
test('@smoke Login test', async ({ page }) => {
  // test code
});

🔄 CI/CD Integration
This project uses GitHub Actions to:
	•	Run tests on every push
	•	Validate pull requests
	•	Ensure code quality

Workflow file:
 .github/workflows/playwright.yml

🧠 Best Practices
	•	Use Page Object Model (POM)
	•	Keep tests independent
	•	Avoid hardcoded data
	•	Use fixtures for setup/teardown
	•	Tag tests properly

🚀 Future Improvements
	•	📊 Allure Reports integration
	•	📩 Slack notifications
	•	🐳 Docker support
	•	🌐 Multi-environment execution

👨‍💻 Author
Diana Vicente
QA Automation Engineer

Eduardo San Martín Hernández
QA Automation Engineer

📄 License
MIT License
:::