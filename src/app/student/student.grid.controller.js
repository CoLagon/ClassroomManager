(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentGridCtrl', StudentGridCtrl);

    StudentGridCtrl.$inject = ['StudentFactory','$stateParams', '$state'];

    /* @ngInject */
    function StudentGridCtrl( StudentFactory , $stateParams, $state) {
        var vm = this;
        vm.title = 'StudentGridCtrl';
        vm.getAllStudentss = getAllStudents;

        vm.students = [];

        getAllStudents();
        getA();
        ////////////////

        function getAllStudents() {
            StudentFactory.getStudents().then(
                function(data) {
                    vm.students = data;
                    console.log(vm.students);
                }
            );
        }
        function getA() {
            StudentFactory.getAssignments().then(
                function(data)  {
                    vm.assignments = data;
                    console.log(vm.assignments);
                }
            );
        }
    }
})();