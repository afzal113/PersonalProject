describe('my app', function () {
  beforeEach(function () {
    browser.get('index.html');
  });
  it('should have a dimenstions element', function () {
    var dimen = element(by.id('dimensions'));
    expect(dimen.getText()).toEqual('153.5 x 73.9 x 7.9 mm (6.04 x 2.91 x 0.31 in)');
  });
  it('should have a body weight element', function () {
    var weight = element(by.id('weight'));
    expect(weight.getText()).toEqual('143g');
  });
  it('should define name', function () {
    var title = element(by.id('title'));

    expect(title.getText()).toEqual('CellPhones Comparison');
  });
  it('should have internal memory element', function () {
    var mem = element(by.id('memory'));
    expect(mem.getText()).toEqual('16GB / 64GB / 128 GB');
  });
  it('should have internal camera element', function () {
    var cam = element(by.id('camera'));
    expect(cam.getText()).toEqual('12 MP');
  });
  it('should have platfrom ', function () {
    var plat = element(by.id('platform'));
    expect(plat.getText()).toEqual('iOS 9');
  });
});
