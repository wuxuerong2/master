var masterAdminApp =  angular.module("masterAdminApp", []);

masterAdminApp.controller("loginCtrl", ["$scope",
    function($scope){
        $scope.myName = "Abc";
    }
]);
