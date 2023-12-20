function isAnagram (str1,str2){
    const word1 = str1.split('').sort().join('').replace(/"/g, '').toLowerCase()
    const word2 = str2.split('').sort().join('').replace(/"/g, '').toLowerCase()

return (word1 === word2)


}
console.log(isAnagram('hello','elloh'))
console.log (isAnagram('Thomas Edison', 'notes said "Ohm"'))