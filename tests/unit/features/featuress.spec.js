describe('Mock Web', function () {
  var $httpBackend,
    featureFactory,
    expectedPhoneResult = loadPhoneResult(),
    $rootScope;
  beforeEach(module('app.features'));
  beforeEach(inject(function (_featureFactory_, _$httpBackend_, _$rootScope_) {
    $httpBackend = _$httpBackend_;
    featureFactory = _featureFactory_;
    $rootScope = _$rootScope_;
    $httpBackend.when('GET', '/phones').respond(expectedPhoneResult);
  }));
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  xit('should return data when promise is resolved', function () {
    var promise = featureFactory.getData();
    var returnData;
    $httpBackend.flush();

    function cb (data) {
      returnData = data;
    }
    promise.then(cb);
    $rootScope.$digest();
    expect(returnData).toEqual();
  });

  it('should call http to get phone data', function () {
    $httpBackend.expectGET('/phones');
    var promise = featureFactory.loadPhones();
    $httpBackend.flush();

    expect(promise.$$state.value).toEqual(expectedPhoneResult);
  });
  it('should return data when promise is resolved', function () {
    var promise = featureFactory.getData();
  });

  function loadPhoneResult () {
    return {
      dimensions: '153.5 x 73.9 x 7.9 mm (6.04 x 2.91 x 0.31 in)',
      weight: '143g'
    };
  }
});
