 angular
  .module('lessonPortal')
  .controller('authController', function ($scope, $http, $location) {
    $scope.login = function() {
      localStorage.setItem('auth', true);
    }

    if ($location.path() === '/logout') {
      localStorage.clear();
      $http.get('/auth/logout');
    }

    // $http
    //   .post('/logout', {})
    //   .success(function () {
    //     console.log('logout successful')
    //     $location.path('/login')
    //   })
  })
