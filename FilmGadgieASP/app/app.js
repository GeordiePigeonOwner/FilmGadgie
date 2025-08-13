//take out of global scope
(function () {
    "use strict";

    //creating the module
    angular.module("app", ["ngRoute"])
        .config([
                "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider)
                {
                    const baseUrl = "/";
                    $routeProvider
                        .when(baseUrl,
                            {
                                templateUrl: "/app/FilmTheme/index.html",
                                controller: "filmThemeHomeController"
                            })
                        .otherwise({ redirectTo: baseUrl });

                    $locationProvider.html5Mode(true);
                }
            ]);
})();