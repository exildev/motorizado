// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    cordova.plugins.backgroundMode.setDefaults({ 
      title:  'Express del Norte',
      text:   'APP para motorizado'
    });

      // Enable background mode
    cordova.plugins.backgroundMode.enable();

    /*setInterval(function(){
      var posOptions = {timeout: 5000, enableHighAccuracy: true};
      console.log('navigator', navigator);
      navigator.geolocation.getCurrentPosition(function (position) {
          var lat  = position.coords.latitude;
          var lng = position.coords.longitude;
          console.log({'lat': lat, 'lng': lng});
        }, function(err) {
          console.log(err);
        }, posOptions);
    },2000);*/
    
  });
})

.factory('Camera', function($q) {

   return {
      getPicture: function(options) {
         var q = $q.defer();

         navigator.camera.getPicture(function(result) {
            q.resolve(result);
         }, function(err) {
            q.reject(err);
         }, options);

         return q.promise;
      }
   }

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('app.entregas', {
      url: '/entregas',
      views: {
        'menuContent': {
          templateUrl: 'templates/entregas.html',
          controller: 'EntregaCtrl'
        }
      }
    })
    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
