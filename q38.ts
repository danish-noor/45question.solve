//Q38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city:string ="karachi",country:string ="Pakistan"){//this is parameter.
    console.log(`The name of city ${city} is in ${country}.`);
    

}
describe_city()//this is argument print by default
describe_city("islamabad")//this argument print by city name and country name by default
describe_city("Washington, D.C.","United States")//this argument print by self writen
