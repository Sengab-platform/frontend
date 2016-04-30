(function () {

    angular.module('app')
        .controller('resultController', ['dataService','$stateParams','$state','$scope', resultController]);

    function resultController(dataService, $stateParams ,$state, $scope) {

      var vm = this;
        // getting the results for specific project

        dataService.getResult($stateParams.id)
            .then(function(data) {
                vm.results = data;
                console.log(vm.results);
            })
            .catch(function(message) {
                console.log(message);
            })

        //  when using routing this is how to switch between html templates
        //  but the user can go to unvalid url !!
        //
        //  if ($scope.tid == 1) {
        //    $state.go('project.result.loc');
        //  }
        //  else if ($scope.tid == 2) {
        //    $state.go('project.result.pic');
        //  }
        //
    }

}());
