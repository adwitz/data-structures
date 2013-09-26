var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var deqCount = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[size+deqCount]=value;
    size++;
  };

  instance.dequeue = function(){
    size && size--;
    deqCount++;
    return storage[deqCount-1];
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
