# Cool, Thanks

Tell your favorite URL that it's got it handled for you. Sends a response-less request to a URL, defaulting to a `HEAD`. You'll likely also want to use `GET` if your server hates handling `HEAD`.

## Usage

To send a cool, thanks to a URL, just do:

``` js
var cool = require("coolthanks");

cool.thanks("http://example.com");
cool.thanks("http://example.com", "GET");
```