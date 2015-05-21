## Jinba JavaScript Client

Jinba is a micro-library which helps to collect and send different performance measurements.

For Jinba project and examples see https://github.com/dpp-name/jinba

### API

http://dpp-name.github.io/jinba-js-client/

### Usage example
```html
<script src="Jinba.Client.min.js"></script>
<script>
    Jinba.config({
        url:'/jinba/',
        batchTimeout: 1000
    });
    var TAG_WEBSITE = {
        app_label: 'example'
    };
    window.addEventListener('DOMContentLoaded', function() {
        var jinbaRequest = new Jinba.Request(location.pathname, TAG_WEBSITE);
        Jinba.MeasureNetworkTiming(jinbaRequest);

        jinbaRequest.startMeasurement('app-init-id', 'app_init');
        // Application.init();
        jinbaRequest.stopMeasurement('app-init-id');
        jinbaRequest.end();
    });
</script>
```

### Build standalone

Jinba JavaScript client is written using CommonJS module format. You can use it directily in nodejs or use webpack to build for browser.

    webpack -p --output-library="Jinba" --output-library-target="var" index.js dist/Jinba.Client.min.js

