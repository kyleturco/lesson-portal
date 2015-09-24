angular
  .module('lessonPortal')

  .controller('teacherController',
    function ($scope, $http, $location, $routeParams, $rootScope) {

      console.log("teacher controller is responding");

      var main = this;

      $scope.studentID = $routeParams.studentID;

      main.student = {
        name: "",
        lessonDay: "",
        lessonTime: "",
        _id: ""
      }

      main.addStudent = function () {
        $http
          .post('/api/students', main.student)
          .success(function (data) {
            console.log('success');
            main.student = {};
            main.loadStudents();
            // $scope.$apply();
          })
      }

      main.loadStudents = function () {
        $http
          .get('/api/students')
          .success(function (data) {
            main.students = data;
          })
      }

      main.loadStudents();
  });

      // main.removeStudent = function () {
      //   $http
      //     .post('api/students/delete', main.student)
      //     .success(function () {
      //       if (error) {
      //         console.log("Error;", error);
      //       } else {
      //         console.log("Student removed");
      //       }
      //     });
      // }

