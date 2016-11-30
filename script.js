/**
 * Created by yujiaguo on 11/30/16.
 */
angular.module('HelloWorldApp', [])
    .controller('HelloUserController', function($scope) {
        $scope.title = "Welcome to hello world"
        $scope.NameChange = function () {
            $scope.greeting = "Hello " + $scope.name;
        };
        $scope.greetings = "Hello World";


        $scope.destinations = [];
        $scope.newDestination = {
            city : undefined,
            country: undefined
        };
        $scope.addDestination = function (){
            $scope.destinations.push({
                city: $scope.newDestination.city,
                country: $scope.newDestination.country
            });
        }
    });