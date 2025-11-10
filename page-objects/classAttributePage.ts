import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class ClassAttributePage extends BasePage{

    private readonly blueButton: Locator;

    constructor(page: Page){
        super(page);
        this.blueButton = this.page.locator('button.btn-primary');
    }

    async clickBlueButtonWithPrimaryClass(){
        await this.blueButton.click(); 
    }

}
