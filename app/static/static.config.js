angular
  .module('lessonPortal')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/teacher-home.html',
      })
      // .when('/web', {
      //   templateUrl: 'assets/pages/web.html'
      // })
      // .when('/art', {
      //   templateUrl: 'assets/pages/illustration.html',
      //   controller: 'artCtrl',
      //   controllerAs: 'art'
      // })
      // .when('/music', {
      //   templateUrl: 'assets/pages/music.html'
      // })
      // .when('/contact', {
      //   templateUrl: 'assets/pages/contact.html'
      // })

      .otherwise({
        templateUrl: 'assets/static/404.html'
      });
  })
