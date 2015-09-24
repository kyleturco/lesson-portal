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

      $(document).ready(initialize); // this allows the html to fully render before trying to run any js functions

      // initialize is the function that gets run through after html fully renders (called above)
      function initialize() {
        $('btn.btn-primary.main-btn').on('click', clickRegister);
      }

      // jQuery interaction function called by the click event in initialize
      function clickRegister(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#register-box').offset().top
        }, 1000);
        return false;
}

  });
