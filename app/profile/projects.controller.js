(function () {

    angular.module('app')
        .controller('userProjectsController', ['dataService', userProjectsController]);

    function userProjectsController(dataService) {

        var vm = this;

        dataService.getUserProjects()
            .then(function(projects) {
                vm.allprojects = projects;
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
