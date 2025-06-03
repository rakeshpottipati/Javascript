//Comparision op

console.log(2 == 2);// true

console.log(1 ==2);//false

let name = "ntr"
console.log(name == "ntr");
console.log(name != "ntr");
console.log(name > "ntr");
console.log(name < "ntr");
console.log(name >= "ntr");
console.log(name <= "ntr");

//===
//type coercison

console.log(1 - "1");
console.log(1 === 1);
console.log(1 === "1");

let costmerName = "rahul"
if(costmerName == "rahul"){
    console.log("rakesh");

}
else{
    console.log("no Name")
}

//-------------------------------------------------------
//logical op
//AND oprator

// let empID = 123;
// let emName = "rakesh";

// console.log(empID == 1 && emName == "rakesh" );
// console.log(empID == 1 && emName == "rmz" );
// console.log(empID == 1 && emName == "srh" );
// console.log(empID == 1 && emName == "rcb" );

// if(empID == 1 && emName == "rakesh"){
//     console.log("empID is 123 and empName is rakesh");
// }
// else{
//     console.log("no employe found");
// }
//-------------------------------------------------------------------------

//OR operator

let empID = 123;
let emName = "rakesh";

console.log(empID == 1 || emName == "rakesh" );
console.log(empID == 1 || emName == "rmz" );
console.log(empID == 1 || emName == "srh" );
console.log(empID == 1 || emName == "rcb" );

if(empID == 1 || emName == "rakesh"){
    console.log("empID is 123 and empName is rakesh");
}
else{
    console.log("no employe found");
}