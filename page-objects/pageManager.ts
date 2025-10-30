import { Page } from "@playwright/test";
import { DynamicPage } from "./dynamicPage";
import { HomePage } from "./homePage";
import { TextInputPage } from "./textInputPage";


export class PageManager{

    private readonly page: Page;
    private readonly dynamicPage: DynamicPage;
    private readonly homePage: HomePage;
    private readonly textInputPage: TextInputPage;


    constructor(page:Page){
        this.page = page;
        this.dynamicPage = new DynamicPage(this.page);
        this.homePage = new HomePage(this.page);
        this.textInputPage = new TextInputPage(this.page);
    }

    onDynamicPage(){
        return this.dynamicPage
    }

    onHomePage(){
        return this.homePage
    }

    onTextInputPage(){
        return this.textInputPage
    }



}