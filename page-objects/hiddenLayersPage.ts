import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class HiddenLayersPage extends BasePage{

    private readonly greenButton: Locator;

    constructor(page: Page){
        super(page);
        this.greenButton = this.page.locator('#greenButton');
    }

    async assertGreenButtonCantBeClickedTwice(){
        await expect(this.greenButton).toBeVisible(); 
        await this.greenButton.click();
        await expect(this.greenButton.click({ trial: true, timeout: 1000 })).rejects.toThrow();
    }
}   
