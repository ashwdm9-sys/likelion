for (let i=9;i>0;i--){
    console.log("* ".repeat(i));
}

const arr = ["a","bb","ccc","dddd","eeeee"];

arr.reverse();

console.log(arr);

const arr1 = ['mon', 'tues', 'wednes', 'thurs', 'fri', 'satur', 'sun'];
const process1 = arr1.map((item) => item + 'day');
console.log(process1);
const process2 = arr1.filter((item) => item.includes('s'));
console.log(process2);


