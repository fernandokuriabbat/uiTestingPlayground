import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class NonBreakingSpacePage extends BasePage{

    private readonly button: Locator;

    constructor(page: Page){
        super(page);
        this.button = this.page.locator("//button[normalize-space(translate(., '\u00A0', ' ')) = 'My Button']");
    }

    async clickOnButton(){
        await expect(this.button).toBeVisible();
        await this.button.click();
    }


}