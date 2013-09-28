describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(50);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should insert a value", function(){
    binarySearchTree.insert(10);
    expect(binarySearchTree.left.value).toEqual(10);
  });

  it("should return true when using contains method", function(){
    binarySearchTree.insert(60);
    expect(binarySearchTree.contains(20)).toEqual(false);
  });
  // add more tests here to test the functionality of binarySearchTree
});

