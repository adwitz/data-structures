var Queue = function() {

  // Use an object with numeric keys to store values
  this.storage = {};
  this.count = 0;
  this.deqCount = 0;
  // Hint: set an initial value here
  
  // Implement the methods below
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count + this.deqCount] = value;
  this.count++;
};
Queue.prototype.dequeue = function(){
  this.count && this.count--;
  this.deqCount++;
  return this.storage[this.deqCount - 1];
};
Queue.prototype.size = function(){
  return this.count;
};