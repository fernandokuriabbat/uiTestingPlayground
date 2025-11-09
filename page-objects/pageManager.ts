import { Page } from "@playwright/test";
import { DynamicIdPage } from "./dynamicIdPage";
import { HomePage } from "./homePage";
import { ClassAttribute } from "./classAttribute";
import { HiddenLayersPage } from "./hiddenLayersPage";
import { LoadDelayPage } from "./loadDelayPage";
import { AjaxDataPage } from "./ajaxDataPage";  
import { ClientSideDelayPage } from "./clientSideDelayPage";
import { ClickPage } from "./clickPage";
import { TextInputPage } from "./textInputPage";    
import { ScrollbarsPage } from "./scrollbarsPage";
import { DynamicTablePage } from "./dynamicTablePage";
import { VerifyTextPage } from "./verifyTextPage";
import { ProgressBarPage } from "./progressBar";
import { VisibilityPage } from "./visibilityPage";
import { SampleAppPage } from "./sampleAppPage";
import { MouseOverPage } from "./mouseOverPage";


export class PageManager{

    private readonly page: Page;
    private readonly dynamicPage: DynamicIdPage;
    private readonly homePage: HomePage;
    private readonly classAttributePage: ClassAttribute;
    private readonly hiddenLayersPage: HiddenLayersPage; 
    private readonly loadDelayPage: LoadDelayPage; 
    private readonly ajaxDataPage: AjaxDataPage;
    private readonly clientSideDelayPage: ClientSideDelayPage;    
    private readonly clickPage: ClickPage;  
    private readonly textInputPage: TextInputPage;
    private readonly scrollbarsPage: ScrollbarsPage;
    private readonly dynamicTablePage: DynamicTablePage;
    private readonly verifyTextPage: VerifyTextPage;
    private readonly progressBarPage: ProgressBarPage;
    private readonly visibilityPage: VisibilityPage; 
    private readonly sampleAppPage: SampleAppPage;
    private readonly mouseOverPage: MouseOverPage;


    constructor(page:Page){
        this.page = page;
        this.dynamicPage = new DynamicIdPage(this.page);
        this.homePage = new HomePage(this.page);
        this.textInputPage = new TextInputPage(this.page);
        this.classAttributePage = new ClassAttribute(this.page); 
        this.hiddenLayersPage = new HiddenLayersPage(this.page); 
        this.loadDelayPage = new LoadDelayPage(this.page); 
        this.ajaxDataPage = new AjaxDataPage(this.page); 
        this.clientSideDelayPage = new ClientSideDelayPage(this.page); 
        this.clickPage = new ClickPage(this.page);
        this.textInputPage = new TextInputPage(this.page); 
        this.scrollbarsPage = new ScrollbarsPage(this.page);
        this.dynamicTablePage = new DynamicTablePage(this.page);
        this.verifyTextPage = new VerifyTextPage(this.page); 
        this.progressBarPage = new ProgressBarPage(this.page);
        this.visibilityPage = new VisibilityPage(this.page); 
        this.sampleAppPage = new SampleAppPage(this.page); 
        this.mouseOverPage = new MouseOverPage(this.page);
    }

    onDynamicIdPage(){
        return this.dynamicPage;
    }

    onHomePage(){
        return this.homePage;
    }

    onClassAttributePage(){
        return this.classAttributePage;
    }

    onHiddenLayersPage(){
        return this.hiddenLayersPage;
    }

    onLoadDelayPage(){
        return this.loadDelayPage;
    }

    onAjaxPage(){
        return this.ajaxDataPage;
    }

    onClientSideDelayPage(){
        return this.clientSideDelayPage;
    }

    onClickPage(){
        return this.clickPage;
    }

    onTextInputPage(){
        return this.textInputPage;
    }

    onScrollbarsPage(){
        return this.scrollbarsPage;
    }

    onDynamicTablePage(){
        return this.dynamicTablePage;
    }

    onVerifyTablePage(){
        return this.verifyTextPage;
    }

    onProgressBarPage(){
        return this.progressBarPage;
    }

    onVisibilityPage(){
        return this.visibilityPage;
    }

    onSampleAppPage(){
        return this.sampleAppPage;
    }

    onMouseOverPage(){
        return this.mouseOverPage;
    }

}