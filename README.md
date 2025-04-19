# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

# Solution

First let's look at the outer while loop (line 7). Here we iterate until width reaches $n$ (length of array). Width grows by a factor of 2 times every iteration, so it becomes the following series: 1,2,4,8,16,32...,$n$. So to find the total number of iterations we set up the following equation using the geometric sequence: $2^k \ge n$. Solving for $k$ we get $k = \log_2(n)$ which then asymptotically simplifies to $\log(n)$. 

The inner for loop (line 9) runs through the entire array so it simply runs $n$ times. So, combining these we get 

$$\Theta (n \cdot \log(n))$$

# Disclaimer

 I used [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) so I didn't need to make my own function.

 I also used [this](https://en.wikipedia.org/wiki/Merge_sort) to verify my answer.

 I was confused about what in-place meant, so I used [this](https://www.geeksforgeeks.org/in-place-merge-sort/) for the following quote: "In-place means it does not occupy extra memory for merge operation as in the standard case."

 I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
