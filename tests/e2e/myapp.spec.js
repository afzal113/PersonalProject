describe('my app', function () {
  xit('should define name', function () {
    browser.get('index.html');
    var header = element(by.id('heading'));
    var message = element(by.binding('mc.name'));
    expect(header.getText()).toEqual('hello world!');
    expect(message.getText()).toEqual('hello world!');
  });
});
