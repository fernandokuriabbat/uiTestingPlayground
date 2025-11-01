import { expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoadDelayPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async clickOnButtonAfterDelay(){
        const blueBotton = this.page.getByRole('button', {name: 'Button Appearing After Delay'});
        await expect(blueBotton).toBeVisible();
        await blueBotton.click(); 
    }
    

}