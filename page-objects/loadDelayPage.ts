import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoadDelayPage extends BasePage{

    private readonly blueButton: Locator;

    constructor(page: Page){
        super(page);
        this.blueButton = this.page.getByRole('button', {name: 'Button Appearing After Delay'});
    }

    async clickOnButtonAfterDelay(){
        await expect(this.blueButton).toBeVisible();
        await this.blueButton.click(); 
    }
    

}