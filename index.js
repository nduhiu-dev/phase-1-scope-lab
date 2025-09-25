// Write your solution in this file!
// 1. Declare customerName in global scope
var customerName = "bob";

// 2. Function that uppercases the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that sets a global bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob"; // no var/let/const → creates global
}

// 4. Function that overwrites bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = "someone";

// 6. Function that tries to change the const
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new person"; // will throw an error
}
