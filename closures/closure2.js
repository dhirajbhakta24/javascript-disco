// closure is a function bind together along with its lexcal scope
function z(){
    var b = 900;
     function x(){
        var a = 6;
        function y(){
       console.log(a,b);}
       y();
    }
    x();
    
 }
 z();