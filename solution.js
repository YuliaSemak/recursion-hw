// Задача 1. Від 1 до n
function showNumbersUpTo(num) {
  // Exit recursion if number goes below 1
  if (num < 1) return;
  
  // Call recursively with smaller number
  showNumbersUpTo(num - 1);
  
  // Output current number
  process.stdout.write(num + " ");
}

// Задача 2. Від A до B
function printRange(startVal, endVal) {
  process.stdout.write(startVal + " ");
  
  // Stop recursion when start reaches target end value
  if (startVal === endVal) return;
  
  // Decide direction: count up or count down
  if (startVal < endVal) {
    printRange(startVal + 1, endVal);
  } else {
    printRange(startVal - 1, endVal);
  }
}

// Задача 3. Точна степінь двійки
function checkPowerOfTwo(number) {
  // Base case: 2^0 = 1
  if (number === 1) return "YES";
  
  // Invalid values or numbers not divisible by 2
  if (number < 1 || number % 2 !== 0) return "NO";
  
  // Keep dividing by 2
  return checkPowerOfTwo(number / 2);
}

// Задача 4. Сума цифр числа
function calcDigitsSum(num) {
  // Base case: empty number
  if (num === 0) return 0;
  
  // Take last digit and process the remainder recursively
  const lastDigit = num % 10;
  const restOfNumber = Math.floor(num / 10);
  
  return lastDigit + calcDigitsSum(restOfNumber);
}

// Задача 5. Цифри числа справа наліво
function printReversedDigits(num) {
  if (num === 0) return;
  
  // Print current last digit
  process.stdout.write((num % 10) + " ");
  
  // Move to next digit
  printReversedDigits(Math.floor(num / 10));
}

// Задача 6. Цифри числа зліва направо
function printDirectDigits(num) {
  if (num === 0) return;
  
  // Go deep into recursion to reach first digit first
  printDirectDigits(Math.floor(num / 10));
  
  // Print digits on return phase
  process.stdout.write((num % 10) + " ");
}

// Тестування функцій

showNumbersUpTo(5);
console.log("");

printRange(5, 1);
console.log("");

console.log(checkPowerOfTwo(8));
console.log(checkPowerOfTwo(3));

console.log(calcDigitsSum(179));

printReversedDigits(179);
console.log("");

printDirectDigits(179);
console.log("");
