import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class ClientSideDelayPage extends BasePage{

    private readonly dataLoadedLabel: Locator;

    constructor(page: Page){
        super(page);
        this.dataLoadedLabel = this.page.getByText('Data calculated on the client side.');
    }

    async clickOnButtonAndWaitForClientSideToLoadThenClickGreenLabel(){
        await this.page.getByRole('button', {name: 'Button Triggering Client Side Logic'}).click();
        await expect(this.dataLoadedLabel).toBeVisible();
        await this.dataLoadedLabel.click(); 
    }

}