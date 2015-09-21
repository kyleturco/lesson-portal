angular
  .module('lessonPortal')
  .controller('teacherCtrl',
    function ($scope, $http, $location) {

      var main = this;

      main.student = {
        name: "",
        lessonDay: "",
        lessonTime: ""
      }

      main.addStudent = function () {
        $http
          .post('/api/students', main.student)
          .success(function (data) {
            console.log('success');
            $scope.apply();
          })
      }

      main.loadStudents = function () {
        $http
          .get('api/students')
          .success(function (data) {
            main.students = data;
          })
      }
  });



