//Q18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placesToVisit: string[] = ["turkey","canada","london","japan","rome"];

// Print in original order.
console.log("orignal order:", placesToVisit);

//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabatical order:",placesToVisit.slice().sort());


//array is still in its original order by printing it.
console.log("orignal order:", placesToVisit);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order ",placesToVisit.slice().sort().reverse());

//array is still in its original order by printing it again.
console.log("orignal order:", placesToVisit);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse order change");
placesToVisit.reverse();
console.log(placesToVisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("orignal order:", placesToVisit);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log("Alphabatical order:",placesToVisit.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.reverse();
console.log("reverse alphabetical order:", placesToVisit);










