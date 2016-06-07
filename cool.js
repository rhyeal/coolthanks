var http = require('http');
var url = require('url');

module.exports = {
    thanks: function(urlString, method) {
        method = (method !== undefined) ? method : "HEAD"
        var options = url.parse(urlString);
        options.method = method;
        try {
            http.request(options).on('error', function(e) {
				// /dev/null
            }).end();
        }
        catch (err) {
            // /dev/null
        }
    }
}