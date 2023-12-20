function getMiddle(word){
    const middleIndex = Math.floor(word.length/2)
    return word.length %2 === 1 ? word.charArt(middleIndex) : word.substring(middleIndex-1,middleIndex+1)
}
const oddword = "guillermo"
const evenword = "ambrogio"

console.log(getMiddle(oddword))
console.log(getMiddle(evenword))