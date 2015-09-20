angular
  .module('lessonPortal')
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/teacher-home.html',
        controller: 'teacherCtrl',
        controllerAs: 'teacher',
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'logoutController',
        controllerAs: 'logout',
      })
      .when('/register', {
        templateUrl: 'views/login.html',
        controller: 'registerController',
        controllerAs: 'register',
      })
      .otherwise({
        templateUrl: 'assets/static/404.html'
      });
  })

  .run(function ($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if (AuthService.isLoggedIn() === false) {
        $location.path('/login');
      }
    });
  });
