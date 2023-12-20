function isPangram (str){
    const lowerCaseStr = str.toLowerCase()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'


    for (let char of alphabet){
        if (lowerCaseStr.indexOf(char)=== -1){
            return false;

        }
        else {
            return true;
        }
    }

}

const example = "The quick brown fox jumps over the lazy dog";
const result =  isPangram(example)
console.log(result)