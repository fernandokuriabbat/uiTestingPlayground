import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class HiddenLayersPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async assertGreenButtonCantBeClickedTwice(){
        const greenButton = await this.page.locator('#greenButton');
        await expect(greenButton).toBeVisible(); 
        await greenButton.click();
        await expect(greenButton.click({ trial: true, timeout: 1000 })).rejects.toThrow();
    }
}   
