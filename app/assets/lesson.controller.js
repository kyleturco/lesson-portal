angular
  .module('lessonPortal')

  .controller('lessonController',
    function ($scope, $http, $location, $routeParams) {

      $scope.studentID = $routeParams.studentID;

      console.log("lesson controller is responding");

      var main = this;

      main.lesson = {
        lessonDate: "",
        lessonNotes: "",
        lessonEtc: ""
      }

      main.addLesson = function () {
        $http
          .post('/api/lessons', main.student)
          .success(function () {
            console.log('success');
            main.student = {};
            main.loadStudents();
            $scope.$apply();
          })
      }

      main.loadLesson = function () {
        $http
          .get('/api/lessons')
          .success(function (data) {
            main.students = data;
          })
      }

      main.removeLesson = function () {
        $http
          .post('api/lessons/delete', main.student)
          .success(function () {
            if (error) {
              console.log("Error;", error);
            } else {
              console.log("Student removed");
            }
          });
      }


      main.getUser = function () {
        $http
          .get('/login', main.user)
          .success(function (data) {
            user = user.username;
            console.log(user);
          })
      }

      main.loadStudents();

  });

