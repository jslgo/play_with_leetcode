abstract class Comparable<T> {
	abstract compareTo(e: Comparable<T>): number
}

class Node<T> {
	public e: T
	public left: Node<T> | null
	public right: Node<T> | null

	constructor(e: T) {
		this.e = e
		this.left = null
		this.right = null
	}
}

class BST<T extends Comparable<T>> {
	private root: Node<T> | null
	private _size: number

	constructor() {
		this.root = null
		this._size = 0
	}

	public get size(): number {
		return this._size
	}

	public get isEmpty(): boolean {
		return this._size === 0
	}

	public add(e: T): void {
		if (this.root === null) {
			this.root = new Node(e)
			++this._size
		} else {
			let currentNode = this.root
			while (currentNode) {
				if (e.compareTo(currentNode.e) < 0) {
					if (currentNode.left === null) {
						currentNode.left = new Node(e)
						++this._size
						break
					} else {
						currentNode = currentNode.left
					}
				} else if (e.compareTo(currentNode.e) > 0) {
					if (currentNode.right === null) {
						currentNode.right = new Node(e)
						++this._size
						break
					} else {
						currentNode = currentNode.right
					}
				}
			}
		}
	}
}

const bst = new BST()

class TestNode<T> implements Comparable<T> {
	public value: number
	constructor(val: number) {
		this.value = val
	}

	compareTo(e: TestNode<T>): number {
		return this.value - e.value
	}
}

;[5, 2, 6, 7, 1, 9, 4, 3, 8, 10]
	.map((item) => {
		return new TestNode(item)
	})
	.forEach((item) => {
		bst.add(item)
	})

console.warn('bst', JSON.stringify(bst, null, 4))
console.warn('bst', bst)

export default {}
