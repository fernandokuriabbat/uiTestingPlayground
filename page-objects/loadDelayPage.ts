import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoadDelayPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async clickOnButtonAfterDelay(){
        await this.page.getByRole('button', {name: 'Button Appearing After Delay'}).click(); 
    }
    

}