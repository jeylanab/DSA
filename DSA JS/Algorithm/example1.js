// try the code below
var newArray = [];
const unique = (array) => {
    // loop through the array given
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!newArray.includes(element)) {
          newArray.push(element)
        }     
    }   
    return newArray;
    
}
// the space complexity of this function is - O(1+n) = O(n)
// the time complexity of this function is - O(n*n) = O(n^2)

console.log(unique([3, 4, 5, 3, 4, 5, 4, 6, 7, 8]));



// make the above code more efficient by using a set class
const unique2 = (array) => {
    const uniqueSet = new Set();
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        uniqueSet.add(element); 
    }
    return uniqueSet;
    
}
// the space complexity of this function is - O(1+n) = O(n)
// the time complexity of this function is - O(1+n+1) = O(n)

console.log(unique2([2,4,5,6,5,3,8,6,5,4]))

// A JavaScript Set is a collection of unique values.
// The values can be of any type, primitive values or objects.