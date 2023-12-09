// !Pete, the baker(5kyu)
function cakes(recipe, available) {
    let maxCakes = Infinity;
  
    for (const ingredient in recipe) {
      if (!available.hasOwnProperty(ingredient) || available[ingredient] < recipe[ingredient]) {
        // If the ingredient is missing or the quantity is not enough, return 0
        return 0;
      }
  
      // Calculate the maximum number of cakes based on the available quantity of the ingredient
      const cakesPerIngredient = Math.floor(available[ingredient] / recipe[ingredient]);
      maxCakes = Math.min(maxCakes, cakesPerIngredient);
    }
  
    return maxCakes;
  }
  
  // Examples
  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // Output: 2
  console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // Output: 0
  