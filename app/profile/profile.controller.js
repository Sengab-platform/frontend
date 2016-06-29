(function () {

    angular.module('app')
        .controller('profileController', ['dataService','$scope' , profileController]);

    function profileController(dataService, $scope) {

        var vm = this;

        var fetched = dataService.getUser()
            .then(function(data) {
                vm.user = data;
                console.log(vm.user);
            })
            .catch(function(message) {
                console.log(message);
            })

        fetched.then(function () {
          $scope.userName = vm.user.first_name;

        })

    }

}());
