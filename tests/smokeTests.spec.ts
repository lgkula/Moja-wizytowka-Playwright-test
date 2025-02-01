import { test, expect, Page } from '@playwright/test';
import { BasePage } from '../Pages/Template.page';

let page: Page

test.beforeAll('Open app test', async ({ context }) => {
  page = await context.newPage();
  await page.goto('/');
  
  await expect(page, 'Check main page url').toHaveURL('/');
  await expect(page, 'Check main page title').toHaveTitle('Lesław Kula');
  // await page.screenshot({ path: `screenshots/${Date.now()}.png` });

});

test('Check web elements on base page test', async () => {
  const basePage = new BasePage(page)
  await expect(basePage.lawyerImageLocator).toBeVisible();

  await basePage.lawyerLinkLocator.click();
  
})

