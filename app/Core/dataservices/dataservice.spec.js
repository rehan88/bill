describe("billservice", function () {
    var dataservice;
    var httpLocalBackend;
    var url = 'http://safe-plains-5453.herokuapp.com/bill.json';
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
        bard.appModule("app.core");
        bard.inject(this, 'billservice', "$httpBackend", "$log");
        dataservice = billservice;
        httpLocalBackend = $httpBackend;
  });

  it("dataservice exists", function () {
      expect(dataservice).not.toBe(null);
  });
  
  it('dataservice to return data when 200 OK', function () {        
    var items;    
    httpLocalBackend.expectGET(url).respond(200, bill);    
        dataservice.getBill().then(function (data) {
             items = data;
        });
        httpLocalBackend.flush();    
        expect(items.length).toBe(1);    
    });
    
    it('dataservice data to be undefined when 500 internal server error', function () {        
    var items;    
    httpLocalBackend.expectGET(url).respond(500, undefined);          
        dataservice.getBill().then(function (data) {
            items = data;        
        });              
        httpLocalBackend.flush();            
        expect(items.data).toBe(undefined);
        expect(items.status).toBe(500);
    });
    
});