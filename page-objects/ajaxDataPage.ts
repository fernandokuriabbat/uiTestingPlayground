import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class AjaxDataPage extends BasePage{

    private readonly ajaxRequestButton: Locator; 
    private readonly dataLoadedLabel: Locator;

    constructor(page: Page){
        super(page);
        this.ajaxRequestButton = this.page.getByRole('button', {name: 'Button Triggering AJAX Request'});
        this.dataLoadedLabel = this.page.getByText('Data loaded with AJAX get request.'); 
    }

    async clickOnButtonToTriggerAjaxRequestAndWaitForLabelToBeClickable(){
        await this.ajaxRequestButton.click(); 
        await expect(this.dataLoadedLabel).toBeVisible(); 
        await this.dataLoadedLabel.click();
    }
}