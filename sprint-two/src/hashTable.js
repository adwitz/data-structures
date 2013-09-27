var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  //given i, we can find storage[index], aka bucket, if array bucket doesn't exist
  // pass empty bucket
  var bucket;
  if (this._storage.get(i)) {
    bucket = this._storage.get(i);
  } else {
    bucket = [];
  }
  bucket.push([k,v]);
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].each(function(value, index, storage){
    if (value[0] === k){
      return value[1];
    }
  });
  return this._storage.get(i);
};

HashTable.prototype.remove = function(){
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
