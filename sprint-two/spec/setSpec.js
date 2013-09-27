describe("set", function() {
  var set;

  beforeEach(function() {
    set1 = makeSet();
    set2 = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set1.add).toEqual(jasmine.any(Function));
    expect(set1.contains).toEqual(jasmine.any(Function));
    expect(set1.remove).toEqual(jasmine.any(Function));
  });

  it("should add a value to a set", function(){
    set1.add("hello");
    expect(set1._storage[0]).toEqual("hello");
  });

  it("should remove a value from a set", function(){
    set1.add("hello");
    set1.add("dog");
    set1.remove("hello");
    expect(set1._storage[0]).toEqual("dog");
  });

  it("should not duplicate values", function(){
    set1.add("hello");
    set1.add("hello");
    set1.add("dog");
    expect(set1._storage[1]).toEqual("dog");
  });
  it("should tell us if a value exists in the set", function(){
    set1.add("hello");
    set1.add("dog");
    expect(set1.contains("dog")).toEqual(true);
  });
});