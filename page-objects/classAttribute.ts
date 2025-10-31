import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class ClassAttribute extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async clickBlueButtonWithPrimaryClass(){
        await this.page
            .getByRole('button', { name: 'Button' })              
            .filter({ has: this.page.locator('.btn-primary') });   
        
        await this.page.locator('button.btn-primary').click();
     }

}
