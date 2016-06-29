(function () {

    angular.module('app')
        .controller('activityController', ['dataService', activityController]);

    function activityController(dataService) {
        var vm = this;

        dataService.getUserActivity()
            .then(function(activities) {
                vm.activities = activities;
                console.log(vm.activities);
            })
            .catch(function(message) {
                console.log(message);
            })

        dataService.getUserEnrollments()
            .then(function(enrollments) {
                vm.enrollments = enrollments;
                // console.log(vm.enrollments);
            })
            .catch(function(message) {
                console.log(message);
            })


    }

}());
