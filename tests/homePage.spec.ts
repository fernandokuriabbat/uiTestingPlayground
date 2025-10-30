import { test, expect } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async({page}) => {
    await page.goto('http://www.uitestingplayground.com/')
})

test ('navigate to dynamic ID page and click on button with dynamid', async ({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().clickOnDynamicIdPage();
    await expect(page.getByRole('button', {name: "Button with Dynamic ID"})).toBeVisible();
    await pm.onDynamicPage().clickOnButtonWithDynamicId();  

})