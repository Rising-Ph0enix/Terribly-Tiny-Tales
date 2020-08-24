# Terribly-Tiny-Tales
Web App for TTT challenge

Demo: https://rising-ph0enix.github.io/ttt.html

Approach:

1) Read the TTT test file asynchronously.
2) Convert the file to an array of strings by splitting on whitespace & special characters using Regex: "[ \n\t,.?/:;()@>""]". Case insensitive, since "Same" and "same" are the same word.
3) Compute the frequency of every word in the file using a HashMap. Read the <word,frequency> pairs into an array and sort it in descending order.
4) Return the first 'N' elements from the array

Time complexity: O(n log n)

The approach can be optimized by using a Priority Queue to store the list. Or by computing the word-frequency table on app startup, and then on every subsequent request returning the top 'N' elements. (Complexity: O(n))

Front-end deployed using GitHub pages. Backend API deployed on Heroku.

