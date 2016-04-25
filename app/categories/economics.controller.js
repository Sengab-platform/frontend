(function () {

    angular.module('app')
        .controller('economicsController', ['dataService', economicsController]);

    function economicsController(dataService) {

        var vm = this;

        dataService.getCategoryEconomics()
            .then(function(projects) {
                vm.allprojects = projects;
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
