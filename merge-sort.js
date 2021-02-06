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