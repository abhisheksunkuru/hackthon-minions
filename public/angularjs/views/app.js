'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute','ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
}]).controller("mainCtrl",[ '$scope','$uibModal','$http',function ($scope,$uibModal,$http) {

    $scope.specTypes  = ['Input Box','Radio Button','DropDown','File upload'];


    $http({
        method : "GET",
        url : "http://localhost:3000/api/v1/dynamic_objects"
    }).then(function mySuccess(response) {
        // $scope.myWelcome = response.data;
        console.log(response);
    }, function myError(response) {
        // $scope.myWelcome = response.statusText;
        console.log(response);

    });



    $scope.fieldvalue = function (value) {
    $scope.v  = [];
        angular.forEach(value,function (key,value) {
            v.put(key,value);
        });
    };

    $scope.dlist = [
        {
            "name": "Person",
            "icon": "/data.jpg",
            "specification": {
                "fields": [
                    {
                        "key": "name",
                        "input_type": "text_field",
                        "required": false,
                        "options": {}
                    },
                    {
                        "key": "material status",
                        "input_type": "dropdown",
                        "required": true,
                        "options": {
                            "values": ["single", "married"]
                        }
                    }
                ]
            }
        },
        {
            "name": "Person 1",
            "icon": "/data.jpg",
            "specification": {
                "fields": [
                    {
                        "key": "name",
                        "input_type": "text_field",
                        "required": false,
                        "options": {}
                    },
                    {
                        "key": "material status",
                        "input_type": "file_uploads",
                        "required": true,
                        "options": {
                            "values": ["jpeg", "png"]
                        }
                    }
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
        "icon":"/data.jpg",
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
                    "required":true,
                    "options":{
                        "values":["single","married"]
                    }
                }
            ]
        }

    };


    var addSpecification = function (item) {
      item.specification.fields.key = "";
      item.specification.fields.data_spec = "";
      item.specification.fields.required = false;
      item.specification.fields.options = [];
    };

    var addOptions = function (value) {
    };

            $scope.addSpec = function (item) {
                item.specification.fields.push(new addSpecification(item));
            };

            $scope.addOptions = function (item) {
                item.specification.fields.push(new addSpecification(item));
            };

    // $scope.selected_spec_type = "spec_type";
    // $scope.selected_option_type = "option_type";

    $scope.specTypes  = ['Input Box','Radio Button','DropDown','File upload'];
    $scope.optionTypes = ['Single value','Multiple Value'];


    $scope.specTypeSelected = function (spectype) {
        $scope.selected_spec_type = spectype;
    };

    $scope.optionTypeSelected = function (optiontype) {
        $scope.optionTypes = optiontype;
    };

    $scope.specTypename = function (specType) {
        $scope.selected_spec_type = specType.input_type;
    };

    $scope.optionTypename = function (optiontype) {
        if(Array.isArray(optiontype))
        $scope.selected_option_type ="Multiple Value";
        else
        $scope.selected_option_type ="Single Value";

    };
    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}]);