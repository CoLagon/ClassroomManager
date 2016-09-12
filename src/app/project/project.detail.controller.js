(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectDetailCtrl', ProjectDetailCtrl);

    ProjectDetailCtrl.$inject = ['$stateParams','$state', 'ProjectFactory'];

    /* @ngInject */
    function ProjectDetailCtrl( $stateParams, $state, ProjectFactory ) {
        var vm = this;
        vm.title = 'ProjectDetailCtrl';
        vm.blankProject = {};
        vm.addProject = addProject;
        vm.projectId = $stateParams.projectId;


    
    //////////
    function addProject(project) {
        ProjectFactory.add(project)
        .then(
            function(newProject) {
                // vm.projects.push(newProject);
                // vm.blankProject = {};
                $state.go("project.grid");
            });
    }
    }
})();