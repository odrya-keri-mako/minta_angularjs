;(function(window, angular) {

  'use strict';

  // Application module
  angular.module('app', [
    'ui.router'
  ])

  // Application config
  .config([
    '$stateProvider', 
    '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
			.state('home', {
				url: '/',
				templateUrl: './html/home.html'
			})
			.state('page1', {
				url: '/page1',
				templateUrl: './html/page1.html'
			})
			.state('page2', {
				url: '/page2',
				templateUrl: './html/page2.html'
			});
      
      $urlRouterProvider.otherwise('/');
    }
  ])

  // Custom navigation
  .directive('customNavbar', [ 
    () => {

      return {
				restrict: 'EA',
				replace: true,
				scope: {},
				template:`<div class="row mt-5 justify-content-center">
                    <ul class="list-group w-auto">
                      <li class="list-group-item"><a ui-sref="home">Home</a></li>
                      <li class="list-group-item"><a ui-sref="page1">Page1</a></li>
                      <li class="list-group-item"><a ui-sref="page2">Page2</a></li>
                    </ul>
                  </div>`
			};
		}
	])

})(window, angular);