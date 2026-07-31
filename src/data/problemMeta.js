export const problemMeta = {

  "Array Partition": {
    thoughtProcess: [
      "Step 1: Read problem → maximize sum of min(a_i, b_i) from pairs",
      "Step 2: Brute force: try all pairings → O(n!) permutations",
      "Step 3: Insight: to maximize mins, pair closest values together",
      "Step 4: Sort array, pair adjacent elements → min of each pair is the smaller (even-indexed)",
      "Step 5: Sum all even-indexed elements → O(n log n) time, O(1) space"
    ],
    edgeCases: ["Two elements [1,2]", "All same values [3,3,3,3]", "Negative numbers [-1,-2,3,4]", "Already sorted input"],
    followUps: ["Can you prove the greedy approach is optimal?", "What if you need to minimize the sum instead?"],
    dryRun: { input: "nums=[1,4,3,2]", steps: ["Sort → [1,2,3,4]", "Pairs: (1,2),(3,4)", "Sum of mins: 1+3=4"] },
    related: ["Two Sum", "Assign Cookies", "Boats to Save People"],
    timeTarget: "5 min (Easy)"
  },


  "Best Time to Buy and Sell Stock": {
    thoughtProcess: [
      "Step 1: Read problem → find max profit from one buy and one sell",
      "Step 2: Brute force: check all pairs (i,j) where j>i → O(n²)",
      "Step 3: Bottleneck: for each sell day, finding the minimum buy price before it",
      "Step 4: Track running minimum as we scan left to right, compute profit at each step",
      "Step 5: One pass, O(n) time, O(1) space"
    ],
    edgeCases: ["Decreasing prices [7,6,4,3,1]", "Single price [5]", "All same [3,3,3]", "Profit on last day [7,1,5,3,6,4]"],
    followUps: ["What if you can buy/sell multiple times?", "What if there's a transaction fee?", "What if there's a cooldown period?"],
    dryRun: { input: "prices=[7,1,5,3,6,4]", steps: ["i=0: min=7, profit=0", "i=1: min=1, profit=0", "i=2: min=1, profit=4", "i=3: min=1, profit=4", "i=4: min=1, profit=5", "i=5: min=1, profit=5 → return 5"] },
    related: ["Best Time to Buy and Sell Stock II", "Best Time to Buy and Sell Stock III", "Maximum Subarray"],
    timeTarget: "5 min (Easy)"
  },


  "Contains Duplicate": {
    thoughtProcess: [
      "Step 1: Read problem → return true if any value appears at least twice",
      "Step 2: Brute force: compare all pairs → O(n²)",
      "Step 3: Bottleneck: checking if element was seen before",
      "Step 4: Use a HashSet for O(1) lookup → one pass adding elements",
      "Step 5: O(n) time, O(n) space. Alt: sort first for O(n log n) time, O(1) space"
    ],
    edgeCases: ["Empty array []", "Single element [1]", "All duplicates [1,1,1]", "No duplicates [1,2,3]", "Duplicate at end [1,2,3,1]"],
    followUps: ["What if you need to find duplicates within k distance?", "Can you do it in O(1) space?", "What if the array is too large to fit in memory?"],
    dryRun: { input: "nums=[1,2,3,1]", steps: ["i=0: set={1}", "i=1: set={1,2}", "i=2: set={1,2,3}", "i=3: 1 in set → return true"] },
    related: ["Contains Duplicate II", "Contains Duplicate III", "Find All Duplicates in an Array"],
    timeTarget: "5 min (Easy)"
  },


  "Diet Plan Performance": {
    thoughtProcess: [
      "Step 1: Read problem → sliding window of size k, compare sum to lower/upper bounds",
      "Step 2: Brute force: compute sum for each window from scratch → O(n*k)",
      "Step 3: Bottleneck: recomputing sum each time",
      "Step 4: Sliding window: subtract outgoing element, add incoming → O(1) per window",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["k equals array length", "All values same", "Sum exactly equals lower or upper", "Single element with k=1"],
    followUps: ["What if k changes dynamically?", "What if you need to track max/min in the window too?"],
    dryRun: { input: "cal=[1,2,3,4,5], k=1, lower=3, upper=3", steps: ["i=0: sum=1<3 → points=-1", "i=1: sum=2<3 → points=-2", "i=2: sum=3 → points=-2", "i=3: sum=4>3 → points=-1", "i=4: sum=5>3 → points=0"] },
    related: ["Maximum Average Subarray I", "Minimum Size Subarray Sum", "Grumpy Bookstore Owner"],
    timeTarget: "5 min (Easy)"
  },


  "Find Pivot Index": {
    thoughtProcess: [
      "Step 1: Read problem → find index where left sum equals right sum",
      "Step 2: Brute force: for each index, compute left and right sums → O(n²)",
      "Step 3: Insight: leftSum + nums[i] + rightSum = totalSum",
      "Step 4: Precompute total, scan left to right tracking leftSum, rightSum = total - leftSum - nums[i]",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Pivot at index 0 [2,-1,1]", "Pivot at last index", "No pivot exists", "Single element [1]", "All zeros"],
    followUps: ["What if there are multiple pivots?", "Can you find pivot in a 2D matrix?"],
    dryRun: { input: "nums=[1,7,3,6,5,6]", steps: ["total=28", "i=0: left=0, right=27 → no", "i=1: left=1, right=20 → no", "i=2: left=8, right=17 → no", "i=3: left=11, right=11 → return 3"] },
    related: ["Subarray Sum Equals K", "Range Sum Query", "Product of Array Except Self"],
    timeTarget: "5 min (Easy)"
  },


  "Majority Element": {
    thoughtProcess: [
      "Step 1: Read problem → find element appearing more than n/2 times",
      "Step 2: Brute force: count each element → O(n) with HashMap",
      "Step 3: Can we do O(1) space? Boyer-Moore Voting Algorithm",
      "Step 4: Keep candidate and count; increment if same, decrement if different; when 0 pick new candidate",
      "Step 5: O(n) time, O(1) space — majority survives all cancellations"
    ],
    edgeCases: ["Single element [1]", "Two elements [1,1]", "Majority at edges [3,2,3]", "All same [5,5,5,5]"],
    followUps: ["What if no majority is guaranteed to exist?", "Find all elements appearing more than n/3 times", "Can you verify the candidate in one more pass?"],
    dryRun: { input: "nums=[2,2,1,1,1,2,2]", steps: ["cand=2,cnt=1", "cand=2,cnt=2", "cand=2,cnt=1", "cand=2,cnt=0", "cand=1,cnt=1", "cand=1,cnt=0", "cand=2,cnt=1 → return 2"] },
    related: ["Majority Element II", "Check If a Number Is Majority Element in a Sorted Array"],
    timeTarget: "5 min (Easy)"
  },


  "Maximum Average Subarray I": {
    thoughtProcess: [
      "Step 1: Read problem → find contiguous subarray of length k with max average",
      "Step 2: Brute force: compute sum of every window of size k → O(n*k)",
      "Step 3: Bottleneck: recomputing window sum from scratch",
      "Step 4: Sliding window: maintain running sum, slide by subtracting left and adding right",
      "Step 5: O(n) time, O(1) space. Return maxSum/k"
    ],
    edgeCases: ["k equals array length", "All negative values", "Single element k=1", "All same values"],
    followUps: ["What if k is not fixed (max average subarray of any length >= k)?", "What about minimum average?"],
    dryRun: { input: "nums=[1,12,-5,-6,50,3], k=4", steps: ["Initial window sum: 1+12+(-5)+(-6)=2", "Slide: 2-1+50=51", "Slide: 51-12+3=42", "Max sum=51, avg=51/4=12.75"] },
    related: ["Diet Plan Performance", "Minimum Size Subarray Sum", "Maximum Subarray"],
    timeTarget: "5 min (Easy)"
  },

  "Maximum Consecutive Ones": {
    thoughtProcess: [
      "Step 1: Read problem → find longest consecutive run of 1s",
      "Step 2: Simple scan: track current streak, reset on 0",
      "Step 3: Keep maxCount updated at each step",
      "Step 4: Single pass, O(n) time, O(1) space"
    ],
    edgeCases: ["All 1s [1,1,1]", "All 0s [0,0,0]", "Single element [1]", "Alternating [1,0,1,0]", "Longest at end"],
    followUps: ["What if you can flip at most one 0?", "What if you can flip at most k zeros?", "What about a streaming input?"],
    dryRun: { input: "nums=[1,1,0,1,1,1]", steps: ["i=0: cur=1, max=1", "i=1: cur=2, max=2", "i=2: cur=0, max=2", "i=3: cur=1, max=2", "i=4: cur=2, max=2", "i=5: cur=3, max=3"] },
    related: ["Max Consecutive Ones II", "Max Consecutive Ones III", "Longest Subarray of 1s After Deleting One Element"],
    timeTarget: "5 min (Easy)"
  },


  "Meeting Rooms": {
    thoughtProcess: [
      "Step 1: Read problem → can a person attend all meetings (no overlaps)?",
      "Step 2: Sort intervals by start time",
      "Step 3: If any meeting starts before the previous one ends → overlap → return false",
      "Step 4: O(n log n) time for sort, O(1) space"
    ],
    edgeCases: ["Empty list []", "Single meeting", "Adjacent meetings [0,1],[1,2] (no overlap)", "Fully nested intervals", "All same time"],
    followUps: ["What's the minimum number of rooms needed?", "What if you need to find all conflicting pairs?", "What about recurring meetings?"],
    dryRun: { input: "intervals=[[0,30],[5,10],[15,20]]", steps: ["Sort by start: [[0,30],[5,10],[15,20]]", "Compare [0,30] and [5,10]: 5<30 → overlap → return false"] },
    related: ["Meeting Rooms II", "Merge Intervals", "Insert Interval"],
    timeTarget: "5 min (Easy)"
  },

  "Missing Number": {
    thoughtProcess: [
      "Step 1: Read problem → array of n numbers from [0,n], one missing",
      "Step 2: Brute force: sort and scan for gap → O(n log n)",
      "Step 3: Better: sum formula. Expected = n*(n+1)/2, actual = sum(nums)",
      "Step 4: Missing = expected - actual. O(n) time, O(1) space",
      "Step 5: Alt: XOR all indices and values — duplicates cancel, missing remains"
    ],
    edgeCases: ["Missing 0: [1,2,3]", "Missing n: [0,1,2]", "Single element [0] or [1]", "Large n with potential overflow"],
    followUps: ["What if two numbers are missing?", "Can you use bit manipulation?", "What if the range isn't 0 to n?"],
    dryRun: { input: "nums=[3,0,1]", steps: ["n=3, expected=3*4/2=6", "actual=3+0+1=4", "missing=6-4=2"] },
    related: ["First Missing Positive", "Find All Numbers Disappeared in an Array", "Single Number"],
    timeTarget: "5 min (Easy)"
  },


  "Move Zeroes": {
    thoughtProcess: [
      "Step 1: Read problem → move all 0s to end, maintain relative order of non-zeros",
      "Step 2: Brute force: create new array, copy non-zeros then zeros → O(n) space",
      "Step 3: In-place: two-pointer — slow pointer marks insert position for non-zeros",
      "Step 4: Fast pointer scans; when non-zero found, swap with slow position",
      "Step 5: O(n) time, O(1) space, maintains relative order"
    ],
    edgeCases: ["No zeros [1,2,3]", "All zeros [0,0,0]", "Single element [0]", "Zeros at start [0,0,1,2]", "Already correct [1,2,0,0]"],
    followUps: ["Can you minimize the number of writes?", "What if you need to move a different value?", "What about maintaining order of zeros too (stable partition)?"],
    dryRun: { input: "nums=[0,1,0,3,12]", steps: ["slow=0, i=1: swap → [1,0,0,3,12], slow=1", "i=3: swap → [1,3,0,0,12], slow=2", "i=4: swap → [1,3,12,0,0], slow=3"] },
    related: ["Remove Element", "Remove Duplicates from Sorted Array", "Sort Colors"],
    timeTarget: "5 min (Easy)"
  },

  "Pascal's Triangle": {
    thoughtProcess: [
      "Step 1: Read problem → generate first numRows of Pascal's triangle",
      "Step 2: Each row[i][j] = row[i-1][j-1] + row[i-1][j]",
      "Step 3: First and last elements of each row are always 1",
      "Step 4: Build row by row, O(n²) time and space where n=numRows"
    ],
    edgeCases: ["numRows=1 → [[1]]", "numRows=2 → [[1],[1,1]]", "Large numRows (potential overflow for very large)"],
    followUps: ["Can you generate just the nth row in O(n) space?", "How does this relate to binomial coefficients?", "What about getting a specific element efficiently?"],
    dryRun: { input: "numRows=5", steps: ["Row 0: [1]", "Row 1: [1,1]", "Row 2: [1,2,1]", "Row 3: [1,3,3,1]", "Row 4: [1,4,6,4,1]"] },
    related: ["Pascal's Triangle II", "Unique Paths", "Combination Sum"],
    timeTarget: "5 min (Easy)"
  },


  "Pascal's Triangle II": {
    thoughtProcess: [
      "Step 1: Read problem → return the kth row (0-indexed) of Pascal's triangle",
      "Step 2: Could generate all rows up to k → O(k²) space",
      "Step 3: Insight: only need previous row to build current",
      "Step 4: Use single array, update in-place from right to left to avoid overwriting",
      "Step 5: O(k) space, O(k²) time"
    ],
    edgeCases: ["rowIndex=0 → [1]", "rowIndex=1 → [1,1]", "Large rowIndex (overflow concern)"],
    followUps: ["Can you compute a single element C(n,k) in O(k) time?", "How to handle very large rows without overflow?"],
    dryRun: { input: "rowIndex=3", steps: ["Start: [1]", "Iter 1: [1,1]", "Iter 2: [1,2,1]", "Iter 3: [1,3,3,1] → return"] },
    related: ["Pascal's Triangle", "Unique Paths", "Climbing Stairs"],
    timeTarget: "5 min (Easy)"
  },

  "Plus One": {
    thoughtProcess: [
      "Step 1: Read problem → increment number represented as array of digits",
      "Step 2: Start from the last digit, add 1",
      "Step 3: Handle carry: if digit becomes 10, set to 0 and carry to next",
      "Step 4: If carry remains after first digit, prepend 1 (e.g., 999 → 1000)",
      "Step 5: O(n) time, O(1) space (or O(n) if new array needed)"
    ],
    edgeCases: ["No carry [1,2,3]→[1,2,4]", "Full carry [9,9,9]→[1,0,0,0]", "Single digit [9]→[1,0]", "Leading zeros? (not valid input)"],
    followUps: ["What about adding two numbers represented as arrays?", "What if the number is in a linked list?"],
    dryRun: { input: "digits=[1,2,9]", steps: ["i=2: 9+1=10, set 0, carry=1 → [1,2,0]", "i=1: 2+1=3, carry=0 → [1,3,0]", "No carry → return [1,3,0]"] },
    related: ["Add Binary", "Add Two Numbers", "Multiply Strings"],
    timeTarget: "5 min (Easy)"
  },


  "Remove Duplicates from Sorted Array": {
    thoughtProcess: [
      "Step 1: Read problem → remove duplicates in-place from sorted array, return new length",
      "Step 2: Array is sorted → duplicates are adjacent",
      "Step 3: Two-pointer: slow marks write position, fast scans ahead",
      "Step 4: When fast finds a new value, write it at slow+1, advance slow",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Empty array []", "Single element [1]", "No duplicates [1,2,3]", "All same [1,1,1,1]"],
    followUps: ["What if duplicates are allowed at most twice?", "What if array is not sorted?", "Can you do it without modifying the array?"],
    dryRun: { input: "nums=[1,1,2]", steps: ["slow=0, fast=1: nums[1]=nums[0] → skip", "fast=2: nums[2]≠nums[0] → slow=1, nums[1]=2", "Return slow+1=2, nums=[1,2,_]"] },
    related: ["Remove Element", "Remove Duplicates from Sorted Array II", "Move Zeroes"],
    timeTarget: "5 min (Easy)"
  },

  "Remove Element": {
    thoughtProcess: [
      "Step 1: Read problem → remove all instances of val in-place, return new length",
      "Step 2: Two-pointer: slow marks insert position",
      "Step 3: Fast scans; when element ≠ val, copy to slow position and advance slow",
      "Step 4: O(n) time, O(1) space, order may change"
    ],
    edgeCases: ["Empty array []", "All elements equal val", "No elements equal val", "Val at start/end", "Single element"],
    followUps: ["What if you need to maintain relative order?", "What if you swap with the end instead (fewer copies)?"],
    dryRun: { input: "nums=[3,2,2,3], val=3", steps: ["i=0: 3=val → skip", "i=1: 2≠val → nums[0]=2, k=1", "i=2: 2≠val → nums[1]=2, k=2", "i=3: 3=val → skip", "Return k=2, nums=[2,2,_,_]"] },
    related: ["Remove Duplicates from Sorted Array", "Move Zeroes", "Remove Linked List Elements"],
    timeTarget: "5 min (Easy)"
  },


  "Single Number": {
    thoughtProcess: [
      "Step 1: Read problem → every element appears twice except one, find it",
      "Step 2: Brute force: HashMap to count → O(n) time, O(n) space",
      "Step 3: Insight: XOR of a number with itself = 0, XOR with 0 = itself",
      "Step 4: XOR all elements → pairs cancel out, singleton remains",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Single element [1]", "Negative numbers [-1,-1,2]", "Zero in array [0,1,1]", "Large array"],
    followUps: ["What if every element appears three times except one?", "What if two elements appear once?", "Why does XOR work here (associative + commutative)?"],
    dryRun: { input: "nums=[4,1,2,1,2]", steps: ["4^1=5", "5^2=7", "7^1=6", "6^2=4 → return 4"] },
    related: ["Single Number II", "Single Number III", "Missing Number"],
    timeTarget: "5 min (Easy)"
  },

  "Summary Ranges": {
    thoughtProcess: [
      "Step 1: Read problem → group consecutive numbers into ranges like '1->3'",
      "Step 2: Track start of current range",
      "Step 3: When nums[i+1] ≠ nums[i]+1, close current range, start new one",
      "Step 4: Format as 'a' if single, 'a->b' if range",
      "Step 5: O(n) time, O(1) space (excluding output)"
    ],
    edgeCases: ["Empty array []", "Single element [1]", "No consecutive [1,3,5]", "All consecutive [1,2,3,4]", "Negative numbers"],
    followUps: ["What if input has duplicates?", "What about returning missing ranges instead?", "What if input is a stream?"],
    dryRun: { input: "nums=[0,1,2,4,5,7]", steps: ["start=0, i=2: gap after 2 → add '0->2'", "start=3, i=4: gap after 5 → add '4->5'", "start=5, end: add '7'", "Result: ['0->2','4->5','7']"] },
    related: ["Missing Ranges", "Merge Intervals", "Insert Interval"],
    timeTarget: "5 min (Easy)"
  },


  "First Missing Positive": {
    thoughtProcess: [
      "Step 1: Read problem → find smallest missing positive integer in O(n) time, O(1) space",
      "Step 2: Answer must be in range [1, n+1] (pigeonhole principle)",
      "Step 3: Use array itself as a hash map: place each number i at index i-1",
      "Step 4: Cyclic sort: swap nums[i] to its correct position until all settled",
      "Step 5: Scan for first index where nums[i] ≠ i+1 → answer is i+1"
    ],
    edgeCases: ["All positive sequential [1,2,3]→4", "All negative [-1,-2]→1", "Contains 0 [0,1,2]→3", "Duplicates [1,1]→2", "Single element [1]→2"],
    followUps: ["Why can't we use counting sort with extra space?", "What if we can't modify the array?", "How to handle very large arrays with limited memory?"],
    dryRun: { input: "nums=[3,4,-1,1]", steps: ["i=0: swap 3 to idx 2 → [−1,4,3,1]", "i=0: −1 invalid, skip", "i=1: swap 4 to idx 3 → [−1,1,3,4]", "i=1: swap 1 to idx 0 → [1,−1,3,4]", "Scan: idx 1 has −1≠2 → return 2"] },
    related: ["Missing Number", "Find All Numbers Disappeared in an Array", "Couples Holding Hands"],
    timeTarget: "25 min (Hard)"
  },

  "Minimum Window Subsequence": {
    thoughtProcess: [
      "Step 1: Read problem → find shortest substring of s1 that contains s2 as a subsequence",
      "Step 2: Brute force: check all substrings → O(n²*m)",
      "Step 3: Forward pass: find end of window where s2 is a subsequence",
      "Step 4: Backward pass: from that end, shrink to find minimal start",
      "Step 5: Slide forward and repeat. O(n*m) time, O(1) space"
    ],
    edgeCases: ["s2 not subsequence of s1", "s2 is single char", "s1 equals s2", "Multiple optimal windows", "Repeated characters"],
    followUps: ["Can you use DP to optimize?", "What if s2 has wildcards?", "Difference between subsequence and substring?"],
    dryRun: { input: "s1='abcdebdde', s2='bde'", steps: ["Forward from 0: b(1),d(3),e(4) → window [1,4]", "Backward from 4: e(4),d(3),b(1) → minWindow='bcde' len=4", "Forward from 2: next b(4?), find 'bdde'[4,7] len=4", "Continue scanning for shorter windows"] },
    related: ["Minimum Window Substring", "Is Subsequence", "Longest Common Subsequence"],
    timeTarget: "25 min (Hard)"
  },


  "Subarrays with K Different Integers": {
    thoughtProcess: [
      "Step 1: Read problem → count subarrays with exactly K distinct integers",
      "Step 2: Exact K is hard directly; use: atMost(K) - atMost(K-1)",
      "Step 3: atMost(K): sliding window with HashMap tracking frequencies",
      "Step 4: When distinct count > K, shrink from left until ≤ K",
      "Step 5: For each right, subarrays ending here = right - left + 1. O(n) time"
    ],
    edgeCases: ["K=1 (consecutive same elements)", "K equals number of distinct in array", "K > distinct count → 0", "All same elements", "Single element"],
    followUps: ["Why does atMost(K) - atMost(K-1) work?", "Can you solve it with a single pass?", "What about longest subarray with K distinct?"],
    dryRun: { input: "nums=[1,2,1,2,3], k=2", steps: ["atMost(2): windows [1],[1,2],[2],[1,2,1],[2,1],[1],[1,2],[2],[2,3],[3] = count 12", "atMost(1): [1],[2],[1],[2],[3] + [1,1],[2,2] = count 8", "Exactly 2 = 12-8 = 7 (verify against actual)"] },
    related: ["Longest Substring with At Most K Distinct Characters", "Fruit Into Baskets", "Count Vowel Substrings"],
    timeTarget: "25 min (Hard)"
  },

  "Trapping Rain Water": {
    thoughtProcess: [
      "Step 1: Read problem → compute water trapped between elevation bars",
      "Step 2: Water at each index = min(maxLeft, maxRight) - height[i]",
      "Step 3: Brute force: for each bar scan left and right → O(n²)",
      "Step 4: Two-pointer approach: left and right pointers, track maxLeft and maxRight",
      "Step 5: Process the side with smaller max (it's the bottleneck). O(n) time, O(1) space"
    ],
    edgeCases: ["Flat [1,1,1]→0", "Ascending [1,2,3]→0", "Single peak [0,3,0]→0", "Valley [3,0,3]→3", "Empty or size<3"],
    followUps: ["Can you solve it with a stack?", "What about trapping rain water in 2D?", "What if bars have varying widths?"],
    dryRun: { input: "height=[0,1,0,2,1,0,1,3,2,1,2,1]", steps: ["L=0,R=11, maxL=0,maxR=1: process L, water=0, L++", "L=1,maxL=1: process L(or R since equal), water+=0, L++", "L=2,maxL=1,maxR=1: process L, water+=1-0=1", "...continue until pointers meet, total=6"] },
    related: ["Container With Most Water", "Largest Rectangle in Histogram", "Trapping Rain Water II"],
    timeTarget: "25 min (Hard)"
  },


  "3Sum": {
    thoughtProcess: [
      "Step 1: Read problem → find all unique triplets that sum to zero",
      "Step 2: Brute force: three nested loops → O(n³)",
      "Step 3: Sort array first, fix one element, then two-pointer for remaining pair",
      "Step 4: Skip duplicates for the fixed element and both pointers to avoid duplicate triplets",
      "Step 5: O(n²) time, O(1) space (excluding output)"
    ],
    edgeCases: ["Less than 3 elements", "All zeros [0,0,0,0]", "No valid triplet [1,2,3]", "Many duplicates", "Negative + positive mix"],
    followUps: ["Can you do it without sorting?", "What about 4Sum?", "What if you need the count instead of the triplets?"],
    dryRun: { input: "nums=[-1,0,1,2,-1,-4]", steps: ["Sort: [-4,-1,-1,0,1,2]", "Fix -4: L=-1,R=2 → sum=-3<0, move L. No valid.", "Fix -1(idx1): L=-1,R=2 → sum=0 ✓ → [-1,-1,2]. L++,R--.", "L=0,R=1 → sum=0 ✓ → [-1,0,1]", "Fix -1(idx2): skip duplicate", "Result: [[-1,-1,2],[-1,0,1]]"] },
    related: ["Two Sum", "4Sum", "3Sum Closest"],
    timeTarget: "15 min (Medium)"
  },

  "4Sum": {
    thoughtProcess: [
      "Step 1: Read problem → find all unique quadruplets summing to target",
      "Step 2: Extend 3Sum: fix two elements, two-pointer on remainder",
      "Step 3: Sort array, two outer loops + inner two-pointer",
      "Step 4: Skip duplicates at each level to avoid duplicate quadruplets",
      "Step 5: O(n³) time, O(1) space. Pruning: skip if min sum too large or max sum too small"
    ],
    edgeCases: ["Less than 4 elements", "All same [2,2,2,2] target=8", "Large target causing overflow", "Negative target", "No valid quadruplet"],
    followUps: ["Can you generalize to kSum?", "How would you prune early?", "What about using HashMap for O(n²) pairs?"],
    dryRun: { input: "nums=[1,0,-1,0,-2,2], target=0", steps: ["Sort: [-2,-1,0,0,1,2]", "Fix -2,-1: two-ptr on [0,0,1,2], find 0+2=3? need sum=3. 0+2=2<3,0+1=1<3. No.", "Fix -2,0(idx2): need sum=2. ptr on [0,1,2]: 0+2=2 ✓ → [-2,0,0,2]", "Continue finding [-2,-1,1,2],[-1,0,0,1]..."] },
    related: ["3Sum", "Two Sum", "4Sum II"],
    timeTarget: "15 min (Medium)"
  },


  "Best Time to Buy and Sell Stock II": {
    thoughtProcess: [
      "Step 1: Read problem → maximize profit with unlimited transactions",
      "Step 2: Key insight: capture every upward slope",
      "Step 3: Greedy: add profit whenever prices[i] > prices[i-1]",
      "Step 4: Equivalent to summing all positive differences between consecutive days",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Decreasing prices [5,4,3,2,1]→0", "Increasing prices [1,2,3,4,5]→4", "Single price", "All same prices", "Alternating up/down"],
    followUps: ["What if there's a cooldown period?", "What if there's a transaction fee?", "What if limited to at most k transactions?"],
    dryRun: { input: "prices=[7,1,5,3,6,4]", steps: ["1→5: profit=4", "5→3: skip", "3→6: profit+=3", "6→4: skip", "Total=7"] },
    related: ["Best Time to Buy and Sell Stock", "Best Time to Buy and Sell Stock III", "Best Time to Buy and Sell Stock with Cooldown"],
    timeTarget: "10 min (Medium)"
  },

  "Container With Most Water": {
    thoughtProcess: [
      "Step 1: Read problem → find two lines forming container with most water",
      "Step 2: Brute force: check all pairs → O(n²)",
      "Step 3: Insight: start with widest container (left=0, right=n-1)",
      "Step 4: Move the shorter line inward (only way to potentially increase area)",
      "Step 5: O(n) time, O(1) space. Area = min(h[l],h[r]) * (r-l)"
    ],
    edgeCases: ["Two elements [1,1]", "Increasing heights [1,2,3,4]", "All same height", "Tall ends with short middle", "Single tall bar in middle"],
    followUps: ["Prove why moving the shorter pointer is correct", "What if lines have width?", "Difference from trapping rain water?"],
    dryRun: { input: "height=[1,8,6,2,5,4,8,3,7]", steps: ["L=0,R=8: area=min(1,7)*8=8. Move L (shorter)", "L=1,R=8: area=min(8,7)*7=49. Move R", "L=1,R=7: area=min(8,3)*6=18. Move R", "L=1,R=6: area=min(8,8)*5=40. Move either", "Max=49"] },
    related: ["Trapping Rain Water", "Largest Rectangle in Histogram", "Maximum Area of Island"],
    timeTarget: "15 min (Medium)"
  },


  "Find All Duplicates in an Array": {
    thoughtProcess: [
      "Step 1: Read problem → find all elements appearing twice, values in [1,n]",
      "Step 2: With extra space: HashSet → O(n) time, O(n) space",
      "Step 3: O(1) space trick: use array indices as markers (values are 1 to n)",
      "Step 4: For each num, negate value at index |num|-1. If already negative → duplicate",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["No duplicates [1,2,3]", "All duplicates [1,1,2,2]", "Single element [1]", "Max value equals n"],
    followUps: ["What if elements can appear more than twice?", "Can you restore the array after?", "What if you can't modify the array?"],
    dryRun: { input: "nums=[4,3,2,7,8,2,3,1]", steps: ["num=4: idx=3, nums[3]=7→-7", "num=3: idx=2, nums[2]=2→-2", "num=2: idx=1, nums[1]=3→-3", "num=7: idx=6, nums[6]=3→-3", "num=8: idx=7, nums[7]=1→-1", "num=2: idx=1, nums[1]=-3 already neg → found 2", "num=3: idx=2, nums[2]=-2 already neg → found 3", "Result: [2,3]"] },
    related: ["Find the Duplicate Number", "First Missing Positive", "Contains Duplicate"],
    timeTarget: "15 min (Medium)"
  },

  "Find the Duplicate Number": {
    thoughtProcess: [
      "Step 1: Read problem → n+1 numbers in [1,n], one duplicate, find it without modifying array",
      "Step 2: Sort → O(n log n). HashSet → O(n) space. Need O(1) space.",
      "Step 3: Treat as linked list cycle: index → nums[index] creates a graph",
      "Step 4: Floyd's cycle detection: slow/fast pointers find meeting point",
      "Step 5: Reset one to start, advance both by 1 → meet at cycle entrance (the duplicate). O(n) time, O(1) space"
    ],
    edgeCases: ["Duplicate at start [2,1,2]", "Many duplicates [1,3,3,3]", "Minimum size n=1 [1,1]", "Duplicate of max value"],
    followUps: ["Why does Floyd's algorithm work here?", "Can you solve it with binary search on value range?", "What if there are multiple duplicates?"],
    dryRun: { input: "nums=[1,3,4,2,2]", steps: ["slow=nums[0]=1, fast=nums[nums[0]]=3", "slow=nums[1]=3, fast=nums[nums[3]]=nums[2]=4", "slow=nums[3]=2, fast=nums[nums[4]]=nums[2]=4", "slow=nums[2]=4, fast=nums[nums[4]]=nums[2]=4 → meet at 4", "Reset slow=0: slow=nums[0]=1,fast=nums[4]=2", "slow=nums[1]=3,fast=nums[2]=4", "slow=nums[3]=2,fast=nums[4]=2 → meet at 2"] },
    related: ["Linked List Cycle II", "Find All Duplicates in an Array", "Missing Number"],
    timeTarget: "15 min (Medium)"
  },


  "Frequency of the Most Frequent Element": {
    thoughtProcess: [
      "Step 1: Read problem → maximize frequency of any element with at most k increments",
      "Step 2: Key insight: optimal to make elements equal to the largest in a window",
      "Step 3: Sort array. Sliding window: cost to make window equal to right element",
      "Step 4: Cost = nums[r] * windowSize - windowSum. If cost > k, shrink from left",
      "Step 5: O(n log n) time, O(1) space"
    ],
    edgeCases: ["k=0 (find natural max frequency)", "All same elements", "k large enough to make all same", "Single element", "All different with k=0"],
    followUps: ["What if you can also decrement?", "Can you use binary search on window size?", "What if elements are very large?"],
    dryRun: { input: "nums=[1,2,4], k=5", steps: ["Sort: [1,2,4]", "Window [1]: cost=0, freq=1", "Window [1,2]: cost=2*2-3=1≤5, freq=2", "Window [1,2,4]: cost=4*3-7=5≤5, freq=3", "Max frequency = 3"] },
    related: ["Longest Repeating Character Replacement", "Maximize the Confusion of an Exam", "Minimum Operations to Make All Array Elements Equal"],
    timeTarget: "15 min (Medium)"
  },

  "Fruit Into Baskets": {
    thoughtProcess: [
      "Step 1: Read problem → longest subarray with at most 2 distinct values",
      "Step 2: This is 'longest substring with at most K distinct' pattern with K=2",
      "Step 3: Sliding window with HashMap tracking fruit type frequencies",
      "Step 4: When distinct types > 2, shrink from left until ≤ 2",
      "Step 5: O(n) time, O(1) space (map has at most 3 entries)"
    ],
    edgeCases: ["Single type [1,1,1]", "Two types [1,2,1,2]", "All different [1,2,3,4]", "Empty tree row", "Pattern at end is longest"],
    followUps: ["What if you have K baskets?", "What if you need minimum window with at least 2 types?", "What if fruits have weights?"],
    dryRun: { input: "fruits=[1,2,1,2,3]", steps: ["Window [1,2,1,2]: map={1:2,2:2}, len=4", "Add 3: map={1:2,2:2,3:1}, 3 types > 2", "Shrink: remove 1 → {1:1,2:2,3:1}, still 3", "Shrink: remove 2 → {2:2,3:1}, 2 types, len=3", "Max = 4"] },
    related: ["Longest Substring with At Most Two Distinct Characters", "Subarrays with K Different Integers", "Maximum Erasure Value"],
    timeTarget: "15 min (Medium)"
  },


  "Game of Life": {
    thoughtProcess: [
      "Step 1: Read problem → simulate one step of Conway's Game of Life in-place",
      "Step 2: Challenge: updating in-place affects neighbor counts for other cells",
      "Step 3: Encode both states: use extra values (2 = was alive→dead, 3 = was dead→alive)",
      "Step 4: Count original neighbors using val % 2 or checking > 0 for original state",
      "Step 5: Second pass: decode (0,2→0; 1,3→1). O(mn) time, O(1) space"
    ],
    edgeCases: ["Single cell", "All alive", "All dead", "Corner cells (fewer neighbors)", "Oscillator pattern"],
    followUps: ["What if the board is infinite?", "How to handle infinite board with sparse representation?", "Can you do it for multiple generations?"],
    dryRun: { input: "board=[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]", steps: ["Encode: cell(0,1) has 1 neighbor → dies → mark 2", "cell(2,0) has 1 neighbor → dies → mark 2", "cell(1,0) has 1 neighbor → stays dead", "cell(1,0) actually has 3 neighbors → born → mark 3", "Decode: 2→0, 3→1, rest stays"] },
    related: ["Set Matrix Zeroes", "Spiral Matrix", "Number of Islands"],
    timeTarget: "15 min (Medium)"
  },

  "Grumpy Bookstore Owner": {
    thoughtProcess: [
      "Step 1: Read problem → maximize satisfied customers using secret technique for X consecutive minutes",
      "Step 2: Base satisfaction: sum customers[i] where grumpy[i]=0",
      "Step 3: Sliding window of size X: find window that recovers most grumpy customers",
      "Step 4: Window value = sum of customers[i] where grumpy[i]=1 within window",
      "Step 5: Answer = base + max window recovery. O(n) time, O(1) space"
    ],
    edgeCases: ["Never grumpy → base is total", "Always grumpy", "X equals array length", "X=1", "Grumpy only at edges"],
    followUps: ["What if you can use the technique multiple times with gaps?", "What if technique duration varies?"],
    dryRun: { input: "customers=[1,0,1,2,1,1,7,5], grumpy=[0,1,0,1,0,1,0,1], X=3", steps: ["Base (not grumpy): 1+1+1+7=10", "Window [0-2]: recover 0 → extra=0", "Window [1-3]: recover 0+2=2", "Window [3-5]: recover 2+1=3", "Window [5-7]: recover 1+5=6 → max", "Answer = 10+6 = 16"] },
    related: ["Maximum Average Subarray I", "Diet Plan Performance", "Max Points You Can Obtain from Cards"],
    timeTarget: "15 min (Medium)"
  },


  "Insert Interval": {
    thoughtProcess: [
      "Step 1: Read problem → insert new interval into sorted non-overlapping intervals, merge if needed",
      "Step 2: Three phases: add intervals before new (end < newStart)",
      "Step 3: Merge overlapping intervals (start ≤ newEnd): track min start, max end",
      "Step 4: Add remaining intervals after merged interval",
      "Step 5: O(n) time, O(n) space for result"
    ],
    edgeCases: ["Insert at beginning", "Insert at end", "New interval covers all", "No overlap", "Empty intervals list", "Adjacent but not overlapping"],
    followUps: ["What if intervals aren't sorted?", "How to support efficient repeated insertions?", "What about interval deletion?"],
    dryRun: { input: "intervals=[[1,3],[6,9]], newInterval=[2,5]", steps: ["Phase 1: [1,3] overlaps (3≥2) → skip to merge", "Phase 2: merge [1,3] and [2,5] → [1,5]. Check [6,9]: 6>5 → stop merge", "Phase 3: add [6,9]", "Result: [[1,5],[6,9]]"] },
    related: ["Merge Intervals", "Meeting Rooms", "Range Module"],
    timeTarget: "15 min (Medium)"
  },

  "Jump Game": {
    thoughtProcess: [
      "Step 1: Read problem → can you reach the last index?",
      "Step 2: Greedy: track the farthest reachable index",
      "Step 3: At each position i (if reachable), update farthest = max(farthest, i + nums[i])",
      "Step 4: If farthest ≥ last index → return true. If i > farthest → stuck, return false",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Single element [0]→true", "Zero at start [0,1]→false", "All ones [1,1,1,1]", "Large first jump [5,0,0,0,0]", "Zero in middle [2,0,0]→false"],
    followUps: ["What's the minimum number of jumps?", "What if you can jump backward too?", "What about weighted jumps (minimum cost)?"],
    dryRun: { input: "nums=[2,3,1,1,4]", steps: ["i=0: farthest=max(0,2)=2", "i=1: farthest=max(2,4)=4", "4≥4 → return true (can stop early)"] },
    related: ["Jump Game II", "Jump Game III", "Minimum Number of Taps to Water a Garden"],
    timeTarget: "10 min (Medium)"
  },


  "Jump Game II": {
    thoughtProcess: [
      "Step 1: Read problem → minimum number of jumps to reach last index",
      "Step 2: BFS-like greedy: treat each jump level as a BFS layer",
      "Step 3: Track currentEnd (farthest in current level) and farthest (farthest in next level)",
      "Step 4: When i reaches currentEnd, increment jumps, set currentEnd = farthest",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Already at end [0]→0 jumps", "One jump needed [2,1]→1", "All ones [1,1,1]→n-1 jumps", "Large first jump covers all"],
    followUps: ["What if some positions are blocked?", "What if jumps have costs?", "Prove this greedy gives minimum jumps"],
    dryRun: { input: "nums=[2,3,1,1,4]", steps: ["jumps=0, end=0, farthest=0", "i=0: farthest=2, i==end → jumps=1, end=2", "i=1: farthest=4, i<end", "i=2: farthest=3, i==end → jumps=2, end=4", "end≥4 → return 2"] },
    related: ["Jump Game", "Jump Game III", "Minimum Cost to Reach Destination in Time"],
    timeTarget: "15 min (Medium)"
  },

  "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit": {
    thoughtProcess: [
      "Step 1: Read problem → longest subarray where max-min ≤ limit",
      "Step 2: Sliding window + need to track max and min efficiently",
      "Step 3: Use two monotonic deques: one for max (decreasing), one for min (increasing)",
      "Step 4: When max-min > limit, shrink from left, removing expired elements from deques",
      "Step 5: O(n) time (each element enters/leaves deque once), O(n) space"
    ],
    edgeCases: ["All same elements", "limit=0 (only same consecutive)", "Strictly increasing/decreasing array", "Single element", "limit very large (whole array)"],
    followUps: ["Can you use a balanced BST (TreeMap) instead?", "What if you need the actual subarray?", "Compare deque vs TreeMap approach complexity"],
    dryRun: { input: "nums=[8,2,4,7], limit=4", steps: ["Add 8: maxDq=[8],minDq=[8], len=1", "Add 2: maxDq=[8,2],minDq=[2], 8-2=6>4 → shrink, remove 8, len=1", "Add 4: maxDq=[4],minDq=[2,4], 4-2=2≤4, len=2", "Add 7: maxDq=[7],minDq=[2,4,7], 7-2=5>4 → shrink, remove 2, 7-4=3≤4, len=2", "Max len=2"] },
    related: ["Sliding Window Maximum", "Longest Subarray of 1s After Deleting One Element", "Max Consecutive Ones III"],
    timeTarget: "15 min (Medium)"
  },


  "Longest Subarray of 1s After Deleting One Element": {
    thoughtProcess: [
      "Step 1: Read problem → longest subarray of 1s after deleting exactly one element",
      "Step 2: Equivalent to: longest window with at most one 0",
      "Step 3: Sliding window: track count of zeros in window",
      "Step 4: When zeros > 1, shrink from left until zeros ≤ 1",
      "Step 5: Answer = maxWindowLen - 1 (since we must delete one). O(n) time, O(1) space"
    ],
    edgeCases: ["All 1s [1,1,1]→n-1 (must delete one)", "All 0s [0,0,0]→0", "Single 0 in middle [1,0,1]→2", "Single element", "Zero at start/end"],
    followUps: ["What if you can delete at most k elements?", "What about inserting one 1 instead?"],
    dryRun: { input: "nums=[1,1,0,1,1,1,0,1]", steps: ["Window [0,4]: [1,1,0,1,1], zeros=1, len=5", "Expand to [0,5]: [1,1,0,1,1,1], zeros=1, len=6", "Expand to [0,6]: zeros=2>1 → shrink to [2,6]: [0,1,1,1,0], zeros=2 → shrink to [3,6]: [1,1,1,0], zeros=1, len=4", "Max window=6, answer=6-1=5"] },
    related: ["Max Consecutive Ones III", "Longest Repeating Character Replacement", "Maximum Consecutive Ones"],
    timeTarget: "15 min (Medium)"
  },

  "Longest Turbulent Subarray": {
    thoughtProcess: [
      "Step 1: Read problem → longest subarray where comparisons alternate between > and <",
      "Step 2: Track two variables: length ending with increase, length ending with decrease",
      "Step 3: If arr[i]>arr[i-1]: inc = dec+1, dec=1. If arr[i]<arr[i-1]: dec = inc+1, inc=1",
      "Step 4: If equal: both reset to 1",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["All same [1,1,1]→1", "Strictly increasing [1,2,3]→2", "Two elements [1,2]→2", "Single element→1", "Perfect zigzag"],
    followUps: ["What if you need to find all turbulent subarrays?", "What about longest alternating subsequence (not subarray)?"],
    dryRun: { input: "arr=[9,4,2,10,7,8,8,1,9]", steps: ["i=1: 4<9 → dec=2,inc=1", "i=2: 2<4 → dec=2(not alt),inc=1. Actually dec=2,inc=1", "i=3: 10>2 → inc=dec+1=3,dec=1", "i=4: 7<10 → dec=inc+1=4,inc=1", "i=5: 8>7 → inc=dec+1=5,dec=1", "i=6: 8=8 → inc=1,dec=1", "Max=5"] },
    related: ["Maximum Subarray", "Longest Continuous Increasing Subsequence", "Wiggle Subsequence"],
    timeTarget: "15 min (Medium)"
  },


  "Max Consecutive Ones III": {
    thoughtProcess: [
      "Step 1: Read problem → longest subarray of 1s if you can flip at most k zeros",
      "Step 2: Sliding window: allow at most k zeros in window",
      "Step 3: Expand right; when zeros exceed k, shrink from left",
      "Step 4: Track max window size throughout",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["k=0 (no flips allowed)", "k≥number of zeros (whole array)", "All zeros", "All ones", "k larger than array length"],
    followUps: ["What if flipping has different costs per position?", "What about minimum window containing at least k ones?"],
    dryRun: { input: "nums=[1,1,1,0,0,0,1,1,1,1,0], k=2", steps: ["Window [0,4]: ones=3, zeros=2≤k, len=5", "Expand [0,5]: zeros=3>k → shrink", "Shrink to [1,5]: zeros=2? No, [3,5] are 0s. Shrink until zeros≤2", "[4,10]: 0,0,1,1,1,1,0 zeros=3 too many", "Best window [5,10]: 0,1,1,1,1,0 → len=6"] },
    related: ["Maximum Consecutive Ones", "Longest Subarray of 1s After Deleting One Element", "Longest Repeating Character Replacement"],
    timeTarget: "15 min (Medium)"
  },

  "Max Points You Can Obtain from Cards": {
    thoughtProcess: [
      "Step 1: Read problem → pick exactly k cards from front or back to maximize sum",
      "Step 2: Taking from both ends = leaving a contiguous subarray of size n-k",
      "Step 3: Minimize the sum of the remaining window of size n-k",
      "Step 4: Sliding window of fixed size n-k, find minimum window sum",
      "Step 5: Answer = totalSum - minWindowSum. O(n) time, O(1) space"
    ],
    edgeCases: ["k equals array length (take all)", "k=1 (max of first or last)", "All same values", "Best is all from one end"],
    followUps: ["What if cards have costs too?", "What if you must alternate front/back?", "DP approach vs sliding window?"],
    dryRun: { input: "cardPoints=[1,2,3,4,5,6,1], k=3", steps: ["n=7, window size=4, total=22", "Window [0,3]: sum=1+2+3+4=10", "Window [1,4]: sum=2+3+4+5=14", "Window [2,5]: sum=3+4+5+6=18", "Window [3,6]: sum=4+5+6+1=16", "Min window=10, answer=22-10=12"] },
    related: ["Maximum Subarray", "Grumpy Bookstore Owner", "Sliding Window Maximum"],
    timeTarget: "15 min (Medium)"
  },


  "Maximize the Confusion of an Exam": {
    thoughtProcess: [
      "Step 1: Read problem → maximize consecutive same answers by flipping at most k",
      "Step 2: Same as 'longest substring with at most k replacements'",
      "Step 3: Run sliding window twice: once maximizing T's, once maximizing F's",
      "Step 4: Window is valid while count of minority char ≤ k",
      "Step 5: Return max of both runs. O(n) time, O(1) space"
    ],
    edgeCases: ["All same already", "k=0", "k≥n (whole string)", "Alternating T/F", "Single character"],
    followUps: ["Can you do it in a single pass?", "What if there are more than 2 characters?", "What if flipping T costs different from flipping F?"],
    dryRun: { input: "answerKey='TTFF', k=2", steps: ["Max T's: window [0,3], F count=2≤k, len=4", "Max F's: window [0,3], T count=2≤k, len=4", "Answer=4"] },
    related: ["Longest Repeating Character Replacement", "Max Consecutive Ones III", "Frequency of the Most Frequent Element"],
    timeTarget: "15 min (Medium)"
  },

  "Maximum Area of Island": {
    thoughtProcess: [
      "Step 1: Read problem → find largest connected component of 1s in grid",
      "Step 2: BFS/DFS from each unvisited land cell, count cells in component",
      "Step 3: Mark visited by setting cell to 0 (or use visited set)",
      "Step 4: Track max area across all components",
      "Step 5: O(m*n) time, O(m*n) space for recursion stack worst case"
    ],
    edgeCases: ["All water → 0", "All land → m*n", "Single cell island", "Diagonal cells (not connected)", "L-shaped islands"],
    followUps: ["What if diagonal counts as connected?", "What about perimeter of the island?", "How to handle very large grids (iterative DFS)?"],
    dryRun: { input: "grid=[[1,1,0],[1,0,0],[0,0,1]]", steps: ["Start DFS at (0,0): visit (0,0),(0,1),(1,0) → area=3", "Skip visited and water cells", "Start DFS at (2,2): area=1", "Max area = 3"] },
    related: ["Number of Islands", "Island Perimeter", "Flood Fill"],
    timeTarget: "15 min (Medium)"
  },


  "Maximum Erasure Value": {
    thoughtProcess: [
      "Step 1: Read problem → max sum of subarray with all unique elements",
      "Step 2: Sliding window + HashSet to track uniqueness",
      "Step 3: Expand right; if duplicate found, shrink left until element removed",
      "Step 4: Maintain running sum, track max sum",
      "Step 5: O(n) time, O(n) space for the set"
    ],
    edgeCases: ["All unique (whole array)", "All same [5,5,5]→5", "Single element", "Duplicate at distance > 1", "Large values"],
    followUps: ["What if you need minimum sum subarray with unique elements?", "What if there's a max window size?"],
    dryRun: { input: "nums=[5,2,1,2,5,2,1,2,5]", steps: ["Window [5,2,1]: sum=8", "Add 2: dup! shrink until 2 removed → [1,2], sum=3", "Expand [1,2,5]: sum=8", "Add 2: dup! shrink → [5,2], sum=7", "Continue... max sum=8"] },
    related: ["Longest Substring Without Repeating Characters", "Fruit Into Baskets", "Maximum Subarray"],
    timeTarget: "15 min (Medium)"
  },

  "Maximum Product Subarray": {
    thoughtProcess: [
      "Step 1: Read problem → find contiguous subarray with largest product",
      "Step 2: Unlike sum, product can flip sign with negatives",
      "Step 3: Track both maxProduct and minProduct ending at each position",
      "Step 4: At each element: new max = max(num, maxPrev*num, minPrev*num)",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Single negative [-2]→-2", "Two negatives [-2,-3]→6", "Zero in array [2,0,3]→3", "All negative odd count", "All positive"],
    followUps: ["What if zeros can't be in the subarray?", "What about maximum product subsequence?", "How does this differ from maximum subarray sum?"],
    dryRun: { input: "nums=[2,3,-2,4]", steps: ["i=0: max=2, min=2, result=2", "i=1: max=6, min=3, result=6", "i=2: max=max(-2,6*-2,3*-2)=-2, min=-12, result=6", "i=3: max=max(4,-2*4,-12*4)=4, min=-48, result=6"] },
    related: ["Maximum Subarray", "House Robber", "Product of Array Except Self"],
    timeTarget: "15 min (Medium)"
  },


  "Maximum Subarray": {
    thoughtProcess: [
      "Step 1: Read problem → find contiguous subarray with largest sum",
      "Step 2: Brute force: check all subarrays → O(n²)",
      "Step 3: Kadane's Algorithm: current subarray extends or restarts at each element",
      "Step 4: currentMax = max(nums[i], currentMax + nums[i]). If extending is worse, restart.",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["All negative [-3,-2,-1]→-1", "Single element [5]", "All positive [1,2,3]→6", "Mix with zero", "Large negative followed by large positive"],
    followUps: ["Can you solve it with divide and conquer in O(n log n)?", "What if you need the actual subarray indices?", "What about maximum circular subarray sum?"],
    dryRun: { input: "nums=[-2,1,-3,4,-1,2,1,-5,4]", steps: ["cur=-2, max=-2", "cur=1, max=1", "cur=-2, max=1", "cur=4, max=4", "cur=3, max=4", "cur=5, max=5", "cur=6, max=6", "cur=1, max=6", "cur=5, max=6 → return 6"] },
    related: ["Maximum Product Subarray", "Maximum Circular Subarray", "Best Time to Buy and Sell Stock"],
    timeTarget: "10 min (Medium)"
  },

  "Minimum Size Subarray Sum": {
    thoughtProcess: [
      "Step 1: Read problem → shortest subarray with sum ≥ target",
      "Step 2: Brute force: check all subarrays → O(n²)",
      "Step 3: Sliding window: expand right to accumulate sum ≥ target",
      "Step 4: Once sum ≥ target, shrink from left while maintaining condition, update min length",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["No valid subarray → 0", "Single element ≥ target", "All elements needed", "Target = 0", "Very large target"],
    followUps: ["What if array has negative numbers? (prefix sum + binary search)", "What about O(n log n) solution with prefix sums?", "What if you need maximum length instead?"],
    dryRun: { input: "target=7, nums=[2,3,1,2,4,3]", steps: ["Expand: [2,3,1,2]=8≥7, len=4, shrink", "Shrink: [3,1,2]=6<7, expand", "Expand: [3,1,2,4]=10≥7, len=4, shrink", "Shrink: [1,2,4]=7≥7, len=3, shrink", "Shrink: [2,4]=6<7, expand", "Expand: [2,4,3]=9≥7, len=3, shrink", "Shrink: [4,3]=7≥7, len=2 → min=2"] },
    related: ["Maximum Average Subarray I", "Longest Substring Without Repeating Characters", "Subarray Sum Equals K"],
    timeTarget: "15 min (Medium)"
  },


  "Next Permutation": {
    thoughtProcess: [
      "Step 1: Read problem → rearrange to next lexicographically greater permutation",
      "Step 2: Find rightmost pair where nums[i] < nums[i+1] (ascending from right)",
      "Step 3: Find rightmost element > nums[i], swap them",
      "Step 4: Reverse everything after position i (to get smallest arrangement)",
      "Step 5: O(n) time, O(1) space. If no such i exists, reverse entire array (wrap around)"
    ],
    edgeCases: ["Already max [3,2,1]→[1,2,3]", "Already min [1,2,3]→[1,3,2]", "Duplicates [1,5,1]", "Two elements [1,2]→[2,1]", "Single element [1]"],
    followUps: ["How to find the kth permutation directly?", "What about previous permutation?", "How many permutations exist for n elements?"],
    dryRun: { input: "nums=[1,2,3]", steps: ["Find i: nums[1]=2 < nums[2]=3, so i=1", "Find j>i where nums[j]>nums[i]: j=2, nums[2]=3", "Swap: [1,3,2]", "Reverse after i: nothing to reverse → [1,3,2]"] },
    related: ["Permutations", "Permutations II", "Permutation Sequence"],
    timeTarget: "15 min (Medium)"
  },

  "Number of Islands": {
    thoughtProcess: [
      "Step 1: Read problem → count connected components of '1's in grid",
      "Step 2: For each unvisited '1', trigger DFS/BFS to mark entire island",
      "Step 3: Increment count for each new DFS/BFS started",
      "Step 4: Mark visited by changing '1' to '0' (or use visited array)",
      "Step 5: O(m*n) time, O(m*n) space for stack"
    ],
    edgeCases: ["All water → 0", "All land → 1", "Diagonal lands (not connected)", "Single cell", "Many small islands"],
    followUps: ["What if you need to count islands in a stream of additions?", "What about Union-Find approach?", "How to count distinct island shapes?"],
    dryRun: { input: "grid=[['1','1','0'],['1','0','0'],['0','0','1']]", steps: ["Visit (0,0): DFS marks (0,0),(0,1),(1,0). Count=1", "Skip (0,1),(1,0) (visited)", "(1,1),(2,0),(2,1) are water", "Visit (2,2): DFS marks (2,2). Count=2", "Return 2"] },
    related: ["Maximum Area of Island", "Number of Distinct Islands", "Surrounded Regions"],
    timeTarget: "15 min (Medium)"
  },


  "Number of Sub-arrays of Size K and Average >= Threshold": {
    thoughtProcess: [
      "Step 1: Read problem → count subarrays of exact size k with average ≥ threshold",
      "Step 2: Average ≥ threshold ↔ sum ≥ threshold * k",
      "Step 3: Sliding window of size k, maintain running sum",
      "Step 4: For each window, check if sum ≥ threshold*k, increment count",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["All windows qualify", "No window qualifies", "k equals array length", "Threshold = 0", "Negative values"],
    followUps: ["What if k varies?", "What about subarrays of any size?"],
    dryRun: { input: "arr=[2,2,2,2,5,5,5,8], k=3, threshold=4", steps: ["Target sum = 4*3 = 12", "Window [2,2,2]=6<12 → no", "Window [2,2,5]=9<12 → no", "Window [2,5,5]=12≥12 → count=1", "Window [5,5,5]=15≥12 → count=2", "Window [5,5,8]=18≥12 → count=3", "Window [5,8,...] → continue. Answer=3"] },
    related: ["Maximum Average Subarray I", "Diet Plan Performance", "Minimum Size Subarray Sum"],
    timeTarget: "10 min (Medium)"
  },

  "Product of Array Except Self": {
    thoughtProcess: [
      "Step 1: Read problem → output[i] = product of all elements except nums[i], no division",
      "Step 2: With division: totalProduct / nums[i] — but zeros and no-division constraint",
      "Step 3: Prefix products from left, suffix products from right",
      "Step 4: output[i] = leftProduct[i] * rightProduct[i]",
      "Step 5: O(n) time. O(1) extra space using output array for prefix, then multiply suffix in-place"
    ],
    edgeCases: ["Contains zero [1,2,0,4]", "Multiple zeros [0,0,1]", "Two elements [2,3]", "Contains 1s and -1s", "Single element"],
    followUps: ["What if division is allowed?", "Can you handle zeros with division approach?", "What about sum of array except self?"],
    dryRun: { input: "nums=[1,2,3,4]", steps: ["Left pass: output=[1,1,2,6]", "Right pass: multiply from right", "i=3: output[3]=6*1=6, rightProd=4", "i=2: output[2]=2*4=8, rightProd=12", "i=1: output[1]=1*12=12, rightProd=24", "i=0: output[0]=1*24=24", "Result: [24,12,8,6]"] },
    related: ["Maximum Product Subarray", "Find Pivot Index", "Trapping Rain Water"],
    timeTarget: "15 min (Medium)"
  },


  "Rotate Array": {
    thoughtProcess: [
      "Step 1: Read problem → rotate array right by k positions in-place",
      "Step 2: Brute force: shift one position k times → O(n*k)",
      "Step 3: Reverse approach: reverse all, reverse first k, reverse rest",
      "Step 4: After full reverse, first k elements are the last k (in reverse), fix by reversing each half",
      "Step 5: O(n) time, O(1) space. Don't forget k = k % n"
    ],
    edgeCases: ["k=0 (no change)", "k=n (no change)", "k>n (use k%n)", "Single element", "Two elements k=1"],
    followUps: ["Can you do it with cyclic replacements?", "What about left rotation?", "What if you can use O(k) extra space?"],
    dryRun: { input: "nums=[1,2,3,4,5,6,7], k=3", steps: ["k=3%7=3", "Reverse all: [7,6,5,4,3,2,1]", "Reverse [0,2]: [5,6,7,4,3,2,1]", "Reverse [3,6]: [5,6,7,1,2,3,4]"] },
    related: ["Rotate Image", "Reverse String", "Rotate List"],
    timeTarget: "10 min (Medium)"
  },

  "Rotate Image": {
    thoughtProcess: [
      "Step 1: Read problem → rotate n×n matrix 90° clockwise in-place",
      "Step 2: Pattern: transpose + reverse each row = 90° clockwise",
      "Step 3: Transpose: swap matrix[i][j] with matrix[j][i] for i<j",
      "Step 4: Reverse each row",
      "Step 5: O(n²) time, O(1) space"
    ],
    edgeCases: ["1x1 matrix", "2x2 matrix", "Odd dimension (center stays)", "All same values", "Non-square? (not applicable)"],
    followUps: ["How to rotate 90° counter-clockwise?", "How to rotate 180°?", "What about rotating a non-square matrix?"],
    dryRun: { input: "matrix=[[1,2,3],[4,5,6],[7,8,9]]", steps: ["Transpose: [[1,4,7],[2,5,8],[3,6,9]]", "Reverse rows: [[7,4,1],[8,5,2],[9,6,3]]"] },
    related: ["Spiral Matrix", "Set Matrix Zeroes", "Transpose Matrix"],
    timeTarget: "10 min (Medium)"
  },


  "Set Matrix Zeroes": {
    thoughtProcess: [
      "Step 1: Read problem → if element is 0, set entire row and column to 0",
      "Step 2: Can't modify in-place naively (new zeros propagate). Need to record positions first.",
      "Step 3: O(m+n) space: use sets for zero rows and columns",
      "Step 4: O(1) space: use first row and first column as markers",
      "Step 5: Handle first row/col separately with boolean flags. O(mn) time, O(1) space"
    ],
    edgeCases: ["No zeros", "All zeros", "Zero in corner (0,0)", "Single row or column", "Zero only in first row/col"],
    followUps: ["Why do we need separate flags for first row/col?", "What about setting to a specific value instead?", "What if only diagonals get zeroed?"],
    dryRun: { input: "matrix=[[1,1,1],[1,0,1],[1,1,1]]", steps: ["Find zero at (1,1)", "Mark: first row of col 1 → matrix[0][1]=0, first col of row 1 → matrix[1][0]=0", "Process non-first rows/cols: (1,0)(1,2)(0,1)(2,1) set to 0", "Result: [[1,0,1],[0,0,0],[1,0,1]]"] },
    related: ["Game of Life", "Rotate Image", "Spiral Matrix"],
    timeTarget: "15 min (Medium)"
  },

  "Spiral Matrix": {
    thoughtProcess: [
      "Step 1: Read problem → traverse matrix in spiral order",
      "Step 2: Maintain four boundaries: top, bottom, left, right",
      "Step 3: Traverse right → down → left → up, shrinking boundaries after each",
      "Step 4: Stop when top > bottom or left > right",
      "Step 5: O(m*n) time, O(1) space (excluding output)"
    ],
    edgeCases: ["Single element [[1]]", "Single row [[1,2,3]]", "Single column [[1],[2],[3]]", "Non-square matrix", "1x1 matrix"],
    followUps: ["How to fill a matrix in spiral order (Spiral Matrix II)?", "What about anti-clockwise spiral?", "Can you do it recursively?"],
    dryRun: { input: "matrix=[[1,2,3],[4,5,6],[7,8,9]]", steps: ["Right: 1,2,3. top++", "Down: 6,9. right--", "Left: 8,7. bottom--", "Up: 4. left++", "Right: 5. top++", "top>bottom → stop. Result: [1,2,3,6,9,8,7,4,5]"] },
    related: ["Spiral Matrix II", "Rotate Image", "Set Matrix Zeroes"],
    timeTarget: "15 min (Medium)"
  },


  "Two Sum II - Input Array Is Sorted": {
    thoughtProcess: [
      "Step 1: Read problem → find two numbers in sorted array that sum to target",
      "Step 2: Brute force: check all pairs → O(n²)",
      "Step 3: Array is sorted → two-pointer approach. Left at start, right at end.",
      "Step 4: If sum < target, move left right. If sum > target, move right left. If equal, found.",
      "Step 5: O(n) time, O(1) space. Return 1-indexed."
    ],
    edgeCases: ["Target at extremes", "Negative numbers", "Duplicates allowed", "Minimum array size 2", "Large values (overflow when summing)"],
    followUps: ["What if not sorted (use HashMap)?", "What about 3Sum variant?", "Binary search for complement approach?"],
    dryRun: { input: "numbers=[2,7,11,15], target=9", steps: ["L=0,R=3: 2+15=17>9, R--", "L=0,R=2: 2+11=13>9, R--", "L=0,R=1: 2+7=9=target → return [1,2]"] },
    related: ["Two Sum", "3Sum", "Two Sum IV - BST"],
    timeTarget: "5 min (Medium)"
  },


  "Add Binary": {
    thoughtProcess: [
      "Step 1: Read problem → add two binary strings, return binary string result",
      "Step 2: Process from right to left (like grade school addition)",
      "Step 3: Sum digits + carry at each position. New digit = sum%2, carry = Math.floor(sum/2)",
      "Step 4: Handle different lengths (treat missing digits as 0)",
      "Step 5: Don't forget final carry. O(max(m,n)) time, O(max(m,n)) space"
    ],
    edgeCases: ["Different lengths '11'+'1'", "Both '0'", "Carry propagates '111'+'1'='1000'", "Very long strings", "One empty (shouldn't occur)"],
    followUps: ["Can you do it without BigInt or built-in conversions?", "What about adding in other bases?", "How to subtract binary strings?"],
    dryRun: { input: "a='1010', b='1011'", steps: ["pos 3: 0+1+0=1, carry=0, digit=1", "pos 2: 1+1+0=2, carry=1, digit=0", "pos 1: 0+0+1=1, carry=0, digit=1", "pos 0: 1+1+0=2, carry=1, digit=0", "Final carry=1 → result='10101'"] },
    related: ["Plus One", "Add Two Numbers", "Multiply Strings"],
    timeTarget: "5 min (Easy)"
  },

  "First Unique Character in a String": {
    thoughtProcess: [
      "Step 1: Read problem → find first non-repeating character's index",
      "Step 2: Count frequency of each character using array[26] or HashMap",
      "Step 3: Second pass: find first char with count == 1",
      "Step 4: O(n) time, O(1) space (fixed 26 chars)"
    ],
    edgeCases: ["All unique 'abc'→0", "All repeating 'aabb'→-1", "Single char 'a'→0", "Unique at end 'aabbc'→4", "Empty string"],
    followUps: ["What if the string is a stream?", "What about first unique in last k characters?", "Can you do it in one pass with a queue?"],
    dryRun: { input: "s='leetcode'", steps: ["Count: l:1,e:3,t:1,c:1,o:1,d:1", "Scan: s[0]='l', count=1 → return 0"] },
    related: ["Sort Characters By Frequency", "First Letter to Appear Twice", "Longest Substring Without Repeating Characters"],
    timeTarget: "5 min (Easy)"
  },


  "Implement strStr()": {
    thoughtProcess: [
      "Step 1: Read problem → find first occurrence of needle in haystack",
      "Step 2: Brute force: check each starting position → O(m*n)",
      "Step 3: For interviews, brute force is usually acceptable",
      "Step 4: Optimal: KMP algorithm with failure function → O(m+n)",
      "Step 5: Build prefix table for needle, then single pass through haystack"
    ],
    edgeCases: ["Empty needle → 0", "Needle longer than haystack → -1", "Needle equals haystack", "Needle not found", "Repeated pattern 'aaa' in 'aaaaa'"],
    followUps: ["Explain KMP and its prefix function", "What about Rabin-Karp (hash-based)?", "When would you use Boyer-Moore?"],
    dryRun: { input: "haystack='hello', needle='ll'", steps: ["i=0: 'he' vs 'll' → no match", "i=1: 'el' vs 'll' → no match", "i=2: 'll' vs 'll' → match! return 2"] },
    related: ["Repeated Substring Pattern", "Longest Happy Prefix", "Regular Expression Matching"],
    timeTarget: "5 min (Easy)"
  },

  "Is Subsequence": {
    thoughtProcess: [
      "Step 1: Read problem → is s a subsequence of t?",
      "Step 2: Two pointers: one for s, one for t",
      "Step 3: Advance t pointer always; advance s pointer when characters match",
      "Step 4: If s pointer reaches end → true",
      "Step 5: O(n) time where n=len(t), O(1) space"
    ],
    edgeCases: ["Empty s → true", "s longer than t → false", "s equals t → true", "Single char match/miss", "Characters of s not in t"],
    followUps: ["What if there are many s strings to check against same t?", "Pre-process t with char positions for binary search?", "What about longest common subsequence?"],
    dryRun: { input: "s='ace', t='abcde'", steps: ["s[0]='a'=t[0]='a' → match, sPtr=1, tPtr=1", "s[1]='c'≠t[1]='b' → tPtr=2", "s[1]='c'=t[2]='c' → match, sPtr=2, tPtr=3", "s[2]='e'≠t[3]='d' → tPtr=4", "s[2]='e'=t[4]='e' → match, sPtr=3", "sPtr=3=len(s) → return true"] },
    related: ["Longest Common Subsequence", "Number of Matching Subsequences", "Minimum Window Subsequence"],
    timeTarget: "5 min (Easy)"
  },


  "Longest Common Prefix": {
    thoughtProcess: [
      "Step 1: Read problem → find longest common prefix among all strings",
      "Step 2: Vertical scan: compare char by char across all strings",
      "Step 3: At each position, if any string differs or ends → stop",
      "Step 4: Return prefix up to that point",
      "Step 5: O(S) time where S = sum of all characters, O(1) space"
    ],
    edgeCases: ["Empty array → ''", "Single string → itself", "No common prefix → ''", "All identical strings", "One empty string in array"],
    followUps: ["Can you use binary search on prefix length?", "What about trie-based approach?", "Divide and conquer approach?"],
    dryRun: { input: "strs=['flower','flow','flight']", steps: ["pos 0: f,f,f → match", "pos 1: l,l,l → match", "pos 2: o,o,i → mismatch! stop", "Return 'fl'"] },
    related: ["Implement strStr()", "Longest Common Subsequence", "Palindrome Pairs"],
    timeTarget: "5 min (Easy)"
  },

  "Reverse String": {
    thoughtProcess: [
      "Step 1: Read problem → reverse char array in-place",
      "Step 2: Two pointers: left at start, right at end",
      "Step 3: Swap characters at left and right, move both inward",
      "Step 4: Stop when left ≥ right",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Single char ['a']", "Two chars ['a','b']", "Palindrome ['a','b','a']", "Even vs odd length", "Empty array"],
    followUps: ["What about reversing words in a string?", "Reverse only vowels?", "Reverse in groups of k?"],
    dryRun: { input: "s=['h','e','l','l','o']", steps: ["Swap s[0],s[4]: ['o','e','l','l','h']", "Swap s[1],s[3]: ['o','l','l','e','h']", "l=2,r=2: stop → ['o','l','l','e','h']"] },
    related: ["Reverse Vowels of a String", "Reverse String II", "Reverse Words in a String"],
    timeTarget: "3 min (Easy)"
  },


  "Reverse Vowels of a String": {
    thoughtProcess: [
      "Step 1: Read problem → reverse only the vowels in the string",
      "Step 2: Two pointers: left finds next vowel from start, right finds next vowel from end",
      "Step 3: Swap them, continue until pointers cross",
      "Step 4: Use a set for O(1) vowel lookup (aeiouAEIOU)",
      "Step 5: O(n) time, O(n) space for mutable string (or O(1) if char array)"
    ],
    edgeCases: ["No vowels 'bcdfg'", "All vowels 'aeiou'", "Single char", "Upper and lowercase vowels", "Empty string"],
    followUps: ["What about reversing consonants instead?", "What if you need to reverse specific character classes?"],
    dryRun: { input: "s='hello'", steps: ["L=0: 'h' not vowel, L++", "L=1: 'e' is vowel. R=4: 'o' is vowel", "Swap: 'holle'", "L=2,R=3: 'l','l' not vowels → done", "Result: 'holle'"] },
    related: ["Reverse String", "Reverse Words in a String", "Remove Vowels from a String"],
    timeTarget: "5 min (Easy)"
  },

  "Roman to Integer": {
    thoughtProcess: [
      "Step 1: Read problem → convert Roman numeral string to integer",
      "Step 2: Map each symbol to value: I=1, V=5, X=10, L=50, C=100, D=500, M=1000",
      "Step 3: Scan right to left: if current < next, subtract; else add",
      "Step 4: Handles subtractive cases (IV=4, IX=9, etc.) naturally",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Single char 'I'→1", "Subtractive 'IV'→4", "Maximum 'MMMCMXCIX'→3999", "Consecutive same 'III'→3", "Mixed 'MCMXCIV'→1994"],
    followUps: ["How to convert integer to Roman?", "How to validate if a Roman string is well-formed?", "What's the range of valid Roman numerals?"],
    dryRun: { input: "s='MCMXCIV'", steps: ["M=1000, C=100<M so -100, M=+1000, X=10<C(100) so -10, C=+100, I=1<V so -1, V=+5", "1000-100+1000-10+100-1+5 = 1994"] },
    related: ["Integer to Roman", "Excel Sheet Column Number"],
    timeTarget: "5 min (Easy)"
  },


  "Student Attendance Record I": {
    thoughtProcess: [
      "Step 1: Read problem → eligible if <2 'A's and no 3+ consecutive 'L's",
      "Step 2: Count A's, track consecutive L's",
      "Step 3: If A count ≥ 2 or consecutive L's ≥ 3, return false",
      "Step 4: Single pass, O(n) time, O(1) space"
    ],
    edgeCases: ["Empty string → true", "All P's → true", "Two A's 'AA' → false", "Three L's 'LLL' → false", "'ALLL' → false (both conditions)", "Non-consecutive L's 'LLPLL' → true"],
    followUps: ["What about the DP version (Student Attendance Record II)?", "What if there are n students with different rules?"],
    dryRun: { input: "s='PPALLP'", steps: ["P: aCount=0, lStreak=0", "P: aCount=0, lStreak=0", "A: aCount=1, lStreak=0", "L: lStreak=1", "L: lStreak=2", "P: lStreak=0", "aCount<2, maxL<3 → return true"] },
    related: ["Student Attendance Record II", "Longest Continuous Increasing Subsequence"],
    timeTarget: "5 min (Easy)"
  },

  "Valid Palindrome": {
    thoughtProcess: [
      "Step 1: Read problem → check if alphanumeric characters form a palindrome (case-insensitive)",
      "Step 2: Two pointers: left and right, skip non-alphanumeric",
      "Step 3: Compare lowercase versions of chars at both pointers",
      "Step 4: If mismatch → false. If pointers cross → true",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Empty string → true", "Only non-alphanumeric ',.!' → true", "Single char → true", "Mixed case 'Aa' → true", "Numbers count '0P' → false"],
    followUps: ["What if we need to check palindrome with one deletion allowed?", "What about longest palindromic substring?"],
    dryRun: { input: "s='A man, a plan, a canal: Panama'", steps: ["Skip non-alnum, compare 'a' and 'a' → match", "Compare 'm' and 'm' → match", "...continue inward, all match", "Return true"] },
    related: ["Valid Palindrome II", "Palindrome Linked List", "Longest Palindromic Substring"],
    timeTarget: "5 min (Easy)"
  },


  "Valid Palindrome II": {
    thoughtProcess: [
      "Step 1: Read problem → can string become palindrome by removing at most one character?",
      "Step 2: Two pointers from both ends",
      "Step 3: On first mismatch, try skipping left char OR skipping right char",
      "Step 4: Check if either resulting substring is a palindrome",
      "Step 5: O(n) time, O(1) space"
    ],
    edgeCases: ["Already palindrome 'aba'", "Need to remove first/last char", "Remove middle char", "Two chars 'ab'→true", "Cannot fix with one removal 'abc'→false"],
    followUps: ["What if you can remove at most k characters?", "What about making it palindrome with insertions?", "Minimum removals for palindrome (LCS-based)?"],
    dryRun: { input: "s='abca'", steps: ["L=0,R=3: 'a'='a' → match, L++,R--", "L=1,R=2: 'b'≠'c' → mismatch!", "Try skip left: check 'c' (s[2..2]) → palindrome? yes", "OR skip right: check 'b' (s[1..1]) → palindrome? yes", "Return true"] },
    related: ["Valid Palindrome", "Longest Palindromic Subsequence", "Palindrome Partitioning"],
    timeTarget: "10 min (Easy)"
  },


  "Edit Distance": {
    thoughtProcess: [
      "Step 1: Read problem → minimum operations (insert/delete/replace) to convert word1 to word2",
      "Step 2: Classic DP: dp[i][j] = edit distance for word1[0..i-1] and word2[0..j-1]",
      "Step 3: If chars match: dp[i][j] = dp[i-1][j-1] (no operation needed)",
      "Step 4: If differ: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) → delete/insert/replace",
      "Step 5: O(m*n) time, O(m*n) space (optimizable to O(min(m,n)))"
    ],
    edgeCases: ["One empty string → length of other", "Identical strings → 0", "Single char strings", "Completely different strings → max(m,n)", "One is substring of other"],
    followUps: ["Can you optimize to O(n) space?", "What if operations have different costs?", "How to reconstruct the sequence of operations?"],
    dryRun: { input: "word1='horse', word2='ros'", steps: ["DP table base: dp[i][0]=i, dp[0][j]=j", "dp[1][1]: h≠r → 1+min(dp[0][0],dp[1][0],dp[0][1])=1+min(0,1,1)=1", "dp[2][2]: o=o → dp[1][1]=1", "dp[3][3]: r=s? No. dp[3][3]=1+min(dp[2][2],dp[3][2],dp[2][3])=1+min(1,2,2)=2", "...Final dp[5][3]=3"] },
    related: ["One Edit Distance", "Delete Operation for Two Strings", "Minimum ASCII Delete Sum for Two Strings"],
    timeTarget: "25 min (Hard)"
  },

  "Minimum Window Substring": {
    thoughtProcess: [
      "Step 1: Read problem → smallest window in s containing all chars of t",
      "Step 2: Sliding window with character frequency map",
      "Step 3: Expand right until window contains all t chars (track 'formed' count)",
      "Step 4: Shrink from left while window is still valid, update minimum",
      "Step 5: O(m+n) time, O(m+n) space for frequency maps"
    ],
    edgeCases: ["t longer than s → ''", "t not in s → ''", "Duplicate chars in t 'aa'", "s equals t", "Single char t", "Window is entire string"],
    followUps: ["What if you need all minimum windows?", "What about minimum window subsequence?", "How to handle Unicode characters?"],
    dryRun: { input: "s='ADOBECODEBANC', t='ABC'", steps: ["Expand until valid: 'ADOBEC' (has A,B,C), len=6", "Shrink: 'DOBEC' missing A → stop. Record 'ADOBEC'", "Expand: 'DOBECODEBA' → shrink: 'CODEBA', 'ODEBA','DEBA' missing C → record 'CODEBA' len=6", "Continue: find 'BANC' len=4 → minimum", "Return 'BANC'"] },
    related: ["Minimum Window Subsequence", "Substring with Concatenation of All Words", "Longest Substring Without Repeating Characters"],
    timeTarget: "25 min (Hard)"
  },


  "Regular Expression Matching": {
    thoughtProcess: [
      "Step 1: Read problem → implement regex with '.' (any char) and '*' (zero or more of preceding)",
      "Step 2: Recursion: if next char is '*', try zero occurrences or one+ occurrences",
      "Step 3: DP: dp[i][j] = does s[0..i-1] match p[0..j-1]",
      "Step 4: If p[j-1]='*': dp[i][j] = dp[i][j-2] (zero occur) OR (dp[i-1][j] if s[i-1] matches p[j-2])",
      "Step 5: O(m*n) time and space"
    ],
    edgeCases: ["Empty pattern with non-empty string → false", "Pattern '.*' matches everything", "Consecutive stars 'a*b*'", "Single dot '.'", "Pattern longer than string 'a*a*a*'"],
    followUps: ["What about '+' (one or more)?", "How to add '?' (zero or one)?", "NFA vs DFA approach?", "What about backtracking with memoization?"],
    dryRun: { input: "s='aab', p='c*a*b'", steps: ["dp[0][0]=true (empty matches empty)", "dp[0][2]=true (c* can be zero c's)", "dp[0][4]=true (c*a* = zero c's, zero a's)", "dp[1][3]: s[0]='a', p[2]='a' → dp[1][3] includes dp[0][2]=true ✓", "dp[2][4]: check 'a' matches 'a' before *, dp[1][4]=true → dp[2][4]=true", "dp[3][5]: s[2]='b'=p[4]='b', dp[2][4]=true → dp[3][5]=true"] },
    related: ["Wildcard Matching", "Implement strStr()", "Edit Distance"],
    timeTarget: "25 min (Hard)"
  },

  "Substring with Concatenation of All Words": {
    thoughtProcess: [
      "Step 1: Read problem → find all starting indices where concatenation of all words (same length) appears",
      "Step 2: All words same length w, total concat length = n*w. Sliding window of that size.",
      "Step 3: For each starting offset (0 to w-1), use word-level sliding window",
      "Step 4: Track word frequencies with HashMap, slide by word length",
      "Step 5: O(n * w) time where n=string length, w=word length"
    ],
    edgeCases: ["Single word", "Duplicate words in list", "No valid index", "String shorter than total concat", "Words overlap in string"],
    followUps: ["What if words have different lengths?", "Can you optimize with rolling hash?", "What about finding partial matches?"],
    dryRun: { input: "s='barfoothefoobarman', words=['foo','bar']", steps: ["Word len=3, total=6", "Offset 0: check 'bar','foo' at [0,5] → freq matches → add 0", "Slide: 'foo','the' → 'the' not in words → reset", "Continue: at idx 9, 'foo','bar' → freq matches → add 9", "Result: [0, 9]"] },
    related: ["Minimum Window Substring", "Longest Substring Without Repeating Characters", "Word Break"],
    timeTarget: "25 min (Hard)"
  },


};
