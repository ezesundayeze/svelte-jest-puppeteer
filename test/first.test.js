
const timeout = process.env.SLOWMO ? 30000 : 40000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Header Testing', () => {
    test('Page title', async () => {
        const title = await page.title();
        expect(title).toBe('Home');
    }, timeout);
});

describe('Signup form', () => {
    test('Test invalid email', async () => {   
        await page.goto(URL + '/signup', {waitUntil: 'domcontentloaded'});
        await page.waitForSelector('form');
        await page.type('#email', 'eze');
        await page.click('body');
        const emailHint = await page.$eval('.email-hint', el => el.innerHTML);
        expect(emailHint).toBe('Email is not valid');
    }, timeout);


    test('Test empty fields', async () => {   
        await page.goto(URL + '/signup', {waitUntil: 'domcontentloaded'});
        await page.waitForSelector('form');
        await page.type('#email', '');
        await page.type('#password', '');
        await page.click('body');
        const passwordRequired = await page.$eval('.password-required-hint', el =>el.innerHTML);
        const emailRequired = await page.$eval('.email-required-hint', el =>el.innerHTML);

        expect(passwordRequired).toBe('Password is required');
        expect(emailRequired).toBe('Email is required');
    }, timeout);
});


