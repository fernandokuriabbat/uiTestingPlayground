import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class DynamicIdPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async clickOnButtonWithDynamicId(){
        await this.page.getByRole('button', {name: "Button with Dynamic ID"}).click();
    } 

}