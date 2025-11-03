import { test, expect } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async({page}) => {
    await page.goto('http://www.uitestingplayground.com/')
})

test ('navigate to dynamic ID page and click on button with dynamic ID', async ({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToDynamicIdPage();
    await page.waitForURL(/\/dynamicid$/);
    await pm.onDynamicPage().clickOnButtonWithDynamicId();  
})

test('navigate to class attribute page, click on blue button with btn-primary class', async({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToClassAttributePage();
    await page.waitForURL(/\/classattr$/);
    await pm.onClassAttributePage().clickBlueButtonWithPrimaryClass();
})

test('navigate to hidden layers page, assert that green button is hidden after first click and cant be clicked a second time', async({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToHiddenLayersPage();
    await page.waitForURL(/\/hiddenlayers$/);
    await pm.onHiddenLayersPage().assertGreenButtonCantBeClickedTwice(); 
})

test('navigate to load delay page, wait until it is fully loaded and then click on button after delay', async({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToLoadDelayPage();
    await page.waitForURL(/\/loaddelay$/);
    // await expect(page.getByRole('button', {name: 'Button Appearing After Delay'})).toBeVisible({timeout: 20_000});
    await pm.onLoadDelayPage().clickOnButtonAfterDelay(); 
})

test('navigate to AJAX data page, click on button to trigger AJAX request and click on green label once its loaded', async({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToAjaxDataPage();
   await page.waitForURL(/\/ajax$/);
    await pm.onAjaxPage().clickOnButtonToTriggerAjaxRequestAndWaitForLabelToBeClickable();
})

test('navigate to client side delay page, click on button to trigger client side logic and click on green label once its loaded', async({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToClientSideDelayPage();
    await page.waitForURL(/\/clientdelay$/);
    await pm.onClientSideDelayPage().clickOnButtonAndWaitForClientSideToLoadThenClickGreenLabel(); 
})

test('navigate to click page and emulate physical click on button', async({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToClickPage();
    await page.waitForURL(/\/click$/);
    // await page.waitForURL('http://www.uitestingplayground.com/click');
    await pm.onClickPage().clickOnButtonWithPhysicalMouseClick(); 
})

test('navigate to text input page, update button name and assert that the name was updated', async ({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToTextInputPage();
    await page.waitForURL(/\/textinput$/);
    await pm.onTextInputPage().setNewButtonNameAndClickButton('test123');
})

test('navigate to scrollbars page, scroll button into view and click', async ({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToScrollbarsPage(); 
    await page.waitForURL(/\/scrollbars$/);
    await pm.onScrollbarsPage().scrollButtonIntoViewAndClick(); 
})
