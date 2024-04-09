#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 22445;

let pinAnswer = await inquirer.prompt(

    [
       {
      

         name: "pin",
         message: ("enter yuor pin:"),
         type: "number"
       
       }
    ] 
 
);

if (pinAnswer.pin === myPin) {
    console.log("corect pin code!!");

    let operationAns = await  inquirer.prompt(
        [
          {
         name:"operation",
         message:"Please select your option.",
         type:"list",
         choices:[" withdraw","cheack balance.", " fast cash"]
             
           }
        ]
      );

    
      if (operationAns.operation === "withdraw") {
           let amountAns = await inquirer.prompt(
            [
              {
                name:"amount",
                message:"Enter your amount",
                type:"number"
                  
              }
            ]
           );

           myBalance -= amountAns.amount;

           console.log(`Your remaining balance is: ${myBalance}`);
           
      }
       else if (operationAns.operation === "cheack balance.") {
        console.log(`Your current balance is: ${myBalance}`);
        
      }
       else if (operationAns.operation === "fast cash"){
        let cashAmountAns = await inquirer.prompt({
          name:"cashAmount",
          message:"Select your amount for withdraw.",
          type: "list",
          choices:["1000","2000","5000","10000"]
        })
        if (cashAmountAns.cashAmount === "1000") {
          console.log(`your remaining balance is: ${myBalance -= 1000}`);
        }
        else if (cashAmountAns.cashAmount === "2000") {
          console.log(`your remaining balance is: ${myBalance -= 2000}`);
        }
        else if (cashAmountAns.cashAmount === "5000") {
          console.log(`your remaining balanlas is: ${myBalance -= 5000}`);
        }
        else if (cashAmountAns.cashAmount === "10000") {
          console.log(`your remaining balanlas is: ${myBalance -= 10000}`);
        }
      }
    } 
        else {
      console.log("Incorrect pin number");
    }
      
    

  
    








  
  
      

    


    





    
    

