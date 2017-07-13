import angular from 'angular';


angular.module('app').service('home.service', homeService)
function  homeService($http){
	return {
		getDeals: ()=>
		{
			return $http.get('/assets/deals.json').then(result=>result.data.deals)
		}
		
	}
}
homeService.$inject = ['$http']


angular.module('app').component('home', {
	templateUrl: '/templates/home.html',
	controller: homeComponentController
})

function homeComponentController(homeService){
	var ctrl = this;
	ctrl.deals = [];
	homeService.getDeals().then(deals=>ctrl.deals=deals);

	ctrl.GetProductTypeFilters = function() {
		var result =[];
		for (var t = 0; t < ctrl.deals.length; t++) {
			for (var i = 0; i < ctrl.deals[t].productTypes.length; i++) {
				if(!result.includes(ctrl.deals[t].productTypes[i])){
					result.push(ctrl.deals[t].productTypes[i]);
				}
			}
		}
		return result;
	};	
}

homeComponentController.$inject = ['home.service']