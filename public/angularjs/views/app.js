'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute','ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
}]).controller("mainCtrl",[ '$scope','$uibModal',function ($scope,$uibModal) {

    $scope.dlist = [
        {
            "name": "Person",
            "icon" : "",
            "specification":{
                "fields":[

                ]
            }

        }


    ];

    $scope.list=[1,2,3,4,5];

    $scope.openModal = function() {

        $scope.opts = {
            backdrop: true,
            backdropClick: true,
            dialogFade: false,
            keyboard: true,
            templateUrl: 'myModalContent.html',
            controller : 'ModalCtrl',
            resolve: {} // empty storage
        };


        $scope.opts.resolve.item = function() {
            return angular.copy(
                {name: $scope.name}
            ); // pass name to resolve storage
        }

        var modalInstance = $uibModal.open($scope.opts);

        modalInstance.result.then(function(){
            //on ok button press
        },function(){
            //on cancel button press
            console.log("Modal Closed");
        });
    };
}]).controller('ModalCtrl',['$scope','$uibModal' ,'$uibModalInstance', 'item',function ($scope,$uibModal ,$uibModalInstance, item) {

    $scope.dummy = item;

    $scope.item = {
        "name":"Person",
        "icon":"",
        "specification":{
            "fields":[
                {
                    "key":"name",
                    "input_type":"text_field",
                    "required":false,
                    "options":{}
                },
                {
                    "key":"material status",
                    "input_type":"dropdown",
                    "required":false,
                    "options":{
                        "values":["single","married"]
                    }
                }
            ]
        }

    };


    var addSpecification = function (key,data_spec,required) {
      this.key = key;
      this.data_spec = data_spec;
      this.required = required;

    };


    $scope.selected_spec_type = "spec_type";
    $scope.selected_option_type = "option_type";

    $scope.specTypes  = ['Input Box','Radio Button','DropDown','File upload'];
    $scope.optionTypes = ['Single value','Multiple Value'];


    $scope.specTypeSelected = function (spectype) {
        $scope.selected_spec_type = spectype;
    };

    $scope.optionTypeSelected = function (optiontype) {
        $scope.optionTypes = optiontype;
    };

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}]);