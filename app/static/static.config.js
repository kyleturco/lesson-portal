angular
  .module('lessonPortal')
  .config(function ($routeProvider) {

    $routeProvider
      .when('/teacher', {
        templateUrl: 'views/teacher-home.html',
        controller: 'teacherCtrl',
        controllerAs: 'teacher'
      })
      // .when('/', {
      //   templateUrl: 'views/login.html',
      //   controller: 'authController',
      //   controllerAs: 'auth'
      // })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'authController',
        controllerAs: 'auth'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'authController',
        controllerAs: 'auth'
      })
      .otherwise({
        templateUrl: 'assets/static/404.html'
      });
  })

  // .run(function ($rootScope, $location, AuthenticationService) {

  //   // enumerate routes that don't need authentication
  //     var noAuth = ['/login'];

  //     // check if current location matches route
  //     var routeClean = function (route) {
  //       return _.find(noAuth,
  //         function (noAuthRoute) {
  //           return _.str.startsWith(route, noAuthRoute);
  //         });
  //     };

  //   $rootscope.$on('$routeChangeStart', function (event, next, current) {
  //     if (!routeClean($location.url()) && !AuthenticationService.isLoggedIn()) {
  //       $location.path('/login');
  //     }
  //   })
  // })
