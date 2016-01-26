
(function () {
  "use strict";

    angular
        .module('app.bill')
        .config(['$routeProvider',

    function ($routeProvider) {
      $routeProvider
        .when("/", {
          controller: "billcontroller",
          templateUrl: "/app/Bill/bill.html",
          controllerAs: 'vm'
        });
    }]);
})();