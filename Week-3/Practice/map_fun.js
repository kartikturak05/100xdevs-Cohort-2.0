
console.log("Map Function ")

const input = [1,3,5,7];
console.log(input);

function transform(num){
    return num*2;
}

const ans = input.map(transform);

console.log(ans);


const ans2 = input.map(function(i){
    return i*2;
});

console.log(ans2);
