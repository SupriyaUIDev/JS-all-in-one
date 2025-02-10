const name="Supriya"
const empId = 12457
// console.log(name + " " + empId)
console.log(`my name is ${name} and empId is ${empId}`);
console.log("---------------------------------------------------------------")


var fName = "Pooja" //type - string
console.log(fName);
console.log(fName.length)
console.log(fName.toUpperCase())
console.log(fName.charAt(3))
console.log(fName.indexOf("o"));
console.log("---------------------------------------------------------------")

const str1=new String("Supriya");// type - object
console.log(str1[0])
console.log(str1.__proto__)
console.log(str1.length)
console.log(str1.toUpperCase())
console.log(str1.charAt(3))
console.log(str1.indexOf("p"));

console.log(str1.substring(0,4))
// console.log(newString)
console.log(str1.slice(0,-4))
// console.log(newString1)

const string_space="     abc     "
console.log(string_space)
console.log(string_space.trim())

const url="https://google.com/abc%20xyz";
console.log(url);
console.log(url.replace('%20', '-'))
console.log(url.includes('abc'))
console.log(url.includes('84562'))


const split_str="abc-xyz-pqr"
console.log(split_str)
const split_array = (split_str.split('-'))
console.log(split_array)
console.log(split_array[0])