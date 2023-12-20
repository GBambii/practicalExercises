function plusNumber(num){
    
    const formatedStr = num.toString().split('').map(digit => digit + "+").join('').slice(0,-1);

    return formatedStr;
}

const input = 123456;
const formatedStr = plusNumber(input)
console.log(formatedStr);
