(function() {
  'use strict';

  angular
    .module('idWebProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr) {
    var vm = this;

    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.slides = [];
    $scope.slides.push({
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    });
  }
})();
