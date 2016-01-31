import angular from 'angular';
import routes from './routes';
import * as controllers from './controllers';
import * as services from './services';
import './styles/style.scss';

angular.module('shoppingCart', [require('angular-ui-router')]);
Object.keys(services).forEach((key) => {
  services[key]();
});
Object.keys(controllers).forEach((key) => {
  controllers[key]();
});
routes();
