var Stack = function() {

  // Use an object with numeric keys to store values
  this.storage = {};
  this.count = 0; // Hint: set an initial value here
  // Implement the methods below
};

Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};
Stack.prototype.pop = function(){
  this.count && this.count--;
  var popVal = this.storage[this.count];
  return popVal;
};
Stack.prototype.size = function(){
  return this.count;
};