/* Fronts

Defining a node */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


/* Add Front
Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node. */

// class SLL {
//     constructor(value) {
//         this.head = new Node(value);
//     }
//     addFront(value) {
//         var restOfList = this.head;
//         this.head = new Node(value);
//         this.head.next = restOfList;
//         return this
//     }
// }


/* Remove Front
Write a method to remove the head node and return the new list head node. If the list is empty, return null. */

// class SLL {
//     constructor(value) {
//         this.head = new Node(value);
//     }

//     addFront(value) {
//         var restOfList = this.head;
//         this.head = new Node(value);
//         this.head.next = restOfList;
//         return this
//     }

//     removeFront() {
//         if (this.head != null) {
//             this.head = this.head.next;
//             return this
//         } else {
//             return null
//         }
//     }
// }


/* Front
Write a method to return the value (not the node) at the head of the list. If the list is empty, return null. */

class SLL {
    constructor(value) {
        this.head = new Node(value);
    }
    addFront(value) {
        var restOfList = this.head;
        this.head = new Node(value);
        this.head.next = restOfList;
        return this
    }
    removeFront() {
        if (this.head != null) {
            this.head = this.head.next;
            return this
        } else {
            return null
        }
    }
    front(){
        if(this.head !== null){
            return this.head.value
        } else {
            return "This is an empty list"
        }
    }
}

var one_sll = new SLL(1);
//console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9));
//console.log(one_sll.addFront(3).addFront(5).addFront(7).removeFront(11).addFront(9));
console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).front());