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
		this.root = this._addHelper(this.root, e)
	}

	private _addHelper(curRoot: Node<T> | null, e: T): Node<T> | null {
		if (curRoot === null) {
			curRoot = new Node(e)
			++this._size
		} else {
			if (e.compareTo(curRoot.e) < 0) {
				curRoot.left = this._addHelper(curRoot.left, e)
			} else if (e.compareTo(curRoot.e) > 0) {
				curRoot.right = this._addHelper(curRoot.right, e)
			}
		}
		return curRoot
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
