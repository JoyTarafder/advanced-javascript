let bonus = 20

function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    if(result > 8){
        const mood = "happy";
        console.log(mood);
    }
    return result;
}
const output = sum(2, 8);
console.log(output);