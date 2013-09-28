describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  // it("should have methods named 'insert' and 'retrieve", function() {
  //   expect(hashTable.insert).toEqual(jasmine.any(Function));
  //   expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  // });

  // it("should handle hash function collisions", function(){
  //   // force the hash function to return 0
  //   spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
  //   var v1 = 'val1', v2 = 'val2';
  //   hashTable.insert(v1, v1);
  //   hashTable.insert(v2, v2);
  //   expect(hashTable.retrieve(v1)).toEqual(v1);
  //   expect(hashTable.retrieve(v2)).toEqual(v2);
  // });

  // it("should handle removing items from hashTable", function(){
  //   // force the hash function to return 0
  //   spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
  //   var v1 = 'val1', v2 = 'val2';
  //   hashTable.insert(v1, v1);
  //   expect(hashTable.retrieve(v1)).toEqual('val1');
  //   hashTable.remove(v1);
  //   expect(hashTable.retrieve(v1)).toEqual(undefined);
  // });

  it("should change the length of storage", function(){
    //spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    hashTable.insert("a", 1);
    hashTable.insert("b", 2);
    hashTable.insert("c", 3);
    hashTable.insert("d", 4);
    expect(hashTable._storage.length>8).toEqual(false);
    hashTable.insert("e", 5);
    hashTable.insert("f", 6);
    hashTable.insert("g", 7);
    hashTable.insert("h", 8);
    hashTable.insert("i", 9);
    expect(hashTable._storage.length>8).toEqual(true);
  });
});