import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class OverlappedElementPage extends BasePage{

    private readonly nameInputField: Locator;

    constructor(page: Page){
        super(page);
        this.nameInputField = this.page.getByRole('textbox', {name: 'Name'});
    }

    async inputTextIntoNameField(name: string){
        await this.nameInputField.click();
        await expect(this.nameInputField).toBeVisible();
        await this.nameInputField.fill(name); 
        await expect(this.nameInputField).toHaveValue(name); 
    }


}