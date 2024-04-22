//Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName1 = "dAnIsH";
console.log("print in LowerCase:" + personName1.toLowerCase());
console.log("print in UpperCase:" + personName1.toUpperCase());
console.log("print in TitleCase:" + personName1.charAt(0).toUpperCase() + personName1.slice(1).toLowerCase());
