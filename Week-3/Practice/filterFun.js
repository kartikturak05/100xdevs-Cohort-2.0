console.log("Filter Function ")

const input = [1,2,3,5,7,4,8,];

function filter_logic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}

const ans = input.filter(filter_logic);

console.log(ans);

const ans2 = input.filter(function filter_logic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
});

console.log(ans2);
