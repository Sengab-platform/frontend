(function () {
  // add questions
  angular.module('app')
    .controller('addQuesCtrl',['$scope', 'addProjectService', function($scope,addProjectService) {
      $scope.questions = [{id: '1'} ];
      addProjectService.projectData.templateBody.count = 1;
      $scope.addNewQuestion = function() {
        var newItemNo = $scope.questions.length+1;
        $scope.questions.push({'id':newItemNo});
        addProjectService.projectData.templateBody.count =  $scope.questions.length;
      };

      $scope.removeQuestion = function() {
        var lastItem = $scope.questions.length-1;
        $scope.questions.splice(lastItem);
        addProjectService.projectData.templateBody.count =  $scope.questions.length;
      };
      addProjectService.projectData.templateBody.questions = $scope.questions;

    }])

}());
