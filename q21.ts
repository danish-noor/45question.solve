//Q21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let car:{ company: string; title:string; releaseYear:number }={
      title: "civic",
      company: "honda",
      releaseYear: 2024

};
console.log(`company info: ${car.title} by ${car.company}, released in ${car.releaseYear}.`);
