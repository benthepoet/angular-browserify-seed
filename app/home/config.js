// @ngInject
function config($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'HomeController',
            controllerAs: 'hc',
            templateUrl: 'home/template.html',
        });
}

module.exports = config;
