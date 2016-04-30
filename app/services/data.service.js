(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$q', '$log', dataService]);

    function dataService($http, $q, $log) {

        return {
            getCategoryArt: getCategoryArt,
            getCategoryBiology: getCategoryBiology,
            getCategoryEconomics: getCategoryEconomics,
            getCategoryHealth: getCategoryHealth,
            getCategoryMusic: getCategoryMusic,
            getCategoryScience: getCategoryScience,
            getCategorySocial: getCategorySocial,
            getProject: getProject,
            getResult: getResult
        };

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

    }

}());
