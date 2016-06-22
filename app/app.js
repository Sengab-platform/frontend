(function() {

    var app = angular.module('app', ['ui.router','ngFileUpload','textAngular','ngSanitize']);

    app.run([ '$rootScope', '$state', '$stateParams',function ($rootScope, $state, $stateParams) {
      //giving access to the data property in $state to use it all around the app
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }])

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

// -------------------------------- initial states routing --------------------------------

        $urlRouterProvider
        .when('/me', ['$state', function ($state) {
          $state.transitionTo('profile.about', {location: false});
        }])
        .when('/categories', ['$state', function ($state) {
          $state.transitionTo('categories.category_art', {location: false});
        }])
        .when('/enrolled', ['$state', function ($state) {
          $state.transitionTo('enrolled.inprogress', {location: false});
        }])
        .when('/myprojects', ['$state', function ($state) {
          $state.transitionTo('myprojects.inprogress', {location: false});
        }])
        .when('/search', ['$state', function ($state) {
          $state.transitionTo('search.projects', {location: false});
        }])
        .when('/project/:id', '/project/:id/campaign')
        .otherwise('/');

// -------------------------------- home routing --------------------------------
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/app/home/home.html'
            })
// -------------------------------- profile routing --------------------------
        .state('search', {
          url: '/search',
          templateUrl: '/app/search/search.html',
          controller: 'searchController',
          controllerAs: 'searchCtrl'
        })
        .state('search.projects', {
          url: '/projects',
          templateUrl: '/app/search/projects.html',
          controller: 'searchController',
          controllerAs: 'searchCtrl'
        })

// -------------------------------- search routing  --------------------------
          .state('profile', {
                url: '/me',
                templateUrl: '/app/profile/profile.html',
                controller: 'profileController',
                controllerAs: 'profileCtrl'
            })
            .state('profile.about', {
                url: '/about',
                templateUrl: '/app/profile/about.html',
                controller: 'profileController',
                controllerAs: 'profileCtrl'
            })
            .state('profile.projects', {
                url: '/projects',
                templateUrl: '/app/profile/projects.html',
                controller: 'userProjectsController',
                controllerAs: 'userProjectsCtrl'
            })
            .state('profile.activity', {
                url: '/activity',
                templateUrl: '/app/profile/activity.html',
                controller: 'activityController',
                controllerAs: 'activityCtrl'
            })

// -------------------------------- categories routing --------------------------

            .state('categories', {
                url: '/categories',
                templateUrl: '/app/categories/categories.html'
            })
            .state('categories.category_art', {
                url: '/art',
                templateUrl: '/app/categories/art.html',
                controller: 'artController',
                controllerAs: 'art',
                data : {title: 'Art & Design',
                        subtitle: 'Here you can find projects related to art , design & creativity',
                        img:'art'
                }
            })
            .state('categories.category_biology', {
                url: '/biology',
                templateUrl: '/app/categories/biology.html',
                controller: 'biologyController',
                controllerAs: 'biology',
                data : { title: 'Biology',
                        subtitle: 'Here you can find projects related to Biology , Nature & all living things',
                        img:'biology' }
            })
            .state('categories.category_economics', {
                url: '/economics',
                templateUrl: '/app/categories/economics.html',
                controller: 'economicsController',
                controllerAs: 'economics',
                data : { title: 'Economics' ,
                        subtitle: 'Here you can find projects related to Economics ',
                        img:'economics'}
            })
            .state('categories.category_health', {
                url: '/health',
                templateUrl: '/app/categories/health.html',
                controller: 'healthController',
                controllerAs: 'health',
                data : { title: 'Health' ,
                        subtitle: 'Here you can find projects related to human health & illness',
                        img:'health'}
            })
            .state('categories.category_music', {
                url: '/music',
                templateUrl: '/app/categories/music.html',
                controller: 'musicController',
                controllerAs: 'music',
                data : { title: 'Music' ,
                        subtitle: 'Here you can find projects related to songs & music',
                        img:'music'}
            })
            .state('categories.category_science', {
                url: '/science',
                templateUrl: '/app/categories/science.html',
                controller: 'scienceController',
                controllerAs: 'science',
                data : { title: 'Science' ,
                        subtitle: 'Here you can find projects related to science & technology Here you can find projects related to science & technology Here you can find projects related to science & technology Here you can find projects related to science & technology Here you can find projects related to science & technology Here you can sadaaad',
                        img:'science'}
            })
            .state('categories.category_social', {
                url: '/social',
                templateUrl: '/app/categories/social.html',
                controller: 'socialController',
                controllerAs: 'social',
                data : { title: 'Social' ,
                        subtitle: 'Here you can find projects related to social science & how groups of people behave',
                        img:'social'}
            })
// -------------------------------- enrolled routing --------------------------------

            .state('enrolled', {
                url: '/enrolled',
                templateUrl: '/app/enrolled/enrolled.html',
            })
            .state('enrolled.inprogress', {
                url: '/inprogress',
                templateUrl: '/app/enrolled/inprogress.html',
                controller: 'enrolledController',
                controllerAs: 'enrolledCtrl',
                data : { title: 'Enrolled projects' ,
                        subtitle: "Here you find the projects you enrolled that hasn't been finished.",
                        img:'enrolled'}
            })
            .state('enrolled.completed', {
                url: '/completed',
                templateUrl: '/app/enrolled/completed.html',
                controller: 'enrolledController',
                controllerAs: 'enrolledCtrl',
                data : { title: 'Enrolled projects' ,
                        subtitle: "Here you find the projects you enrolled that has been finished.",
                        img:'completed'}
            })
// -------------------------------- my project routing --------------------------------
            .state('myprojects', {
                url: '/myprojects',
                templateUrl: '/app/myprojects/myprojects.html',
            })
            .state('myprojects.inprogress', {
                url: '/inprogress',
                templateUrl: '/app/myprojects/inprogress.html',
                controller: 'myProjectsController',
                controllerAs: 'myProjectsCtrl',
                data : { title: 'My projects' ,
                        subtitle: "Here you find the projects you created that hasn't been finished.",
                        img:'myprojects'}
            })
            .state('myprojects.completed', {
                url: '/completed',
                templateUrl: '/app/myprojects/completed.html',
                controller: 'myProjectsController',
                controllerAs: 'myProjectsCtrl',
                data : { title: 'My projects' ,
                        subtitle: "Here you find the projects you created that has been finished.",
                        img:'completed'}
            })
// -------------------------------- project routing --------------------------------
            .state('project',{
                url: '/project/:id',
                templateUrl: '/app/project/project.html',
                controller: 'projectController',
                controllerAs: 'projectCtrl'
            })
            .state('project.campaign', {
                url: '/campaign',
                templateUrl: '/app/project/campaign.html',
            })
            .state('project.stats', {
                url: '/stats',
                templateUrl: '/app/project/stats.html',
                controller: 'statsController',
                controllerAs: 'statsCtrl'
            })
            .state('project.result', {
                url: '/result',
                templateUrl: '/app/project/result.html',
                controller: 'resultController',
                controllerAs: 'resultCtrl'
            })

// -------------------------------- add routing 4 templates! --------------------------------
            .state('addlocation',{
                url: '/addlocation',
                templateUrl: '/app/addproject/location.html',
                controller: 'addController',
                controllerAs: 'addCtrl'
            })
            .state('addpics',{
                url: '/addpics',
                templateUrl: '/app/addproject/pics.html',
                controller: 'addController',
                controllerAs: 'addCtrl'
            })
            .state('addsurvey',{
                url: '/addsurvey',
                templateUrl: '/app/addproject/survey.html',
                controller: 'addController',
                controllerAs: 'addCtrl'
            })
            .state('addlocpic',{
                url: '/addlocpic',
                templateUrl: '/app/addproject/locpic.html',
                controller: 'addController',
                controllerAs: 'addCtrl'
            })
    }]);

}());
