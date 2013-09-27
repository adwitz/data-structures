var makeTree = function(){
  var newTree = {};

  newTree.value = undefined;
  newTree.children = [];
  extend(treeMethods, newTree);
  return newTree;
};

var extend = function(from, to){
  for (var key in from){
    to[key]=from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree();
  child.value = value;
  this.children.push(child);
};

treeMethods.contains = function(value){
  //var truth = 0;
  if (this.value === value) {
    return true;
  }
  else if (this.children.length) {
    for (var i = 0; i < this.children.length; i++){
      if (i === this.children.length - 1) {
        return this.children[i].contains(value);
      }
      else {
        this.children[i].contains(value);
      }
    }
  }
  return false;
};

