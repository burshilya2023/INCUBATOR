// !Basic JavaScript 73% complete
let count = 0;

function cc(card) {
  // Assign values based on card type
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      // Do nothing, no change in count
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  // Return the current count and player's decision
  return count > 0 ? count + " Bet" : count + " Hold";
}

// Example usage
cc(2); // 1 Bet
cc(3); // 2 Bet
cc(7); // 2 Bet
cc('K'); // 1 Bet
cc('A'); // 0 Hold
