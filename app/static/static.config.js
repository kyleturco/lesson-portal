angular
  .module('lessonPortal')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/teacher', {
        templateUrl: 'views/teacher-home.html',
        controller: 'teacherCtrl',
        controllerAs: 'teacher'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'authController',
        controllerAs: 'auth'
      })
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
