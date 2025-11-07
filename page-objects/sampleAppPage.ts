import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class SampleAppPage extends BasePage{

    private readonly userNameField: Locator;
    private readonly passwordField: Locator;
    private readonly logInButton: Locator;

    constructor(page: Page){
        super(page);
        this.userNameField = this.page.getByRole('textbox', {name: "User Name"});
        this.passwordField = this.page.getByRole('textbox', {name: "********"});
        this.logInButton = this.page.getByRole('button', {name: 'Log In'});
    }

    async fillAndSubmitFormForSuccessfulLogIn(username: string){
        await this.userNameField.clear();
        await this.userNameField.fill(username); 
        await this.passwordField.clear();
        await this.passwordField.fill('pwd'); 
        await this.logInButton.click();

        const welcomeText = this.page.locator("//label[@id='loginstatus']");
        await expect(welcomeText).toHaveText(`Welcome, ${username}!`)
    }

}