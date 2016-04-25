(function () {

    angular.module('app')
        .controller('biologyController', ['dataService', biologyController]);

    function biologyController(dataService) {

        var vm = this;

        dataService.getCategoryBiology()
            .then(function(projects) {
                vm.allprojects = projects;
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
