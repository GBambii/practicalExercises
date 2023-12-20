function decodeString (str){
    let mult = []
    let tempMult = ''
    let repeatStr = []
    let solution = ''
    for (let char of str){
        if (!isNaN(char)){
            tempMult += char;
        }
        else if (char === '['){
            mult.push(Number(tempMult))
            tempMult = ''
            repeatStr.push(solution)
            solution = ''
        }
        else if (char === ']'){
            let repeatTimes = mult.pop()
            solution = repeatStr.pop()+ solution.repeat(repeatTimes)
        }
        else{
            solution += char
        }
       
    }
    return solution
}
console.log(decodeString('1[a2[asd]12[k]]'));