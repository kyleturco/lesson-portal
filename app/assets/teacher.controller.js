angular
  .module('lessonPortal')
  .controller('teacherCtrl', function ($scope, $http) {

    // var main = this;

    $scope.logout = function() {
      localStorage.clear();
    };

    // $http.get('/teacher-home').success(function(response) {
    //   console.log("I got the data I requested");
    //   $scope.students = response;
    // });

  })
