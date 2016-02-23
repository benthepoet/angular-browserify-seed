describe('app.home.home', function () {

    var $window, home;

    beforeEach(module('app'));

    beforeEach(inject(function (_$rootScope_, _$componentController_, _$window_) {
        $window = _$window_;
        spyOn($window, 'alert');
        
        home = _$componentController_('home', {
            $scope: _$rootScope_.$new()
        });
    }));

    it('should be created', function () {
        expect(home).toBeDefined();
    });

    describe('alert', function () {

        it('should alert', function () {
            home.alert();
            expect($window.alert).toHaveBeenCalled();
        });

    });

});
