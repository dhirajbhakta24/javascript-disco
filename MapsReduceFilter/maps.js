//map function goes to each element and apply the function provided inside it 
const arr = [5,10,15,20,18 ];
const arr2 = [5,10,15,20,18 ];
function double(x){
    return x*2;
}
const output = arr.map(double);

function binary(x){
 return x.tostring(2);
}

const result = arr.map(binary);