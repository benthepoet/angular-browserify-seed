var angular = require('angular');

var dependencies = [];

module.exports =
    angular
        .module('app.home', dependencies)
        .config(require('./home.config'))
        .component('home', require('./home.component'));
