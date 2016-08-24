describe('FeaturesController', function () {
  var createController, scope;
  beforeEach(module('myApp'));
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('FeaturesController as fc', {
      $scope: scope
    });
  }));
  describe('Defined', function () {
    it('should have name', function () {
      expect(scope.fc.features).toEqual({});
    });
    it('should have body method', function () {
      expect(scope.fc.features.body).toBeDefined(value);
    });
  });
});
