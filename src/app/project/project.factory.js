(function() {
    'use strict';

    angular
        .module('app')
        .factory('ProjectFactory', ProjectFactory);

    ProjectFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function ProjectFactory($http, $q, apiUrl) {
        var service = {
            getProjects: getProjects,
            getAssignments: getAssignments,

            remove: remove,
            add: add,
            update: update,
            getById: getById
             

        };
        return service;

        ////////////////

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

            $http.get(apiUrl + '/assignments')
            .then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }
        function remove(project) {
        	var defer = $q.defer();

        	$http.delete(apiUrl + '/projects/' + project.projectId, project)
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
        function update(project) {
        	var defer = $q.defer();

        	$http.put(apiUrl + '/projects/' + project.productId, project)
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
        function add(project) {
        	var defer = $q.defer();

        	$http.post(apiUrl + '/project', project)
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
        function getById(id) {
        	var defer = $q.defer();

        	$http.get(apiUrl + '/projects/' + id)
        	.then(
        		function(response) {
        			defer.resolve(response.data);
        		},
        		function(error) {
        			defer.reject(error);
        		}
        	);
        }
    }
})();