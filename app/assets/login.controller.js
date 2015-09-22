angular
  .module('lessonPortal')

  .controller('loginController',
    function ($scope, $location, AuthService, $http, $rootScope) {

      var main = this;

      console.log("login controller locked & loaded")

      main.info = {
        username: "",
        password: ""
      }

      main.login = function () {
        $http
          .post('/users/login', main.info)
          .success(function (data) {
            // $rootScope.userData = data;
            $location.path('/')
          })
          .error(function (data) {
            console.log(data);
          })
      }
  });

