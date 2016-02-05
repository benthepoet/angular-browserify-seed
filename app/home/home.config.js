// @ngInject
function config($routeProvider) {
    $routeProvider
        .when('/home', {
            template: '<home></home>',
        });
}

module.exports = config;
