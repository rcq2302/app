// START - USED SERVICES
/*
 *	UtentiService.create
 *		PARAMS: 
 *		
 *
 *	UtentiService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	UtentiService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * UtentiService  
 */
// END - REQUIRED RESOURCES

app.controller('UtentiEditController', ['$scope', '$location', '$routeParams', '$q', 'UtentiService',
    function ($scope, $location, $routeParams, $q, UtentiService ) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = UtentiService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new UtentiService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/utentis/');
    		});
    	}
    	
    	$scope.remove = function(){
    		UtentiService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/utentis/');
    		});
    	}
    	
}]);