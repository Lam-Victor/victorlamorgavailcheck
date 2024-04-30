import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://www.victorlam.org/');
  
  //assertions homepage
  await expect(page.getByText('this is Victor Lam. Here')).toBeVisible();
  await expect(page.getByText('Get in touch at victor.lam@')).toBeVisible();

  //navigate to my story
  await page.getByRole('link', { name: 'My Story' }).click();

  //assertions on my story
  await expect(page.getByText('Sum it up for me')).toBeVisible();
  await expect(page.getByText('My Education')).toBeVisible();

  //navigate to my work
  await page.getByRole('link', { name: 'My Work' }).click();

  //assertions on my work
  await expect(page.getByRole('link', { name: 'Find out more on my LinkedIn' })).toBeVisible();

  //navigate to My Hobbies
  await page.getByRole('link', { name: 'My Hobbies'}).click();

  //assertions on my hobbies
  await expect(page.getByText('Technology', { exact: true})).toBeVisible();
  await expect(page.getByText('Photography', { exact: true})).toBeVisible();
  await expect(page.getByText('Food', { exact: true})).toBeVisible();
  await expect(page.getByText('Blogging', { exact: true})).toBeVisible();

  //Close Browser Window
  await page.close();

});