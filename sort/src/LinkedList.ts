import { Sorter } from './Sorter';
class NodeItem {
  next: NodeItem | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: NodeItem | null = null;

  add(data: number): void {
    const nodeItem = new NodeItem(data);

    if (!this.head) {
      this.head = nodeItem;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = nodeItem;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      node = node.next;
      length++;
    }

    return length;
  }

  at(index: number): NodeItem {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    let i = 0;
    let node: NodeItem | null = this.head;
    while (node) {
      if (i === index) {
        return node;
      }

      i++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: NodeItem | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
