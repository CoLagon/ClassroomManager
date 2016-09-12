(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailCtrl', StudentDetailCtrl);

    StudentDetailCtrl.$inject = [];

    /* @ngInject */
    function StudentDetailCtrl() {
        var vm = this;
        vm.title = 'StudentDetailCtrl';

       

        ////////////////

        function getAllStudents() {
        }
    }
})();