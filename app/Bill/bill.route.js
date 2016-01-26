
(function () {
  "use strict";

    angular
        .module('app.bill')
        .config(['$routeProvider',

    function ($routeProvider) {
      $routeProvider
        .when("/", {
          controller: "billcontroller",
          templateUrl: "/bill/app/Bill/bill.html",
          controllerAs: 'vm'
        });
    }]);
})();
