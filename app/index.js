var angular = require('angular');

var dependencies = [
    require('./core'),
    require('./home')
];

angular
    .module('app', dependencies);
