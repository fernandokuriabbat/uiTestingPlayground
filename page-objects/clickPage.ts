import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class ClickPage extends BasePage{

    private readonly button: Locator;

    constructor(page: Page){
        super(page);
        this.button = this.page.getByRole('button', {name: 'Button That Ignores DOM Click Event'});
    }

    async clickOnButtonWithPhysicalMouseClick(){
        await expect(this.button).not.toHaveClass('btn btn-success');
        await this.button.click();
        await expect(this.button).toHaveClass('btn btn-success');
    }

}