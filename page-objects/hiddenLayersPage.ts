import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";


export class HiddenLayersPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

}   
