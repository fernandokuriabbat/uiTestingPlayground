import { test, expect } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async({page}) => {
    await page.goto('http://www.uitestingplayground.com/')
})

test ('navigate to dynamic ID page and click on button with dynamic ID', async ({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToDynamicIdPage();
    await expect(page.getByRole('button', {name: "Button with Dynamic ID"})).toBeVisible();
    await pm.onDynamicPage().clickOnButtonWithDynamicId();  
})

test('navigate to class attribute page, click on blue button with btn-primary class', async({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToClassAttributePage();
    await expect(page.getByText('Class attribute of an element may contain more than one class reference. E.g. ')).toBeVisible();
    await pm.onClassAttributePage().clickBlueButtonWithPrimaryClass();
})

test('navigate to hidden layers page, assert that green button is hidden after first click and cant be clicked a second time', async({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToHiddenLayersPage();
    await expect(page).toHaveURL('http://www.uitestingplayground.com/hiddenlayers'); 
    await pm.onHiddenLayersPage().assertGreenButtonCantBeClickedTwice(); 
})

test('navigate to load delay page, wait until it is fully loaded and then click on button after delay', async({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToLoadDelayPage();
})