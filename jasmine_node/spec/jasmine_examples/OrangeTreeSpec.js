describe("OrangeTree", function(){
	var OrangeTree = require('../../lib/jasmine_examples/OrangeTree');
	it("has a height", function(){
		let testOrangeTree = new OrangeTree({"height": 1});
		expect(testOrangeTree.height).toBe(1);
	});
});
