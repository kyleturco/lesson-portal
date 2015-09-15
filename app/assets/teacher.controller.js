angular
  .module('lessonPortal')
  .controller('teacherCtrl', function ($scope, $http) {

    console.log("Update test1")

    var main = this;

    $http.get('/teacher-home').success(function(response) {
      console.log("I got the data I requested");
      $scope.students = response;
    });

  })
