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
        // vm.blankProject = {};
        vm.addProject = addProject;
        // vm.projectId = $stateParams.projectId;

        activate();
    
    //////////
    function activate() {
      if ($stateParams.projectId) {
        ProjectFactory.getById($stateParams.projectId).then(
          function(project) {
            vm.project = project;
          }
        );
      } else {
        vm.project = {};
      }
      ProjectsFactory.get().then(
        function(students) {
          vm.students = students;
        }
      );
    }
     function addProject() {
        if($stateParams.projectId) {
            ProjectFactory.update(vm.project).then(
                function() {
                    $state.go('project.grid');
                }
            );
        } else {
            ProjectFactory.add(vm.project).then(
                function() {
                    $state.go('project.grid');
                }
            );
        }
    }
    }
})();