import { Page, expect, Locator, FrameLocator } from "@playwright/test";
import { BasePage } from "./basePage";
import path from "path";

export class FileUploadPage extends BasePage {
    
    private readonly fileInput: Locator;
    private readonly browseFilesButton: Locator;
    private readonly dropZone: Locator;
    private readonly uploadedFileName: Locator;
    private readonly iframe: FrameLocator;

    constructor(page: Page) {
        super(page);
        // The file upload component is inside an iframe
        this.iframe = this.page.frameLocator('iframe[src*="upload.html"]');
        
        // All selectors need to be scoped to the iframe
        this.fileInput = this.iframe.locator('input[type="file"]#browse');
        this.browseFilesButton = this.iframe.locator('label[for="browse"].browse-btn');
        this.dropZone = this.iframe.locator('section.drag-drop');
        // Adjust this selector based on where the uploaded file name appears
        this.uploadedFileName = this.iframe.locator('[class*="file"], [id*="file"]').first();
    }

    /**
     * Upload a file using the Browse files button
     * @param filePath - Absolute or relative path to the file to upload
     */
    async uploadFileViaBrowseButton(filePath: string) {
        // Handle both absolute and relative paths
        const fullPath = path.isAbsolute(filePath) 
            ? filePath 
            : path.resolve(__dirname, '..', filePath);
        
        // Wait for the iframe to load
        await this.iframe.locator('input[type="file"]').waitFor({ state: 'attached', timeout: 10000 });
        
        // Set the file directly on the hidden input (this works even if hidden)
        await this.fileInput.setInputFiles(fullPath);
        
        // Wait for upload to process
        await this.page.waitForTimeout(1000);
    }

    /**
     * Upload a file using drag and drop
     * @param filePath - Absolute or relative path to the file to upload
     */
    async uploadFileViaDragAndDrop(filePath: string) {
        // Handle both absolute and relative paths
        const fullPath = path.isAbsolute(filePath) 
            ? filePath 
            : path.resolve(__dirname, '..', filePath);
        
        // Wait for the iframe to load
        await this.iframe.locator('input[type="file"]').waitFor({ state: 'attached', timeout: 10000 });
        
        // For drag and drop, we can still use setInputFiles on the file input
        await this.fileInput.setInputFiles(fullPath);
        
        // Wait for upload to process
        await this.page.waitForTimeout(1000);
    }

    /**
     * Assert that a file was uploaded successfully
     * @param expectedFileName - The name of the file that should be displayed
     */
    async assertFileUploaded(expectedFileName: string) {
        // The file name might appear in the iframe after upload
        // Adjust selector based on actual page structure
        const fileNameLocator = this.iframe.locator(`text=${expectedFileName}`).first();
        await expect(fileNameLocator).toBeVisible({ timeout: 5000 });
    }

    /**
     * Upload file using either method and verify
     * @param filePath - Absolute or relative path to the file
     * @param method - 'browse' or 'dragdrop'
     */
    async uploadFileAndVerify(filePath: string, method: 'browse' | 'dragdrop' = 'browse') {
        if (method === 'browse') {
            await this.uploadFileViaBrowseButton(filePath);
        } else {
            await this.uploadFileViaDragAndDrop(filePath);
        }
        
        const fileName = path.basename(filePath);
        await this.assertFileUploaded(fileName);
    }
}