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
			while (curNode !== null){		//runs each node in the linked list
				if (counter !== numNode){	//compares value of counter to value of numNode (both numbers)
					curNode = curNode.next;	//sets var currNode to the the next, which gives you next node
					counter++;							//increases the value of counter by 1
				}else{
					return curNode;					//once the numNode and counter match it'll return the node
				}
			}
			return false;								//if no node index exists, it will return false
		}

	function remove(num){
		var counter = 0; // initializes index to start at the head, which is 0
		var curNode = head;

		//create an if statement if num = index 0 then head = the next node
		if (num === 0){
			head = curNode.next;
		}
			while (curNode !== null){		//runs each node in the linked list
				if (counter !== num){	//compares value of counter to value of numNode (both numbers)
					curNode = curNode.next;	//sets var currNode to the the next, which gives you next node
					counter++;							//increases the value of counter by 1
				}else{
					//can't have negative check if we're removing head, kill head and move to the next node
					var prevNode = get(num-1);	//gets the previous node using get()
					prevNode.next = curNode.next;
					return;
				}
			}
			return false;								//if no node index exists, it will return false
		}

	function insert(value, num){

		var counter = 0; // initializes index to start at the head, which is 0
		var curNode = head;
		var newNode = {
			value: value,
			next: null	//null is undefined until we can assign it the node we are shifting
		};

		//create an if statement if num = index 0 then head = the next node
		if (num === 0){
			head = newNode; //had head set to newNode.next; once I changed it to newNode it passed!
		}
			while (curNode !== null){		//runs each node in the linked list until it reaches the tail
				if (counter !== num){	//compares value of counter to value of numNode (both numbers)
					curNode = curNode.next;	//sets var currNode to the the next, which gives you next node
					counter++;							//increases the value of counter by 1
				}else{
					var prevNode = get(num-1);
					prevNode.next = newNode; //changes the value of the previous node next value to newNode
					newNode.next = curNode; //assigns next value of newNode to curNode
					return;
					//need to push the current node into the next index over as well as other subsequent index

					}
			}
			return false;								//if no node index exists, it will return false

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