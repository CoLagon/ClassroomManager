(function() {
    'use strict';

    angular
        .module('app')
        .factory('StudentFactory', StudentFactory);

    StudentFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function StudentFactory($http, $q, apiUrl) {
        var service = {
            getStudents: getStudents,
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
        
    }
})();