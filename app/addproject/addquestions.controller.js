(function () {
  // add questions
  angular.module('app')
    .controller('addQuesCtrl',['$scope', 'addProjectService', addQuesCtrl]);

    function addQuesCtrl ($scope,addProjectService) {
      $scope.questions = [{id: 1} ];
      // addProjectService.projectData.template_body.count = 1;
      $scope.addNewQuestion = function() {
        var newItemNo = $scope.questions.length+1;
        $scope.questions.push({'id':newItemNo});
        // addProjectService.projectData.template_body.count =  $scope.questions.length;
      };

      $scope.removeQuestion = function() {
        var lastItem = $scope.questions.length-1;
        $scope.questions.splice(lastItem);
        // addProjectService.projectData.template_body.count =  $scope.questions.length;
      };
      addProjectService.projectData.template_body.questions = $scope.questions;

    }

}());
