import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class VisibilityPage extends BasePage{

    private readonly hideButton: Locator;
    private readonly removedButton: Locator;
    private readonly zeroWidthButton: Locator;
    private readonly overlappedButton: Locator;
    private readonly opacityButton: Locator;
    private readonly visibilityButton: Locator;
    private readonly displayButton: Locator;
    private readonly offscreenButton: Locator;

    constructor(page: Page){
        super(page);
        this.hideButton = this.page.getByRole('button', {name: 'Hide'});
        this.removedButton = this.page.getByRole('button', {name: 'Removed'});
        this.zeroWidthButton = this.page.getByRole('button', {name: 'Zero Width'});
        this.overlappedButton = this.page.getByRole('button', {name: 'Overlapped'});
        this.opacityButton = this.page.getByRole('button', {name: 'Opacity 0'});
        this.visibilityButton = this.page.getByRole('button', {name: 'Visibility Hidden'});
        this.displayButton = this.page.getByRole('button', {name: 'Display None'});
        this.offscreenButton = this.page.getByRole('button', {name: 'Offscreen'});
    }

    async pressHideButtonAndAssertThatOtherButtonsAreNotVisible(){
        const visibleButtons = [
            this.removedButton,
            this.zeroWidthButton,
            this.overlappedButton,
            this.opacityButton,
            this.visibilityButton,
            this.displayButton,
            this.offscreenButton
        ];

    for (const button of visibleButtons) {
        await expect(button).toBeVisible();
    }

    await this.hideButton.click();

    //aun falla, queda revisar
    await expect(this.removedButton).toBeHidden();
    await expect(this.zeroWidthButton).toBeHidden();
    await expect(this.overlappedButton).not.toBeVisible();
    await expect(this.opacityButton).not.toBeVisible();
    await expect(this.visibilityButton).toBeHidden();
    await expect(this.displayButton).toBeHidden();
    await expect(this.offscreenButton).not.toBeVisible();
        
    }

}