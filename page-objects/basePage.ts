import { Page, expect, Locator } from "@playwright/test";

export class BasePage{
    
    protected readonly page: Page;

    constructor(page: Page){
        this.page = page;   
    }

    async scrollIntoView(locator: Locator){
        await locator.scrollIntoViewIfNeeded();
        await expect(locator).toBeVisible(); 
    }

    
}