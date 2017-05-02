//take out of global scope
(function () {
    "use strict";

    //creating the module
    angular.module("app",
        ["ngRoute",
            "ngAnimate"
            //"ui.bootstrap",
            //"simpleControls",
           // "myValidation",
           // "appConstants"
        ])
        .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
            let baseUrl = "/";
            $routeProvider
                .when(baseUrl,
                    {
                        templateUrl: "/app/Filmtheme/index.html",
                        controller: "filmThemeHomeController"
                    })
                .when("/newCustomerForm",
                    {
                        templateUrl: "/app/Customer/Views/commissioning.html",
                        controller: "commissioningController"
                    })
                .when("/existingCustomerForm/:id",
                    {
                        templateUrl: "/app/Customer/Views/commissioning.html",
                        controller: "commissioningController"
                    })
                .otherwise({ redirectTo: baseUrl });

            $locationProvider.html5Mode(true);

        }]);
})();