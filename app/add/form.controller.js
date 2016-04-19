(function () {

  angular.module('app')
    .controller('formController', ['$scope','$state', 'addProjectService' ,function($scope,$state,addProjectService) {

      // we will store all of our form data in addProjectService.projectData object
      $scope.projectData = addProjectService.projectData;

      // function to process addProjectService.projectData to http post
      $scope.processForm = function() {
        alert('a');
        // Routing to my projects which the project should be there
        $state.go('myprojects');
        // clear my the service & boxes
        addProjectService.projectData = {};
        addProjectService.projectData.templateBody ={};
      };

  }])

}());
