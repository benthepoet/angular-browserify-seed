// @ngInject
function HomeController($window) {
    var hc = this;

    hc.alert = alert;

    function alert() {
        $window.alert('Hello World');
    }
}

module.exports = {
    controller: HomeController,
    controllerAs: 'home',
    template: require('./home.html')
};
