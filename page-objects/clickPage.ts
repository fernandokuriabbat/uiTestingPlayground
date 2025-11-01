import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class ClickPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async clickOnButtonWithPhysicalMouseClick(){
        const button = this.page.getByRole('button', {name: 'Button That Ignores DOM Click Event'});
        await expect(button).not.toHaveClass('btn btn-success');
        await button.click();
        await expect(button).toHaveClass('btn btn-success');
    }

}