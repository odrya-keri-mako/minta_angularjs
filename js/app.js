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
  ]);


})(window, angular);