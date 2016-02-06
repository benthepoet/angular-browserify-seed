// @ngInject
function HomeController($window) {
    var home = this;

    home.alert = alert;

    function alert() {
        $window.alert('Hello World');
    }
}

module.exports = {
    controller: HomeController,
    controllerAs: 'home',
    template: require('./home.html')
};
