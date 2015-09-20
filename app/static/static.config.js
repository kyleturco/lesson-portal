angular
  .module('lessonPortal')
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/teacher-home.html',
        controller: 'teacherCtrl',
        controllerAs: 'teacher',
        access: {restricted: true}
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController',
        controllerAs: 'login',
        access: {restricted: false}
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'logoutController',
        controllerAs: 'logout',
        access: {restricted: true}
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'registerController',
        controllerAs: 'register',
        access: {restricted: false}
      })
      .otherwise({
        templateUrl: 'assets/static/404.html'
      });
  })

  .run(function ($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if (next.access.restricted && AuthService.isLoggedIn() === false) {
        $location.path('/login');
        $route.reload();
      }
    });
  });
