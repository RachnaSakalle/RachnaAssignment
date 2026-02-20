## RachnaAssignment Framework Overview

This is Rachna's test automation framework built on **Playwright** with TypeScript. 
---

# What This Framework Does

Automates Authentication,Purchase and Financial Data validation testing for SauceDemo application. 
Websit : "https://www.saucedemo.com/"

---

**Prequisites:**

- Node version >= 18
- VS code
- Npm latest version
- Github access

# Install and Initialize 
Gitbash 

cd RachnaAssignment 
npm install
npm init playwright@latest 
# Github Link - 
 https://github.com/RachnaSakalle/RachnaAssignment  



# 1.	How to run the tests
# a.	headed and headless
# b.	in parallel
# c.	with traces/screenshots enabled


#  1.  Run Tests
--(a) **Head less** 
Headless (default)
Command - npx playwright test
--(a) **Headed**
Headed mode
Command - npx playwright test --headed
-- (b)Run in **parallel**
Command - npx playwright test --workers=4

-- (c)**screenshots**
View HTML report
Command - npx playwright show-report
Open Trace
Command - npx playwright show-trace trace.zip


# 2. How did you design the framework to be scalable and maintainable?
I used POM 
# Page Object Model (POM) Pattern 
-- includes Page Objects **Selectors** and **Reusable Actions**
-- Tests includes the Business Logic
-- Utils includes Test Data
**Why This Scales**
--New tests = reuse existing page methods
--Selector changes affect only one file
--Easy onboarding for new team members

# Project Structure
RachnaAssignment/
|
├── Pages/                    # POM Selectors
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
├── tests/                    # Test files - Business Logics
│   ├── auth.spec.ts
│   ├── purchase.spec.ts
├── Utils/                   
│   ├── testData.ts
│
├── playwright.config.ts
├── package.json
└── README.md
    
# 3. What practices did you use to minimize flaky tests?
--Used Playwright auto-waiting
--No hard waits (waitForTimeout)
--URL and element-based assertions
--Config retries = 1
--Isolated test state (each test fresh browser context)
## Capabilities

### Resilient • No flaky tests

**Auto-wait**. Playwright waits for elements to be actionable prior to performing actions. It also has a rich set of introspection events. The combination of the two eliminates the need for artificial timeouts - a primary cause of flaky tests.

**Web-first assertions**. Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met.

**Tracing**. Configure test retry strategy, capture execution trace, videos and screenshots to eliminate flakes.


# 4. If this suite grew to 1,000 tests, what would you change first and why?
--Introduce fixtures for login to avoid repetition
--Tag-based execution (smoke/regression)
--CI sharding strategy
--Data factory pattern for test data
--API setup/teardown to speed up tests
--Custom reporter for dashboard integration


Browsers run web content belonging to different origins in different processes. Playwright is aligned with the architecture of the modern browsers and runs tests out-of-process. This makes Playwright free of the typical in-process test runner limitations.

**Multiple everything**. Test scenarios that span multiple tabs, multiple origins and multiple users. Create scenarios with different contexts for different users and run them against your server, all in one test.

**Trusted events**. Hover elements, interact with dynamic controls and produce trusted events. Playwright uses real browser input pipeline indistinguishable from the real user.

Test frames, pierce Shadow DOM. Playwright selectors pierce shadow DOM and allow entering frames seamlessly.

### Full isolation • Fast execution

**Browser contexts**. Playwright creates a browser context for each test. Browser context is equivalent to a brand new browser profile. This delivers full test isolation with zero overhead. Creating a new browser context only takes a handful of milliseconds.

**Log in once**. Save the authentication state of the context and reuse it in all the tests. This bypasses repetitive log-in operations in each test, yet delivers full isolation of independent tests.