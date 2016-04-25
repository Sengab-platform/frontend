(function () {

    angular.module('app')
        .controller('scienceController', ['dataService', scienceController]);

    function scienceController(dataService) {

        var vm = this;

        dataService.getCategoryScience()
            .then(function(projects) {
                vm.allprojects = projects;
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
