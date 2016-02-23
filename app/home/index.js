var angular = require('angular');

var dependencies = [];

module.exports =
    angular
        .module('app.home', dependencies)
        .config(require('./config'))
        .component('home', require('./component'));
