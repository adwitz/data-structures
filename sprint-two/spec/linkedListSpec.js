describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should addToTail", function(){
    linkedList.addToTail(7);
    expect(linkedList.tail.value).toEqual(7);
  });

  it("should be able to add two values to tail", function(){
    linkedList.addToTail(9);
    linkedList.addToTail(10);
    expect(linkedList.tail.value).toEqual(10);
  });

  it("should removeHead", function(){
    linkedList.addToTail(2);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual(5);
  });

  it("should tell whether the list contains a value", function(){
    linkedList.addToTail(6);
    expect(linkedList.contains(6)).toEqual(true);
  });

  it("should tell whether the list does not contain a value", function(){
    linkedList.addToTail(5);
    expect(linkedList.contains(6)).toEqual(false);
  });

  it("should tell whether the list contains a value after removing head", function(){
    linkedList.addToTail(6);
    linkedList.addToTail(19);
    linkedList.removeHead();
    expect(linkedList.contains(6)).toEqual(false);
  });

  it("should tell whether the list contains a value after doing a lot of stuff", function(){
    linkedList.addToTail(6);
    linkedList.addToTail(19);
    linkedList.removeHead();
    linkedList.addToTail(7);
    linkedList.addToTail(11);
    linkedList.addToTail(14);
    linkedList.removeHead();
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual(11);
    //expect(linkedList.contains(7)).toEqual(false);
  });

  it("should add to head", function(){
    linkedList.addToTail(14);
    linkedList.addToHead(100);
    expect(linkedList.head.value).toEqual(100);
  });


  it("should remove from tail", function(){
    linkedList.addToTail(11);
    linkedList.addToTail(14);
    linkedList.removeTail();
    expect(linkedList.tail.value).toEqual(11);
  });

  it("should tell whether the list contains a value after doing a lot of stuff", function(){
    linkedList.addToTail(6);
    linkedList.addToTail(19);
    linkedList.addToHead(25);
    linkedList.removeHead();
    linkedList.addToHead(8);
    linkedList.addToTail(7);
    linkedList.removeTail();
    linkedList.addToTail(11);
    linkedList.addToTail(14);
    linkedList.removeTail();
    linkedList.removeHead();
    linkedList.removeHead();
    expect(linkedList.contains(7)).toEqual(false);
    expect(linkedList.contains(11)).toEqual(true);
  });
  // add more tests here to test the functionality of linkedList
});