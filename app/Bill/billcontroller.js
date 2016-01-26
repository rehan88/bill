(function () {
    "use strict";

    angular
        .module("app.bill")
        .controller("billcontroller", billcontroller);

    billcontroller.$inject = ["billservice"];

    function billcontroller(billservice) {
        var vm = this;
        
        vm.bill = [];

        vm.GetBill = function () {
            billservice.getBill().then(function (data) {
                vm.bill = data;
            });
        };
        
        vm.GetBill();
    }
})();