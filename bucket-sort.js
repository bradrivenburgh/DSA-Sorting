/*
6. Bucket sort
Write an O(n) algorithm to sort an array of integers, 
where you know in advance what the lowest and highest values are. 
You can't use arr.splice(), shift() or unshift() for this exercise.
*/
const qSort = require('./quick-sort');


function bucketSort(array = [], min = 0, max = 0) {
  if (array.length <= 1) {
    return array;
  }
  
  // Create buckets
  const bucketSize = 3;
  const bucketCount = Math.floor((max - min) / bucketSize) + 1; // # of buckets to create; 3 is desired bucket size
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  // Assign elements to buckets
  for (let num of array) {
    const assignedBucket = Math.floor((num - min) / bucketSize);
    buckets[assignedBucket].push(num);
  }

  // Sort buckets
  const sortedArr = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i]) {
      qSort(buckets[i]);
      sortedArr.push(...buckets[i]);
    }
  }
  return sortedArr;
}

let sample = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
console.log(bucketSort(sample, 3, 19))
