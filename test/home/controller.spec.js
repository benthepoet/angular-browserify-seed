describe('app.home.controller', function () {

    var $window, controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, _$window_) {
        $window = _$window_;
        spyOn($window, 'alert');
        controller = _$controller_('HomeController', {});
    }));

    it('should be created', function () {
        expect(controller).toBeDefined();
    });

    describe('alert', function () {

        it('should alert', function () {
            controller.alert();
            expect($window.alert).toHaveBeenCalled();
        });

    });

});
