/**
 * Returns a sorted list of salaries for a list of workers
 * @param {Object} workers - All workers
 */
function sortedListOfSalaries(workers) {
  const salaries = [];
  const getSalary = memoSalary();

  for (let i = 0; i < workers.length; i++) {
    salaries.push(getSalary(workers, workers[i]));
  }

  const sorted = salaries.sort((a, b) => a - b);
  return sorted;
}

/**
 * Gets the salary of a given worker
 * @param {Object} workers - All workers
 * @param {Object} worker - The worker being considered
 */
function memoSalary() {
  const cache = {};

  function salaryFunction(workers, worker) {
    let salary;

    if (cache[worker[0]]) {
      return cache[worker[0]];
    }
  
    if (worker[1] === "FTE") {
      salary = worker[3];
    }
    else if (worker[1] === "Contractor") {
      salary = worker[3] * worker[4] * 52;
    }
    else if (worker[1] === "Manager") {
      const employeeIds = worker[3].split(',');
      
      const employeesArray = employeeIds.map((id)=> workers[id - 1]);
  
      salary = employeesArray.reduce((acc, curr) => acc += salaryFunction(workers, curr), 0);
    }
    cache[worker[0]] = salary;
    return salary;
  }

  return salaryFunction;
}


module.exports = sortedListOfSalaries;