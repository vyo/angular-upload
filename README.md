# Angular Upload
Upload files using FormData, fall back to iframe upload when FormData isn't supported

 - Works in all browsers
 - Lightweight
 - No dependency on jQuery

##Disclaimer
This fork is a minor variation of the original module at [angular-upload](https://github.com/leon/angular-upload), removing numbered parameters on multi-file uploads.
You will not be able to load this from bower directly, so your best bet is to load the original version
with
```sh
bower install --save angular-upload
```
and then overwrite the source folder and the angular-upload.js and angular-upload.min.js files with those from this fork.


Alternatively you can build and wire it up manually, of course.

## Build it yourself!
angular-upload is built with grunt and has a express backend for testing.

Start by installing npm if you don't have it already

via homebrew or homepage (http://nodejs.org/download/)
```sh
brew install nodejs
```
then
```sh
npm install -g grunt-cli karma-cli
```
then from within angular-upload
```sh
npm install && bower install
```
then you can start the testserver up with
```sh
grunt webserver
```

and you can access it through http://localhost:9001 and test the uploader

To run the tests
```sh
grunt test
```

or run in autotest mode

```sh
grunt autotest
```

And when you're done minify it
```sh
grunt package
```
