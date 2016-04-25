(function () {
  angular.module('app')
        .controller('addController',['$scope', '$location', '$state', 'addProjectService',addController]);

    function addController($scope, $location, $state, addProjectService) {

      // initialize the binding between the project data and the service
      $scope.projectData = addProjectService.projectData;

      // steps to switch between them
      $scope.steps = [
        'Basic Info',
        'Story',
        'Assets'
      ];
      // initial value
      $scope.selection = $scope.steps[0];

      $scope.getCurrentStepIndex = function(){
        // Get the index of the current step given selection
        return _.indexOf($scope.steps, $scope.selection);
      };

      $scope.hasNextStep = function(){
        var stepIndex = $scope.getCurrentStepIndex();
        var nextStep = stepIndex + 1;
        // Return true if there is a next step, false if not
        return !_.isUndefined($scope.steps[nextStep]);
      };

      $scope.hasPreviousStep = function(){
        var stepIndex = $scope.getCurrentStepIndex();
        var previousStep = stepIndex - 1;
        // Return true if there is a next step, false if not
        return !_.isUndefined($scope.steps[previousStep]);
      };

      $scope.incrementStep = function() {
        if ( $scope.hasNextStep() )
        {
          var stepIndex = $scope.getCurrentStepIndex();
          var nextStep = stepIndex + 1;
          $scope.selection = $scope.steps[nextStep];
        }
      };

      $scope.decrementStep = function() {
        if ( $scope.hasPreviousStep() )
        {
          var stepIndex = $scope.getCurrentStepIndex();
          var previousStep = stepIndex - 1;
          $scope.selection = $scope.steps[previousStep];
        }
      };

      //convering the img to base 64 string
      $scope.getBase64 = function(file) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
          var dataUrl = e.target.result;
          var base64Data = dataUrl.substr(dataUrl.indexOf('base64,') + 'base64,'.length);
          addProjectService.projectData.mainImage.base64 = base64Data;
        };
      };

      //convering the double quotes to single quotes for the server
      $scope.convertHtml = function() {
        str = $scope.projectData.htmlStory;
        res = str.replace(/"/g, '\'');
        $scope.projectData.htmlStory = res ;
        console.log($scope.projectData.htmlStory);

      };

      //the submiting function
      $scope.processForm = function() {
        // re Routing to home
        $state.go('home');
        // also clearing the service & input boxes
        addProjectService.projectData = {};
        addProjectService.projectData.templateBody ={};
      };
    }

}());
