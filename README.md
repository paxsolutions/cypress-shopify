## [Issue #15259](https://github.com/cypress-io/cypress/issues/15259)

## Description

This repo provides a way to recreate an issue while locally testing Shopify themes who's storefronts are password protected.

## Dependencies

- [browser-sync w/ gulp](https://browsersync.io/docs/gulp)
- [Shopify themekit (node)](https://github.com/Shopify/node-themekit)
- Cypress v6.5.0
- node v14.4.0
- Chrome v88.0.4324.192

## References

 - The Shopify portion is inspired by [Shopify Slate](https://github.com/Shopify/slate)

## Setup and Test

Install deps

`npm i`

Build and deploy theme to development and start browserSync

`npm run start`

You should see the following (safe to ignore errors)

![Local proxy](../assets/Cursor_and_npm_run_start.png)

Start Cypress

`npm run cypress:open`

Everything should be up and running and you should be able to run the example spec.

![cypress](../assets/Cursor_and__Users_erikmarty_Projects_Cypress_cypress-shopify.png)

Failure!

![Error](../assets/cypress-shopify.png)

```
cy.visit() failed trying to load:

https://localhost:3000/?preview_theme_id=120240898208

We attempted to make an http request to this URL but the request failed without a response.

We received this error at the network level:

  > Error: Parse Error: Content-Length can't be present with chunked encoding

Common situations why this would fail:
  - you don't have internet access
  - you forgot to run / boot your web server
  - your web server isn't accessible
  - you have weird network configuration settings on your computer
```

## What I've tried

- Use puppeteer to log into the shopify store, grab session cookies, then set those cookies in cypress
- Adjust browser-sync headers to a `Transfer-Encoding`other than `chunked`
- Adjust browser-sync headers to explicitly set `Content-Length`