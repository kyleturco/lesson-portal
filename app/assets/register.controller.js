angular
  .module('lessonPortal')

  .controller('registerController',
    function ($scope, $http, $location) {

      console.log("register controller is locked and loaded")

      var main = this;

      main.info = {
        username: "",
        password: "",
        isTeacher: ""
      }

      main.register = function () {
        console.log('booom!')
        $http
          .post('/users/register', main.info)
          .success(function () {
            $location.path('/');
          })
          console.log(main.info);
      }
  });
