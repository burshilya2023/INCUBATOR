//!80%
function phoneticLookup(val) {
    let result = "";
  
    // Convert the switch statement into an object
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  
    // Use the object to look up val
    result = lookup[val];
  
    return result;
  }
  
  phoneticLookup("charlie");
  