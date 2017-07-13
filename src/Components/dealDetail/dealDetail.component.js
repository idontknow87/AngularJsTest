import angular from 'angular';

angular.module('app').component('dealDetail', {
	templateUrl: '/templates/dealDetail.html',
	bindings: {
		deals: '<'    
	}
});
