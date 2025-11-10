import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class MouseOverPage extends BasePage{

    private readonly clickMeLink: Locator; 
    private readonly linkButtonLink: Locator; 

    constructor(page: Page){
        super(page);
        this.clickMeLink = this.page.getByRole('link', {name: 'Click me'});
        this.linkButtonLink = this.page.getByRole('link', {name: 'Link Button'});
    }

    async clickTwoTimesOnClickMeLick(n = 2){
        for(let i = 0; i < 2; i++) {
            await this.clickMeLink.click(); 
        }
    }


}