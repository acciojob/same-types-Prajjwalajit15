function isSameType(v1, v2) {
  // Check if both values are NaN
  if (isNaN(v1) && isNaN(v2)) {
    return true;
  }

  // Check if the types are the same and the values are equal
  if (typeof v1 === typeof v2 && v1 === v2) {
    return true;
  }

  return false;
}

// Example usage
let value1 = prompt("Enter Value 1:");
let value2 = prompt("Enter Value 2:");
alert(isSameType(value1, value2));

