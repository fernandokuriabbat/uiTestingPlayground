import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";


export class HomePage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async navigateToDynamicIdPage(){
        await this.selectPageTitleLink('Dynamic ID');
    }

     async navigateToClassAttributePage(){
        await this.selectPageTitleLink('Class Attribute');
    }

    private async selectPageTitleLink(name: string){
        const pageTitleText = this.page.getByRole('link', {name}).click();
    }

}