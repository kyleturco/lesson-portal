angular
  .module('lessonPortal')

  .controller('teacherController',
    function ($scope, $http, $location, $routeParams) {

      console.log("teacher controller is responding");

      var main = this;

      main.student = {
        name: "",
        lessonDay: "",
        lessonTime: "",
        _id: ""
      }

      main.addStudent = function () {
        $http
          .post('/api/students', main.student)
          .success(function () {
            console.log('success');
            main.student = {};
            main.loadStudents();
            $scope.$apply();
          })
      }

      main.loadStudents = function () {
        $http
          .get('/api/students')
          .success(function (data) {
            main.students = data;
          })
      }

      main.removeStudent = function () {
        $http
          .post('api/students/delete', main.student)
          .success(function () {
            if (error) {
              console.log("Error;", error);
            } else {
              console.log("Student removed");
            }
          });
      }


      // main.getUser = function () {
      //   $http
      //     .get('/login', main.user)
      //     .success(function (data) {
      //       user = user.username;
      //       console.log(user);
      //     })
      // }


      main.loadStudents();

      $scope.studentID = $routeParams.studentID;

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

