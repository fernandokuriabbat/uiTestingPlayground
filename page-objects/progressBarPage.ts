import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class ProgressBarPage extends BasePage{

    private readonly startButton: Locator;
    private readonly stopButton: Locator;
    private readonly progressBar: Locator;


    constructor(page: Page){
        super(page);
        this.startButton = this.page.getByRole('button', {name: 'Start'});
        this.stopButton = this.page.getByRole('button', {name: 'Stop'});
        this.progressBar = this.page.getByRole('progressbar');
    }

   async clickOnStartButtonAndStopItOnceBarIsAt75Percent() {
        await this.startButton.click();
       
        while (true) {
            const value = await this.progressBar.getAttribute('aria-valuenow');
            const progress = parseInt(value || '0');
            
            if (progress >= 75) {
                await this.stopButton.click();
                break;
            }
            
            await this.page.waitForTimeout(10);
        }
        
        const finalValue = await this.progressBar.getAttribute('aria-valuenow');
        const finalProgress = parseInt(finalValue || '0');
        expect(finalProgress).toBeGreaterThanOrEqual(75);
    }
}