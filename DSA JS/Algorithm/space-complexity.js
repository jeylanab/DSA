/* is to calculate the additional space the our space used to 
compute the program to the additional of the assigned or input
*/


// recursion function
const rec = (num) => {
  
    if (num == 0) return 0;

    return num + rec(num - 1);
}

console.log(rec(2));

// example two of O(1)

function foo(n) {
    
    let result = 0;
    for (let i = 0; i < 5; i++){
        result += n;
    }
    return result;    

}

console.log(foo(5));
