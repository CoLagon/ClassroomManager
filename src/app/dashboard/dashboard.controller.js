(function() {
    'use strict';

    angular
        .module('app')
        .controller('dashCtrl', dashCtrl);

    dashCtrl.$inject = ['DashFactory', '$stateParams', '$state'];

    /* @ngInject */
    function dashCtrl(DashFactory, $stateParams, $state) {
        var vm = this;
        // vm.title = 'dashCtrl';
        // vm.myData = [];
        // vm.myObject = {};

        // vm.studentLength = [];
        // vm.projectLength = [];
        

        getS();
        getP();
        getA();
        ////////////////


        // function getAllStudents() {
        //     classroomFactory.getAllStudents()
        //         .then(function(data) {
        //                 vm.allStudents = data;
        //                 console.log("Got the Students");
        //                 vm.studentLength = vm.allStudents.length;
        //             },
        //             function(error) {

        //             }
        //         );
        // }

        function getS() {
            DashFactory.getStudents().then(
                function(students) {
                    vm.students = students.length;

                }
            );
        }
            function getP() {
                DashFactory.getProjects().then(
                    function(data) {
                        vm.projects = data.length;
                    }
                );
            }
                function getA() {
                    DashFactory.getAssignments().then(
                        function(assignments) {
                            vm.assignments = assignments.length;
                        }
                    );
                }
            }
        
    
})();
