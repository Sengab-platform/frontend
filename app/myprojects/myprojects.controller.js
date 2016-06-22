(function () {

    angular.module('app')
        .controller('myProjectsController', ['dataService', myProjectsController]);

    function myProjectsController(dataService) {

        var vm = this;

        dataService.getUserProjects()
            .then(function(projects) {
                vm.allprojects = projects;
                console.log(vm.allprojects);
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
