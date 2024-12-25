import {chromium} from 'playwright'


    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        viewport: { width: 1280, height: 900 },
    });
    
    const page = await context.newPage();
    
    await page.goto("https://orteil.dashnet.org/cookieclicker/");
    await page.locator("button#bigCookie").click();