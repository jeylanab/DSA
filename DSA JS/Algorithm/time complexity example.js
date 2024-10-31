const sumArray = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++){
        sum = sum + num[i];
    }
    console.log(`total = ${sum}`)
}

let arr = [4, 5, 6]

let startTime = new Date();
sumArray(arr);
let endTime = new Date();

let elapseTime = endTime - startTime;

console.log(elapseTime)

// here the time it takes to run a program is vary each time the program runs 
// then to solve this problem we use big-o notation to describe 
// the efficiency of code without using concrete unit
// the time complexity of the above code is --- O(n) - where n is the number of input to the array