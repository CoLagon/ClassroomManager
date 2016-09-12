(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .value('apiUrl', 'http://localhost:64230/api')
        .config(appConfig);

        appConfig.$inject = ["$urlRouterProvider","$stateProvider"];
        
        function appConfig($urlRouterProvider, $stateProvider) {
        	$urlRouterProvider.otherwise('dashboard');

        	$stateProvider
        		.state('dashboard', {
        			url: '/dashboard',
        			controller: 'dashCtrl as dash',
        			templateUrl: 'app/dashboard/dashboard.html'
        		})
        		.state('student', {
        			url:'/student',
        			abstract: true,
        			template: '<div ui-view></div'
        		})
        			.state('student.grid', {
        				url: '/grid',
        				controller: 'StudentGridCtrl as studentGrid',
        				templateUrl: 'app/student/student.grid.html' 
        			})
        			.state('student.detail', {
        				url: '/detail?studentId',
        				controller: 'StudentDetailCtrl as studentDetail',
        				templateUrl: 'app/student/student.detail.html'
        			})
        			.state('project', {
        			url:'/project',
        			abstract: true,
        			template: '<div ui-view></div'
        			})
        			.state('project.grid', {
        				url: '/grid',
        				controller: 'ProjectGridCtrl as projectGrid',
        				templateUrl: 'app/project/project.grid.html' 
        			})
        			.state('project.detail', {
        				url: '/detail?projectId',
        				controller: 'ProjectDetailCtrl as projectDetail',
        				templateUrl: 'app/project/project.detail.html'
        			});
        }
})();