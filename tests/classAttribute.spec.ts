import { test, expect } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async({page}) => {
    await page.goto('http://www.uitestingplayground.com/')
})

test('navigate to class attribute page, click on blue button with btn-primary class', async({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToClassAttributePage();
    await expect(page.getByText('Class attribute of an element may contain more than one class reference. E.g. ')).toBeVisible();
    await pm.onClassAttributePage().clickBlueButtonWithPrimaryClass();
})