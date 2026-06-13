import { Page } from "@playwright/test";





export class BasePage {
    constructor(protected page: Page) {}

    async navigateTo(url: string = ''): Promise<void> {
        // Playwright va lipi automat baseURL-ul din config la acest url relativ!
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }
}