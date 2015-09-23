angular
  .module('lessonPortal')

  .controller('lessonController',
    function ($scope, $http, $location, $routeParams) {

      var main = this;

      var studentID = {studentID: $routeParams.studentID};

      main.lesson = {
        lessonDate: "",
        lessonNotes: "",
        lessonEtc: "",
        studentID: $routeParams.studentID
      }

      main.addLesson = function () {
        $http
          .post('/api/lessons', main.lesson)
          .success(function () {
            console.log('success');
            main.lesson = {};
            main.loadLessons();
            // $scope.$apply();
          })
      }

      main.loadLessons = function () {
        $http
          .post('/api/lessons/retrieve', studentID)
          .success(function (data) {
            main.lessons = data;
          })
      }

      main.loadLessons();
  });

