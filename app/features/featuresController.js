(function () {
  'use strict';

  function FeaturesController (featureFactory) {
    var vm = this;

    this.title = 'CellPhones Comparison';
    featureFactory.loadPhones().then(function (features) {
      vm.features = features;
    });
  // getData
  }
  angular.module('app.features')
    .controller('FeaturesController', FeaturesController);
}());
