/*
1. Understanding merge sort
Given the following list of numbers 
21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

A. What is the resulting list that will be sorted after 3 recursive calls to mergesort? 
[21, 1]
B. What is the resulting list that will be sorted after 16 recursive calls to mergesort?
[16, 49, 39, 27, 43, 34, 46, 40]
]
C. What are the first 2 lists to be merged?
[21], [1]
D. Which two lists would be merged on the 7th merge?
[1, 21, 26, 45], [2, 9, 28, 29]


Answer to A:

Function invocation:
array: [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
left: 21, 1, 26, 45, 29, 28, 2, 9, 
right: 16, 49, 39, 27, 43, 34, 46, 40

Recursive calls: mergeSort(left)
#1: 
array: [21, 1, 26, 45, 29, 28, 2, 9]
left:21, 1, 26, 45
right: 29, 28, 2, 9
#2: 
array: [21, 1, 26, 45]
left: 21, 1
right: 26, 45
#3:
array: [21, 1] 
left: 21
right: 1

Recursive calls: mergeSort(right
#1: 
left: 16, 49, 39, 27
right: 43, 34, 46, 40
#2:
left: 43, 34,
right: 46, 40 
#3: 
left: 46,
right: 40

*/

function mSort(array) {
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++];
      }
  }

  for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
  }
  return array;
};

const anotherArr = [38, 27, 43, 3, 9, 82, 10];
const array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40,
    48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 
    28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 
    97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 
    6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 
    34, 53, 78, 40, 14, 5]
console.log(mSort(array));
console.log(mSort(anotherArr));
console.log(mSort(data))