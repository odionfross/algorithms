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

    /* Create display() that returns a string containing all list values. Build what you wish console.log(myList) did! */
    display_list(){
        var monkey = this.head
        while(monkey){
            console.log(`Current Node: ${monkey}, Current Value: ${monkey.value}`)
            monkey = monkey.next;
        }
        return this
    }
    
    //Create method max() to return list’s largest val.
    max(){
        var max = this.head.value
        var monkey = this.head.next
        while(monkey){
            if(max<monkey.value){
                max = monkey.value
            }
            monkey=monkey.next
        }
        return max
    }

    //Create min(node) to return list’s smallest val.
    min(){
        var min = this.head.value
        var monkey = this.head.next
        while(monkey){
            if(min>monkey.value){
                min = monkey.value
            }
            monkey=monkey.next
        }
        return min
    }

    //Create average() to return average val.
    average(){
        var sum = 0;
        var monkey=this.head;
        while(monkey){
            sum += monkey.value
            monkey=monkey.next
        }
        return sum/this.length()
    }
}

var one_sll = new SLL(1);
//console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9));
//console.log(one_sll.addFront(3).addFront(5).addFront(7).removeFront(11).addFront(9));
//console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).front());
//console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).contains(5));
//console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).length());
//console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).display_list());
console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).max());
console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).min());
console.log(one_sll.addFront(3).addFront(5).addFront(7).addFront(11).addFront(9).average());