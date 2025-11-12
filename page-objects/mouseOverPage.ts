import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class MouseOverPage extends BasePage{

    private readonly clickMeLink: Locator; 
    private readonly linkButtonLink: Locator; 

    constructor(page: Page){
        super(page);
        this.clickMeLink = this.page.getByText('Click me');
        this.linkButtonLink = this.page.getByText('Link Button');
    }

    async clickTwoTimesOnClickMeLink(){
        for(let i = 0; i < 2; i++) {
            await this.clickMeLink.click(); 
        }

        const clickCounter = this.page.locator('#clickCount');
        await expect(clickCounter).toHaveText('2');
    }

    async clickTwoTimesOnLinkButtonLink(){
        for(let i = 0; i < 2; i++) {
            await this.linkButtonLink.click(); 
        }

        const clickCounter = this.page.locator('#clickButtonCount');
        await expect(clickCounter).toHaveText('2');
    }


}