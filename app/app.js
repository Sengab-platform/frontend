(function() {

    var app = angular.module('app', ['ui.router','ngFileUpload','textAngular']);

    app.run([ '$rootScope', '$state', '$stateParams',function ($rootScope, $state, $stateParams) {
      //giving access to the data property in $state to use it all around the app
      $rootScope.$state = $state;
    }])

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

// -------------------------------- initial states routing --------------------------------
        $urlRouterProvider
        .when('/categories', ['$state', function ($state) {
          $state.transitionTo('categories.category_art', {location: false});
        }])
        .when('/enrolled', ['$state', function ($state) {
          $state.transitionTo('enrolled.inprogress', {location: false});
        }])
        .when('/myprojects', ['$state', function ($state) {
          $state.transitionTo('myprojects.inprogress', {location: false});
        }])
        .when('/addlocation', ['$state', function ($state) {
          $state.transitionTo('addlocation.basicinfo', {location: false});
        }])
        .when('/addpics', ['$state', function ($state) {
          $state.transitionTo('addpics.basicinfo', {location: false});
        }])
        .when('/addsurvey', ['$state', function ($state) {
          $state.transitionTo('addsurvey.basicinfo', {location: false});
        }])
        .when('/addlocpic', ['$state', function ($state) {
          $state.transitionTo('addlocpic.basicinfo', {location: false});
        }])
        .when('/project/:id', '/project/:id/campaign')
        .otherwise('/');

// -------------------------------- home routing --------------------------------
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/app/home/home.html'
            })
// -------------------------------- categories routing --------------------------------
            .state('categories', {
                url: '/categories',
                templateUrl: '/app/categories/categories.html'
            })
            .state('categories.category_art', {
                url: '/art',
                templateUrl: '/app/categories/art.html',
                data : {title: 'Art & Design',
                        subtitle: 'Here you can find projects related to art , design & creativity',
                        img:'art'
                }
            })
            .state('categories.category_biology', {
                url: '/biology',
                templateUrl: '/app/categories/biology.html',
                data : { title: 'Biology',
                        subtitle: 'Here you can find projects related to Biology , Nature & all living things',
                        img:'biology' }
            })
            .state('categories.category_economics', {
                url: '/economics',
                templateUrl: '/app/categories/economics.html',
                data : { title: 'Economics' ,
                        subtitle: 'Here you can find projects related to Economics ',
                        img:'economics'}
            })
            .state('categories.category_health', {
                url: '/health',
                templateUrl: '/app/categories/health.html',
                data : { title: 'Health' ,
                        subtitle: 'Here you can find projects related to human health & illness',
                        img:'health'}
            })
            .state('categories.category_music', {
                url: '/music',
                templateUrl: '/app/categories/music.html',
                data : { title: 'Music' ,
                        subtitle: 'Here you can find projects related to songs & music',
                        img:'music'}
            })
            .state('categories.category_science', {
                url: '/science',
                templateUrl: '/app/categories/science.html',
                data : { title: 'Science' ,
                        subtitle: 'Here you can find projects related to science & technology Here you can find projects related to science & technology Here you can find projects related to science & technology Here you can find projects related to science & technology Here you can find projects related to science & technology Here you can sadaaad',
                        img:'science'}
            })
            .state('categories.category_social', {
                url: '/social',
                templateUrl: '/app/categories/social.html',
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
                data : { title: 'Enrolled projects' ,
                        subtitle: "Here you find the projects you enrolled that hasn't been finished.",
                        img:'enrolled'}
            })
            .state('enrolled.completed', {
                url: '/completed',
                templateUrl: '/app/enrolled/completed.html',
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
                data : { title: 'My projects' ,
                        subtitle: "Here you find the projects you created that hasn't been finished.",
                        img:'myprojects'}
            })
            .state('myprojects.completed', {
                url: '/completed',
                templateUrl: '/app/myprojects/completed.html',
                data : { title: 'My projects' ,
                        subtitle: "Here you find the projects you created that has been finished.",
                        img:'completed'}
            })

// -------------------------------- project routing --------------------------------
            .state('project',{
                url: '/project/:id',
                templateUrl: '/app/project/project.html',
            })
            .state('project.campaign', {
                url: '/campaign',
                templateUrl: '/app/project/campaign.html',
            })
            .state('project.stats', {
                url: '/stats',
                templateUrl: '/app/project/stats.html',
            })
            .state('project.result', {
                url: '/result',
                templateUrl: '/app/project/result.html',
            })
// -------------------------------- add routing 4 templates! --------------------------------

            .state('addlocation',{
                url: '/addlocation',
                templateUrl: '/app/add/location/location.html',
            })
            .state('addlocation.basicinfo', {
                url: '/basicinfo',
                templateUrl: '/app/add/location/basicinfo.html',
                data : { title: 'Start making your project ..' ,
                        subtitle: 'Add project title, description, image, a goal, and other details.'
                        }
            })
            .state('addlocation.story', {
                url: '/story',
                templateUrl: '/app/add/location/story.html',
                data : { title: 'Tell your story..' ,
                        subtitle: "Why people should contribute in your project, this what will appear inside your project .."
                        }
            })
            .state('addlocation.assets', {
                url: '/assets',
                templateUrl: '/app/add/location/assets.html',
                data : { title: "It's all about what you need.." ,
                        subtitle: 'what question should we ask contributers when they are giving thier location ?'
                        }
            })
            .state('addlocation.submit', {
                url: '/submit',
                templateUrl: '/app/add/location/submit.html',
                data : { title: 'looks good ? ' ,
                        subtitle: "hit submit and let the magic happens.  "
                        }
            })


            .state('addpics',{
                url: '/addpics',
                templateUrl: '/app/add/pics/pics.html',
            })
            .state('addpics.basicinfo', {
                url: '/basicinfo',
                templateUrl: '/app/add/pics/basicinfo.html',
                data : { title: 'Start making your project ..' ,
                        subtitle: 'Add project title, description, image, a goal, and other details.'
                        }
            })
            .state('addpics.story', {
                url: '/story',
                templateUrl: '/app/add/pics/story.html',
                data : { title: 'Tell your story..' ,
                        subtitle: "Why people should contribute in your project, this what will appear inside your project .."
                        }
            })
            .state('addpics.assets', {
                url: '/assets',
                templateUrl: '/app/add/pics/assets.html',
                data : { title: "It's all about what you need.." ,
                        subtitle: 'what kind of picture you need ?'
                        }
            })
            .state('addpics.submit', {
                url: '/submit',
                templateUrl: '/app/add/pics/submit.html',
                data : { title: 'looks good ? ' ,
                        subtitle: "hit submit and let the magic happens.  "
                        }
            })

            .state('addsurvey',{
                url: '/addsurvey',
                templateUrl: '/app/add/survey/survey.html',
            })
            .state('addsurvey.basicinfo', {
                url: '/basicinfo',
                templateUrl: '/app/add/survey/basicinfo.html',
                data : { title: 'Start making your project ..' ,
                        subtitle: 'Add project title, description, image, a goal, and other details.'
                        }
            })
            .state('addsurvey.story', {
                url: '/story',
                templateUrl: '/app/add/survey/story.html',
                data : { title: 'Tell your story..' ,
                        subtitle: "Why people should contribute in your project, this what will appear inside your project .."
                        }
            })
            .state('addsurvey.assets', {
                url: '/assets',
                templateUrl: '/app/add/survey/assets.html',
                data : { title: "It's all about what you need.." ,
                        subtitle: 'what kind of picture you need ?'
                        }
            })
            .state('addsurvey.submit', {
                url: '/submit',
                templateUrl: '/app/add/survey/submit.html',
                data : { title: 'looks good ? ' ,
                        subtitle: "hit submit and let the magic happens.  "
                        }
            })
            .state('addlocpic',{
                url: '/addlocpic',
                templateUrl: '/app/add/locpic/locpic.html',
            })
            .state('addlocpic.basicinfo', {
                url: '/basicinfo',
                templateUrl: '/app/add/locpic/basicinfo.html',
                data : { title: 'Start making your project ..' ,
                        subtitle: 'Add project title, description, image, a goal, and other details.'
                        }
            })
            .state('addlocpic.story', {
                url: '/story',
                templateUrl: '/app/add/locpic/story.html',
                data : { title: 'Tell your story..' ,
                        subtitle: "Why people should contribute in your project, this what will appear inside your project .."
                        }
            })
            .state('addlocpic.assets', {
                url: '/assets',
                templateUrl: '/app/add/locpic/assets.html',
                data : { title: "It's all about what you need.." ,
                        subtitle: 'what kind of picture you need ?'
                        }
            })
            .state('addlocpic.submit', {
                url: '/submit',
                templateUrl: '/app/add/locpic/submit.html',
                data : { title: 'looks good ? ' ,
                        subtitle: "hit submit and let the magic happens.  "
                        }
            });
    }]);

}());
