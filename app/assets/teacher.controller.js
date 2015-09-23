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

  });

