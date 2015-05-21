# Jinba JavaScript Client

Jinba is a micro-library which helps to collect and send different performance measurements.

For Jinba project and examples see https://github.com/dpp-name/jinba

## API

http://dpp-name.github.io/jinba-js-client/

## Build JavaScript Client

Jinba JavaScript client is written using CommonJS module format. You can use it directily in nodejs or use webpack to build for browser.

    webpack -p --output-library="Jinba" --output-library-target="var" index.js dist/Jinba.Client.min.js

