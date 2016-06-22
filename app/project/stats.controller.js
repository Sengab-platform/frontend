(function () {

    angular.module('app')
        .controller('statsController', ['dataService','$stateParams','$state','$scope', statsController]);

    function statsController(dataService, $stateParams ,$state, $scope) {

      var vm = this;
        // getting the stats for specific project

        dataService.getStats($stateParams.id)
            .then(function(data) {
                vm.stats = data;
                console.log(vm.stats);
            })
            .catch(function(message) {
                console.log(message);
            })
    }

}());
