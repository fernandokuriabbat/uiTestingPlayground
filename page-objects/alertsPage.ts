import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class AlertsPage extends BasePage{

    private readonly alertButton: Locator;
    private readonly confirmButon: Locator;
    private readonly promptButton: Locator; 

    constructor(page: Page){
        super(page);
        this.alertButton = this.page.getByRole('button', {name: "Alert"});
        this.confirmButon = this.page.getByRole('button', {name: "Confirm"});
        this.promptButton = this.page.getByRole('button', {name: "Prompt"});

    }

    async triggerAlertButtonAndAssertMessage() {

        const dialogPromise = this.page.waitForEvent('dialog');
        
        this.alertButton.click();
        
        const dialog = await dialogPromise;
        expect(dialog.message()).toEqual('Today is a working day.\nOr less likely a holiday.');
        await dialog.accept();
        
    }

    async triggerConfirmButtonAndAssertMessage() {

        const firstDialogPromise = this.page.waitForEvent('dialog');
        
        this.confirmButon.click();
        
        const firstDialog = await firstDialogPromise;
        expect(firstDialog.message()).toEqual('Today is Friday.\nDo you agree?');
        await firstDialog.accept();
        
        const secondDialogPromise = this.page.waitForEvent('dialog');
        const secondDialog = await secondDialogPromise;
        expect(secondDialog.message()).toEqual('Yes');
        await secondDialog.accept();
    }

    async triggerPromptButtonAndAnswerWithNonDefaultValue(){
        const firstDialogPromise = this.page.waitForEvent('dialog');

        this.promptButton.click();
        
        const dialog = await firstDialogPromise;
        expect(dialog.message()).toEqual(`Choose "cats" or 'dogs'.\nEnter your value:`);
        await dialog.accept('dogs'); 

        const secondDialogPromise = this.page.waitForEvent('dialog');
        const secondDialog = await secondDialogPromise;
        expect(secondDialog.message()).toEqual('User value: dogs');
        await secondDialog.accept();

    }
}
