import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";


export class HomePage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async clickOnDynamicIdPage(){
        await this.selectPageTitleLink('Dynamic ID');
    }

    private async selectPageTitleLink(name: string){
        const pageTitleText = this.page.getByRole('link', {name}).click();
    }

}