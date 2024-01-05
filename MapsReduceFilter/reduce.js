const arr = [5,10,15,20,18 ];
function findsum(arr)
{
    let sum =0;
    for(let i=0 ; i<arr.length ; i++){
        sum = sum + arr[i]; 
    }
    return sum;
}
console.log(findsum);

const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0)
console.log(output);