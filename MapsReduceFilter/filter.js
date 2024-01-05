// it is used to filter out th needed things from an array
const arr = [5,10,15,20,18 ];
function isOdd(x){
    return x%2;
}



const output = arr.filter(isOdd);

console.log(output);
