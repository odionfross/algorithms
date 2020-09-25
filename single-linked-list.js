/* Single Linked List

Defining a node */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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

    /* Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false; true, if the list possesses a node that contains the provided value. */
    contains(val){
        var monkey = this.head
        while(monkey){
            if(monkey.value == val){
                return true
            }
            monkey=monkey.next
        }
        return false
    }

    /* Create a new SLL method length() that returns number of nodes in that list. */
    length(){
        var monkey = this.head
        var count = 0;
        while(monkey){
            monkey = monkey.next;
            count +=1;
        }
        return count
    }
}

var one_sll = new SLL(1);
//console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9));
//console.log(one_sll.addFront(3).addFront(5).addFront(7).removeFront(11).addFront(9));
//console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).front());
//console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).contains(5));
console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).length());