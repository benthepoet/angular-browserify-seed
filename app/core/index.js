var angular = require('angular');

require('angular-material');
require('angular-route');

var dependencies = [
    'ngMaterial',
    'ngRoute'
];

module.exports =
    angular
        .module('app.core', dependencies);