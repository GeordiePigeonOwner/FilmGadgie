//newOrExistingController
//take out of global scope
(function () {
    "use strict";

    angular.module("app-")
        .controller("filmThemeHomeController", filmThemeHomeController);

    function filmThemeHomeController($scope, $uibModal, $location, $route)
    {
        const vm = $scope;
        vm.isBusy = true;
    }
    
})();