(function() {
    'use strict';

    angular
        .module('app')
        .factory('DashFactory', DashFactory);

    DashFactory.$inject = ['$http','$q', 'apiUrl'];

    /* @ngInject */
    function DashFactory($http,$q, apiUrl) {
        var service = {
            getStudents: getStudents,
            getProjects: getProjects,
            getAssignments: getAssignments
        };
        return service;

        ////////////////

        function getStudents() {
        	var defer = $q.defer();

        	$http.get(apiUrl + '/students')
        	.then(
        		function(response) {
        			defer.resolve(response.data);
        		},
        		function(error) {
        			defer.reject(error);
        		}
        	);
        	return defer.promise;
		}
        function getProjects() {
        	var defer = $q.defer();

        	$http.get(apiUrl + '/projects')
        	.then(
        		function(response) {
        			defer.resolve(response.data);
        		},
        		function(error) {
        			defer.reject(error);
        		}
        	);
        	return defer.promise;
        }
        function getAssignments() {
        	var defer = $q.defer();

        	$http.get(apiUrl + '/Assignments')
        	.then(
        		function(response) {
        			defer.resolve(response.data);
        		},
        		function(error) {
        			defer.reject(error);
        		}
        	);
        	return defer.promise;
        }
    }
})();