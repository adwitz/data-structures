describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should make new tree", function(){
    tree.addChild(9);
    expect(tree.children[0].value).toEqual(9);
  });

  it("should find a node that contains a given value", function(){
    tree.addChild(9);
    tree.children[0].addChild(12);
    expect(tree.contains(12)).toEqual(true);
  });

  it("should not find a value that doesn't exist", function(){
    tree.addChild(9);
    tree.addChild(10);
    tree.children[0].addChild(12);
    tree.children[0].addChild(13);
    tree.children[1].addChild(14);
    tree.children[1].children[0].addChild(100);
    expect(tree.contains(100)).toEqual(true);
    //expect(tree.children[1].children[0].children[0].value).toEqual(100);
  });

  it("should correctly find a parent node", function(){
    tree.addChild(9);
    tree.children[0].addChild(10);
    expect(tree.children[0].children[0].parent.value).toEqual(9);
    //expect(tree.children[1].children[0].children[0].value).toEqual(100);
  });

  it("should correctly abandon their child", function(){
    tree.addChild(9);
    tree.children[0].addChild(10);
    expect(tree.children[0].children[0].parent.value).toEqual(9);
    var child = tree.children[0].children[0];
    tree.children[0].children[0].removeFromParent();
    expect(child.parent).toEqual(null);
    expect(tree.contains(10)).toEqual(false);
  });

  // Add more tests here to test the functionality of tree.
});