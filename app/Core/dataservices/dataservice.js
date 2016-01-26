
(function () {
    'use strict'

    angular.module('app.core', []).factory('billservice', function ($http, $log) {
        return {
            getBill: getBill
        };
        function getBill() {
            return $http.get('http://safe-plains-5453.herokuapp.com/bill.json')
                .then(getBillComplete)
                .catch(getBilltFailed);

            function getBillComplete(response) {
                return response.data;
            }

            function getBilltFailed(error) {                
                $log.error('XHR Failed for getStatement.' + error.data);
                return error;
            }
        }
    });

})();