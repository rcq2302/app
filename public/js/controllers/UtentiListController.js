// START - USED SERVICES
/*
 *	UtentiService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	UtentiService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * UtentiService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('UtentiListController', ['$scope', 'UtentiService',
    function ($scope, UtentiService ) {
		
    	$scope.list = UtentiService.query();
    	
}]);