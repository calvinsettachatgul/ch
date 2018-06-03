describe('joiner',function(){
	var joiner = require('../../lib/jasmine_examples/MyScript');
	it('will take an array and output a joined string',function(){
	  expect(joiner([1,2,3])).toBe('123');
	});
});
