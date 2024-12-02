// recursive function with log(n) complexity

const pikachu = (n) => {
    
    if (n <= 1) {
        return;
    }
    console.log(n);
    pikachu( n / 2);
 
}
// this function has time complexity of O(log(n));
// this function has space complexity of O(log(n));
console.log(pikachu(100));
console.log("i came back after long time")
