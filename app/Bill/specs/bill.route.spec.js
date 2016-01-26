describe('Tests bill routes: ', function() {
    var $route;
   
    beforeEach(module('app.bill'));
    
    beforeEach(inject(function(_$route_) {
        $route = _$route_;
    }));
    
    describe('bill routes', function() {

        it('should map to billcontroller', function() {
            console.log($route);
            expect($route.routes['/'].controller).toBe('billcontroller');
            expect($route.routes['/'].controllerAs).toBe('vm');
        });

        it('should map to bill.html', function() {
            expect($route.routes['/'].templateUrl).toBe('/app/Bill/bill.html');
        });

    });
});