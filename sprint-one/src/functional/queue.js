var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var queueNum = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    size && size--;
    var deqVal = storage[queueNum];
    delete storage[queueNum];
    queueNum++;
    return deqVal;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
