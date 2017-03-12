
var pwa = angular.module('pwa', []);

pwa.controller('pwaCtrl', function($rootScope, $scope, $http) {
    
	$scope.data = [];
	$scope.isFetching = true;

	$scope.fetchData = function()
	{
		$scope.isFetching = true;

		$http({
        	method : "GET",
        	url : "php/data_api.php"
    	}).then(function mySucces(response) {
        	
        	console.log(response.data);
    		$scope.data = response.data;

    		$scope.isFetching = false;

    	}, function myError(response) {

        	$scope.isFetching = false;

    	});

	}


	$scope.fetchData();



	$scope.fetchAgain = function()
	{
		$scope.fetchData();
	}


});