(function () {

    angular.module('app')
        .controller('projectController', ['dataService','$stateParams', projectController]);

    function projectController(dataService, $stateParams) {

        var vm = this;

        dataService.getProject($stateParams.id)
            .then(function(data) {
                vm.project = data;
            })
            .catch(function(message) {
                console.log(message);
            })
    }

}());
