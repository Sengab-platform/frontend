(function () {

    angular.module('app')
        .controller('projectController', ['dataService','$stateParams', '$scope', projectController]);

    function projectController(dataService, $stateParams ,$scope) {
        var vm = this;

        var fetched = dataService.getProject($stateParams.id)
            .then(function(data) {
                vm.project = data;
                console.log(vm.project);
            })
            .catch(function(message) {
                console.log(message);
            })

        // make sure the data fetched first
        // then assign the t_id to the template_id in the $scope of the project (parent to the result)
        // this will be used in switching between results views
        fetched.then(function () {
          $scope.t_id = vm.project.template_id;
        })
    }

}());
