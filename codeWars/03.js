// !Take a Ten Minutes Walk  6kyu

function isValidWalk(walk) {
    // Check if the walk has exactly 10 steps
    if (walk.length !== 10) {
      return false;
    }
  
    // Count the number of steps in each direction
    const counts = {
      'n': 0,
      's': 0,
      'e': 0,
      'w': 0
    };
  
    // Iterate through the walk array and update the counts
    for (const direction of walk) {
      counts[direction]++;
    }
  
    // Check if the number of steps in the opposite directions cancel each other out
    return counts['n'] === counts['s'] && counts['e'] === counts['w'];
  }
  
  // Example usage
  console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // Returns true
  console.log(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'])); // Returns false
  