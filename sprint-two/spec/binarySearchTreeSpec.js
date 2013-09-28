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

  it("should return false if value does not exist", function(){
    binarySearchTree.insert(88);
    binarySearchTree.insert(99);
    binarySearchTree.insert(101);
    expect(binarySearchTree.contains(101)).toEqual(true);
  });

  it("should change parent value to product of parent and children", function(){
    binarySearchTree.insert(88);
    binarySearchTree.insert(99);
    binarySearchTree.insert(101);
    binarySearchTree.insert(98);
    var doub = function(){
      if (this.left){
        this.value = this.value * this.left.value;
      }
      if (this.right){
        this.value = this.value * this.right.value;
      }
    };
    binarySearchTree.depthFirstLog(doub);
    expect(binarySearchTree.contains(99 * 101 * 98)).toEqual(true);
  });
  // add more tests here to test the functionality of binarySearchTree
});

