angular
  .module('lessonPortal')

  .controller('registerController',
    function ($scope, $http, $location) {

      var main = this;

      main.info = {
        username: "",
        password: "",
        isTeacher: ""
      }

      main.register = function () {
        $http
          .post('/users/register', main.info)
          .success(function () {
            $location.path('/');
          })
      }
  });
