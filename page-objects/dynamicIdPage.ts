import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class DynamicIdPage extends BasePage{

    private readonly dynamicIdButton: Locator;

    constructor(page: Page){
        super(page);
        this.dynamicIdButton = this.page.getByRole('button', {name: "Button with Dynamic ID"});
    }

    async clickOnButtonWithDynamicId(){
        await this.dynamicIdButton.click();
    } 

}