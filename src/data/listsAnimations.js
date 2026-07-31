// Animation configs for all 55 Lists problems
// Each has: title, pattern, explanation, difficulty, steps[]

export const listsAnimations = {


"Array Partition": {
  title: "Array Partition",
  pattern: "Sorting + Greedy",
  explanation: "Sort the array, then pair adjacent elements. The sum of minimums is maximized when pairs are as close as possible.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [1,4,3,2], highlights: [], pointers: [], desc: "Input: [1, 4, 3, 2], find pairs to maximize sum of min(pair)" },
    { type: "array", data: [1,2,3,4], highlights: [0,1,2,3], pointers: [], desc: "Step 1: Sort the array → [1, 2, 3, 4]" },
    { type: "array", data: [1,2,3,4], highlights: [0,1], pointers: [], desc: "Pair (1,2): min = 1", vars: { sum: 1 } },
    { type: "array", data: [1,2,3,4], highlights: [2,3], pointers: [], desc: "Pair (3,4): min = 3", vars: { sum: 4 } },
    { type: "array", data: [1,2,3,4], sorted: [0,1,2,3], pointers: [], desc: "Answer: 1 + 3 = 4 ✓", vars: { result: 4 } },
  ]
},

"Best Time to Buy and Sell Stock": {
  title: "Best Time to Buy and Sell Stock",
  pattern: "Greedy / Sliding Window",
  explanation: "Track the minimum price seen so far. At each day, calculate profit if we sold today. Keep the maximum profit.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [7,1,5,3,6,4], highlights: [], pointers: [], desc: "Prices: [7,1,5,3,6,4]. Find max profit from one buy + one sell." },
    { type: "array", data: [7,1,5,3,6,4], highlights: [0], pointers: [{idx:0,label:"buy",color:"var(--accent-blue)"}], desc: "Day 0: price=7, min_price=7, profit=0", vars: {min_price:7,max_profit:0} },
    { type: "array", data: [7,1,5,3,6,4], highlights: [1], pointers: [{idx:1,label:"buy",color:"var(--accent-blue)"}], desc: "Day 1: price=1 < min_price → update min_price=1", vars: {min_price:1,max_profit:0} },
    { type: "array", data: [7,1,5,3,6,4], highlights: [2], pointers: [{idx:1,label:"buy",color:"var(--accent-blue)"},{idx:2,label:"sell",color:"var(--accent-green)"}], desc: "Day 2: price=5, profit=5-1=4 → update max_profit=4", vars: {min_price:1,max_profit:4} },
    { type: "array", data: [7,1,5,3,6,4], highlights: [3], pointers: [{idx:1,label:"buy",color:"var(--accent-blue)"}], desc: "Day 3: price=3, profit=3-1=2 < max_profit", vars: {min_price:1,max_profit:4} },
    { type: "array", data: [7,1,5,3,6,4], highlights: [4], pointers: [{idx:1,label:"buy",color:"var(--accent-blue)"},{idx:4,label:"sell",color:"var(--accent-green)"}], desc: "Day 4: price=6, profit=6-1=5 → update max_profit=5!", vars: {min_price:1,max_profit:5} },
    { type: "array", data: [7,1,5,3,6,4], highlights: [5], pointers: [{idx:1,label:"buy",color:"var(--accent-blue)"},{idx:4,label:"sell",color:"var(--accent-green)"}], desc: "Day 5: price=4, profit=4-1=3 < max_profit", vars: {min_price:1,max_profit:5} },
    { type: "array", data: [7,1,5,3,6,4], sorted: [1,4], pointers: [{idx:1,label:"buy",color:"var(--accent-blue)"},{idx:4,label:"sell",color:"var(--accent-green)"}], desc: "Answer: Buy at 1, sell at 6 → profit = 5 ✓", vars: {result:5} },
  ]
},


"Contains Duplicate": {
  title: "Contains Duplicate",
  pattern: "Hash Set",
  explanation: "Use a set to track seen numbers. If we see a number already in the set, there's a duplicate.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [1,2,3,1], highlights: [], pointers: [], desc: "Input: [1,2,3,1]. Check if any value appears twice." },
    { type: "array", data: [1,2,3,1], highlights: [0], pointers: [], desc: "See 1 → add to set", vars: {set:"{1}"} },
    { type: "array", data: [1,2,3,1], highlights: [1], pointers: [], desc: "See 2 → add to set", vars: {set:"{1,2}"} },
    { type: "array", data: [1,2,3,1], highlights: [2], pointers: [], desc: "See 3 → add to set", vars: {set:"{1,2,3}"} },
    { type: "array", data: [1,2,3,1], highlights: [3], swaps: [3], pointers: [], desc: "See 1 → already in set! Duplicate found! ✓", vars: {set:"{1,2,3}",result:true} },
  ]
},

"Diet Plan Performance": {
  title: "Diet Plan Performance",
  pattern: "Fixed Sliding Window",
  explanation: "Use a window of size k. Slide across the array, computing the sum and comparing with thresholds.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [1,2,3,4,5], highlights: [], pointers: [], desc: "calories=[1,2,3,4,5], k=1, lower=3, upper=3" },
    { type: "array", data: [1,2,3,4,5], window: [0], pointers: [], desc: "Window sum=1 < lower(3) → points -= 1", vars: {points:-1} },
    { type: "array", data: [1,2,3,4,5], window: [1], pointers: [], desc: "Window sum=2 < lower(3) → points -= 1", vars: {points:-2} },
    { type: "array", data: [1,2,3,4,5], window: [2], pointers: [], desc: "Window sum=3, between lower and upper → no change", vars: {points:-2} },
    { type: "array", data: [1,2,3,4,5], window: [3], pointers: [], desc: "Window sum=4 > upper(3) → points += 1", vars: {points:-1} },
    { type: "array", data: [1,2,3,4,5], window: [4], pointers: [], desc: "Window sum=5 > upper(3) → points += 1", vars: {points:0} },
    { type: "array", data: [1,2,3,4,5], sorted: [0,1,2,3,4], pointers: [], desc: "Answer: 0 ✓", vars: {result:0} },
  ]
},

"Find Pivot Index": {
  title: "Find Pivot Index",
  pattern: "Prefix Sum",
  explanation: "At each index, check if left sum equals right sum. Use total sum to avoid recomputing.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [1,7,3,6,5,6], highlights: [], pointers: [], desc: "Find index where left sum = right sum" },
    { type: "array", data: [1,7,3,6,5,6], highlights: [0], pointers: [{idx:0,label:"pivot",color:"var(--accent-orange)"}], desc: "i=0: left=0, right=27. Not equal.", vars: {left:0,right:27,total:28} },
    { type: "array", data: [1,7,3,6,5,6], highlights: [1], pointers: [{idx:1,label:"pivot",color:"var(--accent-orange)"}], desc: "i=1: left=1, right=20. Not equal.", vars: {left:1,right:20} },
    { type: "array", data: [1,7,3,6,5,6], highlights: [2], pointers: [{idx:2,label:"pivot",color:"var(--accent-orange)"}], desc: "i=2: left=8, right=17. Not equal.", vars: {left:8,right:17} },
    { type: "array", data: [1,7,3,6,5,6], highlights: [3], pointers: [{idx:3,label:"pivot",color:"var(--accent-green)"}], desc: "i=3: left=11, right=11. EQUAL! ✓ Pivot found!", vars: {left:11,right:11,result:3} },
  ]
},


"Majority Element": {
  title: "Majority Element",
  pattern: "Boyer-Moore Voting",
  explanation: "Track a candidate and a count. If count hits 0, pick new candidate. The majority element always survives.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [2,2,1,1,1,2,2], highlights: [], pointers: [], desc: "Find element appearing more than n/2 times" },
    { type: "array", data: [2,2,1,1,1,2,2], highlights: [0], pointers: [], desc: "candidate=2, count=1", vars: {candidate:2,count:1} },
    { type: "array", data: [2,2,1,1,1,2,2], highlights: [1], pointers: [], desc: "Same as candidate → count++", vars: {candidate:2,count:2} },
    { type: "array", data: [2,2,1,1,1,2,2], highlights: [2], pointers: [], desc: "Different → count--", vars: {candidate:2,count:1} },
    { type: "array", data: [2,2,1,1,1,2,2], highlights: [3], pointers: [], desc: "Different → count-- → 0!", vars: {candidate:2,count:0} },
    { type: "array", data: [2,2,1,1,1,2,2], highlights: [4], pointers: [], desc: "Count=0, new candidate=1, count=1", vars: {candidate:1,count:1} },
    { type: "array", data: [2,2,1,1,1,2,2], highlights: [5], pointers: [], desc: "Different → count--", vars: {candidate:1,count:0} },
    { type: "array", data: [2,2,1,1,1,2,2], highlights: [6], pointers: [], desc: "Count=0, new candidate=2, count=1", vars: {candidate:2,count:1} },
    { type: "array", data: [2,2,1,1,1,2,2], sorted: [0,1,5,6], pointers: [], desc: "Answer: 2 (appears 4/7 times) ✓", vars: {result:2} },
  ]
},

"Maximum Average Subarray I": {
  title: "Maximum Average Subarray I",
  pattern: "Fixed Sliding Window",
  explanation: "Slide a window of size k, track the running sum by adding new element and removing old one.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [1,12,-5,-6,50,3], highlights: [], pointers: [], desc: "Find max average of subarray with length k=4" },
    { type: "array", data: [1,12,-5,-6,50,3], window: [0,1,2,3], pointers: [], desc: "Window [0..3]: sum = 1+12+(-5)+(-6) = 2", vars: {sum:2,maxSum:2} },
    { type: "array", data: [1,12,-5,-6,50,3], window: [1,2,3,4], pointers: [], desc: "Slide: +50, -1 → sum=51", vars: {sum:51,maxSum:51} },
    { type: "array", data: [1,12,-5,-6,50,3], window: [2,3,4,5], pointers: [], desc: "Slide: +3, -12 → sum=42", vars: {sum:42,maxSum:51} },
    { type: "array", data: [1,12,-5,-6,50,3], sorted: [1,2,3,4], pointers: [], desc: "Max sum = 51, average = 51/4 = 12.75 ✓", vars: {result:12.75} },
  ]
},

"Maximum Consecutive Ones": {
  title: "Maximum Consecutive Ones",
  pattern: "Linear Scan",
  explanation: "Count consecutive 1s, reset when we hit a 0. Track the maximum count seen.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [1,1,0,1,1,1], highlights: [], pointers: [], desc: "Find max consecutive 1s" },
    { type: "array", data: [1,1,0,1,1,1], highlights: [0], pointers: [], desc: "1 → count=1", vars: {count:1,max:1} },
    { type: "array", data: [1,1,0,1,1,1], highlights: [0,1], pointers: [], desc: "1 → count=2", vars: {count:2,max:2} },
    { type: "array", data: [1,1,0,1,1,1], highlights: [2], pointers: [], desc: "0 → reset count=0", vars: {count:0,max:2} },
    { type: "array", data: [1,1,0,1,1,1], highlights: [3], pointers: [], desc: "1 → count=1", vars: {count:1,max:2} },
    { type: "array", data: [1,1,0,1,1,1], highlights: [3,4], pointers: [], desc: "1 → count=2", vars: {count:2,max:2} },
    { type: "array", data: [1,1,0,1,1,1], highlights: [3,4,5], pointers: [], desc: "1 → count=3, new max!", vars: {count:3,max:3} },
    { type: "array", data: [1,1,0,1,1,1], sorted: [3,4,5], pointers: [], desc: "Answer: 3 ✓", vars: {result:3} },
  ]
},


"Meeting Rooms": {
  title: "Meeting Rooms",
  pattern: "Sort + Linear Scan",
  explanation: "Sort intervals by start time. Check if any meeting starts before the previous one ends.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: ["[0,30]","[5,10]","[15,20]"], highlights: [], pointers: [], desc: "Can a person attend all meetings? Sort by start time." },
    { type: "array", data: ["[0,30]","[5,10]","[15,20]"], highlights: [0,1], pointers: [], desc: "Meeting [5,10] starts at 5 < 30 (prev end). OVERLAP!", vars: {overlap:true} },
    { type: "array", data: ["[0,30]","[5,10]","[15,20]"], swaps: [0,1], pointers: [], desc: "Answer: false — can't attend all meetings ✗", vars: {result:false} },
  ]
},

"Missing Number": {
  title: "Missing Number",
  pattern: "Math (Sum Formula)",
  explanation: "Sum of 0 to n is n*(n+1)/2. Subtract actual sum to find the missing number.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [3,0,1], highlights: [], pointers: [], desc: "nums=[3,0,1], n=3. One number from 0..3 is missing." },
    { type: "info", visual: "Expected sum = n*(n+1)/2 = 3*4/2 = 6", desc: "Calculate expected sum of [0,1,2,3]", vars: {expected:6} },
    { type: "array", data: [3,0,1], highlights: [0,1,2], pointers: [], desc: "Actual sum = 3+0+1 = 4", vars: {expected:6,actual:4} },
    { type: "info", visual: "Missing = 6 - 4 = 2", desc: "Answer: 6 - 4 = 2 ✓", vars: {result:2} },
  ]
},

"Move Zeroes": {
  title: "Move Zeroes",
  pattern: "Two Pointers (Read/Write)",
  explanation: "Use a write pointer for non-zero elements. Read through the array, writing non-zeros to the front.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [0,1,0,3,12], highlights: [], pointers: [{idx:0,label:"w",color:"var(--accent-blue)"},{idx:0,label:"r",color:"var(--accent-green)"}], desc: "Move all zeros to end, keep relative order" },
    { type: "array", data: [0,1,0,3,12], highlights: [0], pointers: [{idx:0,label:"w",color:"var(--accent-blue)"},{idx:0,label:"r",color:"var(--accent-green)"}], desc: "r=0: arr[0]=0, skip", vars: {} },
    { type: "array", data: [1,1,0,3,12], highlights: [0], pointers: [{idx:1,label:"w",color:"var(--accent-blue)"},{idx:1,label:"r",color:"var(--accent-green)"}], desc: "r=1: arr[1]=1≠0, write to w=0", vars: {} },
    { type: "array", data: [1,1,0,3,12], highlights: [2], pointers: [{idx:1,label:"w",color:"var(--accent-blue)"},{idx:2,label:"r",color:"var(--accent-green)"}], desc: "r=2: arr[2]=0, skip", vars: {} },
    { type: "array", data: [1,3,0,3,12], highlights: [1], pointers: [{idx:2,label:"w",color:"var(--accent-blue)"},{idx:3,label:"r",color:"var(--accent-green)"}], desc: "r=3: arr[3]=3≠0, write to w=1", vars: {} },
    { type: "array", data: [1,3,12,3,12], highlights: [2], pointers: [{idx:3,label:"w",color:"var(--accent-blue)"},{idx:4,label:"r",color:"var(--accent-green)"}], desc: "r=4: arr[4]=12≠0, write to w=2", vars: {} },
    { type: "array", data: [1,3,12,0,0], sorted: [0,1,2], pointers: [], desc: "Fill remaining with 0s → [1,3,12,0,0] ✓", vars: {result:"[1,3,12,0,0]"} },
  ]
},


"Pascal's Triangle": {
  title: "Pascal's Triangle",
  pattern: "Dynamic Programming",
  explanation: "Each number is the sum of the two numbers above it. Build row by row.",
  difficulty: "Easy",
  steps: [
    { type: "info", visual: "    [1]\n   [1,1]\n  [1,2,1]\n [1,3,3,1]\n[1,4,6,4,1]", desc: "Build Pascal's Triangle row by row" },
    { type: "array", data: [1], highlights: [0], pointers: [], desc: "Row 0: [1]" },
    { type: "array", data: [1,1], highlights: [0,1], pointers: [], desc: "Row 1: [1,1]" },
    { type: "array", data: [1,2,1], highlights: [1], pointers: [], desc: "Row 2: [1, 1+1=2, 1]" },
    { type: "array", data: [1,3,3,1], highlights: [1,2], pointers: [], desc: "Row 3: [1, 1+2=3, 2+1=3, 1]" },
    { type: "array", data: [1,4,6,4,1], highlights: [1,2,3], pointers: [], desc: "Row 4: [1, 1+3=4, 3+3=6, 3+1=4, 1] ✓" },
  ]
},

"Pascal's Triangle II": {
  title: "Pascal's Triangle II",
  pattern: "Space-Optimized DP",
  explanation: "Build only the target row using a single array, updating right-to-left to avoid overwriting.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [1,0,0,0], highlights: [], pointers: [], desc: "Get row 3 of Pascal's Triangle (0-indexed)" },
    { type: "array", data: [1,1,0,0], highlights: [1], pointers: [], desc: "After processing row 1: [1,1,0,0]" },
    { type: "array", data: [1,2,1,0], highlights: [1,2], pointers: [], desc: "After processing row 2: [1,2,1,0]" },
    { type: "array", data: [1,3,3,1], highlights: [1,2,3], pointers: [], desc: "After processing row 3: [1,3,3,1] ✓" },
  ]
},

"Plus One": {
  title: "Plus One",
  pattern: "Right-to-Left Carry",
  explanation: "Start from the rightmost digit. If it's 9, set to 0 and carry. Otherwise, increment and stop.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [1,2,9], highlights: [], pointers: [], desc: "digits=[1,2,9], add 1" },
    { type: "array", data: [1,2,9], highlights: [2], pointers: [{idx:2,label:"i",color:"var(--accent-blue)"}], desc: "i=2: digit=9, 9+1=10 → set to 0, carry=1", vars: {carry:1} },
    { type: "array", data: [1,2,0], highlights: [2], pointers: [{idx:1,label:"i",color:"var(--accent-blue)"}], desc: "Carry! Now check i=1" },
    { type: "array", data: [1,3,0], highlights: [1], pointers: [{idx:1,label:"i",color:"var(--accent-blue)"}], desc: "i=1: digit=2, 2+1=3, no carry. Done!", vars: {carry:0} },
    { type: "array", data: [1,3,0], sorted: [0,1,2], pointers: [], desc: "Answer: [1,3,0] ✓", vars: {result:"[1,3,0]"} },
  ]
},

"Remove Duplicates from Sorted Array": {
  title: "Remove Duplicates from Sorted Array",
  pattern: "Two Pointers (Read/Write)",
  explanation: "Since array is sorted, duplicates are adjacent. Use write pointer to track unique position.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [1,1,2,2,3], highlights: [], pointers: [{idx:0,label:"w",color:"var(--accent-blue)"},{idx:1,label:"r",color:"var(--accent-green)"}], desc: "Remove duplicates in-place from sorted array" },
    { type: "array", data: [1,1,2,2,3], highlights: [1], pointers: [{idx:0,label:"w",color:"var(--accent-blue)"},{idx:1,label:"r",color:"var(--accent-green)"}], desc: "r=1: arr[1]=1 == arr[w]=1, skip (duplicate)" },
    { type: "array", data: [1,2,2,2,3], highlights: [1], pointers: [{idx:1,label:"w",color:"var(--accent-blue)"},{idx:2,label:"r",color:"var(--accent-green)"}], desc: "r=2: arr[2]=2 ≠ arr[w]=1, w++, write 2" },
    { type: "array", data: [1,2,2,2,3], highlights: [3], pointers: [{idx:1,label:"w",color:"var(--accent-blue)"},{idx:3,label:"r",color:"var(--accent-green)"}], desc: "r=3: arr[3]=2 == arr[w]=2, skip (duplicate)" },
    { type: "array", data: [1,2,3,2,3], highlights: [2], pointers: [{idx:2,label:"w",color:"var(--accent-blue)"},{idx:4,label:"r",color:"var(--accent-green)"}], desc: "r=4: arr[4]=3 ≠ arr[w]=2, w++, write 3" },
    { type: "array", data: [1,2,3,2,3], sorted: [0,1,2], pointers: [], desc: "Answer: k=3, first 3 elements are [1,2,3] ✓", vars: {k:3} },
  ]
},


"Remove Element": {
  title: "Remove Element",
  pattern: "Two Pointers",
  explanation: "Use write pointer, copy non-target values to front.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [3,2,2,3], highlights: [], pointers: [{idx:0,label:"w",color:"var(--accent-blue)"},{idx:0,label:"r",color:"var(--accent-green)"}], desc: "Remove all 3s from [3,2,2,3]" },
    { type: "array", data: [3,2,2,3], highlights: [0], pointers: [{idx:0,label:"w",color:"var(--accent-blue)"},{idx:0,label:"r",color:"var(--accent-green)"}], desc: "r=0: val=3 == target, skip" },
    { type: "array", data: [2,2,2,3], highlights: [0], pointers: [{idx:1,label:"w",color:"var(--accent-blue)"},{idx:1,label:"r",color:"var(--accent-green)"}], desc: "r=1: val=2 ≠ 3, write to w=0, w++" },
    { type: "array", data: [2,2,2,3], highlights: [1], pointers: [{idx:2,label:"w",color:"var(--accent-blue)"},{idx:2,label:"r",color:"var(--accent-green)"}], desc: "r=2: val=2 ≠ 3, write to w=1, w++" },
    { type: "array", data: [2,2,2,3], highlights: [3], pointers: [{idx:2,label:"w",color:"var(--accent-blue)"},{idx:3,label:"r",color:"var(--accent-green)"}], desc: "r=3: val=3 == target, skip" },
    { type: "array", data: [2,2,2,3], sorted: [0,1], pointers: [], desc: "Answer: k=2, first 2 elements are [2,2] ✓", vars: {k:2} },
  ]
},

"Single Number": {
  title: "Single Number",
  pattern: "Bit Manipulation (XOR)",
  explanation: "XOR of a number with itself is 0. XOR all numbers — duplicates cancel out, leaving the single one.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [4,1,2,1,2], highlights: [], pointers: [], desc: "Find the number that appears only once" },
    { type: "array", data: [4,1,2,1,2], highlights: [0], pointers: [], desc: "result = 0 XOR 4 = 4", vars: {result:4} },
    { type: "array", data: [4,1,2,1,2], highlights: [1], pointers: [], desc: "result = 4 XOR 1 = 5", vars: {result:5} },
    { type: "array", data: [4,1,2,1,2], highlights: [2], pointers: [], desc: "result = 5 XOR 2 = 7", vars: {result:7} },
    { type: "array", data: [4,1,2,1,2], highlights: [3], pointers: [], desc: "result = 7 XOR 1 = 6 (1 cancels)", vars: {result:6} },
    { type: "array", data: [4,1,2,1,2], highlights: [4], pointers: [], desc: "result = 6 XOR 2 = 4 (2 cancels)", vars: {result:4} },
    { type: "array", data: [4,1,2,1,2], sorted: [0], pointers: [], desc: "Answer: 4 ✓ (all pairs cancelled)", vars: {result:4} },
  ]
},

"Summary Ranges": {
  title: "Summary Ranges",
  pattern: "Linear Scan",
  explanation: "Track start of each range. When next number isn't consecutive, close the current range.",
  difficulty: "Easy",
  steps: [
    { type: "array", data: [0,1,2,4,5,7], highlights: [], pointers: [], desc: "Group consecutive numbers into ranges" },
    { type: "array", data: [0,1,2,4,5,7], window: [0,1,2], pointers: [], desc: "0,1,2 are consecutive → range '0→2'", vars: {ranges:"['0→2']"} },
    { type: "array", data: [0,1,2,4,5,7], window: [3,4], pointers: [], desc: "4,5 are consecutive → range '4→5'", vars: {ranges:"['0→2','4→5']"} },
    { type: "array", data: [0,1,2,4,5,7], window: [5], pointers: [], desc: "7 alone → range '7'", vars: {ranges:"['0→2','4→5','7']"} },
    { type: "array", data: [0,1,2,4,5,7], sorted: [0,1,2,3,4,5], pointers: [], desc: "Answer: ['0→2','4→5','7'] ✓" },
  ]
},


"First Missing Positive": {
  title: "First Missing Positive",
  pattern: "Cyclic Sort / Index Mapping",
  explanation: "Place each number at its correct index (num at index num-1). Then find first index where arr[i] != i+1.",
  difficulty: "Hard",
  steps: [
    { type: "array", data: [3,4,-1,1], highlights: [], pointers: [], desc: "Find smallest missing positive integer" },
    { type: "array", data: [-1,4,3,1], swaps: [0,2], pointers: [], desc: "Swap arr[0]=3 to index 2", vars: {action:"3→idx2"} },
    { type: "array", data: [-1,4,3,1], highlights: [0], pointers: [], desc: "arr[0]=-1, ignore negatives" },
    { type: "array", data: [-1,1,3,4], swaps: [1,3], pointers: [], desc: "Swap arr[1]=4 to index 3", vars: {action:"4→idx3"} },
    { type: "array", data: [1,-1,3,4], swaps: [0,1], pointers: [], desc: "Swap arr[1]=1 to index 0", vars: {action:"1→idx0"} },
    { type: "array", data: [1,-1,3,4], highlights: [1], pointers: [{idx:1,label:"miss",color:"var(--accent-red)"}], desc: "Check: arr[1]=-1 ≠ 2. Missing = 2! ✓", vars: {result:2} },
  ]
},

"Minimum Window Subsequence": {
  title: "Minimum Window Subsequence",
  pattern: "Two Pointers / DP",
  explanation: "Find shortest substring of S containing T as a subsequence. Use forward pass to find end, backward pass for start.",
  difficulty: "Hard",
  steps: [
    { type: "string", data: "abcdebdde", highlights: [], pointers: [], desc: "S='abcdebdde', T='bde'. Find min window containing T as subsequence." },
    { type: "string", data: "abcdebdde", window: [1,2,3,4], pointers: [{idx:1,label:"b",color:"var(--accent-blue)"},{idx:3,label:"d",color:"var(--accent-orange)"},{idx:4,label:"e",color:"var(--accent-green)"}], desc: "Found subsequence: 'bcde' (length 4)" },
    { type: "string", data: "abcdebdde", window: [5,6,7], pointers: [{idx:5,label:"b",color:"var(--accent-blue)"},{idx:6,label:"d",color:"var(--accent-orange)"},{idx:7,label:"e",color:"var(--accent-green)"}], desc: "Found shorter: 'bde' (length 3)!" },
    { type: "string", data: "abcdebdde", sorted: [5,6,7], pointers: [], desc: "Answer: 'bde' (length 3) ✓", vars: {result:"bde"} },
  ]
},

"Subarrays with K Different Integers": {
  title: "Subarrays with K Different Integers",
  pattern: "Sliding Window (At Most K trick)",
  explanation: "Count subarrays with exactly K distinct = atMost(K) - atMost(K-1). Each atMost uses sliding window.",
  difficulty: "Hard",
  steps: [
    { type: "array", data: [1,2,1,2,3], highlights: [], pointers: [], desc: "Count subarrays with exactly K=2 different integers" },
    { type: "info", visual: "exactly(K) = atMost(K) - atMost(K-1)", desc: "Key insight: exact = atMost(2) - atMost(1)" },
    { type: "array", data: [1,2,1,2,3], window: [0,1], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:1,label:"R",color:"var(--accent-green)"}], desc: "atMost(2): window has {1,2} → valid subarrays += 2", vars: {atMost2:0} },
    { type: "array", data: [1,2,1,2,3], window: [0,1,2,3], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}], desc: "Expand window, still 2 distinct → count subarrays", vars: {} },
    { type: "info", visual: "atMost(2) = 12, atMost(1) = 5\nexactly(2) = 12 - 5 = 7", desc: "Answer: 7 subarrays with exactly 2 distinct ✓", vars: {result:7} },
  ]
},

"Trapping Rain Water": {
  title: "Trapping Rain Water",
  pattern: "Two Pointers",
  explanation: "Water at each position = min(left_max, right_max) - height. Use two pointers from both ends.",
  difficulty: "Hard",
  steps: [
    { type: "array", data: [0,1,0,2,1,0,1,3,2,1,2,1], highlights: [], pointers: [], desc: "How much water can be trapped?" },
    { type: "array", data: [0,1,0,2,1,0,1,3,2,1,2,1], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:11,label:"R",color:"var(--accent-green)"}], desc: "Two pointers: left_max=0, right_max=0", vars: {left_max:0,right_max:0,water:0} },
    { type: "array", data: [0,1,0,2,1,0,1,3,2,1,2,1], highlights: [2], pointers: [{idx:2,label:"L",color:"var(--accent-blue)"},{idx:11,label:"R",color:"var(--accent-green)"}], desc: "At idx 2: left_max=1, height=0, water+=1-0=1", vars: {left_max:1,water:1} },
    { type: "array", data: [0,1,0,2,1,0,1,3,2,1,2,1], highlights: [4], pointers: [{idx:4,label:"L",color:"var(--accent-blue)"},{idx:11,label:"R",color:"var(--accent-green)"}], desc: "At idx 4: left_max=2, height=1, water+=2-1=1", vars: {left_max:2,water:2} },
    { type: "array", data: [0,1,0,2,1,0,1,3,2,1,2,1], highlights: [5], pointers: [{idx:5,label:"L",color:"var(--accent-blue)"},{idx:11,label:"R",color:"var(--accent-green)"}], desc: "At idx 5: left_max=2, height=0, water+=2-0=2", vars: {left_max:2,water:4} },
    { type: "array", data: [0,1,0,2,1,0,1,3,2,1,2,1], highlights: [9], pointers: [{idx:7,label:"L",color:"var(--accent-blue)"},{idx:9,label:"R",color:"var(--accent-green)"}], desc: "At idx 9: right_max=2, height=1, water+=2-1=1", vars: {right_max:2,water:5} },
    { type: "array", data: [0,1,0,2,1,0,1,3,2,1,2,1], sorted: [2,4,5,6,9], pointers: [], desc: "Total water trapped: 6 ✓", vars: {result:6} },
  ]
},


"3Sum": {
  title: "3Sum",
  pattern: "Sort + Two Pointers",
  explanation: "Sort array, fix one number, use two pointers on the rest to find pairs that sum to its negative.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [-1,0,1,2,-1,-4], highlights: [], pointers: [], desc: "Find all triplets that sum to 0" },
    { type: "array", data: [-4,-1,-1,0,1,2], highlights: [0,1,2,3,4,5], pointers: [], desc: "Sort first: [-4,-1,-1,0,1,2]" },
    { type: "array", data: [-4,-1,-1,0,1,2], highlights: [1], pointers: [{idx:1,label:"fix",color:"var(--accent-orange)"},{idx:2,label:"L",color:"var(--accent-blue)"},{idx:5,label:"R",color:"var(--accent-green)"}], desc: "Fix -1: find L+R = 1", vars: {target:1} },
    { type: "array", data: [-4,-1,-1,0,1,2], sorted: [1,3,5], pointers: [{idx:1,label:"fix",color:"var(--accent-orange)"},{idx:3,label:"L",color:"var(--accent-blue)"},{idx:5,label:"R",color:"var(--accent-green)"}], desc: "Found! -1+0+2=0 → triplet [-1,0,2]", vars: {triplet:"[-1,0,2]"} },
    { type: "array", data: [-4,-1,-1,0,1,2], sorted: [1,4,5], pointers: [{idx:1,label:"fix",color:"var(--accent-orange)"},{idx:4,label:"L",color:"var(--accent-blue)"},{idx:5,label:"R",color:"var(--accent-green)"}], desc: "Found! -1+(-1)+2=0 → triplet [-1,-1,2]", vars: {triplet:"[-1,-1,2]"} },
    { type: "info", visual: "Result: [[-1,-1,2], [-1,0,1]]", desc: "Answer: [[-1,-1,2], [-1,0,1]] ✓" },
  ]
},

"4Sum": {
  title: "4Sum",
  pattern: "Sort + Two Pointers (Nested)",
  explanation: "Fix two numbers with outer loops, then use two pointers for the remaining pair. Sort to skip duplicates.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,0,-1,0,-2,2], highlights: [], pointers: [], desc: "Find all quadruplets summing to target=0" },
    { type: "array", data: [-2,-1,0,0,1,2], highlights: [0,1,2,3,4,5], pointers: [], desc: "Sort: [-2,-1,0,0,1,2]" },
    { type: "array", data: [-2,-1,0,0,1,2], highlights: [0,1], pointers: [{idx:0,label:"i",color:"var(--accent-orange)"},{idx:1,label:"j",color:"var(--accent-pink)"},{idx:2,label:"L",color:"var(--accent-blue)"},{idx:5,label:"R",color:"var(--accent-green)"}], desc: "Fix i=0,j=1: need L+R=3", vars: {need:3} },
    { type: "array", data: [-2,-1,0,0,1,2], sorted: [0,1,4,5], pointers: [], desc: "Found: [-2,-1,1,2] sums to 0!", vars: {quad:"[-2,-1,1,2]"} },
    { type: "array", data: [-2,-1,0,0,1,2], sorted: [0,2,3,5], pointers: [], desc: "Found: [-2,0,0,2] sums to 0!", vars: {quad:"[-2,0,0,2]"} },
    { type: "info", visual: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]", desc: "Answer: 3 quadruplets found ✓" },
  ]
},

"Best Time to Buy and Sell Stock II": {
  title: "Best Time to Buy and Sell Stock II",
  pattern: "Greedy",
  explanation: "Collect every upward price movement. If tomorrow is higher, buy today and sell tomorrow.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [7,1,5,3,6,4], highlights: [], pointers: [], desc: "Multiple transactions allowed. Maximize total profit." },
    { type: "array", data: [7,1,5,3,6,4], highlights: [1,2], pointers: [], desc: "Buy at 1, sell at 5 → profit +4", vars: {profit:4} },
    { type: "array", data: [7,1,5,3,6,4], highlights: [3,4], pointers: [], desc: "Buy at 3, sell at 6 → profit +3", vars: {profit:7} },
    { type: "array", data: [7,1,5,3,6,4], sorted: [1,2,3,4], pointers: [], desc: "Total profit: 4+3 = 7 ✓", vars: {result:7} },
  ]
},

"Container With Most Water": {
  title: "Container With Most Water",
  pattern: "Two Pointers",
  explanation: "Start from both ends. Area = min(height[L], height[R]) * width. Move the shorter pointer inward.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,8,6,2,5,4,8,3,7], highlights: [], pointers: [], desc: "Find two lines forming container with most water" },
    { type: "array", data: [1,8,6,2,5,4,8,3,7], highlights: [0,8], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:8,label:"R",color:"var(--accent-green)"}], desc: "area = min(1,7)*8 = 8", vars: {area:8,max:8} },
    { type: "array", data: [1,8,6,2,5,4,8,3,7], highlights: [1,8], pointers: [{idx:1,label:"L",color:"var(--accent-blue)"},{idx:8,label:"R",color:"var(--accent-green)"}], desc: "Move L (shorter). area = min(8,7)*7 = 49!", vars: {area:49,max:49} },
    { type: "array", data: [1,8,6,2,5,4,8,3,7], highlights: [1,7], pointers: [{idx:1,label:"L",color:"var(--accent-blue)"},{idx:7,label:"R",color:"var(--accent-green)"}], desc: "Move R. area = min(8,3)*6 = 18", vars: {area:18,max:49} },
    { type: "array", data: [1,8,6,2,5,4,8,3,7], sorted: [1,8], pointers: [], desc: "Answer: 49 (lines at index 1 and 8) ✓", vars: {result:49} },
  ]
},


"Find All Duplicates in an Array": {
  title: "Find All Duplicates in an Array",
  pattern: "Index Marking",
  explanation: "Use the array itself as a hash map. Mark visited indices by negating. If already negative, it's a duplicate.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [4,3,2,7,8,2,3,1], highlights: [], pointers: [], desc: "Find all elements appearing twice (values 1..n)" },
    { type: "array", data: [4,3,2,7,8,2,3,1], highlights: [0], pointers: [], desc: "val=4 → mark idx 3 as visited (negate)", vars: {check:"idx 3"} },
    { type: "array", data: [4,3,2,7,8,2,3,1], highlights: [5], swaps: [5], pointers: [], desc: "val=2 → idx 1 already negative! → 2 is duplicate!", vars: {duplicates:"[2]"} },
    { type: "array", data: [4,3,2,7,8,2,3,1], highlights: [6], swaps: [6], pointers: [], desc: "val=3 → idx 2 already negative! → 3 is duplicate!", vars: {duplicates:"[2,3]"} },
    { type: "array", data: [4,3,2,7,8,2,3,1], sorted: [5,6], pointers: [], desc: "Answer: [2, 3] ✓", vars: {result:"[2,3]"} },
  ]
},

"Find the Duplicate Number": {
  title: "Find the Duplicate Number",
  pattern: "Floyd's Cycle Detection",
  explanation: "Treat values as next-pointers. A duplicate creates a cycle. Use slow/fast pointers to find it.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,3,4,2,2], highlights: [], pointers: [], desc: "Find duplicate without modifying array. O(1) space." },
    { type: "info", visual: "idx: 0→1→3→2→4→2→4→2...\nCycle at value 2!", desc: "Values as pointers create a cycle at the duplicate" },
    { type: "array", data: [1,3,4,2,2], highlights: [0,0], pointers: [{idx:0,label:"slow",color:"var(--accent-blue)"},{idx:0,label:"fast",color:"var(--accent-green)"}], desc: "Phase 1: slow=0, fast=0" },
    { type: "array", data: [1,3,4,2,2], highlights: [3,2], pointers: [{idx:3,label:"slow",color:"var(--accent-blue)"},{idx:2,label:"fast",color:"var(--accent-green)"}], desc: "slow→1→3, fast→1→3→2→4. They meet!", vars: {} },
    { type: "array", data: [1,3,4,2,2], highlights: [4], pointers: [{idx:4,label:"meet",color:"var(--accent-red)"}], desc: "Phase 2: reset one to start, move both by 1" },
    { type: "array", data: [1,3,4,2,2], sorted: [3,4], pointers: [], desc: "They meet at 2. Answer: 2 ✓", vars: {result:2} },
  ]
},

"Frequency of the Most Frequent Element": {
  title: "Frequency of the Most Frequent Element",
  pattern: "Sort + Sliding Window",
  explanation: "Sort, then use sliding window. Window is valid if we can make all elements equal to the max using k operations.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,2,4], highlights: [], pointers: [], desc: "k=5. Max frequency after at most k increments?" },
    { type: "array", data: [1,2,4], highlights: [0,1,2], pointers: [], desc: "Sorted. Try making all elements = 4" },
    { type: "array", data: [1,2,4], window: [0,1,2], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:2,label:"R",color:"var(--accent-green)"}], desc: "Cost = 4*3 - (1+2+4) = 12-7 = 5 ≤ k. Valid!", vars: {cost:5,freq:3} },
    { type: "array", data: [1,2,4], sorted: [0,1,2], pointers: [], desc: "Answer: 3 (make all elements 4) ✓", vars: {result:3} },
  ]
},

"Fruit Into Baskets": {
  title: "Fruit Into Baskets",
  pattern: "Sliding Window (At Most 2 Types)",
  explanation: "Longest subarray with at most 2 distinct values. Classic sliding window with hash map.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,2,1,2,3], highlights: [], pointers: [], desc: "Max fruits with 2 baskets (2 types allowed)" },
    { type: "array", data: [1,2,1,2,3], window: [0,1,2,3], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}], desc: "Window has types {1,2}, length=4", vars: {types:"{1,2}",max:4} },
    { type: "array", data: [1,2,1,2,3], highlights: [4], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}], desc: "Add 3: now 3 types! Shrink window from left", vars: {types:"{1,2,3}"} },
    { type: "array", data: [1,2,1,2,3], window: [3,4], pointers: [{idx:3,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}], desc: "Shrink until ≤2 types: window=[2,3]", vars: {types:"{2,3}",max:4} },
    { type: "array", data: [1,2,1,2,3], sorted: [0,1,2,3], pointers: [], desc: "Answer: 4 ✓", vars: {result:4} },
  ]
},

"Game of Life": {
  title: "Game of Life",
  pattern: "In-Place State Encoding",
  explanation: "Encode new state in unused bits. 2='was alive, now dead', 3='was dead, now alive'. Apply all at once.",
  difficulty: "Medium",
  steps: [
    { type: "matrix", data: [[0,1,0],[0,0,1],[1,1,1],[0,0,0]], highlights: [], desc: "Apply Game of Life rules simultaneously" },
    { type: "matrix", data: [[0,1,0],[0,0,1],[1,1,1],[0,0,0]], highlights: [[1,0],[1,1],[1,2]], desc: "Count live neighbors for each cell" },
    { type: "matrix", data: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]], highlights: [[0,1],[2,0]], desc: "Apply rules: underpopulation, survival, reproduction, overpopulation" },
    { type: "matrix", data: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]], highlights: [], desc: "Next generation computed ✓" },
  ]
},


"Grumpy Bookstore Owner": {
  title: "Grumpy Bookstore Owner",
  pattern: "Fixed Sliding Window",
  explanation: "Always count non-grumpy customers. Slide window of size k to find where suppressing grumpiness adds the most.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,0,1,2,1,1,7,5], highlights: [], pointers: [], desc: "customers, grumpy=[0,1,0,1,0,1,0,1], minutes=3" },
    { type: "array", data: [1,0,1,2,1,1,7,5], window: [0,1,2], pointers: [], desc: "Window [0..2]: extra saved = 0 (grumpy minutes in window)", vars: {base:10,extra:0} },
    { type: "array", data: [1,0,1,2,1,1,7,5], window: [5,6,7], pointers: [], desc: "Window [5..7]: extra saved = 1+5 = 6 (best!)", vars: {base:10,extra:6} },
    { type: "array", data: [1,0,1,2,1,1,7,5], sorted: [5,6,7], pointers: [], desc: "Answer: 10 + 6 = 16 ✓", vars: {result:16} },
  ]
},

"Insert Interval": {
  title: "Insert Interval",
  pattern: "Interval Merge",
  explanation: "Add intervals before the new one, merge overlapping ones, add intervals after.",
  difficulty: "Medium",
  steps: [
    { type: "info", visual: "intervals: [[1,3],[6,9]]\nnewInterval: [2,5]", desc: "Insert [2,5] into sorted intervals" },
    { type: "array", data: ["[1,3]","[2,5]","[6,9]"], highlights: [0,1], pointers: [], desc: "[1,3] overlaps [2,5] → merge to [1,5]" },
    { type: "array", data: ["[1,5]","[6,9]"], highlights: [0], pointers: [], desc: "[1,5] doesn't overlap [6,9]. Done!" },
    { type: "array", data: ["[1,5]","[6,9]"], sorted: [0,1], pointers: [], desc: "Answer: [[1,5],[6,9]] ✓" },
  ]
},

"Jump Game": {
  title: "Jump Game",
  pattern: "Greedy",
  explanation: "Track the farthest index reachable. If current index exceeds farthest, we can't proceed.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [2,3,1,1,4], highlights: [], pointers: [], desc: "Can we reach the last index?" },
    { type: "array", data: [2,3,1,1,4], highlights: [0], pointers: [{idx:0,label:"i",color:"var(--accent-blue)"}], desc: "i=0: farthest = max(0, 0+2) = 2", vars: {farthest:2} },
    { type: "array", data: [2,3,1,1,4], highlights: [1], pointers: [{idx:1,label:"i",color:"var(--accent-blue)"}], desc: "i=1: farthest = max(2, 1+3) = 4", vars: {farthest:4} },
    { type: "array", data: [2,3,1,1,4], highlights: [2], pointers: [{idx:2,label:"i",color:"var(--accent-blue)"}], desc: "i=2: farthest = max(4, 2+1) = 4", vars: {farthest:4} },
    { type: "array", data: [2,3,1,1,4], sorted: [0,1,2,3,4], pointers: [], desc: "farthest=4 ≥ last index(4). Yes! ✓", vars: {result:true} },
  ]
},

"Jump Game II": {
  title: "Jump Game II",
  pattern: "Greedy BFS",
  explanation: "Think of it as BFS levels. Track current level end and farthest reachable. When hitting level end, jump.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [2,3,1,1,4], highlights: [], pointers: [], desc: "Minimum jumps to reach end" },
    { type: "array", data: [2,3,1,1,4], window: [0], pointers: [], desc: "Level 0: at index 0, can reach up to 2", vars: {jumps:0,end:0,farthest:2} },
    { type: "array", data: [2,3,1,1,4], window: [1,2], pointers: [], desc: "Level 1: indices 1-2, farthest = max(1+3,2+1) = 4", vars: {jumps:1,end:2,farthest:4} },
    { type: "array", data: [2,3,1,1,4], sorted: [3,4], pointers: [], desc: "farthest ≥ last index after 2 jumps ✓", vars: {jumps:2,result:2} },
  ]
},


"Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit": {
  title: "Longest Continuous Subarray With Absolute Diff ≤ Limit",
  pattern: "Sliding Window + Monotonic Deques",
  explanation: "Use two deques to track window min and max. Shrink when max-min > limit.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [8,2,4,7], highlights: [], pointers: [], desc: "limit=4. Longest subarray where max-min ≤ 4" },
    { type: "array", data: [8,2,4,7], window: [0], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:0,label:"R",color:"var(--accent-green)"}], desc: "[8]: max-min = 0 ≤ 4 ✓", vars: {len:1} },
    { type: "array", data: [8,2,4,7], highlights: [0,1], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:1,label:"R",color:"var(--accent-green)"}], desc: "[8,2]: max-min = 6 > 4 ✗ shrink!", vars: {} },
    { type: "array", data: [8,2,4,7], window: [1,2,3], pointers: [{idx:1,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}], desc: "[2,4,7]: max-min = 5 > 4, shrink", vars: {} },
    { type: "array", data: [8,2,4,7], window: [2,3], pointers: [{idx:2,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}], desc: "[4,7]: max-min = 3 ≤ 4 ✓ length=2", vars: {max_len:2} },
    { type: "array", data: [8,2,4,7], sorted: [2,3], pointers: [], desc: "Answer: 2 ✓", vars: {result:2} },
  ]
},

"Longest Subarray of 1s After Deleting One Element": {
  title: "Longest Subarray of 1s After Deleting One Element",
  pattern: "Sliding Window",
  explanation: "Allow at most one 0 in the window. Track longest window with ≤ 1 zero, subtract 1 (for the deletion).",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,1,0,1,1,1,0,1], highlights: [], pointers: [], desc: "Delete one element to get longest subarray of 1s" },
    { type: "array", data: [1,1,0,1,1,1,0,1], window: [0,1,2,3,4,5], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:5,label:"R",color:"var(--accent-green)"}], desc: "Window [0..5]: one 0, length-1=5", vars: {zeros:1,max:5} },
    { type: "array", data: [1,1,0,1,1,1,0,1], highlights: [6], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:6,label:"R",color:"var(--accent-green)"}], desc: "Add idx 6 (0): two zeros! Shrink from left", vars: {zeros:2} },
    { type: "array", data: [1,1,0,1,1,1,0,1], window: [3,4,5,6,7], pointers: [{idx:3,label:"L",color:"var(--accent-blue)"},{idx:7,label:"R",color:"var(--accent-green)"}], desc: "Window [3..7]: one 0, length-1=4", vars: {zeros:1,max:5} },
    { type: "array", data: [1,1,0,1,1,1,0,1], sorted: [0,1,2,3,4,5], pointers: [], desc: "Answer: 5 ✓", vars: {result:5} },
  ]
},

"Longest Turbulent Subarray": {
  title: "Longest Turbulent Subarray",
  pattern: "Sliding Window / DP",
  explanation: "Track alternating comparisons (>,<,>,< or <,>,<,>). Reset when pattern breaks.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [9,4,2,10,7,8,8,1,9], highlights: [], pointers: [], desc: "Find longest turbulent subarray (alternating < and >)" },
    { type: "array", data: [9,4,2,10,7,8,8,1,9], window: [0,1,2,3,4,5], pointers: [], desc: "9>4>2<10>7<8: alternating! Length=6", vars: {max:6} },
    { type: "array", data: [9,4,2,10,7,8,8,1,9], highlights: [5,6], pointers: [], desc: "8==8: breaks pattern, reset", vars: {max:6} },
    { type: "array", data: [9,4,2,10,7,8,8,1,9], sorted: [0,1,2,3,4,5], pointers: [], desc: "Answer: 5 ✓ (subarray [4,2,10,7,8])", vars: {result:5} },
  ]
},

"Max Consecutive Ones III": {
  title: "Max Consecutive Ones III",
  pattern: "Sliding Window",
  explanation: "Longest subarray with at most k zeros. Expand right, shrink left when zeros exceed k.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,1,1,0,0,0,1,1,1,1,0], highlights: [], pointers: [], desc: "k=2. Max consecutive 1s if we flip at most 2 zeros" },
    { type: "array", data: [1,1,1,0,0,0,1,1,1,1,0], window: [0,1,2,3,4], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}], desc: "Window has 2 zeros (k=2), length=5", vars: {zeros:2,max:5} },
    { type: "array", data: [1,1,1,0,0,0,1,1,1,1,0], window: [5,6,7,8,9,10], pointers: [{idx:5,label:"L",color:"var(--accent-blue)"},{idx:10,label:"R",color:"var(--accent-green)"}], desc: "Window [5..10]: 2 zeros, length=6!", vars: {zeros:2,max:6} },
    { type: "array", data: [1,1,1,0,0,0,1,1,1,1,0], sorted: [5,6,7,8,9,10], pointers: [], desc: "Answer: 6 ✓", vars: {result:6} },
  ]
},

"Max Points You Can Obtain from Cards": {
  title: "Max Points from Cards",
  pattern: "Fixed Window (Inverse)",
  explanation: "Taking k cards from ends = total minus a window of n-k from middle. Find min middle window.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,2,3,4,5,6,1], highlights: [], pointers: [], desc: "Take k=3 cards from either end to maximize sum" },
    { type: "info", visual: "total = 22\nFind min sum window of size n-k = 4", desc: "Inverse: minimize the unchosen middle window" },
    { type: "array", data: [1,2,3,4,5,6,1], window: [0,1,2,3], pointers: [], desc: "Window [0..3]: sum=10", vars: {window_sum:10,min:10} },
    { type: "array", data: [1,2,3,4,5,6,1], window: [1,2,3,4], pointers: [], desc: "Window [1..4]: sum=14", vars: {window_sum:14,min:10} },
    { type: "array", data: [1,2,3,4,5,6,1], window: [2,3,4,5], pointers: [], desc: "Window [2..5]: sum=18", vars: {window_sum:18,min:10} },
    { type: "array", data: [1,2,3,4,5,6,1], window: [3,4,5,6], pointers: [], desc: "Window [3..6]: sum=16", vars: {window_sum:16,min:10} },
    { type: "array", data: [1,2,3,4,5,6,1], sorted: [4,5,6], pointers: [], desc: "Answer: 22-10 = 12 (take [5,6,1]) ✓", vars: {result:12} },
  ]
},


"Maximize the Confusion of an Exam": {
  title: "Maximize the Confusion of an Exam",
  pattern: "Sliding Window",
  explanation: "Same as 'max consecutive ones with k flips' but applied to T/F. Find longest substring with at most k changes.",
  difficulty: "Medium",
  steps: [
    { type: "string", data: "TTFF", highlights: [], pointers: [], desc: "k=2. Max consecutive same chars with at most k changes" },
    { type: "string", data: "TTFF", window: [0,1,2,3], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}], desc: "Change 2 F→T: 'TTTT', length=4", vars: {max:4} },
    { type: "string", data: "TTFF", sorted: [0,1,2,3], pointers: [], desc: "Answer: 4 ✓", vars: {result:4} },
  ]
},

"Maximum Area of Island": {
  title: "Maximum Area of Island",
  pattern: "DFS/BFS on Grid",
  explanation: "For each land cell, DFS to count connected land cells. Track maximum area.",
  difficulty: "Medium",
  steps: [
    { type: "matrix", data: [[0,0,1,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]], highlights: [], desc: "Find largest island (connected 1s)" },
    { type: "matrix", data: [[0,0,1,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]], highlights: [[0,2],[1,1],[1,2],[2,1],[2,2]], desc: "DFS from (0,2): found island of size 5" },
    { type: "matrix", data: [[0,0,1,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]], highlights: [[0,2],[1,1],[1,2],[2,1],[2,2]], desc: "Answer: 5 ✓", vars: {result:5} },
  ]
},

"Maximum Erasure Value": {
  title: "Maximum Erasure Value",
  pattern: "Sliding Window + Hash Set",
  explanation: "Longest subarray with all unique elements, maximizing sum. Shrink when duplicate found.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [5,2,1,2,5,2,1,2,5], highlights: [], pointers: [], desc: "Max sum subarray with all unique elements" },
    { type: "array", data: [5,2,1,2,5,2,1,2,5], window: [0,1,2], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:2,label:"R",color:"var(--accent-green)"}], desc: "Window [5,2,1]: sum=8, all unique", vars: {sum:8,max:8} },
    { type: "array", data: [5,2,1,2,5,2,1,2,5], window: [0,1,2,3], highlights: [3], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}], desc: "Add 2: duplicate! Shrink", vars: {} },
    { type: "array", data: [5,2,1,2,5,2,1,2,5], window: [2,3,4], pointers: [{idx:2,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}], desc: "Window [1,2,5]: sum=8", vars: {sum:8,max:8} },
    { type: "array", data: [5,2,1,2,5,2,1,2,5], sorted: [0,1,2], pointers: [], desc: "Answer: 8 ✓", vars: {result:8} },
  ]
},

"Maximum Product Subarray": {
  title: "Maximum Product Subarray",
  pattern: "DP (Track Min and Max)",
  explanation: "A negative number can flip min to max. Track both running min and max product.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [2,3,-2,4], highlights: [], pointers: [], desc: "Find contiguous subarray with largest product" },
    { type: "array", data: [2,3,-2,4], highlights: [0], pointers: [], desc: "i=0: max_prod=2, min_prod=2", vars: {max_p:2,min_p:2,result:2} },
    { type: "array", data: [2,3,-2,4], highlights: [1], pointers: [], desc: "i=1: max_prod=6, min_prod=3", vars: {max_p:6,min_p:3,result:6} },
    { type: "array", data: [2,3,-2,4], highlights: [2], pointers: [], desc: "i=2: val=-2! max_prod=-2*3=-6(min), min_prod=-2*6=-12", vars: {max_p:-2,min_p:-12,result:6} },
    { type: "array", data: [2,3,-2,4], highlights: [3], pointers: [], desc: "i=3: max_prod=max(4,-8,-48)=4", vars: {max_p:4,min_p:-48,result:6} },
    { type: "array", data: [2,3,-2,4], sorted: [0,1], pointers: [], desc: "Answer: 6 (subarray [2,3]) ✓", vars: {result:6} },
  ]
},

"Maximum Subarray": {
  title: "Maximum Subarray",
  pattern: "Kadane's Algorithm",
  explanation: "At each position, either extend the current subarray or start a new one. Track global max.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [-2,1,-3,4,-1,2,1,-5,4], highlights: [], pointers: [], desc: "Find contiguous subarray with largest sum" },
    { type: "array", data: [-2,1,-3,4,-1,2,1,-5,4], highlights: [0], pointers: [], desc: "current=-2, max=-2", vars: {current:-2,max:-2} },
    { type: "array", data: [-2,1,-3,4,-1,2,1,-5,4], highlights: [1], pointers: [], desc: "current=max(1, -2+1)=1, max=1", vars: {current:1,max:1} },
    { type: "array", data: [-2,1,-3,4,-1,2,1,-5,4], highlights: [2], pointers: [], desc: "current=max(-3, 1-3)=-2", vars: {current:-2,max:1} },
    { type: "array", data: [-2,1,-3,4,-1,2,1,-5,4], highlights: [3], pointers: [], desc: "current=max(4, -2+4)=4", vars: {current:4,max:4} },
    { type: "array", data: [-2,1,-3,4,-1,2,1,-5,4], highlights: [4,5,6], pointers: [], desc: "Continue: 4-1+2+1=6, new max!", vars: {current:6,max:6} },
    { type: "array", data: [-2,1,-3,4,-1,2,1,-5,4], sorted: [3,4,5,6], pointers: [], desc: "Answer: 6 (subarray [4,-1,2,1]) ✓", vars: {result:6} },
  ]
},

"Minimum Size Subarray Sum": {
  title: "Minimum Size Subarray Sum",
  pattern: "Sliding Window (Variable)",
  explanation: "Expand right until sum ≥ target. Then shrink left while maintaining sum ≥ target. Track min length.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [2,3,1,2,4,3], highlights: [], pointers: [], desc: "target=7. Find shortest subarray with sum ≥ 7" },
    { type: "array", data: [2,3,1,2,4,3], window: [0,1,2,3], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}], desc: "sum=8≥7, length=4. Try shrinking.", vars: {sum:8,min:4} },
    { type: "array", data: [2,3,1,2,4,3], window: [1,2,3,4], pointers: [{idx:1,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}], desc: "sum=10≥7, length=4. Shrink.", vars: {sum:10,min:4} },
    { type: "array", data: [2,3,1,2,4,3], window: [3,4], pointers: [{idx:3,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}], desc: "sum=6<7. Expand. Then [4,3]: sum=7≥7, length=2!", vars: {sum:7,min:2} },
    { type: "array", data: [2,3,1,2,4,3], sorted: [4,5], pointers: [], desc: "Answer: 2 (subarray [4,3]) ✓", vars: {result:2} },
  ]
},


"Next Permutation": {
  title: "Next Permutation",
  pattern: "Array Manipulation",
  explanation: "Find rightmost ascending pair, swap with next larger element from right, reverse the suffix.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,2,3], highlights: [], pointers: [], desc: "Find next lexicographic permutation" },
    { type: "array", data: [1,2,3], highlights: [1,2], pointers: [{idx:1,label:"i",color:"var(--accent-blue)"}], desc: "Find rightmost ascending pair: arr[1]=2 < arr[2]=3" },
    { type: "array", data: [1,3,2], swaps: [1,2], pointers: [], desc: "Swap 2 with next larger from right (3)" },
    { type: "array", data: [1,3,2], sorted: [0,1,2], pointers: [], desc: "Answer: [1,3,2] ✓" },
  ]
},

"Number of Islands": {
  title: "Number of Islands",
  pattern: "DFS/BFS on Grid",
  explanation: "Scan grid. When you find a '1', that's a new island — DFS to mark all connected land as visited.",
  difficulty: "Medium",
  steps: [
    { type: "matrix", data: [["1","1","0","0"],["1","1","0","0"],["0","0","1","0"],["0","0","0","1"]], highlights: [], desc: "Count number of islands (groups of connected 1s)" },
    { type: "matrix", data: [["1","1","0","0"],["1","1","0","0"],["0","0","1","0"],["0","0","0","1"]], highlights: [[0,0],[0,1],[1,0],[1,1]], desc: "Island 1: DFS from (0,0), marks 4 cells", vars: {count:1} },
    { type: "matrix", data: [["1","1","0","0"],["1","1","0","0"],["0","0","1","0"],["0","0","0","1"]], highlights: [[2,2]], desc: "Island 2: single cell at (2,2)", vars: {count:2} },
    { type: "matrix", data: [["1","1","0","0"],["1","1","0","0"],["0","0","1","0"],["0","0","0","1"]], highlights: [[3,3]], desc: "Island 3: single cell at (3,3)", vars: {count:3} },
    { type: "info", visual: "3 islands found", desc: "Answer: 3 ✓", vars: {result:3} },
  ]
},

"Number of Sub-arrays of Size K and Average >= Threshold": {
  title: "Subarrays Size K Avg >= Threshold",
  pattern: "Fixed Sliding Window",
  explanation: "Slide window of size k, count windows where sum >= threshold * k.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [2,2,2,2,5,5,5,8], highlights: [], pointers: [], desc: "k=3, threshold=4. Count subarrays with avg≥4" },
    { type: "array", data: [2,2,2,2,5,5,5,8], window: [0,1,2], pointers: [], desc: "avg=2 < 4", vars: {count:0} },
    { type: "array", data: [2,2,2,2,5,5,5,8], window: [4,5,6], pointers: [], desc: "avg=5 ≥ 4 ✓", vars: {count:1} },
    { type: "array", data: [2,2,2,2,5,5,5,8], window: [5,6,7], pointers: [], desc: "avg=6 ≥ 4 ✓", vars: {count:3} },
    { type: "array", data: [2,2,2,2,5,5,5,8], sorted: [3,4,5,6,7], pointers: [], desc: "Answer: 3 ✓", vars: {result:3} },
  ]
},

"Product of Array Except Self": {
  title: "Product of Array Except Self",
  pattern: "Prefix/Suffix Products",
  explanation: "result[i] = product of all elements left of i × product of all elements right of i. Two passes.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,2,3,4], highlights: [], pointers: [], desc: "Output[i] = product of all elements except arr[i]" },
    { type: "twoarray", data1: [1,2,3,4], data2: [1,1,2,6], highlights1: [], highlights2: [0,1,2,3], label1: "Input", label2: "Left products", desc: "Left pass: prefix products [1, 1, 2, 6]" },
    { type: "twoarray", data1: [1,2,3,4], data2: [24,12,4,1], highlights1: [], highlights2: [0,1,2,3], label1: "Input", label2: "Right products", desc: "Right pass: suffix products [24, 12, 4, 1]" },
    { type: "twoarray", data1: [1,2,3,4], data2: [24,12,8,6], highlights1: [], highlights2: [0,1,2,3], label1: "Input", label2: "Result (L×R)", desc: "Multiply: [1×24, 1×12, 2×4, 6×1] = [24,12,8,6] ✓" },
  ]
},

"Rotate Array": {
  title: "Rotate Array",
  pattern: "Three Reverses",
  explanation: "To rotate right by k: reverse whole array, reverse first k, reverse rest. O(1) space.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [1,2,3,4,5,6,7], highlights: [], pointers: [], desc: "Rotate right by k=3" },
    { type: "array", data: [7,6,5,4,3,2,1], highlights: [0,1,2,3,4,5,6], pointers: [], desc: "Step 1: Reverse all → [7,6,5,4,3,2,1]" },
    { type: "array", data: [5,6,7,4,3,2,1], highlights: [0,1,2], pointers: [], desc: "Step 2: Reverse first k=3 → [5,6,7,...]" },
    { type: "array", data: [5,6,7,1,2,3,4], highlights: [3,4,5,6], pointers: [], desc: "Step 3: Reverse rest → [5,6,7,1,2,3,4] ✓" },
  ]
},

"Rotate Image": {
  title: "Rotate Image",
  pattern: "Transpose + Reverse Rows",
  explanation: "Rotate 90° clockwise = transpose matrix + reverse each row. In-place.",
  difficulty: "Medium",
  steps: [
    { type: "matrix", data: [[1,2,3],[4,5,6],[7,8,9]], highlights: [], desc: "Rotate 90° clockwise in-place" },
    { type: "matrix", data: [[1,4,7],[2,5,8],[3,6,9]], highlights: [[0,1],[0,2],[1,2]], desc: "Transpose: swap across diagonal" },
    { type: "matrix", data: [[7,4,1],[8,5,2],[9,6,3]], highlights: [[0,0],[0,2],[1,0],[1,2],[2,0],[2,2]], desc: "Reverse each row → rotated! ✓" },
  ]
},

"Set Matrix Zeroes": {
  title: "Set Matrix Zeroes",
  pattern: "In-Place Marking",
  explanation: "Use first row/column as markers. Mark which rows/cols need zeroing, then apply.",
  difficulty: "Medium",
  steps: [
    { type: "matrix", data: [[1,1,1],[1,0,1],[1,1,1]], highlights: [], desc: "If cell is 0, set entire row and column to 0" },
    { type: "matrix", data: [[1,1,1],[1,0,1],[1,1,1]], highlights: [[1,1]], desc: "Found 0 at (1,1) → mark row 1, col 1" },
    { type: "matrix", data: [[1,0,1],[0,0,0],[1,0,1]], highlights: [[0,1],[1,0],[1,1],[1,2],[2,1]], desc: "Zero out row 1 and column 1 ✓" },
  ]
},

"Spiral Matrix": {
  title: "Spiral Matrix",
  pattern: "Boundary Simulation",
  explanation: "Maintain top/bottom/left/right boundaries. Traverse right→down→left→up, shrinking boundaries.",
  difficulty: "Medium",
  steps: [
    { type: "matrix", data: [[1,2,3],[4,5,6],[7,8,9]], highlights: [], desc: "Return elements in spiral order" },
    { type: "matrix", data: [[1,2,3],[4,5,6],[7,8,9]], highlights: [[0,0],[0,1],[0,2]], desc: "Go right: [1,2,3]" },
    { type: "matrix", data: [[1,2,3],[4,5,6],[7,8,9]], highlights: [[1,2],[2,2]], desc: "Go down: [6,9]" },
    { type: "matrix", data: [[1,2,3],[4,5,6],[7,8,9]], highlights: [[2,1],[2,0]], desc: "Go left: [8,7]" },
    { type: "matrix", data: [[1,2,3],[4,5,6],[7,8,9]], highlights: [[1,0]], desc: "Go up: [4]" },
    { type: "matrix", data: [[1,2,3],[4,5,6],[7,8,9]], highlights: [[1,1]], desc: "Center: [5]. Done! [1,2,3,6,9,8,7,4,5] ✓" },
  ]
},

"Two Sum II - Input Array Is Sorted": {
  title: "Two Sum II - Sorted",
  pattern: "Two Pointers",
  explanation: "Array is sorted. Start pointers at ends. If sum too small, move left right. If too big, move right left.",
  difficulty: "Medium",
  steps: [
    { type: "array", data: [2,7,11,15], highlights: [], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}], desc: "target=9. Find two numbers summing to 9." },
    { type: "array", data: [2,7,11,15], highlights: [0,3], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}], desc: "2+15=17 > 9, move R left", vars: {sum:17} },
    { type: "array", data: [2,7,11,15], highlights: [0,2], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:2,label:"R",color:"var(--accent-green)"}], desc: "2+11=13 > 9, move R left", vars: {sum:13} },
    { type: "array", data: [2,7,11,15], highlights: [0,1], pointers: [{idx:0,label:"L",color:"var(--accent-blue)"},{idx:1,label:"R",color:"var(--accent-green)"}], desc: "2+7=9 == target! Found! ✓", vars: {sum:9,result:"[1,2]"} },
  ]
},


};

// Generate default animation for problems without custom animation
export function getListAnimation(problemName) {
  return listsAnimations[problemName] || null;
}
