// !Tribonacci Sequence 6kyu
function tribonacci(signature, n) {
    // Handle edge case when n is 0
    if (n === 0) {
      return [];
    }
  
    // Initialize the result array with the signature
    const result = signature.slice();
  
    // Generate the Tribonacci sequence
    for (let i = 3; i < n; i++) {
      const nextElement = result[i - 1] + result[i - 2] + result[i - 3];
      result.push(nextElement);
    }
  
    // Return the first n elements
    return result.slice(0, n);
  }
  
  // Example usage
  console.log(tribonacci([1, 1, 1], 10)); // Returns [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
  console.log(tribonacci([0, 0, 1], 10)); // Returns [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
  