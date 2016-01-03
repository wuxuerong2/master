var masterAdminApp = angular.module('masterAdminApp', ['ui.router']);

masterAdminApp.config(function ($stateProvider, $urlRouterProvider) {
    console.log('AAAAA');
    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "tpls/login.htm",
            controller:"loginCtrl"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            template: "<div>Page1</div>"
        })
        .state("PageTab.login", {
            url:"/login",
            templateUrl: "Page-2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "Page3.html"
        });

});