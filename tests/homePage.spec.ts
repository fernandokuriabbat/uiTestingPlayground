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

test('navigate to click page and emulate physical click on button', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'WebKit cannot automate this demo button (anti-automation design)');
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToClickPage();
    await page.waitForURL(/\/click$/);
    await pm.onClickPage().clickOnButtonWithPhysicalMouseClick();
});

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


test('navigate to dynamic table page, get chrome cpu load value and compare it with the yellow label', async ({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToDynamicTablePage();
    await page.waitForURL(/\/dynamictable$/);
    await pm.onDynamicTablePage().getChromeCPULoadValueAndCompareWithYellowLabel();
})

test('navigate to verify text page, and find an element that contains Welcome UserName! text', async ({page})  => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToVerifyTextPage();
    await page.waitForURL(/\/verifytext$/);
    await pm.onVerifyTablePage().findElementWithWelcomeText();
})

test('navigate to progress bar page, click on start and stop once progress bar is at 75 percent', async ({page})  => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToProgressBarPage();
    await page.waitForURL(/\/progressbar$/);
    await pm.onProgressBarPage().clickOnStartButtonAndStopItOnceBarIsAt75Percent(); 
})

test('navigate to visibility page, click on hide button and verify that other buttons are not visible', async ({page})  => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToVisibilityPage();
    await page.waitForURL(/\/visibility$/);
    await pm.onVisibilityPage().pressHideButtonAndAssertThatOtherButtonsAreNotVisible(); 
})

test('navigate to sample app page, fill the form and have a successfull login', async ({page})  => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToSampleAppPage();
    await page.waitForURL(/\/sampleapp$/);
    await pm.onSampleAppPage().fillAndSubmitFormForSuccessfulLogIn('test123');
})

test('navigate to mouse over page, record 2 consecutive link clicks and assert that click count was increase to 2', async ({page})  => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToMouseOverPage();
    await page.waitForURL(/\/mouseover$/);
    await pm.onMouseOverPage().clickTwoTimesOnClickMeLink(); 
    await pm.onMouseOverPage().clickTwoTimesOnLinkButtonLink(); 
})

test('navigate to non-breaking space page and click on button', async ({page})  => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToNonBreakingSpacePage();
    await page.waitForURL(/\/nbsp$/);
    await pm.onNonBreakingSpacePage().clickOnButton(); 
})