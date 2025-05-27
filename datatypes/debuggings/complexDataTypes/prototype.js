// //function proparty members
// function car (carname , brand){

// }

// console.log(car.name);
// console.log(car.length);


// //prototype

// function car(){
//     console.log("car")
    
//     this.brand = "honda";
//     this.model = "camry";

//     this.color = "blue";
    
//     console.log(this);
// }

//   car.prototype.getcarinfo = function(){
//     //console.log("car brand is honda and model is camry");
//     console.log(`car brand is ${this.brand} and model is ${this.model}`);
//     console.log(this);
//   }

//   car.prototype.getriveinfo = function(){
    //console.log("car brand is honda and model is camry");
//     console.log(`driving the ${this.color} and model is ${this.model}`);
//     console.log(this);
//   }

// let newcar = new car();
// newcar.getcarinfo();
// newcar.getriveinfo();


//using this with function method members

let bankDetails = {
  name : "HDFCBank",
  founder : "Hasmukhbhai parek",
  getbankdetails : function(argument1 , argument2){
    console.log(this.name);
    console.log(this.founder);
    console.log(this);

    console.log(argument1);
    console.log(argument2);

    console.log(`Bank Name : ${this.name} ,Bank founder : ${this.founder}
      EstablishDate ${argument1} , ${argument2}`);
  }
}

let axisBankDetails = {
  name : "axisBank",
  founder :"Amitabh chaudhry",
  logMassage : function(){

  }
   
}
bankDetails.getbankdetails.call(axisBankDetails , "1993" ,"5,377");