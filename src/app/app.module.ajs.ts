// #docregion
import * as angular from 'angular';
import 'angular-route';
import 'angular-animate';
import 'angular-resource';

import 'jquery';
import 'lodash';
import './core/core.module';
import './core/phone/phone.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.module';
import { $locationShim } from '@angular/common/upgrade';
import { downgradeInjectable } from '@angular/upgrade/static';

const MODULE_NAME = 'phonecatApp';

// Define the `phonecatApp` AngularJS module
angular.module(MODULE_NAME, [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
])
.config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.
      when('/phones', {
        template: '<phone-list></phone-list>'
      }).
      when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
      }).
      otherwise('/phones');
  }]
)
.factory('$location', downgradeInjectable($locationShim));


export default MODULE_NAME;