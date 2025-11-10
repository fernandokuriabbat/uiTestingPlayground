# UI Testing Playground — Playwright POM examples

[![CI](https://github.com/fernandokuriabbat/uiTestingPlayground/actions/workflows/playwright.yml/badge.svg)](https://github.com/fernandokuriabbat/uiTestingPlayground/actions/workflows/playwright.yml)
![Node](https://img.shields.io/badge/node-%E2%89%A520.x-339933?logo=node.js&logoColor=white)
[![Playwright devDep](https://img.shields.io/github/package-json/dependency-version/fernandokuriabbat/uiTestingPlayground/dev/%40playwright%2Ftest?label=playwright)](https://www.npmjs.com/package/@playwright/test)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

A Playwright + TypeScript test-suite implemented using the Page Object Model (POM) pattern against
[UITestingPlayground](http://uitestingplayground.com). This repository is a learning / portfolio
project to demonstrate UI automation skills (locators, assertions, handling overlays/offscreen
elements, AJAX, delayed loads, progress bars, and more).

Status / Milestone
------------------
- Playwright: defined in `package.json` (devDependency `@playwright/test`)
- 23 scenarios planned — 15 implemented (see checklist below)
- CI: GitHub Actions workflow present at `.github/workflows/playwright.yml` that runs the test suite

Planned scenarios (quick checklist)
----------------------------------
| Scenario | Status |
|---|---:|
| Total planned | 23 |
| Implemented | 15 |
| Remaining | 8 |


Purpose
-------
This project documents my practice building stable UI tests using Playwright and POM. It is
intended as a portfolio piece for a Junior QA Automation role and demonstrates concrete strategies
for dealing with common UI testing challenges.

Quick start (Windows PowerShell)
--------------------------------
1. Clone the repository and enter the folder:

```powershell
git clone https://github.com/fernandokuriabbat/ui-testing-playground
cd ui-testing-playground
```

2. Install dependencies and Playwright browsers:

```powershell
npm ci
npx playwright install --with-deps
```

3. Run the full test suite:

```powershell
npx playwright test
```

4. Run a single spec file or a single test (grep by title):

```powershell
npx playwright test tests/homePage.spec.ts
npx playwright test -g "visibility"
```

5. Open the HTML report after a run:

```powershell
npx playwright show-report
```

Project layout
--------------
- `playwright.config.ts` — Playwright configuration (projects, timeouts, reporter)
- `package.json` — devDependencies and metadata
- `tests/` — test specs (currently `homePage.spec.ts`)
- `page-objects/` — Page Object Model classes (one per tested page)
- `fixtures/` — (optional) shared Playwright fixtures
- `.github/workflows/playwright.yml` — CI workflow

How the code is organized
-------------------------
- Page Objects follow a consistent pattern: locators (private), constructor(page), public actions,
	then private helpers.
- Tests use a `PageManager` to obtain page objects and call their public actions.
- Prefer Playwright `Locator` APIs and web-first assertions like `toBeVisible`, `toHaveText`,
	and `toHaveAttribute`. For geometric checks (offscreen/overlap) we use `getBoundingClientRect()`
	via `locator.evaluate(...)`.

Best practices used / recommended
---------------------------------
- Use descriptive page object names: `HomePage`, `VisibilityPage`, `ProgressBarPage`, etc.
- Keep locators in one place (constructor) and mark them `private readonly`.
- Favor `expect(locator).toHaveText()` / `toHaveAttribute()` which auto-wait for updates.
- Use small, deterministic tests that each assert one behavior.
- Extract common helpers (e.g., `isOffscreen`, `isCovered`) to `BasePage` or `utils/` when shared.

CI
--
The GitHub Actions workflow runs on push/PR and executes `npx playwright test`, uploading the
Playwright HTML report as an artifact. See `.github/workflows/playwright.yml` for details.

On CI the workflow uploads the HTML report and (when configured) test traces/screenshots for
failed tests — check the workflow run artifacts for `playwright-report` and trace files.

How to contribute / extend
--------------------------
- To add a new page object: create `page-objects/YourPageNamePage.ts` with locators, actions,
	and helpers.
- To add a new test: create a spec in `tests/` (consider one file per page/feature for scalability).
- Keep tests readable and small. Use `PageManager` to access page objects from tests.

Tiny code sample (10–15 lines)
------------------------------
This small example shows the style used in this repo (POM + web-first assertion):

```ts
import { test, expect } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async({page}) => {
    await page.goto('http://www.uitestingplayground.com/')
})

test ('navigate to dynamic ID page and click on button with dynamic ID', async ({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToDynamicIdPage();
    await page.waitForURL(/\/dynamicid$/);
    await pm.onDynamicIdPage().clickOnButtonWithDynamicId();  
})
```

Notes for the reviewer / hiring manager
-------------------------------------
This repository is a learning portfolio demonstrating practical Playwright skills and POM design.
Completed scenarios and CI setup are included; the project will be considered finished when the
remaining 8 scenarios are implemented (target: 23/23).

Contact
-------
- GitHub: https://github.com/fernandokuriabbat?tab=repositories


