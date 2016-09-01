describe('FeaturesController', function () {
  'use strict';
  var featureFactory, scope, successPromise, $rootScope, returnObj = {
      body: {
        dimensions: '153.5 x 73.9 x 7.9 mm (6.04 x 2.91 x 0.31 in)',
        weight: '143g'
    }};
  beforeEach(module('app.features'));
  beforeEach(inject(function ($controller, _$rootScope_, _featureFactory_, $q) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    var successPromise = $q.defer();
    successPromise.resolve(returnObj);
    featureFactory = _featureFactory_;
    spyOn(featureFactory, 'loadPhones').and.returnValue(successPromise.promise);
    $controller('FeaturesController as fc', {
      $scope: scope,
      featureFactory: featureFactory
    });
  }));
  describe('Initialization', function () {
    it('should call load phones', function () {
      expect(featureFactory.loadPhones).toHaveBeenCalled();
    });
    it('should set features when loadPhones is called', function () {
      $rootScope.$digest();
      expect(scope.fc.features).toEqual(returnObj);
    });
  });
});
