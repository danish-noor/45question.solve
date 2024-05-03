//Q38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (city === void 0) { city = "karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("The name of city ".concat(city, " is in ").concat(country, "."));
}
describe_city(); //this is argument print by default
describe_city("islamabad"); //this argument print by city name and country name by default
describe_city("Washington, D.C.", "United States"); //this argument print by self writen
