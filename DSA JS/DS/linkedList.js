class Node {
    constructor(val) {
        this.val = val;
        this.next = null; 
    }
}
class linkedList {
    constructor() {
        this.head = null;
    }   
    append(val) {
        // add the first value to the linked list if it is empty
        if (this.head === null) {
            this.head = new Node(val)
            return;
        }    
        // store the current value to the curr variable and assign the next pointer    
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        } 
        curr.next = new Node(val)
    } 
    // print the linked list to the console
    
    print(val) { 
        let str = '';
        let curr = this.head;
        while (curr !== null) {
            str += curr.val;
            curr = curr.next;
        }
        console.log(str)
    }
    
    contain(target) {
        let curr = this.head;
        while (curr !== null) {
            if (curr.val == target) {
               return true
            }
            curr = curr.next;
         
        }
        return false;

    }
}

const list = new linkedList();

list.append('a')
list.append('b') 
list.append('c') 
list.append('d') 
list.append('q') 


list.print();

console.log(list.contain('a'));