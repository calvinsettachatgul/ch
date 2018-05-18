describe("Hello", function() {
  var hello;

  beforeEach(function() {
    hello = new Hello;
  });

  describe("#hello", function() {
    it('should return hello world', function(){
      expect(hello.hello()).toEqual("Hello");
    });

  });

});