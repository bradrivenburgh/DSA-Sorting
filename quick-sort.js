/*
2. Understanding quicksort
1) Suppose you are debugging a quicksort implementation that is 
supposed to sort an array in ascending order. After the first 
partition step has been completed, the contents of the array is 
in the following order: 3 9 1 14 17 24 22 20. Which of the following 
statements is correct about the partition step? Explain your answer.

A. The pivot could have been 17, but could not have been 14
B. The pivot could have been either 14 or 17
C. Neither 14 nor 17 could have been the pivot
D. The pivot could have been 14, but could not have been 17

****
Answer: 
Statement B.  The values to the left are less than either number.
Similarly, the values to the right are greater than either number.  

****

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
show the resulting list after the second partitioning according to 
the quicksort algorithm.

When using the last item on the list as a pivot
i=9
j=6
pivot = 15
****
Answer:
First partition (pivot = 12): 10, 3, 9, 12, 19, 14, 17, 16, 13, 15
Second partition (pivot = 9): 3, 9, 10, 12, 19, 14, 17, 16, 13, 15
****

When using the first item on the list as a pivot

****
i=6
j=6
14, 17, 13, 15, 19, 10, 3, 16, 9, 12
Answer: 
First partition (pivot = 14): 13, 10, 3, 9, 12, 14, 17, 15, 19, 16
Second partition (pivot = 13): 13, 10, 3, 9, 12, 14, 15, 16, 17, 19
****

3. Implementing quicksort
Write a function qSort that sorts a dataset using the quicksort algorithm. 
The dataset to sort is: 
89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 
56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 
64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 
6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5
*/

let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40,
   48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 
   28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 
   97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 
   6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 
   34, 53, 78, 40, 14, 5]

console.log(data)

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
      return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
};

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
      if (array[i] <= pivot) {
          swap(array, i, j);
          j++;
      }
  }
  swap(array, end-1, j);
  return j;
};

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

console.log(qSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]))
console.log(qSort(data));