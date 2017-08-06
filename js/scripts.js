var a = prompt('Enter the first figure');
var b = prompt('Enter the second figure');
value = (a * a) + (2 * a * b) - (b * b);
alert('The result is: ' + value);
console.log('The result is: ' + value);

if (value > 0) {
	alert('The result is positive !')
	console.log('The result is positive!');
} else if (value < 0) {
	alert('The result is negative !');
	console.log('The result is negative !');
} else {
	alert('The result is 0');
	console.log('The result 0');
}
