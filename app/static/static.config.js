angular
  .module('lessonPortal')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/teacher-home.html',
        controller: 'teacherCtrl',
        controllerAs: 'teacher'
      })
      .otherwise({
        templateUrl: 'assets/static/404.html'
      });
  })
