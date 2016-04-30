(function () {
  angular.module('app')
        .controller('addController',['$scope', '$location', '$state', '$http' ,'addProjectService',addController]);

    function addController($scope, $location, $state, $http, addProjectService) {

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

      // adding the template_id to the project data service
      $scope.location = function() {
        addProjectService.projectData.template_id = 1;
      };
      $scope.pic = function() {
        addProjectService.projectData.template_id = 2;
      };
      $scope.survey = function() {
        addProjectService.projectData.template_id = 3;
      };
      $scope.locPic = function() {
        addProjectService.projectData.template_id = 4;
      };

      // getting time of creation and converted to ISO string
      $scope.createdAt = function() {
        var time = new Date();
        addProjectService.projectData.created_at = time.toISOString();
      };

      //convering the img to base 64 string (called when changing the image)
      $scope.getBase64 = function(file) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
          var dataUrl = e.target.result;
          var base64Data = dataUrl.substr(dataUrl.indexOf('base64,') + 'base64,'.length);
          // addProjectService.projectData.mainImage.base64 = base64Data;
          // addProjectService.projectData.image = base64Data;
          addProjectService.projectData.image = 'data:'+addProjectService.projectData.mainImage.type+';base64,'+base64Data;
        };
      };

      //convering the double quotes to single quotes for the server
      $scope.convertHtml = function() {
        str = $scope.projectData.detailed_description;
        res = str.replace(/"/g, '\'');
        $scope.projectData.detailed_description = res ;
      };

      //the submiting function
      $scope.processForm = function() {
        // re Routing to home
        // $state.go('home');
        // var postData ={
        //     "name": "Recognize image",
        //     "brief_description": "short",
        //     "detailed_description": "long",
        //     "goal": 500,
        //     "image": "fdfdfdfdfjdkfd4f5dfdf4df",
        //     "created_at": "2016-02-12T03:21:55Z",
        //     "category_id": "category::1",
        //     "template_id": 1,
        //     "template_body": {
        //         "template_id":1,
        //         "template_body":{
        //           "question_title":"Are you happy today?"
        //         }
        //       }
        //   }
        // var jdata= JSON.stringify(postData);
        console.log("gded");
        $http({
          url: 'http://localhost:9000/projects',
          method: 'POST',
          data: {
              "name": "Recognize image",
              "brief_description": "short",
              "detailed_description": "long",
              "goal": 500,
              "image": "fdfdfdfdfjdkfd4f5dfdf4df",
              "created_at": "2016-02-12T03:21:55Z",
              "category_id": "category::1",
              "template_id": 1,
              "template_body": {
                  "template_id":1,
                  "template_body":{
                    "question_title":"Are you happy today?"
                  }
                }
            },
          headers: {
                  'Content-Type': 'application/json; charset=utf-8'
          }})
        // $http.post('http://localhost:9000/projects',jdata);

        // also clearing the service & input boxes
        addProjectService.projectData = {};
        addProjectService.projectData.template_body ={};
      };
    }

}());
