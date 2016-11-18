/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

	var head = null;

	function getHead(){		//curNode is a pointer for head, which is in a local scope; head stays same
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

	function get(numNode){ // parameter will search for a specifc node in the list based on index
		var counter = 0; // initializes index to start at the head, which is 0
		curNode = head;
			while (curNode/*.next*/ !== null){
				if (counter !== numNode){
					curNode = curNode.next;
					counter++;
				}else{
					return curNode;
				}
			}
			return false;
		}

	function remove(){

	}

	function insert(){

	}

return{
	getHead: getHead,
	getTail: getTail,
	add: add,
	get: get,
	remove: remove,
	insert: insert,
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