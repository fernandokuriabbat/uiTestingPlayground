import { Page } from "@playwright/test";
import { BasePage } from "./basePage";


export class TextInputPage extends BasePage{

    constructor(page: Page){
        super(page);
    }


}