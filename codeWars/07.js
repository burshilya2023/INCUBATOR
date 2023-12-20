function queueTime(customers, n) {
    // Create an array to represent the state of each checkout till
    const tills = Array(n).fill(0);
  
    // Iterate through the customers and assign them to the next available till
    for (const time of customers) {
      // Find the till with the minimum time and update it
      const nextTill = tills.indexOf(Math.min(...tills));
      tills[nextTill] += time;
    }
  
    // Return the maximum time among all tills
    return Math.max(...tills);
  }
  
  // Examples
  console.log(queueTime([5, 3, 4], 1)); // should return 12
  console.log(queueTime([10, 2, 3, 3], 2)); // should return 10
  console.log(queueTime([2, 3, 10], 2)); // should return 12
  