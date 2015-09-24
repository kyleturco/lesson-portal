angular
  .module('lessonPortal')

  .controller('loginController',
    function ($scope, $location, $http, $rootScope) {

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
            $rootScope.auth = data;
            console.log($rootScope.auth);
            $location.path('/')
          })
          .error(function (data) {
            console.log(data);
          })
      }
  });

