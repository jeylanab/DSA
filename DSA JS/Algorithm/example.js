// the below are function with O(n) complexity

function zoom(n) {
    if (n === 0) {
        console.log('liftoff');
        return;
    }
    console.log(n)
    zoom(n - 1);
    
}
// the above code has time complexity of O(n);

zoom(10);

