(function () {

    angular.module('app')
        .controller('healthController', ['dataService', healthController]);

    function healthController(dataService) {

        var vm = this;

        dataService.getCategoryHealth()
            .then(function(projects) {
                vm.allprojects = projects;
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
