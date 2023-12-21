
// function toLowerCase(char) {
//   return char.toLowerCase();
// }


// function wordToLowerCase(word) {
//   return word.split('').map(toLowerCase).join('');
// }

// function arrayToLowerCase(arr) {
//   return arr.map(wordToLowerCase);
// }

// let inputArray = ["MA", "SA", "I", "SCH", "OOL"];

// let outputArray = arrayToLowerCase(inputArray);
// console.log(outputArray); 




function toLowerCaseChar(array){
let newArray=new Array()
for(let i=0; i<array.length; i++){
newArray.push(array[i].toLowerCase())
}
console.log(newArray)
}

let a=["MA", "SA", "I", "SCH", "OOL"];
toLowerCaseChar(a)

