angular
  .module('lessonPortal')
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/teacher-home.html',
        controller: 'teacherController',
        controllerAs: 'teacher'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'logoutController',
        controllerAs: 'logout'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'registerController',
        controllerAs: 'register'
      })
      .when('/:studentID', {
        templateUrl: 'views/lesson-list.html',
        controller: 'teacherController',
        controllerAs: 'teacher'
      })
      .otherwise({
        templateUrl: 'assets/static/404.html'
      });
  })

  // .run(function ($rootScope, $location, $route, AuthService) {
  //   $rootScope.$on('$routeChangeStart', function (event, next, current) {
  //     if (AuthService.isLoggedIn() === false) {
  //       $location.path('/login');
  //       $route.reload();
  //     }
  //   });
  // });
