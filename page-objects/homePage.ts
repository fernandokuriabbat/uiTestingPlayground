import { Page } from "@playwright/test";
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

    async navigateToHiddenLayersPage(){
        await this.selectPageTitleLink('Hidden Layers');
    }

    async navigateToLoadDelayPage(){
        await this.selectPageTitleLink('Load Delay');
    }

    async navigateToAjaxDataPage(){
        await this.selectPageTitleLink('AJAX Data');
    }

     async navigateToClientSideDelayPage(){
        await this.selectPageTitleLink('Client Side Delay');
    }

    async navigateToClickPage(){
        await this.selectPageTitleLink('Click');
    }

    async navigateToTextInputPage(){
        await this.selectPageTitleLink('Text Input');
    }

    async navigateToScrollbarsPage(){
        await this.selectPageTitleLink('Scrollbars');
    }

    private async selectPageTitleLink(name: string){
        const pageTitleText = this.page.getByRole('link', {name}).click();
    }

}