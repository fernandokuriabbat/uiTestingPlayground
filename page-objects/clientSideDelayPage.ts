import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class ClientSideDelayPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async clickOnButtonAndWaitForClientSideToLoadThenClickGreenLabel(){
        await this.page.getByRole('button', {name: 'Button Triggering Client Side Logic'}).click();
        const dataLoadedLabel = this.page.getByText('Data calculated on the client side.');
        await expect(dataLoadedLabel).toBeVisible();
        await dataLoadedLabel.click(); 
    }

}