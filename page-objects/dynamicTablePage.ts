import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class DynamicTablePage extends BasePage{

    private readonly tableColumnHeaders: Locator;
    private readonly tableRows: Locator;
    private readonly yellowLabel: Locator;
    private readonly chromeRow: Locator;

    constructor(page: Page){
        super(page);
        this.tableColumnHeaders = this.page.getByRole('columnheader');
        this.tableRows = this.page.getByRole('row');
        this.yellowLabel = this.page.locator("//p[contains(@class,'bg-warning')]");
        this.chromeRow = this.page.getByRole('row').filter({ hasText: 'Chrome' });

    }

    async getChromeCPULoadValueAndCompareWithYellowLabel(){
        
        const tableColumnTexts = await this.tableColumnHeaders.allInnerTexts();
        const cpuIdIndex = await tableColumnTexts.findIndex(t => t.trim().toLocaleLowerCase() === 'cpu'); 
        expect(cpuIdIndex).toBeGreaterThanOrEqual(0); 

        const chromeCpuCell = this.chromeRow.getByRole('cell').nth(cpuIdIndex);

        const chromeCpuText = (await chromeCpuCell.textContent() || '').trim(); 
        const yellowLabelText = (await this.yellowLabel.textContent() || '').trim();

        expect(chromeCpuText && yellowLabelText).toBeTruthy();
    }


}