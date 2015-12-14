(function() {
  'use strict';

  angular
    .module('idWebProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('testimonials', {
        url: '/testimonials',
        templateUrl: 'app/testimonials/testimonials.html',
        controller: 'TestimonialsController',
        controllerAs: 'vm'
      })
      .state('capabilities', {
        url: '/capabilities',
        templateUrl: 'app/capabilities/capabilities.html',
        controller: 'CapabilitiesController',
        controllerAs: 'vm'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm'
      })
      .state('services', {
        url: '/services',
        templateUrl: 'app/services/services.html',
        controller: 'ServicesController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
