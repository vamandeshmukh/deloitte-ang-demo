'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module

// setTimeout( () => {}, 2000);
// myApp.controller(arg1, arg2);

let myApp = angular.module('myApp', []);

myApp.controller('MyAppController', function MyAppController($scope) {
  $scope.apps = [
    {
      appName: 'WhatsApp',
      appVersion: '10.5'
    },
    {
      appName: 'Instagram',
      appVersion: '20.6'
    }
  ];
});

phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});
