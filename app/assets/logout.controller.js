angular
  .module('lessonPortal')

  .controller('logoutController',
    function ($scope, $http, $location) {
      console.log("logout control locked and loaded");
      $http
        .post('users/logout', {})
        .success(function () {
          console.log("logout successful")
          $location.path('/login');
        })
  });
