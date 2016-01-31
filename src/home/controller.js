HomeController.$inject = ['$window'];

function HomeController($window) {
    var hc = this;

    hc.alert = alert;

    function alert() {
        $window.alert('Hello World');
    }
}

module.exports = HomeController;
