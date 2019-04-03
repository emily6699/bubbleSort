describe("Bubble Sort", function() {
  it("it handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it("sorts an unsorted array of numbers", function() {
    expect(bubbleSort([3, 1, 5, 2])).toEqual([1, 2, 3, 5]);
  });

  it("sorts and unsorted array of letters", function() {
    expect(bubbleSort(["a", "z", "g", "c"])).toEqual(["a", "c", "g", "z"]);
  });
});
