//Длинное Слово

function findLongestWord(words) {
    let longestWord = ""

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord
}

console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

//Нахождение суммы уникальных чисел в массиве.

function sumUniqueNumbers (num) {
  let unNums = {};
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    if (unNums[num[i]]) {
        unNums[num[i]] += 1
    } else {
        unNums[num[i]] = 1
    }
  }

  for (const number in unNums) {
    if (unNums[number] === 1) {
        sum += Number(number);
    }
  }
  return sum
}

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6

//Имеет ли свойство?

function hasProperty(object, property) {
    return object.hasOwnProperty(property);
}

console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true


//Нахождение свойств

function getPropertyValue(object, property) {
    return object[property];
}

console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell".

