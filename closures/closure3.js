// write a code to print 1 after 1sec, 2 after 2sec, 3 after 3sec, 4 after 4sec and 5 after 5 sec

function x(){
    for(var i =1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i=1000);
    }
}
x();

// this will give output 6 after 1sec 2 sec 3sec ...
// because the closure remembers the variable i address 
//so every time the loops run the i will be incremented with 1 
// so after the setTimeout is executed the variable i will have value 6000ms

//the answer to this is just use let , because let has block scope 
//for each loop the i will be a new variable

function x(){
    for(var i =1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i=1000);
    }
}
x();

//shitty interviewer: do it with var
// well we can do it with var using the closure property 
function x(){
    for(var i =1;i<=5;i++){
        function z(x){
        setTimeout(function(){
            console.log(x);
        },i=1000);}
        z(i);
    }
}
x();