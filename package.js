// package.js for MilSymbol.js - package name 'hrtt:mmsp'
Package.describe({
    summary: 'MilSymbol.js; Military Symbology according to US MilStd 2525x / NATO APP6x',
});

Package.on_use(function (api, where) {
    api.export("MilSymbol");
    api.add_files('bin/MilSymbol.js', 'client');
});