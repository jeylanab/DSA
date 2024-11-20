const foo = (array) => {
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str += array[i];
    }
    console.log(str);
    if (array.length <= 1) return;
    
    const midIndex = Math.floor(array.length / 2)
    const left = array.slice(0, midIndex);
    const right = array.slice(midIndex);
    foo(left);
    foo(right);
}

// this function has a time complexity of o(nlog(n))

console.log(foo(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']))
// foo(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
