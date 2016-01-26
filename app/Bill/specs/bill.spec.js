describe("billcontroller", function () {
    var controller;
    var bill = [{      
     "sample": {
        "generated": "2015-01-11",
        "due": "2015-01-25",
        "period": {
            "from": "2015-01-26",
            "to": "2015-02-25"
         }
  }
}];

beforeEach(function () {
        bard.appModule("app.bill");
        bard.inject(this, '$controller', '$q', '$rootScope', 'billservice');
        bard.mockService(billservice, {
            getBill: $q.when(bill),
            _default: $q.when([])
        });
        controller = $controller('billcontroller');
        $rootScope.$apply();
   });

  it("controller exists", function () {
        expect(controller).not.toBe(null);
  });

  it('controller activation gets bill', function() {
        controller.GetBill(); 
        $rootScope.$apply();  
         expect(controller.bill.length).toEqual(bill.length); 
  });
  
    it("can call fake billservice.GetBill", function() {
        billservice.getBill().then(function(bill) {
        expect(bill).not.toBeNull();
    });
    $rootScope.$apply(); 
    });
});