---
slug: 2024-5-22-revision
title: Paper 4 - Revision
authors: hirusha
tags: [revision]
---

## DSA & ADTs

[Click here](https://hirusha.xyz/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_23/notes/) to open the study note about Data Structures & Algorithms and Abstract Data Types


## Binary Search

### Iterative

```python
data: list[int] = []

def binarySearch(target):
    left = 0
    right = len(data) - 1

    while right >= left:
        mid = (right + left) // 2  # integer divion (DIV)

        if data[mid] > target:
            right = mid -1
        elif data[mid] < target:
            left = mid + 1
        else: # found
            return mid

    return -1 # if nout found
```

<details>

<summary>Minified code</summary>

```python
def b_search(a, x):
    l, r = 0, len(a) - 1
    while l <= r:
        m = (l + r) // 2
        if a[m] > x:
            r = m - 1
        elif a[m] < x:
            l = m + 1
        else:
            return m
    return -1
```

</details>


### Recursive

```python
data: list[int] = []

def binarySearch(left, right, target):
    if right >= left:
        mid = (left + right) // 2

        if data[mid] == target: # base case
            return mid
        
        elif data[mid] > target:
            return binarySearch(left, mid-1, target)
        
        elif data[mid] < target:
            return binarySearch(mid+1, right, target)
        
    else:
        return -1 # not found
```

<details>

<summary>Minified code</summary>

```python
def b_search(a, x, l=0, r=None):
    if r is None:
        r = len(a) - 1
    if l > r:
        return -1
    m = (l + r) // 2
    if a[m] == x:
        return m
    elif a[m] < x:
        return b_search(a, x, m + 1, r)
    else:
        return b_search(a, x, l, m - 1)

b_search(a=arr, x=69) # find 69 from arr
```

</details>

## Insertion Sort

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# Example usage:
arr = [12, 11, 13, 5, 6]
insertion_sort(arr)
print("Sorted array is:", arr)
```

<details>

<summary>Minified code</summary>

```python
def i_sort(a):
    for i in range(1, len(a)):
        k = a[i]
        j = i - 1
        while j >= 0 and a[j] > k:
            a[j + 1] = a[j]
            j -= 1
        a[j + 1] = k
    return a
```

</details>

## Bubble Sort

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1): # subtract i to not check them again
            if arr[j] > arr[j+1]: # if large
                arr[j], arr[j+1] = arr[j+1], arr[j] # swap L with R

# Example usage:
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Sorted array is:", arr)
```

## Stack

### Method 1

This is what comes to the exam

#### Declaration

- need array/list, max size, top pointer

```python
size = 8
topPointer = -1
stack = [ '' for i in range(size) ]
```

#### Push

- if not full, increment top pointer and store

```python
def push(newValue):
    global size, topPointer, stack
    if (topPointer+1) >= size:
        print("stack is full")
    else:
        topPointer += 1     # increment the pointer
        stack[topPointer] = newValue
        print("added to top of stack")
```

#### Pop

- decrement top pointer, and optionally, reset the value to empty

```python
def pop():
    global size, topPointer, stack
    if topPointer < 0:
        print("no elements in stack")
    else:
        # dont actually delete the value, just decrement the pointer
        # stack[topPointer] = '' # unset value, then decrement
        topPointer -= 1 # decrement top pointer
```

#### Print

- print list backwards

```python
def printStack():
    global size, topPointer, stack
    for i in range(size-1, -1, -1): #start: last, end: first (0), step: -1 
        if i == topPointer:
            print(f"{stack[i]}   <-- topPointer")
        else:
            print(f"{stack[i]}")
```

### Method 2

Use this incase if things go wrong

```python
class Stack:
    def __init__(self):
        self.__elements = []
    
    def is_empty(self):
        return len(self.__elements) == 0
    
    def push(self, data):
        self.__elements.append(data)
    
    def pop(self):
        if self.is_empty():
            print("Stack is empty")
        else:
            return self.__elements.pop() # or .pop(-1) -> last added element
    
    def peek(self):
        if self.is_empty():
            print("Stack is empty")
        else:
            return self.__elements[-1] 
            # return last element
```


## Linear Queue

### Method 1

- one array/list for queue to store data
- head pointer (int)
- tail pointer (int)


- at empty queue, head-pointer = 0, tail-pointer = -1
- sometimes, tailP can change, adjust it accordingly in the first run


#### Declaration

```python
size = 8
num = 0 # basically for a len() like thing
headP = 0
tailP = -1
queue = ['' for _ in range(size)]
```

#### Enqueue

- check if full? if not,
    - increment tail pointer
    - store in new incremented tail pointer
    - increment number of elements

```python
def enqueue(newData):
    global queue, num size, headP, tailP
    if num >= size:
        print("Queue is full")
    else:
        tailP += 1 # increment tailP
        queue[tailP] = newData # store in new tail index
        num += 1 # new element added, for len() like thing
        print("Added item to queue")
```


#### Dequeue

- optionally, remove current value at head-pointer (or replace)
- increment head-pointer
- decrement number of elements

```python
def dequeue():
    global queue, num size, headP, tailP
    if num <= 0:
        print("empty queue. no elements.")
    else:
        removed = queue[headP]
        headP += 1
        num -= 1
        print("removed element at fron of queue (element pointed by headP)")
```


### Method 2

Use this incase if things go wrong. Using collections module (pre-installed)

```python
from collections import deque

data = deque()              # define
data.append("data")         # enqueue
removed = data.popleft()    # dequeue (remove index 0)
```


### Method 3

Use this incase if things go wrong. Using out own custom class.

```python
class Queue:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def enqueue(self, item):
        self.items.append(item) # add to end

    def dequeue(self):
        # Removes the element from the front of the queue
        if self.is_empty():
            print("queue is empty")
        else:
            # remove first element (index: 0) as FIFO
            return self.items.pop(0)

    def peek(self):
         if self.is_empty():
            print("queue is empty")
        else:
            # return first element (index: 0)
            return self.items[0]
```

## Circular Queue

### Method 1

- same stuff as linear queue, but wraps around.

#### Declaration

```
size = 8
num = 0
headP = 0
tailP = -1
queue = ['' for _ in range(size)]
```

#### Enqueue

- check if full? if not,
    - increment tail pointer
    - store in new incremented tail pointer

#### Dequeue

![alt text](image.png)

waste of storage here. we can move the tail pointer to wrap around the empty spaces, not waste memmory. that is where the circular queues become handy. note that when dequeuing, we should also to wrap around the head pointer

