(function () {

    angular.module('app')
        .controller('enrolledController', ['dataService', enrolledController]);

    function enrolledController(dataService) {

        var vm = this;

        dataService.getUserEnrollments()
            .then(function(projects) {
                vm.allprojects = projects;
                console.log(vm.allprojects);
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
