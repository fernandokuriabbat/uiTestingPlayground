import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class VerifyTextPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

}