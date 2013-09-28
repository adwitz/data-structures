var HashTable = function(){
  this._limit = 8;
  this._size = 0;

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
  var bucket = this._storage.get(i) || [];
  for (var j = 0; j< bucket.length; j++){
    if (bucket[j][0]===k){
      bucket[j][1]=v;
      return;
    }
  }
  bucket.push([k,v]);
  this._storage.set(i, bucket);
  this._size++;
  if(this._size > this._limit * 0.75){
    this.resize( 2 * this._limit);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k){
      return bucket[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket){
    for (var j=0; j<bucket.length; j++){
      if(bucket[j][0] === k){
        bucket.splice(j,1);
      }
    }
  }
  this._size--;
  if (this._size < this._limit * 0.25){
    this.resize(this._limit * 0.5);
  }
};

HashTable.prototype.resize = function(newSize){
  var oldStorage = this._storage;
  var hashTbl = this;
  this._storage = makeLimitedArray(newSize);
  oldStorage.each(function(bucket){
    if (bucket){
      for (var i = 0; i < bucket.length; i++){
        console.log(i);
        hashTbl.insert(bucket[i][0], bucket[i][1]);
      }
    }
  });
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
