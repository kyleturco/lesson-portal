angular
  .module('lessonPortal')

  .controller('lessonController',
    function ($scope, $http, $location, $routeParams) {

      var main = this;

      console.log("lesson controller is alive and kicking");

      var studentID = $routeParams.studentID;
      console.log(studentID);

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
            // main.loadLessons();
            // $scope.$apply();
          })
      }

      // main.loadLessons = function () {
      //   $http
      //     .get('/api/lessons')
      //     .success(function (data) {
      //       main.lessons = data;
      //     })
      // }

      // main.loadLessons();
  });

