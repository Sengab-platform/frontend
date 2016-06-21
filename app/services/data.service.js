(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$q', '$log', dataService]);

    function dataService($http, $q, $log) {
        this.key = '';
        return {
            getUser: getUser,
            getUserProjects: getUserProjects,
            getCategoryArt: getCategoryArt,
            getCategoryBiology: getCategoryBiology,
            getCategoryEconomics: getCategoryEconomics,
            getCategoryHealth: getCategoryHealth,
            getCategoryMusic: getCategoryMusic,
            getCategoryScience: getCategoryScience,
            getCategorySocial: getCategorySocial,
            getProject: getProject,
            getResult: getResult,
            getSearchProjects: getSearchProjects
        };
        // temporary still didn't implement the authentcation to the server

        function getUser() {
            return $http.get('http://localhost:9000/users/user::117521628211683444029')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving data: ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }

        function getUserProjects() {
            return $http.get('http://localhost:9000/users/user::117521628211683444029/created_projects')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving projects of the user : ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }

        function getCategoryArt() {
            return $http.get('http://localhost:9000/categories/category::1')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving data: ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }

        function getCategoryBiology() {
            return $http.get('http://localhost:9000/categories/category::2')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving data: ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }

        function getCategoryEconomics() {
            return $http.get('http://localhost:9000/categories/category::3')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving data: ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }

        function getCategoryHealth() {
            return $http.get('http://localhost:9000/categories/category::4')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving data: ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }
        function getCategoryMusic() {
            return $http.get('http://localhost:9000/categories/category::5')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving data: ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }

        function getCategoryScience() {
            return $http.get('http://localhost:9000/categories/category::6')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving data: ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }

        function getCategorySocial() {
            return $http.get('http://localhost:9000/categories/category::7')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving data: ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }

        function getProject(id) {
            return $http.get('http://localhost:9000/projects/'+id)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving project (' + id + '): ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }

        function getResult(id) {
            return $http.get('http://localhost:9000/projects/'+ id +'/results')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving project results for project (' + id + '): ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }
        // function getSearchProjects(keyword) {
        //     return $http.get('http://localhost:9000/projects/search/'+ keyword)
        //         .then(function(response) {
        //             return response.data;
        //         })
        //         .catch(function(response) {
        //             $log.error('Error retrieving projects for the keyword (' + keyword + '): ' + response.statusText);
        //             return $q.reject('Error retrieving data.');
        //         })
        // }
        function getSearchProjects() {
            return $http.get('http://localhost:9000/projects')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving projects for the keyword (): ' + response.statusText);
                    return $q.reject('Error retrieving data.');
                })
        }

    }

}());
