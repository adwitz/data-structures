 // Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      newNode.prev = list.tail;
      list.tail = newNode;
    }
  };

  list.addToHead = function(value){
    var newNode = makeNode(value);
    if (!list.head){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  };

  list.removeHead = function(){
    if (list.head) {
      var oldHead = list.head.value;
      list.head = list.head.next;
      list.head.prev = null;
      return oldHead;
    }
  };

  list.removeTail = function(){
    if (list.tail){
      var oldTail = list.tail.value;
      list.tail = list.tail.prev;
      list.tail.next = null;
      return oldTail;
    }
  };

  list.contains = function(value){
    var currentNode = list.head;
    while (currentNode){
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };



  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
