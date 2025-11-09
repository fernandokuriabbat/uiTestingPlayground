import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class MouseOverPage extends BasePage{

    constructor(page: Page){
        super(page);
    }


}