export default {
    preset: "jest-puppeteer",
    globals: {
        URL: "http://localhost:3000",
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    testTimeout: 5000,
}