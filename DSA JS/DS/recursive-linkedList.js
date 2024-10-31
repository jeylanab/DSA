class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class recursiveLinkedList{
    constructor() {
        this.head = null;
    }
    
    append(val) {
        if (this.head === null) {
            this.head = new Node(val);
        }
        
        this._append(val, this.head);
        
    }
    
    _append(val, curr) {
        if (curr.next === null) {
            curr.next = new Node(val);
            return;
        }
        
        this._append(val, curr.next);
    }
    
    print() {
        const output = this._print(this.head)
        console.log(output);
    
    }
    
    _print(curr) {
        
        if (curr == null) {
            return '';
        }
        return curr.val + this._print(curr.next);
    
    }
    // check wether the list contain certain value by using recursive method
    
    contain(target) {
      return this._contain(target, this.head)
    }
    
    _contain(target, curr) {
        if (curr === null) return false;
        if (curr.val === target) return true;
        
        return this._contain(target, curr.next)
    }
    
    
}

const list = new recursiveLinkedList();
list.append('1')
list.append('3')
list.append('4')

list.print();

console.log(list.contain('1'))
console.log(list.contain('3'))
console.log(list.contain('4'))
console.log(list.contain('6'))

