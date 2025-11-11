import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class ClickPage extends BasePage{

    private readonly button: Locator;

    constructor(page: Page){
        super(page);
        this.button = this.page.getByRole('button', {name: 'Button That Ignores DOM Click Event'});
    }

    // async clickOnButtonWithPhysicalMouseClick(){
    //     await expect(this.button).not.toHaveClass('btn btn-success');
    //     await this.button.click();
    //     await expect(this.button).toHaveClass('btn btn-success');
    // }

    async clickOnButtonWithPhysicalMouseClick() {
        await expect(this.button).not.toHaveClass('btn btn-success');
        await this.button.scrollIntoViewIfNeeded();
        
        const box = await this.button.boundingBox();
        if (!box) throw new Error('Button bounding box not available');
        
        await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.up();
        
        await expect(this.button).toHaveClass('btn btn-success');
    }

}