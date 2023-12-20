function decodeString(str) {
    let multiply = [];
    let tempMult = '';
    let repeatStr = [];
    let solution = '';
  
    for (let char of str) {
      if (!isNaN(char)) {
        tempMult += char;
        console.log(tempMult);
      } else if (char === '[') {
        multiply.push(Number(tempMult));
        tempMult = '';
        repeatStr.push(solution);
        solution = '';
    console.log(solution);
      } else if (char === ']') {
        let repeatTimes = multiply.pop();
        solution = repeatStr.pop() + solution.repeat(repeatTimes);
        console.log(solution);
      } else {
        solution += char;
      }
    }
  
    return solution;
  }
  
  console.log(decodeString('1[a2[asd]12[k]]'));

  //'1[a2[asd]12[k]]'