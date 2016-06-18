(function () {

    angular.module('app')
        .controller('profileController', ['dataService', profileController]);

    function profileController(dataService) {
      
        var vm = this;

        dataService.getUser()
            .then(function(data) {
                vm.user = data;
                console.log(vm.user);
            })
            .catch(function(message) {
                console.log(message);
            })

    }

}());
