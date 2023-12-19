// !Consecutive strings 6kyu
function longestConsec(strarr, k) {
    const n = strarr.length;

    // Check for invalid input conditions
    if (n === 0 || k > n || k <= 0) {
        return "";
    }

    let longestString = "";

    for (let i = 0; i <= n - k; i++) {
        const currentString = strarr.slice(i, i + k).join('');
        
        if (currentString.length > longestString.length) {
            longestString = currentString;
        }
    }

    return longestString;
}

// Example usage:
const strarr1 = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
console.log(longestConsec(strarr1, 2)); // Output: "folingtrashy"

const strarr2 = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
console.log(longestConsec(strarr2, 2)); // Output: "abigailtheta"
