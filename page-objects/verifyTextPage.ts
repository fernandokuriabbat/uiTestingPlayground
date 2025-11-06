import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class VerifyTextPage extends BasePage{

    private readonly blueLabel: Locator;

    constructor(page: Page){
        super(page);
        this.blueLabel = this.page.getByText('Welcome UserName!', { exact: true })
    }

    async findElementWithWelcomeText(){
    await expect(this.blueLabel).toBeVisible();
    await expect(this.blueLabel).toHaveText('Welcome UserName!');
    await this.blueLabel.click();
    }
}