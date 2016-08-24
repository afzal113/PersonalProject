(function () {
  'use strict';

  function FeaturesController () {
    this.features = {
      body: {
        dimensions: '153.5 x 73.9 x 7.9 mm (6.04 x 2.91 x 0.31 in)'
      }

    };
  }
  angular.module('myApp', [])
    .controller('FeaturesController', FeaturesController);
}());
