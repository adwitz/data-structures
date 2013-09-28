var makeBinarySearchTree = function(value){
  var newBSTree = {};
  newBSTree.left = null;
  newBSTree.right = null;
  newBSTree.value = value;
  extend(bsTreeMethods, newBSTree);
  return newBSTree;
};

var extend = function(from, to){
  for(var key in from){
    to[key] = from[key];
  }
};

var bsTreeMethods = {};

bsTreeMethods.insert = function(value){
  var newTree = makeBinarySearchTree(value);
  var firstNode = this;
  var placement = function(tree, compareNode) {
    if (tree.value > firstNode.value) {
      if (firstNode.right) {
        placement(tree, firstNode.right);
      } else{
        firstNode.right = tree;
      }
    } else{
      if (firstNode.left) {
        placement(tree, firstNode.left);
      } else{
        firstNode.left = tree;
      }
    }
  };
  placement(newTree, firstNode);
};

bsTreeMethods.contains = function(value, result){
  result = result || false;
  if (this.value === value){
    return true;
  }

  if (value > this.value && this.right) {
    result = result || this.right.contains(value, result);
  } else if (this.left) {
    result = result || this.left.contains(value, result);
  }
  return result;

};

bsTreeMethods.depthFirstLog = function(callBack){

};