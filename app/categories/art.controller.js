(function () {

    angular.module('app')
        .controller('artController', ['dataService', ArtController]);

    function ArtController(dataService) {

        var vm = this;

        dataService.getCategoryArt()
            .then(function(projects) {
                vm.allprojects = projects;
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
