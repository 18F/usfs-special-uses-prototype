# Development notes

These are miscellaneous notes on the web development patterns for this project.

## 11ty

Although it is a static site, to avoid copy-pasting and repeating boilerplate,
the site is "built" using a static site generator called
[Eleventy](https://eleventyjs.org) (or 11ty). Source files live in `src/` and
the built site goes in the `site/` directory. We also store assets such as
images and CSS files directly in this repository's `site/` directory when they
don't need any building.

To build the site locally, run the command `npm run build`. (You will have to
have NPM installed and run `npm ci` first to install all of the dependencies.)

After building, you can serve the built site with Nginx using `docker compose
up web`.

## Custom headers

This is a static HTML website designed for serving with Cloud.gov's Staticfile
buildpack. For local development, we use Docker Compose to serve the site in
the `site/` folder using Nginx. In the `docker-compose.yaml` file we use the same
`nginx/conf/includes/headers.conf` file as the Staticfile buildpack uses.

To add custom headers for Content Security Policy, etc. we can customize that
`nginx/conf/includes/headers.conf` file using the Nginx configuration file
format (e.g. `add_header ...`).

## Github Actions automated testing

We have a number of automated tests that run in Github Actions for each pull
request defined in `.github/workflows/test.yaml`. For each of the Github
Actions tests, it is possible to run them locally ahead of time to check if
they will pass.

### Pa11y

The Pa11y automated accessibility tester can be run against the local site
after starting the server (`docker compose up web`) by running `npm run
pa11y-ci:sitemap`. (You will have to have NPM installed and run `npm ci
--include=dev` first to install the dependencies.)

### Lighthouse

Lighthouse is Google's web performance testing tool. It imitates a low-end
smartphone loading the site and it checks a variety of performance metrics. The
Github Actions uses the Lighthouse CI project that wraps Lighthouse in a
variety of assertions. We use some thresholds defined in `.lighthouserx.json`
to assert a minimum score for each of Lighthouse's four categories.

To run Lighthouse locally, you can run `npx lighthouse --view
http://localhost:8080` where the `--view` option opens the HTML-formatted
report page after it runs the test. (You will have to have NPM installed and
run `npm ci --include=dev` first to install the dependencies.)

### OWASP Zap

We run the security scanning suite OWASP Zap against our website to look for
common security errors in the configuration. The test uses the OWASP docker
images for Zap, so you can run the tests by doing `docker compose run owasp`.
By default, all rules are configured to cause test failures in the file
`zap.conf`.
