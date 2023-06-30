// Regular Expression

let pattern = 'pw';

let regExOne = new RegExp(pattern);

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag);

let regExThree = /pw/gi

const strToCheck = 'pw is growing at a rapid speed and recently thay are working on pwskills to create skills based pwcontent';

const result = regExThree.test(strToCheck);
console.log(result);


const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult);

const webUrl = "https://pwskills.com/rohit%20tawade"
const usableUrl = webUrl.replace(/%\d0/,'-');  // https://regexr.com  visit this website 

console.log(usableUrl);



