angular
  .module('lessonPortal')

  .controller('teacherController',
    function ($scope, $http, $location) {

      console.log("teacher controller is responding");

      var main = this;

      main.student = {
        name: "",
        lessonDay: "",
        lessonTime: ""
      }

      main.addStudent = function () {
        console.log("YO YO YO YO");
        $http
          .post('/students', main.student)
          .success(function () {
            console.log('success');
          })
      }

      // main.loadStudents = function () {
      //   $http
      //     .get('api/students')
      //     .success(function (data) {
      //       main.students = data;
      //     })
      // }
  });

