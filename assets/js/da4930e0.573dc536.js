"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[569],{9069:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=r(4848),i=r(8453);const l={slug:"2024-5-22-summary",title:"Paper 4 - Summary",authors:"hirusha",tags:["revision"]},s=void 0,o={permalink:"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-5-22-summary",source:"@site/blog/2024-5-23-summary.md",title:"Paper 4 - Summary",description:"Binary Search",date:"2024-05-23T00:00:00.000Z",formattedDate:"May 23, 2024",tags:[{label:"revision",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/blog/tags/revision"}],readingTime:9.61,hasTruncateMarker:!1,authors:[{name:"Hirusha Adikari",title:"A student interested in Technology",url:"https://hirusha.xyz",imageURL:"https://avatars.githubusercontent.com/u/36286877?v=4",key:"hirusha"}],frontMatter:{slug:"2024-5-22-summary",title:"Paper 4 - Summary",authors:"hirusha",tags:["revision"]},unlisted:!1,nextItem:{title:"Paper 4 - Revision",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-5-22-revision"}},a={authorsImageUrls:[void 0]},d=[{value:"Binary Search",id:"binary-search",level:2},{value:"Insertion Sort",id:"insertion-sort",level:2},{value:"Bubble Sort",id:"bubble-sort",level:2},{value:"Stack",id:"stack",level:2},{value:"Linear Queue",id:"linear-queue",level:2},{value:"Linear Queues - Method 2",id:"linear-queues---method-2",level:4},{value:"Circular Queue",id:"circular-queue",level:2},{value:"Linked List",id:"linked-list",level:2},{value:"OOP",id:"oop",level:2},{value:"File Handling",id:"file-handling",level:2},{value:"Binary Tree",id:"binary-tree",level:2},{value:"Method 1",id:"method-1",level:3},{value:"Method 2",id:"method-2",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"binary-search",children:"Binary Search"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"data: list[int] = []\r\n\r\ndef binarySearch(target):\r\n    left = 0\r\n    right = len(data) - 1\r\n\r\n    while right >= left:\r\n        mid = (right + left) // 2  # integer divion (DIV)\r\n\r\n        if data[mid] > target:\r\n            right = mid -1\r\n        elif data[mid] < target:\r\n            left = mid + 1\r\n        else: # found\r\n            return mid\r\n\r\n    return -1 # if nout found\n"})}),"\n",(0,t.jsx)(n.h2,{id:"insertion-sort",children:"Insertion Sort"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def insertion_sort(arr):\r\n    for i in range(1, len(arr)):\r\n        key = arr[i]\r\n        j = i - 1\r\n        while j >= 0 and arr[j] > key:\r\n            arr[j + 1] = arr[j]\r\n            j -= 1\r\n        arr[j + 1] = key\r\n\r\n# Example usage:\r\narr = [12, 11, 13, 5, 6]\r\ninsertion_sort(arr)\r\nprint("Sorted array is:", arr)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"bubble-sort",children:"Bubble Sort"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def bubble_sort(arr):\r\n    n = len(arr)\r\n    for i in range(n):\r\n        for j in range(0, n-i-1): # subtract i to not check them again\r\n            if arr[j] > arr[j+1]: # if large\r\n                arr[j], arr[j+1] = arr[j+1], arr[j] # swap L with R\r\n\r\n# Example usage:\r\narr = [64, 34, 25, 12, 22, 11, 90]\r\nbubble_sort(arr)\r\nprint("Sorted array is:", arr)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"stack",children:"Stack"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"need array/list, max size, top pointer"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Push"}),": if not full, increment top pointer and store  (or do ",(0,t.jsx)(n.code,{children:"arr.append(val)"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pop"}),": decrement top pointer, and optionally, reset the value to empty  (or do ",(0,t.jsx)(n.code,{children:"arr.pop(<-1>)"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Print"}),": print the list backwards, basically ( ",(0,t.jsx)(n.code,{children:"print(arr[::-1])"}),"-ish kinda thing )"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'size = 8\r\ntopPointer = -1\r\nstack = [ \'\' for i in range(size) ]\r\n\r\ndef push(newValue):\r\n    global size, topPointer, stack\r\n    if (topPointer+1) >= size:\r\n        print("stack is full")\r\n    else:\r\n        topPointer += 1     # increment the pointer\r\n        stack[topPointer] = newValue\r\n        print("added to top of stack")\r\n\r\ndef pop():\r\n    global size, topPointer, stack\r\n    if topPointer < 0:\r\n        print("no elements in stack")\r\n    else:\r\n        # dont actually delete the value, just decrement the pointer\r\n        # stack[topPointer] = \'\' # unset value, then decrement\r\n        topPointer -= 1 # decrement top pointer\r\n\r\ndef printStack():\r\n    global size, topPointer, stack\r\n    for i in range(size-1, -1, -1): #start: last, end: first (0), step: -1 \r\n        if i == topPointer:\r\n            print(f"{stack[i]}   <-- topPointer")\r\n        else:\r\n            print(f"{stack[i]}")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"linear-queue",children:"Linear Queue"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"one array/list for queue to store data"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"head pointer (int)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"tail pointer (int)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"at empty queue, head-pointer = 0, tail-pointer = -1"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"sometimes, tailP can change, adjust it accordingly in the first run"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Enqueue"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"check if full? if not,"}),"\n",(0,t.jsx)(n.li,{children:"increment tail pointer"}),"\n",(0,t.jsx)(n.li,{children:"store in new incremented tail pointer"}),"\n",(0,t.jsx)(n.li,{children:"increment number of elements"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Dequeue"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"optionally, remove current value at head-pointer (or replace)"}),"\n",(0,t.jsx)(n.li,{children:"increment head-pointer"}),"\n",(0,t.jsx)(n.li,{children:"decrement number of elements"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'size = 8\r\nnum = 0 # basically for a len() like thing\r\nheadP = 0\r\ntailP = -1\r\nqueue = [\'\' for _ in range(size)]\r\n\r\ndef enqueue(newData):\r\n    global queue, num size, headP, tailP\r\n    if num >= size:\r\n        print("Queue is full")\r\n    else:\r\n        tailP += 1 # increment tailP\r\n        queue[tailP] = newData # store in new tail index\r\n        num += 1 # new element added, for len() like thing\r\n        print("Added item to queue")\r\n\r\ndef dequeue():\r\n    global queue, num size, headP, tailP\r\n    if num <= 0:\r\n        print("empty queue. no elements.")\r\n    else:\r\n        removed = queue[headP]\r\n        headP += 1\r\n        num -= 1\r\n        print("removed element at fron of queue (element pointed by headP)")\r\n        return removed\n'})}),"\n",(0,t.jsx)(n.h4,{id:"linear-queues---method-2",children:"Linear Queues - Method 2"}),"\n",(0,t.jsxs)(n.p,{children:["Use this incase if things go wrong. Using ",(0,t.jsx)(n.code,{children:"collections"})," module (pre-installed)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from collections import deque\r\n\r\ndata = deque()              # define\r\ndata.append("data")         # enqueue\r\nremoved = data.popleft()    # dequeue (remove index 0)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"circular-queue",children:"Circular Queue"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"no two methods, so remeber this."}),"\n",(0,t.jsx)(n.li,{children:"same stuff as linear queue, but wraps around."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:r(5348).A+"",width:"507",height:"420"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"waste of memmory here. we can move the tail pointer to wrap around the empty spaces, not waste memmory. that is where the circular queues become handy."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"note that when dequeuing, we should also to wrap around the head pointer"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Enqueue:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"check if full? if not,"}),"\n",(0,t.jsx)(n.li,{children:"increment tail pointer"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"if tailP > size-1: set tailP to 0"})}),"\n",(0,t.jsx)(n.li,{children:"store in new incremented tail pointer"}),"\n",(0,t.jsx)(n.li,{children:"increment number of elements"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Dequeue"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"optionally, remove current value at head-pointer (or replace)"}),"\n",(0,t.jsx)(n.li,{children:"increment head-pointer"}),"\n",(0,t.jsx)(n.li,{children:"decrement number of elements"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"if headP > size-1: set headP to 0"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'size = 8\r\nnum = 0 # basically for a len() like thing\r\nheadP = 0\r\ntailP = -1\r\nqueue = [\'\' for _ in range(size)]\r\n\r\ndef enqueue(newData):\r\n    global queue, num size, headP, tailP\r\n    if num >= size:\r\n        print("Queue is full")\r\n    else:\r\n        tailP += 1 # increment tailP\r\n\r\n        # adjust the queue to become circular\r\n        # -----\r\n        if tailP > size-1:\r\n            tailP = 0\r\n        # -----\r\n\r\n        queue[tailP] = newData # store in new tail index\r\n        num += 1 # new element added, for len() like thing\r\n        print("Added item to queue")\r\n\r\ndef dequeue():\r\n    global queue, num size, headP, tailP\r\n    if num <= 0:\r\n        print("empty queue. no elements.")\r\n    else:\r\n        removed = queue[headP]\r\n        headP += 1\r\n        num -= 1\r\n\r\n        # adjust the queue to become circular\r\n        # -----\r\n        if headP > size-1:\r\n            headP = 0\r\n        # -----\r\n\r\n        print("removed element at fron of queue (element pointed by headP)")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"linked-list",children:"Linked List"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Remember this"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# keep on going to next node, \r\n# until last node, \r\n# which points to None/-1\r\nwhile cur.next != None: \r\n    cur = cur.next      # go to next note\r\n    # do stuff here\r\n    # ...\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sample code:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Node:\r\n    def __init__(self, data=None):\r\n        self.data = data\r\n        self.next = None\r\n\r\nclass LinkedList:\r\n    def __init__(self):\r\n        self.head = Node()\r\n    \r\n    def append(self, data):\r\n        new_node = Node(data=data)\r\n        cur = self.head # start from beginning\r\n\r\n        while cur.next != None: # next element of current is not None\r\n            # means, this is not the final node\r\n            cur = cur.next # so, go to next node\r\n        \r\n        cur.next = new_node\r\n    \r\n    def length(self):\r\n        cur = self.head\r\n        total = 0\r\n        while cur.next != None:\r\n            total += 1\r\n            cur = cur.next\r\n        return total\r\n\r\n    def display_linkedList(self):\r\n        elems = []\r\n        cur = self.head\r\n        while cur.next != None:\r\n            cur = cur.next\r\n            elems.append(cur.data)\r\n        print(elems)\r\n    \r\n    def get(self, index):\r\n        # from 1, doesnt start from 0\r\n        if index >= self.length():\r\n            print("Index out of range!")\r\n            return None\r\n        \r\n        cur_id = 0\r\n        cur_node = self.head\r\n\r\n        while True:\r\n            cur_node = cur_node.next # go through every node\r\n            if cur_id == index:\r\n                return cur_node.data # break and return when index = cur_node idx\r\n            cur_id += 1\r\n    \r\n    def erase(self, index):\r\n        if index >= self.length():\r\n            print("Index out of range!")\r\n            return None\r\n        \r\n        cur_id = 0\r\n        cur_node = self.head\r\n        while True:\r\n            last_node = cur_node\r\n            cur_node = cur_node.next\r\n            if cur_id == index: # when current node\'s index = given index\r\n                last_node.next = cur_node.next\r\n                return\r\n            cur_id += 1\r\n\r\n\r\nll = LinkedList()\r\nll.display_linkedList() # []\r\n\r\nll.append(3)        \r\nll.append(5)        \r\nll.append(2)        \r\nll.append(9)        \r\n        \r\nll.display_linkedList() # [3, 5, 2, 9]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"oop",children:"OOP"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"super()"})," function provides a way to call the methods of a parent class from within a child class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Parent:\r\n    def __init__(self, name):\r\n        self.name = name\r\n    \r\n    def greet(self):\r\n        print(f"Hello, my name is {self.name}")\r\n\r\nclass Child(Parent):\r\n    def __init__(self, name, age):\r\n        super().__init__(name)  # Call the parent class\'s __init__ method\r\n        self.age = age\r\n    \r\n    def greet(self):\r\n        super().greet()  # Call the parent class\'s greet method\r\n        print(f"I am {self.age} years old")\r\n\r\n\r\nchild = Child("Alice", 12) # Instance of the Child class\r\nchild.greet()\r\n# ---\r\n# Hello, my name is Alice\r\n# I am 12 years old\r\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"file-handling",children:"File Handling"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'try:\r\n    with open("TreasureChestData.txt", "r", encoding=\'utf-8\') as _file:\r\n        lines = _file.readlines()\r\n\r\n        # 3 line - 3 line blocks\r\n        for i in range(0, len(lines), 3): # access 1 block of 3 lines\r\n            # line 1:   lines[i]\r\n            # line 2:   lines[i+1]\r\n            # line 3:   lines[i+2]\r\nexcept (FileNotFoundError, IOError):\r\n    print("File not found!")\r\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"binary-tree",children:"Binary Tree"}),"\n",(0,t.jsx)(n.h3,{id:"method-1",children:"Method 1"}),"\n",(0,t.jsx)(n.p,{children:"From an old question:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"ArrayNodes = [[1,20,5],[2,15,-1],[-1,3,3],[-1,9,4],[-1,10,-1],[-1,58,-1]]\r\nFreeNodes = 6\r\nRootPointer = 0\r\n\r\ndef SearchValue(Root, ValueToFind): # search value in tree\r\n    global ArrayNodes\r\n    if Root == -1:\r\n        return -1\r\n    elif ArrayNodes[Root][1] == ValueToFind:\r\n        return Root\r\n    elif ArrayNodes[Root][1] == -1:\r\n        return -1\r\n    if ArrayNodes[Root][1] > ValueToFind:\r\n        return SearchValue(ArrayNodes[Root][0], ValueToFind)\r\n    if ArrayNodes[Root][1] < ValueToFind:\r\n        return SearchValue(ArrayNodes[Root][2], ValueToFind)\r\n\r\ndef PostOrder(RootNode): # tree traversal\r\n    if RootNode[0] != -1:\r\n        PostOrder(ArrayNodes[RootNode[0]])\r\n    if RootNode[2] != -1:\r\n        PostOrder(ArrayNodes[RootNode[2]])\r\n    print(str(RootNode[1])) \n"})}),"\n",(0,t.jsxs)(n.p,{children:["From ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=NtqCPtdTbdc",children:"this"})," youtube video"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'size = 10\r\n\r\nclass Node:\r\n    def __init__(self):\r\n        self.data = None\r\n        self.left = None\r\n        self.right = None\r\n\r\ndef init_Tree():\r\n    global tree, freeP, rootP\r\n    tree = [Node() for _ in range(size)]\r\n    for i in range(size-1):\r\n        tree[i].left = i+1\r\n    freeP = 0\r\n\r\ndef find_insertion_point(newD):\r\n    pointer = rootP\r\n    while pointer is not None:\r\n        prevP = pointer\r\n        curD = tree[pointer].data\r\n        if curD < newD:\r\n            direction = "Right"\r\n            pointer = tree[pointer].right\r\n        else:\r\n            direction = "Left"\r\n            pointer = tree[pointer].left\r\n    return prevP, direction\r\n\r\ndef add_to_tree(newD):\r\n    global tree, freeP, rootP\r\n    if freeP != None:\r\n        print("tree is full")\r\n    else:\r\n        newP = freeP\r\n        tree[newP].data = newD\r\n        freeP = tree[newP].left\r\n        tree[newP].left = None\r\n\r\n        if rootP is None:\r\n            rootP = newP\r\n            print("Root pointer has been set")\r\n        else:\r\n            pointer, direction = find_insertion_position(newD)\r\n            if direction == "Left":\r\n                tree[pointer].left = newP\r\n            else:\r\n                tree[pointer].right = newP\r\n        \r\n        print(f"Added {newD} to tree.")\r\n\r\ndef traverse_tree(ptr):\r\n    global tree, freeP, rootP\r\n    if rootP is None:\r\n        print("Cannot traverse and empty tree!")\r\n        return\r\n    \r\n    if ptr is None:\r\n        ptr = rootP\r\n    \r\n    left = tree[ptr].left\r\n    right = tree[ptr].right\r\n    data = tre[ptr].data\r\n\r\n    if left is not None:\r\n        travervse_tree(left)\r\n    print(data)\r\n    if right is not None:\r\n        traverse_tree(right)\r\n\r\ndef search_tree(ptr):\r\n    ptr = rootP\r\n    while true:\r\n        if ptr is None:\r\n            print("Data was not found")\r\n            break\r\n        \r\n        elif tree[ptr] == data:\r\n            print("Data was found at given position")\r\n        \r\n        elif current < data:\r\n            direction = "Right"\r\n            ptr = tree[ptr].right\r\n        \r\n        else:\r\n            direction = "Left            \r\n            ptr = tree[ptr].left\r\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"method-2",children:"Method 2"}),"\n",(0,t.jsx)(n.p,{children:"use this incase of a big oof"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Node:\r\n    def __init__(self, key):\r\n        # Initialize a node with the given key value.\r\n        # Initially, both left and right children are None.\r\n        self.left = None\r\n        self.right = None\r\n        self.value = key\r\n\r\nclass BinaryTree:\r\n    def __init__(self):\r\n        # Initialize an empty binary tree with root set to None.\r\n        self.root = None\r\n\r\n    def insert(self, key):\r\n        # If the tree is empty, create the root node with the given key.\r\n        if self.root is None:\r\n            self.root = Node(key)\r\n        else:\r\n            # If the tree is not empty, use the helper method to insert the key.\r\n            self._insert(self.root, key)\r\n\r\n    def _insert(self, root, key):\r\n        # Recursive method to insert a new key into the tree.\r\n        if key < root.value:\r\n            # If the key is less than the root's value, go to the left subtree.\r\n            if root.left is None:\r\n                # If there's no left child, create a new node with the key.\r\n                root.left = Node(key)\r\n            else:\r\n                # If there is a left child, recursively insert the key in the left subtree.\r\n                self._insert(root.left, key)\r\n        else:\r\n            # If the key is greater than or equal to the root's value, go to the right subtree.\r\n            if root.right is None:\r\n                # If there's no right child, create a new node with the key.\r\n                root.right = Node(key)\r\n            else:\r\n                # If there is a right child, recursively insert the key in the right subtree.\r\n                self._insert(root.right, key)\r\n\r\n    def inorder_traversal(self):\r\n        # Perform in-order traversal of the tree.\r\n        # This method returns a list of values in sorted order.\r\n        result = []\r\n        self._inorder_traversal(self.root, result)\r\n        return result\r\n\r\n    def _inorder_traversal(self, root, result):\r\n        # Recursive helper method to perform in-order traversal.\r\n        if root:\r\n            # Traverse the left subtree first.\r\n            self._inorder_traversal(root.left, result)\r\n            # Visit the root node.\r\n            result.append(root.value)\r\n            # Traverse the right subtree.\r\n            self._inorder_traversal(root.right, result)\r\n\r\n# Example usage:\r\nif __name__ == \"__main__\":\r\n    # Create an instance of BinaryTree.\r\n    tree = BinaryTree()\r\n    # List of elements to be inserted into the tree.\r\n    elements = [10, 5, 1, 7, 40, 50]\r\n    # Insert each element into the tree.\r\n    for elem in elements:\r\n        tree.insert(elem)\r\n\r\n    # Print the in-order traversal of the binary tree.\r\n    print(\"In-order traversal of the binary tree:\", tree.inorder_traversal())\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5348:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/image-1a5f178a27358f9a0344b502c8ba67ed.png"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(6540);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);