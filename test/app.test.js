beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Header Testing', () => {
    test('Page title', async () => {
        const title = await page.title();
        expect(title).toBe('Home');
    });
});

describe('Signup form', () => {
    test('Test invalid email', async () => {   
        await page.goto(URL + '/signup', {waitUntil: 'domcontentloaded'});
        await page.waitForSelector('form');
        await page.type('#email', 'eze');
        await page.click('body');
        const emailHint = await page.$eval('.email-hint', el => el.innerHTML);
        expect(emailHint).toBe('Email is not valid');
    });

    test('Test empty field hints', async () => {
        await page.goto(URL + '/signup', {waitUntil: 'domcontentloaded'});
        await page.waitForSelector('form');
        await page.type('#email', '');
        await page.click('body');

        const emailHint = await page.$eval('.email-required-hint', el => el.innerHTML);
        expect(emailHint).toBe('Email is required');
    });
});


