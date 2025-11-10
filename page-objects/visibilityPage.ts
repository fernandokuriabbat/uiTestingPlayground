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
    private readonly hidingLayer: Locator; 

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
        this.hidingLayer = this.page.locator('#hidingLayer');
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

    await expect(this.removedButton).toBeHidden();
    await expect(this.zeroWidthButton).toBeHidden();
    await this.assertOverlappedButtonIsNotVisible(); 
    await this.assertOpacityButtonIsNotVisible(); 
    await expect(this.visibilityButton).toBeHidden();
    await expect(this.displayButton).toBeHidden();
    await this.assertOffscreenButtonIsNotVisible();
    
    }

    async assertOverlappedButtonIsNotVisible(){
        await expect(this.hidingLayer).toBeVisible();
        await expect(this.hidingLayer).toHaveCSS('width', '108px');
        await expect(this.hidingLayer).toHaveCSS('height', '38px');
    }

    async assertOpacityButtonIsNotVisible(){
        await expect(this.opacityButton).toHaveCSS('opacity', '0'); 
    }

    async assertOffscreenButtonIsNotVisible(){
        await expect(this.offscreenButton).toHaveClass(/(?:^|\s)offscreen(?:\s|$)/);

        const box = await this.offscreenButton.boundingBox();
        expect(box).not.toBeNull();

        const viewport = this.page.viewportSize();
        expect(viewport).not.toBeNull();

        const outside =
        box!.x + box!.width  <= 0 ||
        box!.y + box!.height <= 0 ||
        box!.x >= viewport!.width  ||
        box!.y >= viewport!.height;

        expect(outside).toBe(true);

    }


    


}