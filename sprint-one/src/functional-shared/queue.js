var makeQueue = function() {
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.count = 0;
  instance.deqCount = 0;
  // Hint: set an initial value here
  _.extend(instance, queueMethods);
  // Implement the methods below

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.count + this.deqCount] = value;
  this.count++;
};
queueMethods.dequeue = function(){
  this.count && this.count--;
  this.deqCount++;
  return this.storage[this.deqCount - 1];
};
queueMethods.size = function(){
  return this.count;
};