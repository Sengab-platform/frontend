(function () {
  // converting the uploaded image to base64
  angular.module('app')
    .controller('imgCtrl', ['$scope', 'addProjectService', function($scope,addProjectService) {
      $scope.getBase64 = function(file) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
          var dataUrl = e.target.result;
          var base64Data = dataUrl.substr(dataUrl.indexOf('base64,') + 'base64,'.length);
          addProjectService.projectData.mainImage.base64 = base64Data;
        };
      };
  }])
}());
