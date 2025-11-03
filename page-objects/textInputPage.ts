import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class TextInputPage extends BasePage{
    
    private readonly inputNewName: Locator;
    private readonly updatingButton: Locator; 

    constructor(page: Page){
        super(page);
        this.inputNewName = this.page.getByRole('textbox', { name: 'Set New Button Name' });
        this.updatingButton = this.page.locator('//button[@id="updatingButton"]'); 
    }

    async setNewButtonNameAndClickButton(buttonName: string){
        await this.inputNewName.pressSequentially(buttonName);
        await this.updatingButton.click();
        await expect(this.updatingButton).toContainText(buttonName); 
    }

}