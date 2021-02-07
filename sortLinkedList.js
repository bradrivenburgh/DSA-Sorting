/*
5. Sorting a linked list using merge sort
Given a Linked List, sort the linked list using merge sort. You will need 
your linked list class from previous lesson to create the list and use all 
of its supplemental functions to solve this problem.
*/

const LinkedList = require("./LinkedList");

const LL = new LinkedList();

[1, 3, 5, 9, 2, 4, 11].forEach((num) => LL.insertFirst(num));

function LLSort(list) {
  if (!list) {
    return;
  }
  if (list.length <= 1) {
    return list;
  }
  const middle = Math.floor(list.length / 2);
  let left = splitList(list, 0, middle);
  let right = splitList(list, middle, list.length);

  left = LLSort(left);
  right = LLSort(right);

  return mergeLL(left, right);
}

function splitList(list, start = 0, end = list.length) {
  let currNode = list.head;
  if (currNode === null) {
    return;
  }
  const returnList = new LinkedList();

  let i = 0;
  while (currNode !== null) {
    // Start copying after reaching desired starting point
    if (i >= start && i < end) {
      returnList.insertLast(currNode.value);
    }
    i++;
    currNode = currNode.next;
  }
  return returnList;
}

function mergeLL(left, right) {
  const mergedLL = new LinkedList();
  let currLeft = left.head;
  let currRight = right.head;

  while (currLeft && currRight) {
    if (currLeft.value <= currRight.value) {
      mergedLL.insertLast(currLeft.value); // append lower values to mergedLL
      currLeft = currLeft.next; // traverse
    } else {
      mergedLL.insertLast(currRight.value); // else append higher values to mergedLL
      currRight = currRight.next; //traverse
    }
  }
  // Once left or right is completely traversed, insert the rest
  // of the values from remaining list to mergedLL
  while (currLeft) {
    mergedLL.insertLast(currLeft.value);
    currLeft = currLeft.next;
  }
  while (currRight) {
    mergedLL.insertLast(currRight.value);
    currRight = currRight.next;
  }

  return mergedLL;
}

console.log(JSON.stringify(LLSort(LL)));
/*
Expected output:
{
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: { value: 9, next: { value: 11, next: null } },
          },
        },
      },
    },
  },
  length: 7,
};
*/
