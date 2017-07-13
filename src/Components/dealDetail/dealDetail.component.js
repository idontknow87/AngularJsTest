import angular from 'angular';


angular.module('app').component('dealDetail', {
	templateUrl: '/templates/dealDetail.html',
	bindings: {
		deals: '<'    
	}
});

angular.module('app').component('dealDetailRow', {
	templateUrl: '/templates/dealDetailRow.html',
	controller: dealDetailComponentController,
	restrict: 'A',
	replace: false,
	bindings: {
		deal: '<'    
	}
});

function dealDetailComponentController($filter){	
 	var ctrl = this;
	ctrl.GetTotalContractCost = function() {
		return $filter('currency')(ctrl.deal.prices[0].totalContractCost,"£");
	};	
}