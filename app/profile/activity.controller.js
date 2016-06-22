(function () {

    angular.module('app')
        .controller('activityController', ['dataService', activityController]);

    function activityController(dataService) {
        var vm = this;

        // dataService.getUserContributions()
        //     .then(function(contributions) {
        //         vm.contributions = contributions;
        //     })
        //     .catch(function(message) {
        //         console.log(message);
        //     })

        dataService.getUserEnrollments()
            .then(function(enrollments) {
                vm.enrollments = enrollments;
                console.log(vm.enrollments);
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
