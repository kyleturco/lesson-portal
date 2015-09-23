angular
  .module('lessonPortal')

  .controller('lessonController',
    function ($scope, $http, $location, $routeParams) {

      var main = this;

      console.log("lesson controller is alive and kicking");

      main.lesson = {
        lessonDate: "",
        lessonNotes: "",
        lessonEtc: ""
      }

      main.addLesson = function () {
        $http
          .post('/api/lessons', main.lesson)
          .success(function () {
            console.log('success');
            main.lesson = {};
            main.loadLessons();
            $scope.$apply();
          })
      }

      main.loadLessons = function () {
        $http
          .get('/api/lessons')
          .success(function (data) {
            main.lessons = data;
          })
      }

      loadLessons();
  });

