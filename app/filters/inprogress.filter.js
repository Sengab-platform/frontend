(function () {

    angular.module('app')
        .filter('inprogressFilter', function() {
          return function(projects ,filterProjects) {

            var inprogressProjects = [];

            angular.forEach(projects, function(project) {
                var goal = project.goal;
                var contributionsCount = project.contributions_count ;
                if (goal !== contributionsCount) {
                  inprogressProjects.push(project);
                }

            });
            
            return inprogressProjects;
        }
      });
}());
