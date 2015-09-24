angular
  .module('lessonPortal')

  .controller('logoutController',
    function ($scope, $http, $location, $rootScope) {
      console.log("logout control locked and loaded");
      $http
        .post('users/logout', {})
        .success(function () {
          console.log("logout successful")
          $rootScope.auth = null;
          $location.path('/login');
        })
  });
