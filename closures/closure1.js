// closure is a function bind together along with its lexcal scope
 function x(){
    var a = 6;
    return function y(){
       console.log(a);
    }
    a = 100;
    
 }
 var z = x();
 console.log(z);

 z();


 //output is 100
 // because closure takes the reference or a
 //address of the variable not its value
 // so whatever is changed in that particular
 //address will be printed
 