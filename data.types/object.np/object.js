//obeject


let costomerDetails = {
    "name" : "rakesh",
    "Age"  :  23,
    "AadharNo" : "0123-2456-45XX"
}

console.log(costomerDetails);
console.log(costomerDetails.AadharNo);
console.log(costomerDetails.name);
console.log(costomerDetails.Age);


let authorDetails ={
    Name :"Rakesh",                 // Author's name,
    birthYear : 2002,               //year of birth
    bookName : "naa savvu nenu sasatha niku endhuku",  //title of the book
    CharacterNames : ["Ravan","Granger","Ran"],
    CharacterDetails : {
       CharacterName: "Ravan", 
       role : "Hero"
   }
}


// console.log(authorDetails.Name);
// console.log(authorDetails.birthYear);
// console.log(authorDetails.bookName);


console.log(authorDetails["Name"]);
console.log(authorDetails["birthYear"]);
console.log(authorDetails["bookName"]);

//console.log(authorDetails["characterNames"]);

// console.log(authorDetails["characterNames"][0]);


// console.log(authorDetails["characterDetails"]);
// console.log(authorDetails["characterDetails"].CharacterName);
// console.log(authorDetails["characterDetails"].role);


//arry nof the object
//[] {}

let cars = [
    {
        carName :"Honda",
        marketLaunchDate :"1954-04-12"
    },
    {
        carName : "Bmw",
        marketLaunchDate : "1899-09-10"
    },
    {
        carName : "tesla",
        marketLaunchDate : "1873-03-19",
    }
];

console.log(cars[0].carName);
console.log(cars[0].marketLaunchDate)