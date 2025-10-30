import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";


export class DynamicPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async clickOnButtonWithDynamicId(){
        await this.page.getByRole('button', {name: "Button with Dynamic ID"}).click();
    } 

}