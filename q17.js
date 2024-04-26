//Q17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ["Asad", "Irfan", "Danish"];
//print message
console.log("unfortunately! The new dinner table won't arrive so We invite only two people for dinner");
guestList.unshift("Jawwad", "Ahmed");
//print message updated list
console.log("updated list of guest", guestList);
//remove guest from the list
while (guestList.length > 2) {
    var removeGuestlist = guestList.pop();
    if (removeGuestlist !== undefined) {
        console.log("Sorry! ".concat(removeGuestlist, " we can't invite you. "));
    }
}
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(function (guest) {
    console.log("Dear! ".concat(guest, " you are still invited for dinner."));
});
//Remove two name from the list
guestList.splice(0, guestList.length);
//print updated empty list
console.log("Updated guest of list:", guestList);
