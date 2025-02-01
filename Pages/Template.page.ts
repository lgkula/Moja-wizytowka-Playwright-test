import { type Locator, type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    readonly lawyerLinkLocator: Locator;
    readonly lawyerImageLocator: Locator;
    readonly lawyerImageHeaderLocator: Locator;
    readonly developerLinkLocator: Locator;
    readonly developerImageLocator: Locator;
    readonly developerImageHeaderLocator: Locator;
    readonly privateLinkLocator: Locator;
    readonly privateImageLocator: Locator;
    readonly privateImageHeaderLocator: Locator;
    readonly pageTitle: string;

    constructor(page: Page) {
        this.page = page;
        this.lawyerLinkLocator = page.getByRole('link', {
            name: 'Radca Prawny',
        });
        this.lawyerImageLocator = page.getByTestId('lawyer-image').locator('img');
        this.lawyerImageHeaderLocator = page.getByTestId('lawyer-image').locator('img');
        
        this.developerLinkLocator = page.getByRole('link', {
            name: 'Programista testów',
        });
        this.developerImageLocator = page.getByTestId('developer-image').locator('img');
        this.developerImageHeaderLocator = page.getByTestId('developer-image').locator('img');
        
        this.privateLinkLocator = page.getByRole('link', { name: 'Prywatnie' });
        this.privateImageLocator = page.getByTestId('private-image').locator('img');
        this.privateImageHeaderLocator = page.getByTestId('private-image').locator('img');
        
        this.pageTitle = 'Lesław Kula';
    }

}
