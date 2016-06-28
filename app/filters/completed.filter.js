(function () {

    angular.module('app')
        .filter('completedFilter', function() {
          return function(projects ,filterProjects) {

            var completedProjects = [];
            // console.log(completedProjects);
            angular.forEach(projects, function(project) {
                var goal = project.goal;
                var contributionsCount = project.contributions_count ;
                if (goal == contributionsCount) {
                  completedProjects.push(project);
                }

            });
            return completedProjects;
        }
      });
}());
