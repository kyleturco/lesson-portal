 angular
  .module('lessonPortal')
  .controller('authController', function ($scope, $http, $location) {

    $scope.login = function() {
      localStorage.setItem('auth', true);
      if (localStorage.auth === 'true') {
        $location.path("/teacher");
        console.log('does this work?')
      }
    }

    if ($location.path() === '/logout') {
      localStorage.clear();
      $http.get('/auth/logout');
    };

    // $scope.authCheck = function(auth) {

    // }

    // $http
    //   .post('/logout', {})
    //   .success(function () {
    //     console.log('logout successful')
    //     $location.path('/login')
    //   })
  })
