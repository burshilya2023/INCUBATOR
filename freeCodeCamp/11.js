// !81%
function checkObj(obj, checkProp) {
    // Check if the object has the specified property
    if (obj.hasOwnProperty(checkProp)) {
      // If found, return the property's value
      return obj[checkProp];
    } else {
      // If not found, return "Not Found"
      return "Not Found";
    }
  }
  
  // Example usage
  checkObj({ top: 'hat', bottom: 'pants' }, 'top'); // Returns 'hat'
  checkObj({ top: 'hat', bottom: 'pants' }, 'middle'); // Returns 'Not Found'
  