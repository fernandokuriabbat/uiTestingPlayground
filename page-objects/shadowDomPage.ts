import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class ShadowDomPage extends BasePage{

    private readonly guidGenerator: Locator;
    private readonly copyToClipboard: Locator;
    private readonly inputField: Locator;

    constructor(page: Page){
        super(page);
        this.guidGenerator = this.page.locator('#buttonGenerate');
        this.copyToClipboard = this.page.locator('#buttonCopy');
        this.inputField = this.page.locator('#editField');
    }
    
    async generateNewGuidCopyToClipboardAndCompareValueToInputField(){
        await expect(this.inputField).toBeEmpty(); 
        await this.guidGenerator.click();
        await this.copyToClipboard.click();

        const inputFieldText = await this.inputField.inputValue();

        expect(inputFieldText).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
        );
    }


}