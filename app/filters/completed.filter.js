(function () {

    angular.module('app')
        .filter('completedFilter', [completedFilter]);

    function completedFilter() {

// TODO:
// not working check http://stackoverflow.com/questions/13364091/angularjs-custom-filter-errors-due-to-undefined-arrays-and-still-filters-prope

      return function(project) {
        goal = project.goal;
        contributionsCount = project.contributions_count;
        if (goal === contributionsCount) {
          return project;
        }

      }
    }
}());
