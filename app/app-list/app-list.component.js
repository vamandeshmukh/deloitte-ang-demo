'use strict';

angular.
  module('appList').
  component('appList', {
    templateUrl: 'app-list/app-list.template.html',
    controller: function AppListController() {
      this.apps = [
        {
          appName: 'WhatsApp',
          appVersion: '10.5'
        }, {
          appName: 'Instagram',
          appVersion: '22.31'
        }, {
          appName: 'Telegram',
          appVersion: '20.6'
        }
      ];
    }
  });


