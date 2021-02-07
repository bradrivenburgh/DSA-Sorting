const books = [
  'The Final Empire',
  'The Well of Ascension',
  'The Hero of Ages',
  'Sapiens',
  'American Empire',
  'The World is Flat',
  'Freakonomics',
  'A People\'s history of the United States',
  'Harry Potter and the Philosopher\'s Stone',
  'Mao',
  'Lincoln',
  '1776',
  'Battle Cry of Freedom',
  'Killer Angels',
  'Ender\'s Game',
  'The Pragmatic Programmer',
  'Clean Code',
  'Cracking the Coding Interview',
  'The Moon is a Harsh Mistress',
  'Perdido Station'
];

// Merge sort books 
function bookSort(array) {
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = bookSort(left);
  right = bookSort(right);
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

console.log(bookSort(books)) 
/*
[
  '1776',
  "A People's history of the United States",
  'American Empire',
  'Battle Cry of Freedom',
  'Clean Code',
  'Cracking the Coding Interview',
  "Ender's Game",
  'Freakonomics',
  "Harry Potter and the Philosopher's Stone",
  'Killer Angels',
  'Lincoln',
  'Mao',
  'Perdido Station',
  'Sapiens',
  'The Final Empire',
  'The Hero of Ages',
  'The Moon is a Harsh Mistress',
  'The Pragmatic Programmer',
  'The Well of Ascension',
  'The World is Flat'
]
*/