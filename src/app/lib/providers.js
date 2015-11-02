(function (App) {
    'use strict';
    var Q = require('q');

    var defer = Q.defer();

    /* load all the things ! */
    var appPath = '';
    var path = './providers/';
    var App = window.App;

    fs.readdir(path, function (err, files) {
        files.forEach (function (file) {
            if (! file.match(/\.js$/))
                return

            if (file.match(/generic.js$/))
                return

            try {
                console.log ('loading', file);
                var provider = require ('../../providers/' + file);
                var PI = new provider (App);
                App.Providers._cache[PI.name] = PI;
            } catch (e) {
                console.error ('error loading provider', e)
            }
        })
    })

    return defer.promise
})(window.App);
