/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

	var head = null;	// null has no value...yet!

//Retrieves the value of the first node in a list

	// [ head ] -> [ node 1 ] -> [ node 2 ] -> [ tail ]
	//		^ first node in the list

	function getHead(){

		return head;	//return null

	}

//Retrieves the value of the first node in a list
	function getTail(){

		return head;	//This passes, I wonder how this will affect the rest of my code

	}

//Creates a new node object after appending new node to the list
	var curNode = head;

	if (curNode!== null){
		curNode = curNode.next;
	}

		return curNode;

	//	[ head ] -> [ index 1 ] -> [ index 2 ] -> [ tail ]
	//	[ newNode ] want to append to the list somewhere

	}

	function remove(){

	}

	function get(){

	}

	function insert(){

	}

	return{
		getHead: getHead,
		getTail: getTail,
		add: add,
		remove: remove,
		get: get,
		insert: insert

	};

}

var ll = linkedListGenerator();

ll.getHead();
console.log(ll.getHead(0));	//return null

ll.getTail();
console.log(ll.getTail(0));	//return null