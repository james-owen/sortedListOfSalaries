assert = require('assert');
sortedListOfSalaries = require('./workerSalaries');

it("Should return a list of sorted Salaries", () => {
  // array of workers for testing
  const workers = [
    [1, "FTE", "George", 75000, "X"],
    [2, "FTE", "Stephan", 50000, "X"],
    [3, "Manager", "Veronica", "2,4"],
    [4, "Manager", "Christopher", "1,5"],
    [5, "FTE", "Mary", 100000, "X"]
  ]

  assert.deepEqual(sortedListOfSalaries(workers), [50000, 75000, 100000, 175000, 225000]);
})