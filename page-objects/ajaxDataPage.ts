import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class AjaxDataPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async clickOnButtonToTriggerAjaxRequestAndWaitForLabelToBeClickable(){
        const ajaxRequestButton = this.page.getByRole('button', {name: 'Button Triggering AJAX Request'});
        const dataLoadedLabel = this.page.getByText('Data loaded with AJAX get request.'); 

        await ajaxRequestButton.click(); 
        await expect(dataLoadedLabel).toBeVisible(); 
        await dataLoadedLabel.click();
    }
}