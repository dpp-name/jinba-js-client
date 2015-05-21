
var JinbaRequest = require('./lib/JinbaRequest');
var JinbaConfig = require('./lib/JinbaConfig');
var MeasureNetworkTiming = require('./lib/MeasureNetworkTiming');
var MeasureAjaxImages = require('./lib/MeasureAjaxImages');
var AddUserTimings = require('./lib/AddUserTimings');

function config(config)
{
    var jinbaConfig = JinbaConfig.getInstance();
    if (config.url) {
        jinbaConfig.setUrl(config.url);
    }
    if (config.batchTimeout) {
        jinbaConfig.setBatchTimeout(config.batchTimeout);
    }
}

module.exports = {
    config: config,
    Request: JinbaRequest,
    MeasureNetworkTiming: MeasureNetworkTiming,
    MeasureAjaxImages: MeasureAjaxImages,
    AddUserTimings: AddUserTimings
};
