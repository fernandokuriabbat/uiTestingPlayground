import { Page } from "@playwright/test";
import { DynamicPage } from "./dynamicPage";
import { HomePage } from "./homePage";
import { TextInputPage } from "./textInputPage";
import { ClassAttribute } from "./classAttribute";
import { HiddenLayersPage } from "./hiddenLayersPage";
import { LoadDelayPage } from "./loadDelayPage";


export class PageManager{

    private readonly page: Page;
    private readonly dynamicPage: DynamicPage;
    private readonly homePage: HomePage;
    private readonly textInputPage: TextInputPage;
    private readonly classAttributePage: ClassAttribute;
    private readonly hiddenLayersPage: HiddenLayersPage; 
    private readonly loadDelayPage: LoadDelayPage; 


    constructor(page:Page){
        this.page = page;
        this.dynamicPage = new DynamicPage(this.page);
        this.homePage = new HomePage(this.page);
        this.textInputPage = new TextInputPage(this.page);
        this.classAttributePage = new ClassAttribute(this.page); 
        this.hiddenLayersPage = new HiddenLayersPage(this.page); 
        this.loadDelayPage = new LoadDelayPage(this.page); 
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

    onClassAttributePage(){
        return this.classAttributePage
    }

    onHiddenLayersPage(){
        return this.hiddenLayersPage
    }

    onLoadDelayPage(){
        return this.loadDelayPage
    }

}