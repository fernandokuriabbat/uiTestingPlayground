import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class ScrollbarsPage extends BasePage{

    private readonly hidingButton: Locator;

    constructor(page: Page){
        super(page);
        this.hidingButton = this.page.getByRole('button', {name: 'Hiding Button'});
    }

    async scrollButtonIntoViewAndClick(){
        await this.hidingButton.scrollIntoViewIfNeeded();
        await expect(this.hidingButton).toBeVisible();
        await this.hidingButton.click(); 
    }

}