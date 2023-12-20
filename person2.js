class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const reverseStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reverseStr;
}

function checkPalindromeNames(personArray) {
    return personArray.map(person => ({
        [person.name]: isPalindrome(person.name)
    }));
}

const john = new Person("John", 25, "123 Main St");
const anna = new Person("Anna", 30, "456 Oak St");
const rocky = new Person("Rocky", 22, "789 Pine St");
const aviva = new Person("Aviva", 28, "101 Elm St");

const personArray = [john, anna, rocky, aviva];

personArray.sort((a, b) => b.age - a.age);

const palindromeResult = checkPalindromeNames(personArray);
console.log(palindromeResult);
