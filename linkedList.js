/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

	var head = null;

	function getHead(){
		return head;
	}

	function getTail(){
		var curNode = head;
		while (curNode !== null)
			{
				//curNode is a node it's not null
				// check if curNode has next node
				if (curNode.next !== null){
				// if it does, set curNode to next, because it's not null
					curNode = curNode.next;
				}else{
					// else return curNode, because it's the tail
					return curNode; //because it is the tail
				}
		}	
		// curNode IS null;
		return curNode;
}

	function add(newValue){
		var tail = getTail();
		// tail could be null
		var newNode = {
			value: newValue,
			next: null
			};
		if (tail === null){ // first add invoction
				head = newNode;
		}else{
			// set tail's next to newNode
			tail.next = newNode;
		}
			return newNode;
	}

return{
	getHead: getHead,
	getTail: getTail,
	add: add,
	};
}

var ll = linkedListGenerator();
	ll.add('penguin');
	ll.add('puppy');
	ll.add('kid');
	ll.add('chick');

var theHead = ll.getHead();
var theTail = ll.getTail();

console.log('theHead', theHead);
console.log('theTail', theTail);