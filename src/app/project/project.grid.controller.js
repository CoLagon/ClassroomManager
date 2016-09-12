(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectGridCtrl', ProjectGridCtrl);

    ProjectGridCtrl.$inject = ['ProjectFactory','$stateParams', '$state'];

    /* @ngInject */
    function ProjectGridCtrl( ProjectFactory , $stateParams, $state) {
        var vm = this;
        vm.title = 'StudentGridCtrl';
        // vm.getProjects = getProjects;
        //properties
        // vm.blankProject = {};
        // vm.Projects = [];
        //methods
        // vm.removeProject = $stateParams.projectId;
        vm.removeProject = removeProject;
        vm.updateProject = updateProject;
        // vm.addProject = addProject;
        getProjects();
        getA();
       
        ////////////////


        function getProjects() {
            ProjectFactory.getProjects().then(
                function(data) {
                    vm.projects = data;
                    console.log(vm.projects);
                }
            );
        }
        function getA() {
            ProjectFactory.getAssignments().then(
                function(data)  {
                    vm.assignments = data;
                    console.log(vm.assignments);
                }
            );
        }
        function removeProject(project) {
            if(confirm("Are you sure you want to remove this project?")) {
                ProjectFactory.remove(project).then(
                    function() {
                        var index = vm.projects.indexOf(project);
                        vm.projects.splice(index, 1);
                        console.log("remove");
                    }
                );
            }
        }
        function updateProject(project) {
            ProjectFactory.update(project).then(
                function() {
                    project.edit = false;
                }
            );
        }
        // function addProject() {
        //     ProjectFactory.add().then(
        //         function(newProject) {
        //             vm.projects.push(newProject);
        //             vm.blankProject = {};
        //         });
        // }
    }
})();