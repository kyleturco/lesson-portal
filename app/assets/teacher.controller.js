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
        $http
          .post('/api/students', main.student)
          .success(function () {
            console.log('success');
          })
      }

      main.loadStudents = function () {
        console.log("does this make this go?");
        $http
          .get('/api/students')
          .success(function (data) {
            main.students = data;
          })
      }

      main.loadStudents();

  });

