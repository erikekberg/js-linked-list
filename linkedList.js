class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    append(value) {
        let pointer;
        if (!this.head) {
            this.head = new Node(value);
        } else {
            pointer = this.head;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
            }
            pointer.nextNode = new Node(value);
        }
    }
    prepend(value) {
        const node = new Node(value, this.head);
        this.head = node;
    }
    size() {
        let pointer;
        let counter = 1;
        if (!this.head) {
            return 0;
        } else {
            pointer = this.head;
            while (pointer.nextNode) {
                counter++;
                pointer = pointer.nextNode;
            }
        }
        return counter;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        let pointer = this.head;
        if (!pointer) {
            return undefined;
        } else {
            while (pointer.nextNode) {
                pointer = pointer.nextNode;
            }
        }
        return pointer;
    }
    at(index) {
        let pointer = this.head;
        for (let i = 0; i < index; i++) {
            if (pointer.nextNode) {
                pointer = pointer.nextNode;
            } else {
                return undefined;
            }
        }
        return pointer;
    }
    pop() {
        let pointer1 = this.head;
        let pointer2;
        if (!pointer1) {
            return;
        } else {
            while (pointer1.nextNode) {
                pointer2 = pointer1;
                pointer1 = pointer1.nextNode;
            }
            pointer2.nextNode = null;
        }
    }
    contains(val) {
        let pointer = this.head;
        if (!pointer) {
            return false;
        }
        if (pointer.value === val) {
            return true;
        }
        while (pointer.nextNode) {
            if (pointer.nextNode.value === val) {
                return true;
            }
            pointer = pointer.nextNode;
        }
        return false;
    }
    find(val) {
        let indexCounter = 0;
        let pointer = this.head;
        if (!pointer) {
            return null;
        }
        if (pointer.value === val) {
            return indexCounter;
        }
        while (pointer.nextNode) {
            indexCounter++;
            if (pointer.nextNode.value === val) {
                return indexCounter;
            }
            pointer = pointer.nextNode;
        }
        return null;
    }
    toString() {
        let result = "";
        let pointer = this.head;
        if (!pointer) {
            return result;
        }
        while (pointer.nextNode) {
            result += `(${pointer.value}) -> `;
            pointer = pointer.nextNode;
        }
        result += `(${pointer.value}) -> `;
        result += "null";
        return result;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

module.exports = { LinkedList };