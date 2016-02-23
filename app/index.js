var angular = require('angular');

var dependencies = [
    require('./core').name,
    require('./home').name
];

angular
    .module('app', dependencies);
