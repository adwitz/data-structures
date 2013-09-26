var makeStack = function() {
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.count = 0; // Hint: set an initial value here
  // Implement the methods below

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};
stackMethods.pop = function(){
  this.count && this.count--;
  var popVal = this.storage[this.count];
  return popVal;
};
stackMethods.size = function(){
  return this.count;
};