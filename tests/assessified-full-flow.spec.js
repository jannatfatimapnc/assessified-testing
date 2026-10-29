import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devapp.assessified.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('teacher04@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test@123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('link', { name: ' Assessments ' }).click();
  await page.getByRole('link', { name: 'All Assessments' }).click();
  await page.getByRole('link', { name: ' New Assessment' }).click();
  await page.getByRole('heading', { name: 'Curriculum-grounded' }).click();
  await page.getByRole('textbox', { name: 'Assessment title *' }).click();
  await page.getByRole('textbox', { name: 'Assessment title *' }).fill('automation abc');
  await page.getByLabel('Difficulty *').selectOption('1');
  await page.getByLabel('Board *').selectOption('6');
  await page.getByLabel('Curriculum *').selectOption('2');
  await page.getByLabel('Grade *').selectOption('10');
  await page.getByLabel('Subject *').selectOption('9');
  await page.getByLabel('Syllabus *').selectOption('88');
  await page.getByLabel('Version *').selectOption('99');
  await page.getByText('4 learning outcomes').click();
  await page.getByRole('checkbox', { name: '1 · Data Representation and' }).check();
  await page.locator('label').filter({ hasText: '2 · Pseudocode and' }).click();
  await page.getByRole('checkbox', { name: '2 · Pseudocode and Flowcharts' }).check();
  await page.getByRole('checkbox', { name: 'CS-10-A-01 Remember Level K' }).check();
  await page.getByRole('checkbox', { name: 'CS-10-B-04 Apply Level A' }).check();
  await page.getByRole('button', { name: '+' }).click({
    clickCount: 3
  });
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Create Assessment with AI' }).click();
  await page.goto('https://devapp.assessified.com/admin/assessment-form?assessmentId=1827');
  await page.getByRole('button', { name: 'Share with Students' }).click();
  await page.getByRole('tab', { name: 'Assign to Class' }).click();
  await page.getByLabel('Select Teacher').selectOption('681');
  await page.getByRole('spinbutton').nth(1).click();
  await page.getByRole('spinbutton').nth(1).fill('10');
  await page.getByText('Assessment Duration *MinHourDue Date*No. of attempts allowed').click();
  await page.getByRole('spinbutton').first().fill('11');
  await page.getByRole('button', { name: 'Clear value' }).click();
  await page.getByLabel('Calendar icon').click();
  await page.locator('[data-test="Thu Oct 29 2026 00:00:00 GMT+0500 (Pakistan Standard Time)"]').click();
  await page.getByRole('button', { name: 'Publish Now' }).click();
});