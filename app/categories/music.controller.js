(function () {

    angular.module('app')
        .controller('musicController', ['dataService', musicController]);

    function musicController(dataService) {

        var vm = this;

        dataService.getCategoryMusic()
            .then(function(projects) {
                vm.allprojects = projects;
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
