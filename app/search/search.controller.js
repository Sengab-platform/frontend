(function () {

    angular.module('app')
        .controller('searchController', ['dataService','$scope', '$state', searchController]);

    function searchController(dataService, $scope, $state) {

        var vm = this;

        dataService.getAllProjects()
            .then(function(projects) {
                vm.allprojects = projects;
            })
            .catch(function(message) {
                console.log(message);
            })


        $scope.search = function(){
          $state.go('search');
        };

    }

}());
