//for loop

for(var step = 0; step < 5 ; step = step+1){
    console.log(`${step} time(s) circle is completed`);
}

//-------------------------------------------------------------

var nameList = ["raju" ,"ramesh" ,"rakesh"]
    nameList.length = 4

var nameList =[
    {namePositioninBox:1 ,personName:"raju"},
    {namePositioninBox:2 ,personName:"ramesh"},
    {namePositioninBox:3 ,personName:"rakesh"},
    {namePositioninBox:4 ,personName:"suresh"},
    {namePositioninBox:5 ,personName:"rahul"},
    {namePositioninBox:6 ,personName:"charan"},
    {namePositioninBox:7 ,personName:"tharun"},
    {namePositioninBox:8 ,personName:"rajesh"}
]

for(var namePosition = 0 ; namePosition < 8 ; namePosition = namePosition + 1){
    //console.log(nameList[namePosition]);

   var personName = nameList[namePosition].personName;
if(personName == "raju"){
   console.log("raju in your home");
}

if(personName == "ramesh"){
  console.log("ramesh is in your room");
}
}
//----------------------------------------------------------------------

//for of loop:-

var nameList =[
    {namePositioninBox:1 ,personName:"raju"},
    {namePositioninBox:2 ,personName:"ramesh"},
    {namePositioninBox:3 ,personName:"rakesh"},
    {namePositioninBox:4 ,personName:"suresh"},
    {namePositioninBox:5 ,personName:"rahul"},
    {namePositioninBox:6 ,personName:"charan"},
    {namePositioninBox:7 ,personName:"tharun"},
    {namePositioninBox:8 ,personName:"rajesh"}
]

for(var nameList of nameList)
{
 console.log(`${nameList.personName}`);
 console.log(`${nameList.namePositioninBox}`)

  if(nameList.personName == "rahul") {
console.log(`my frind ${nameList.personName} yadav`);
  }
}
//----------------------------------------------------------------------
//FOR IN LOOP:-
var movieDetails ={
    movieName : "Drogan",
    movieActor : "NTR",
    movieDirector : "prasanthNeel",
    movieproducer : "kalyanRam",
    movieBudget : "500000000",                          
    movieReliseDate : "2026-04-26"
}

    for(var property in movieDetails)
    {
        console.log(`propertyName: ${property}`);
        console.log(`value of property: ${movieDetails[property]}`);

        if(movieDetails[property] == "NTR"){
            console.log(`${movieDetails[property]} is grate dancer in india`);
        }
    }

//---------------------------------------------------------------------------------------

//WHILE LOOP:-
var namePosition = 0;

var nameList =[
    {namePositioninBox:1 ,personName:"raju"},
    {namePositioninBox:2 ,personName:"ramesh"},
    {namePositioninBox:3 ,personName:"rakesh"},
    {namePositioninBox:4 ,personName:"suresh"},
    {namePositioninBox:5 ,personName:"rahul"},
    {namePositioninBox:6 ,personName:"charan"},
    {namePositioninBox:7 ,personName:"tharun"},
    {namePositioninBox:8 ,personName:"rajesh"}
]

while(namePosition < 8){
    
    console.log(`${nameList[namePosition].personName}`);
    console.log(`${nameList[namePosition].namePositioninBox}`);

    if(nameList[namePosition].personName =="rakesh"){
 console.log(`my name is ${nameList[namePosition].personName} yadav`);
    }
    namePosition = namePosition +1;
    
}
//-------------------------------------------------------------------------------------

//DO-WHILE:-

var namePosition = 0;

var nameList =[
    {namePositioninBox:1 ,personName:"raju"},
    {namePositioninBox:2 ,personName:"ramesh"},
    {namePositioninBox:3 ,personName:"rakesh"},
    {namePositioninBox:4 ,personName:"suresh"},
    {namePositioninBox:5 ,personName:"rahul"},
    {namePositioninBox:6 ,personName:"charan"},
    {namePositioninBox:7 ,personName:"tharun"},
    {namePositioninBox:8 ,personName:"rajesh"}
]

do{
    
    console.log(`${nameList[namePosition].personName}`);
    console.log(`${nameList[namePosition].namePositioninBox}`);

    if(nameList[namePosition].personName =="tharun"){
 console.log(`my frind name is ${nameList[namePosition].personName} yadav`);
    }
    namePosition = namePosition +1;
    
}while(namePosition < 8)