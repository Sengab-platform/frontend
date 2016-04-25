(function () {

    angular.module('app')
        .controller('socialController', ['dataService', socialController]);

    function socialController(dataService) {

        var vm = this;

        dataService.getCategorySocial()
            .then(function(projects) {
                vm.allprojects = projects;
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
