function isSameType(v1, v2) {
	let a = typeof v1 ;
	let b = typeof v2 ;
	
  if (a===b) {
  	return true;
  }
	return false;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
