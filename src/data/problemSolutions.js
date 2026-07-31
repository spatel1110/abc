export const problemSolutions = {

  "Array Partition": {
    brute: {
      name: "Brute Force",
      time: "O(n log n)",
      space: "O(n)",
      code: `def arrayPairSum(nums):
    nums.sort()
    result = 0
    for i in range(0, len(nums), 2):
        result += nums[i]
    return result`,
    },
    better: {
      name: "Counting Sort",
      time: "O(n + k)",
      space: "O(k)",
      code: `def arrayPairSum(nums):
    count = [0] * 20001
    for num in nums:
        count[num + 10000] += 1
    result, pick = 0, True
    for i in range(20001):
        while count[i] > 0:
            if pick:
                result += i - 10000
            pick = not pick
            count[i] -= 1
    return result`,
    },
    optimal: {
      name: "Sort and Sum Evens",
      time: "O(n log n)",
      space: "O(1)",
      code: `def arrayPairSum(nums):
    nums.sort()
    return sum(nums[::2])`,
    },
  },

  "Best Time to Buy and Sell Stock": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def maxProfit(prices):
    max_profit = 0
    for i in range(len(prices)):
        for j in range(i + 1, len(prices)):
            max_profit = max(max_profit, prices[j] - prices[i])
    return max_profit`,
    },
    better: {
      name: "Right Max Array",
      time: "O(n)",
      space: "O(n)",
      code: `def maxProfit(prices):
    n = len(prices)
    right_max = [0] * n
    right_max[-1] = prices[-1]
    for i in range(n - 2, -1, -1):
        right_max[i] = max(right_max[i + 1], prices[i])
    return max(right_max[i] - prices[i] for i in range(n))`,
    },
    optimal: {
      name: "One Pass Min Track",
      time: "O(n)",
      space: "O(1)",
      code: `def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit`,
    },
  },

  "Contains Duplicate": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def containsDuplicate(nums):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True
    return False`,
    },
    better: {
      name: "Sorting",
      time: "O(n log n)",
      space: "O(1)",
      code: `def containsDuplicate(nums):
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            return True
    return False`,
    },
    optimal: {
      name: "Hash Set",
      time: "O(n)",
      space: "O(n)",
      code: `def containsDuplicate(nums):
    return len(nums) != len(set(nums))`,
    },
  },

  "Diet Plan Performance": {
    brute: {
      name: "Brute Force",
      time: "O(n * k)",
      space: "O(1)",
      code: `def dietPlanPerformance(calories, k, lower, upper):
    points = 0
    for i in range(len(calories) - k + 1):
        total = sum(calories[i:i + k])
        if total < lower:
            points -= 1
        elif total > upper:
            points += 1
    return points`,
    },
    better: {
      name: "Prefix Sum",
      time: "O(n)",
      space: "O(n)",
      code: `def dietPlanPerformance(calories, k, lower, upper):
    prefix = [0] * (len(calories) + 1)
    for i in range(len(calories)):
        prefix[i + 1] = prefix[i] + calories[i]
    points = 0
    for i in range(k, len(calories) + 1):
        total = prefix[i] - prefix[i - k]
        if total < lower: points -= 1
        elif total > upper: points += 1
    return points`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def dietPlanPerformance(calories, k, lower, upper):
    points, window = 0, sum(calories[:k])
    if window < lower: points -= 1
    elif window > upper: points += 1
    for i in range(k, len(calories)):
        window += calories[i] - calories[i - k]
        if window < lower: points -= 1
        elif window > upper: points += 1
    return points`,
    },
  },

  "Find Pivot Index": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def pivotIndex(nums):
    for i in range(len(nums)):
        left_sum = sum(nums[:i])
        right_sum = sum(nums[i + 1:])
        if left_sum == right_sum:
            return i
    return -1`,
    },
    better: {
      name: "Total Sum Approach",
      time: "O(n)",
      space: "O(n)",
      code: `def pivotIndex(nums):
    prefix = [0] * (len(nums) + 1)
    for i in range(len(nums)):
        prefix[i + 1] = prefix[i] + nums[i]
    total = prefix[-1]
    for i in range(len(nums)):
        if prefix[i] == total - prefix[i + 1]:
            return i
    return -1`,
    },
    optimal: {
      name: "Left Sum Tracking",
      time: "O(n)",
      space: "O(1)",
      code: `def pivotIndex(nums):
    total = sum(nums)
    left_sum = 0
    for i in range(len(nums)):
        if left_sum == total - left_sum - nums[i]:
            return i
        left_sum += nums[i]
    return -1`,
    },
  },

  "Majority Element": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def majorityElement(nums):
    for num in nums:
        count = sum(1 for n in nums if n == num)
        if count > len(nums) // 2:
            return num`,
    },
    better: {
      name: "Hash Map Count",
      time: "O(n)",
      space: "O(n)",
      code: `def majorityElement(nums):
    from collections import Counter
    counts = Counter(nums)
    return max(counts, key=counts.get)`,
    },
    optimal: {
      name: "Boyer-Moore Voting",
      time: "O(n)",
      space: "O(1)",
      code: `def majorityElement(nums):
    candidate, count = nums[0], 0
    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    return candidate`,
    },
  },

  "Maximum Average Subarray I": {
    brute: {
      name: "Brute Force",
      time: "O(n * k)",
      space: "O(1)",
      code: `def findMaxAverage(nums, k):
    max_avg = float('-inf')
    for i in range(len(nums) - k + 1):
        max_avg = max(max_avg, sum(nums[i:i+k]) / k)
    return max_avg`,
    },
    better: {
      name: "Prefix Sum",
      time: "O(n)",
      space: "O(n)",
      code: `def findMaxAverage(nums, k):
    prefix = [0] * (len(nums) + 1)
    for i in range(len(nums)):
        prefix[i+1] = prefix[i] + nums[i]
    max_sum = max(prefix[i+k] - prefix[i] for i in range(len(nums)-k+1))
    return max_sum / k`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def findMaxAverage(nums, k):
    window = sum(nums[:k])
    max_sum = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        max_sum = max(max_sum, window)
    return max_sum / k`,
    },
  },

  "Maximum Consecutive Ones": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def findMaxConsecutiveOnes(nums):
    max_count = 0
    for i in range(len(nums)):
        count = 0
        for j in range(i, len(nums)):
            if nums[j] == 1: count += 1
            else: break
        max_count = max(max_count, count)
    return max_count`,
    },
    better: {
      name: "Single Pass Counter",
      time: "O(n)",
      space: "O(1)",
      code: `def findMaxConsecutiveOnes(nums):
    max_count = count = 0
    for num in nums:
        if num == 1:
            count += 1
            max_count = max(max_count, count)
        else:
            count = 0
    return max_count`,
    },
    optimal: {
      name: "One-liner",
      time: "O(n)",
      space: "O(n)",
      code: `def findMaxConsecutiveOnes(nums):
    return max(len(s) for s in ''.join(map(str, nums)).split('0'))`,
    },
  },

  "Meeting Rooms": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def canAttendMeetings(intervals):
    for i in range(len(intervals)):
        for j in range(i + 1, len(intervals)):
            if intervals[i][0] < intervals[j][1] and intervals[j][0] < intervals[i][1]:
                return False
    return True`,
    },
    better: {
      name: "Sort by Start",
      time: "O(n log n)",
      space: "O(1)",
      code: `def canAttendMeetings(intervals):
    intervals.sort(key=lambda x: x[0])
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i - 1][1]:
            return False
    return True`,
    },
    optimal: {
      name: "Sort by End",
      time: "O(n log n)",
      space: "O(1)",
      code: `def canAttendMeetings(intervals):
    intervals.sort()
    return all(intervals[i][0] >= intervals[i-1][1] for i in range(1, len(intervals)))`,
    },
  },

  "Missing Number": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def missingNumber(nums):
    for i in range(len(nums) + 1):
        if i not in nums:
            return i`,
    },
    better: {
      name: "Sorting",
      time: "O(n log n)",
      space: "O(1)",
      code: `def missingNumber(nums):
    nums.sort()
    for i in range(len(nums)):
        if nums[i] != i:
            return i
    return len(nums)`,
    },
    optimal: {
      name: "XOR / Math",
      time: "O(n)",
      space: "O(1)",
      code: `def missingNumber(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)`,
    },
  },

  "Move Zeroes": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def moveZeroes(nums):
    for i in range(len(nums)):
        if nums[i] == 0:
            for j in range(i + 1, len(nums)):
                if nums[j] != 0:
                    nums[i], nums[j] = nums[j], nums[i]
                    break`,
    },
    better: {
      name: "Extra Array",
      time: "O(n)",
      space: "O(n)",
      code: `def moveZeroes(nums):
    result = [x for x in nums if x != 0]
    result += [0] * (len(nums) - len(result))
    for i in range(len(nums)):
        nums[i] = result[i]`,
    },
    optimal: {
      name: "Two Pointer Swap",
      time: "O(n)",
      space: "O(1)",
      code: `def moveZeroes(nums):
    j = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[i], nums[j] = nums[j], nums[i]
            j += 1`,
    },
  },

  "Pascal's Triangle": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(n²)",
      code: `def generate(numRows):
    result = []
    for i in range(numRows):
        row = [1] * (i + 1)
        for j in range(1, i):
            row[j] = result[i-1][j-1] + result[i-1][j]
        result.append(row)
    return result`,
    },
    better: {
      name: "Math Combinatorics",
      time: "O(n²)",
      space: "O(n²)",
      code: `def generate(numRows):
    from math import comb
    return [[comb(i, j) for j in range(i + 1)] for i in range(numRows)]`,
    },
    optimal: {
      name: "Row by Row Build",
      time: "O(n²)",
      space: "O(n²)",
      code: `def generate(numRows):
    res = [[1]]
    for i in range(1, numRows):
        prev = res[-1]
        res.append([1] + [prev[j]+prev[j+1] for j in range(len(prev)-1)] + [1])
    return res`,
    },
  },

  "Pascal's Triangle II": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(n²)",
      code: `def getRow(rowIndex):
    triangle = [[1]]
    for i in range(1, rowIndex + 1):
        row = [1] * (i + 1)
        for j in range(1, i):
            row[j] = triangle[i-1][j-1] + triangle[i-1][j]
        triangle.append(row)
    return triangle[rowIndex]`,
    },
    better: {
      name: "Two Rows",
      time: "O(n²)",
      space: "O(n)",
      code: `def getRow(rowIndex):
    prev = [1]
    for i in range(1, rowIndex + 1):
        curr = [1] * (i + 1)
        for j in range(1, i):
            curr[j] = prev[j-1] + prev[j]
        prev = curr
    return prev`,
    },
    optimal: {
      name: "Single Row In-Place",
      time: "O(n²)",
      space: "O(n)",
      code: `def getRow(rowIndex):
    row = [1] * (rowIndex + 1)
    for i in range(2, rowIndex + 1):
        for j in range(i - 1, 0, -1):
            row[j] += row[j - 1]
    return row`,
    },
  },

  "Plus One": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def plusOne(digits):
    num = int(''.join(map(str, digits))) + 1
    return [int(d) for d in str(num)]`,
    },
    better: {
      name: "Carry Propagation",
      time: "O(n)",
      space: "O(1)",
      code: `def plusOne(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits`,
    },
    optimal: {
      name: "Reverse Traverse",
      time: "O(n)",
      space: "O(1)",
      code: `def plusOne(digits):
    carry = 1
    for i in range(len(digits) - 1, -1, -1):
        digits[i] += carry
        carry, digits[i] = divmod(digits[i], 10)
    return [1] + digits if carry else digits`,
    },
  },

  "Remove Duplicates from Sorted Array": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def removeDuplicates(nums):
    unique = list(dict.fromkeys(nums))
    for i in range(len(unique)):
        nums[i] = unique[i]
    return len(unique)`,
    },
    better: {
      name: "Set Approach",
      time: "O(n)",
      space: "O(n)",
      code: `def removeDuplicates(nums):
    seen = set()
    j = 0
    for num in nums:
        if num not in seen:
            seen.add(num)
            nums[j] = num
            j += 1
    return j`,
    },
    optimal: {
      name: "Two Pointers",
      time: "O(n)",
      space: "O(1)",
      code: `def removeDuplicates(nums):
    if not nums: return 0
    j = 0
    for i in range(1, len(nums)):
        if nums[i] != nums[j]:
            j += 1
            nums[j] = nums[i]
    return j + 1`,
    },
  },

  "Remove Element": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def removeElement(nums, val):
    i = 0
    while i < len(nums):
        if nums[i] == val:
            nums[i:] = nums[i+1:] + [0]
            nums.pop()
        else:
            i += 1
    return i`,
    },
    better: {
      name: "Copy Non-Val",
      time: "O(n)",
      space: "O(n)",
      code: `def removeElement(nums, val):
    result = [x for x in nums if x != val]
    for i in range(len(result)):
        nums[i] = result[i]
    return len(result)`,
    },
    optimal: {
      name: "Two Pointers",
      time: "O(n)",
      space: "O(1)",
      code: `def removeElement(nums, val):
    j = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[j] = nums[i]
            j += 1
    return j`,
    },
  },

  "Single Number": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def singleNumber(nums):
    for i in range(len(nums)):
        if nums.count(nums[i]) == 1:
            return nums[i]`,
    },
    better: {
      name: "Hash Map",
      time: "O(n)",
      space: "O(n)",
      code: `def singleNumber(nums):
    from collections import Counter
    counts = Counter(nums)
    for num, cnt in counts.items():
        if cnt == 1:
            return num`,
    },
    optimal: {
      name: "XOR",
      time: "O(n)",
      space: "O(1)",
      code: `def singleNumber(nums):
    result = 0
    for num in nums:
        result ^= num
    return result`,
    },
  },

  "Summary Ranges": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(n)",
      code: `def summaryRanges(nums):
    result = []
    i = 0
    while i < len(nums):
        start = nums[i]
        while i + 1 < len(nums) and nums[i+1] == nums[i] + 1:
            i += 1
        if start == nums[i]:
            result.append(str(start))
        else:
            result.append(f"{start}->{nums[i]}")
        i += 1
    return result`,
    },
    better: {
      name: "Two Pointers",
      time: "O(n)",
      space: "O(n)",
      code: `def summaryRanges(nums):
    result, i = [], 0
    while i < len(nums):
        j = i
        while j + 1 < len(nums) and nums[j+1] - nums[j] == 1:
            j += 1
        result.append(str(nums[i]) if i == j else f"{nums[i]}->{nums[j]}")
        i = j + 1
    return result`,
    },
    optimal: {
      name: "Single Pass",
      time: "O(n)",
      space: "O(n)",
      code: `def summaryRanges(nums):
    res, i = [], 0
    for j in range(len(nums)):
        if j + 1 == len(nums) or nums[j+1] != nums[j] + 1:
            res.append(str(nums[i]) if i == j else f"{nums[i]}->{nums[j]}")
            i = j + 1
    return res`,
    },
  },

  "First Missing Positive": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def firstMissingPositive(nums):
    i = 1
    while True:
        if i not in nums:
            return i
        i += 1`,
    },
    better: {
      name: "Hash Set",
      time: "O(n)",
      space: "O(n)",
      code: `def firstMissingPositive(nums):
    s = set(nums)
    i = 1
    while i in s:
        i += 1
    return i`,
    },
    optimal: {
      name: "Index as Hash",
      time: "O(n)",
      space: "O(1)",
      code: `def firstMissingPositive(nums):
    n = len(nums)
    for i in range(n):
        while 1 <= nums[i] <= n and nums[nums[i]-1] != nums[i]:
            nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1
    return n + 1`,
    },
  },

  "Minimum Window Subsequence": {
    brute: {
      name: "Brute Force",
      time: "O(n² * m)",
      space: "O(1)",
      code: `def minWindow(s1, s2):
    min_win = ""
    for i in range(len(s1)):
        if s1[i] == s2[0]:
            j = 0
            for k in range(i, len(s1)):
                if s1[k] == s2[j]:
                    j += 1
                if j == len(s2):
                    if not min_win or k - i + 1 < len(min_win):
                        min_win = s1[i:k+1]
                    break
    return min_win`,
    },
    better: {
      name: "Two Pointer Forward-Back",
      time: "O(n * m)",
      space: "O(1)",
      code: `def minWindow(s1, s2):
    min_win = ""
    i, j = 0, 0
    while i < len(s1):
        if s1[i] == s2[j]:
            j += 1
        if j == len(s2):
            end = i
            j -= 1
            while j >= 0:
                if s1[i] == s2[j]: j -= 1
                i -= 1
            i += 1
            if not min_win or end - i + 1 < len(min_win):
                min_win = s1[i:end+1]
            j = 0
        i += 1
    return min_win`,
    },
    optimal: {
      name: "DP Approach",
      time: "O(n * m)",
      space: "O(n)",
      code: `def minWindow(s1, s2):
    n, m = len(s1), len(s2)
    dp = [-1] * n
    for i in range(n):
        if s1[i] == s2[0]: dp[i] = i
    for j in range(1, m):
        ndp, last = [-1]*n, -1
        for i in range(n):
            if last >= 0 and s1[i] == s2[j]: ndp[i] = last
            if dp[i] >= 0: last = dp[i]
        dp = ndp
    start, length = 0, n + 1
    for i in range(n):
        if dp[i] >= 0 and i - dp[i] + 1 < length:
            start, length = dp[i], i - dp[i] + 1
    return s1[start:start+length] if length <= n else ""`,
    },
  },

  "Subarrays with K Different Integers": {
    brute: {
      name: "Brute Force",
      time: "O(n³)",
      space: "O(n)",
      code: `def subarraysWithKDistinct(nums, k):
    count = 0
    for i in range(len(nums)):
        for j in range(i, len(nums)):
            if len(set(nums[i:j+1])) == k:
                count += 1
    return count`,
    },
    better: {
      name: "AtMost K Helper",
      time: "O(n)",
      space: "O(n)",
      code: `def subarraysWithKDistinct(nums, k):
    from collections import defaultdict
    def atMost(k):
        count, left, res = defaultdict(int), 0, 0
        for right in range(len(nums)):
            if count[nums[right]] == 0: k -= 1
            count[nums[right]] += 1
            while k < 0:
                count[nums[left]] -= 1
                if count[nums[left]] == 0: k += 1
                left += 1
            res += right - left + 1
        return res
    return atMost(k) - atMost(k - 1)`,
    },
    optimal: {
      name: "Sliding Window Two Pointers",
      time: "O(n)",
      space: "O(n)",
      code: `def subarraysWithKDistinct(nums, k):
    from collections import defaultdict
    def atMost(k):
        cnt, l, res = defaultdict(int), 0, 0
        for r, v in enumerate(nums):
            if cnt[v] == 0: k -= 1
            cnt[v] += 1
            while k < 0:
                cnt[nums[l]] -= 1
                if cnt[nums[l]] == 0: k += 1
                l += 1
            res += r - l + 1
        return res
    return atMost(k) - atMost(k - 1)`,
    },
  },

  "Trapping Rain Water": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def trap(height):
    water = 0
    for i in range(len(height)):
        left_max = max(height[:i+1])
        right_max = max(height[i:])
        water += min(left_max, right_max) - height[i]
    return water`,
    },
    better: {
      name: "Prefix Max Arrays",
      time: "O(n)",
      space: "O(n)",
      code: `def trap(height):
    n = len(height)
    left_max, right_max = [0]*n, [0]*n
    left_max[0] = height[0]
    for i in range(1, n): left_max[i] = max(left_max[i-1], height[i])
    right_max[-1] = height[-1]
    for i in range(n-2, -1, -1): right_max[i] = max(right_max[i+1], height[i])
    return sum(min(left_max[i], right_max[i]) - height[i] for i in range(n))`,
    },
    optimal: {
      name: "Two Pointers",
      time: "O(n)",
      space: "O(1)",
      code: `def trap(height):
    l, r = 0, len(height) - 1
    left_max = right_max = water = 0
    while l < r:
        if height[l] < height[r]:
            left_max = max(left_max, height[l])
            water += left_max - height[l]
            l += 1
        else:
            right_max = max(right_max, height[r])
            water += right_max - height[r]
            r -= 1
    return water`,
    },
  },

  "3Sum": {
    brute: {
      name: "Brute Force",
      time: "O(n³)",
      space: "O(n)",
      code: `def threeSum(nums):
    res = set()
    nums.sort()
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                if nums[i]+nums[j]+nums[k] == 0:
                    res.add((nums[i], nums[j], nums[k]))
    return [list(t) for t in res]`,
    },
    better: {
      name: "Hash Set",
      time: "O(n²)",
      space: "O(n)",
      code: `def threeSum(nums):
    nums.sort()
    res = []
    for i in range(len(nums)):
        if i > 0 and nums[i] == nums[i-1]: continue
        seen = set()
        for j in range(i+1, len(nums)):
            comp = -nums[i]-nums[j]
            if comp in seen:
                res.append([nums[i], comp, nums[j]])
                while j+1 < len(nums) and nums[j]==nums[j+1]: j+=1
            seen.add(nums[j])
    return res`,
    },
    optimal: {
      name: "Sort + Two Pointers",
      time: "O(n²)",
      space: "O(1)",
      code: `def threeSum(nums):
    nums.sort()
    res = []
    for i in range(len(nums)-2):
        if i > 0 and nums[i] == nums[i-1]: continue
        l, r = i+1, len(nums)-1
        while l < r:
            s = nums[i]+nums[l]+nums[r]
            if s < 0: l += 1
            elif s > 0: r -= 1
            else:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l]==nums[l+1]: l+=1
                while l < r and nums[r]==nums[r-1]: r-=1
                l += 1; r -= 1
    return res`,
    },
  },

  "4Sum": {
    brute: {
      name: "Brute Force",
      time: "O(n⁴)",
      space: "O(n)",
      code: `def fourSum(nums, target):
    nums.sort()
    res = set()
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                for l in range(k+1, len(nums)):
                    if nums[i]+nums[j]+nums[k]+nums[l]==target:
                        res.add((nums[i],nums[j],nums[k],nums[l]))
    return [list(t) for t in res]`,
    },
    better: {
      name: "Hash Map",
      time: "O(n³)",
      space: "O(n²)",
      code: `def fourSum(nums, target):
    nums.sort()
    res, n = [], len(nums)
    for i in range(n-3):
        if i > 0 and nums[i]==nums[i-1]: continue
        for j in range(i+1, n-2):
            if j > i+1 and nums[j]==nums[j-1]: continue
            seen = set()
            for k in range(j+1, n):
                comp = target-nums[i]-nums[j]-nums[k]
                if comp in seen:
                    res.append([nums[i],nums[j],comp,nums[k]])
                    while k+1<n and nums[k]==nums[k+1]: k+=1
                seen.add(nums[k])
    return res`,
    },
    optimal: {
      name: "Sort + Two Pointers",
      time: "O(n³)",
      space: "O(1)",
      code: `def fourSum(nums, target):
    nums.sort()
    res, n = [], len(nums)
    for i in range(n-3):
        if i > 0 and nums[i]==nums[i-1]: continue
        for j in range(i+1, n-2):
            if j > i+1 and nums[j]==nums[j-1]: continue
            l, r = j+1, n-1
            while l < r:
                s = nums[i]+nums[j]+nums[l]+nums[r]
                if s < target: l += 1
                elif s > target: r -= 1
                else:
                    res.append([nums[i],nums[j],nums[l],nums[r]])
                    while l<r and nums[l]==nums[l+1]: l+=1
                    while l<r and nums[r]==nums[r-1]: r-=1
                    l+=1; r-=1
    return res`,
    },
  },

  "Best Time to Buy and Sell Stock II": {
    brute: {
      name: "Brute Force",
      time: "O(2^n)",
      space: "O(n)",
      code: `def maxProfit(prices):
    def helper(i, holding):
        if i == len(prices): return 0
        if holding:
            return max(helper(i+1, True), prices[i] + helper(i+1, False))
        else:
            return max(helper(i+1, False), -prices[i] + helper(i+1, True))
    return helper(0, False)`,
    },
    better: {
      name: "DP",
      time: "O(n)",
      space: "O(n)",
      code: `def maxProfit(prices):
    n = len(prices)
    hold, cash = [0]*n, [0]*n
    hold[0] = -prices[0]
    for i in range(1, n):
        hold[i] = max(hold[i-1], cash[i-1] - prices[i])
        cash[i] = max(cash[i-1], hold[i-1] + prices[i])
    return cash[-1]`,
    },
    optimal: {
      name: "Greedy",
      time: "O(n)",
      space: "O(1)",
      code: `def maxProfit(prices):
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i-1]:
            profit += prices[i] - prices[i-1]
    return profit`,
    },
  },

  "Container With Most Water": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def maxArea(height):
    max_water = 0
    for i in range(len(height)):
        for j in range(i+1, len(height)):
            max_water = max(max_water, min(height[i], height[j]) * (j-i))
    return max_water`,
    },
    better: {
      name: "Two Pointer from Ends",
      time: "O(n)",
      space: "O(1)",
      code: `def maxArea(height):
    l, r = 0, len(height) - 1
    max_water = 0
    while l < r:
        w = (r - l) * min(height[l], height[r])
        max_water = max(max_water, w)
        if height[l] < height[r]: l += 1
        else: r -= 1
    return max_water`,
    },
    optimal: {
      name: "Two Pointers Optimized",
      time: "O(n)",
      space: "O(1)",
      code: `def maxArea(height):
    l, r, res = 0, len(height)-1, 0
    while l < r:
        res = max(res, min(height[l], height[r]) * (r-l))
        if height[l] < height[r]: l += 1
        else: r -= 1
    return res`,
    },
  },

  "Find All Duplicates in an Array": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def findDuplicates(nums):
    res = []
    for i in range(len(nums)):
        count = 0
        for j in range(len(nums)):
            if nums[j] == nums[i]: count += 1
        if count == 2 and nums[i] not in res:
            res.append(nums[i])
    return res`,
    },
    better: {
      name: "Hash Map Count",
      time: "O(n)",
      space: "O(n)",
      code: `def findDuplicates(nums):
    from collections import Counter
    return [k for k, v in Counter(nums).items() if v == 2]`,
    },
    optimal: {
      name: "Negate Index",
      time: "O(n)",
      space: "O(1)",
      code: `def findDuplicates(nums):
    res = []
    for num in nums:
        idx = abs(num) - 1
        if nums[idx] < 0:
            res.append(abs(num))
        else:
            nums[idx] = -nums[idx]
    return res`,
    },
  },

  "Find the Duplicate Number": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def findDuplicate(nums):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] == nums[j]:
                return nums[i]`,
    },
    better: {
      name: "Sorting",
      time: "O(n log n)",
      space: "O(1)",
      code: `def findDuplicate(nums):
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i-1]:
            return nums[i]`,
    },
    optimal: {
      name: "Floyd's Cycle Detection",
      time: "O(n)",
      space: "O(1)",
      code: `def findDuplicate(nums):
    slow = fast = nums[0]
    while True:
        slow, fast = nums[slow], nums[nums[fast]]
        if slow == fast: break
    slow = nums[0]
    while slow != fast:
        slow, fast = nums[slow], nums[fast]
    return slow`,
    },
  },

  "Frequency of the Most Frequent Element": {
    brute: {
      name: "Brute Force",
      time: "O(n² log n)",
      space: "O(1)",
      code: `def maxFrequency(nums, k):
    nums.sort()
    max_freq = 1
    for i in range(len(nums)):
        ops = k
        count = 1
        for j in range(i-1, -1, -1):
            ops -= nums[i] - nums[j]
            if ops < 0: break
            count += 1
        max_freq = max(max_freq, count)
    return max_freq`,
    },
    better: {
      name: "Binary Search + Prefix Sum",
      time: "O(n log n)",
      space: "O(n)",
      code: `def maxFrequency(nums, k):
    nums.sort()
    prefix = [0]*(len(nums)+1)
    for i in range(len(nums)):
        prefix[i+1] = prefix[i] + nums[i]
    res = 1
    for i in range(len(nums)):
        lo, hi = 0, i
        while lo < hi:
            mid = (lo+hi)//2
            cost = nums[i]*(i-mid) - (prefix[i]-prefix[mid])
            if cost <= k: hi = mid
            else: lo = mid + 1
        res = max(res, i - lo + 1)
    return res`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n log n)",
      space: "O(1)",
      code: `def maxFrequency(nums, k):
    nums.sort()
    l, total, res = 0, 0, 1
    for r in range(len(nums)):
        total += nums[r]
        while nums[r] * (r - l + 1) - total > k:
            total -= nums[l]
            l += 1
        res = max(res, r - l + 1)
    return res`,
    },
  },

  "Fruit Into Baskets": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(n)",
      code: `def totalFruit(fruits):
    max_len = 0
    for i in range(len(fruits)):
        basket = set()
        for j in range(i, len(fruits)):
            basket.add(fruits[j])
            if len(basket) > 2: break
            max_len = max(max_len, j - i + 1)
    return max_len`,
    },
    better: {
      name: "Hash Map Window",
      time: "O(n)",
      space: "O(1)",
      code: `def totalFruit(fruits):
    from collections import defaultdict
    count = defaultdict(int)
    l, res = 0, 0
    for r in range(len(fruits)):
        count[fruits[r]] += 1
        while len(count) > 2:
            count[fruits[l]] -= 1
            if count[fruits[l]] == 0: del count[fruits[l]]
            l += 1
        res = max(res, r - l + 1)
    return res`,
    },
    optimal: {
      name: "Sliding Window Optimized",
      time: "O(n)",
      space: "O(1)",
      code: `def totalFruit(fruits):
    count = {}
    l = 0
    for r in range(len(fruits)):
        count[fruits[r]] = count.get(fruits[r], 0) + 1
        if len(count) > 2:
            count[fruits[l]] -= 1
            if count[fruits[l]] == 0: del count[fruits[l]]
            l += 1
    return len(fruits) - l`,
    },
  },

  "Game of Life": {
    brute: {
      name: "Brute Force",
      time: "O(m*n)",
      space: "O(m*n)",
      code: `def gameOfLife(board):
    import copy
    m, n = len(board), len(board[0])
    orig = copy.deepcopy(board)
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    for i in range(m):
        for j in range(n):
            live = sum(orig[i+d[0]][j+d[1]] for d in dirs if 0<=i+d[0]<m and 0<=j+d[1]<n)
            if orig[i][j] == 1 and (live < 2 or live > 3): board[i][j] = 0
            elif orig[i][j] == 0 and live == 3: board[i][j] = 1`,
    },
    better: {
      name: "State Encoding",
      time: "O(m*n)",
      space: "O(1)",
      code: `def gameOfLife(board):
    m, n = len(board), len(board[0])
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    for i in range(m):
        for j in range(n):
            live = sum((board[i+d[0]][j+d[1]] & 1) for d in dirs if 0<=i+d[0]<m and 0<=j+d[1]<n)
            if board[i][j] == 1 and live in (2,3): board[i][j] = 3
            elif board[i][j] == 0 and live == 3: board[i][j] = 2
    for i in range(m):
        for j in range(n):
            board[i][j] >>= 1`,
    },
    optimal: {
      name: "Bit Manipulation In-Place",
      time: "O(m*n)",
      space: "O(1)",
      code: `def gameOfLife(board):
    m, n = len(board), len(board[0])
    for i in range(m):
        for j in range(n):
            live = 0
            for di in range(-1, 2):
                for dj in range(-1, 2):
                    if (di or dj) and 0<=i+di<m and 0<=j+dj<n:
                        live += board[i+di][j+dj] & 1
            if board[i][j] & 1 and 2<=live<=3: board[i][j] |= 2
            elif not (board[i][j] & 1) and live==3: board[i][j] |= 2
    for i in range(m):
        for j in range(n): board[i][j] >>= 1`,
    },
  },

  "Grumpy Bookstore Owner": {
    brute: {
      name: "Brute Force",
      time: "O(n * minutes)",
      space: "O(1)",
      code: `def maxSatisfied(customers, grumpy, minutes):
    max_sat = 0
    for i in range(len(customers) - minutes + 1):
        sat = 0
        for j in range(len(customers)):
            if not grumpy[j] or i <= j < i + minutes:
                sat += customers[j]
        max_sat = max(max_sat, sat)
    return max_sat`,
    },
    better: {
      name: "Prefix Sum",
      time: "O(n)",
      space: "O(n)",
      code: `def maxSatisfied(customers, grumpy, minutes):
    base = sum(c for c, g in zip(customers, grumpy) if not g)
    extra = [c * g for c, g in zip(customers, grumpy)]
    prefix = [0] * (len(extra) + 1)
    for i in range(len(extra)):
        prefix[i+1] = prefix[i] + extra[i]
    max_extra = max(prefix[i+minutes]-prefix[i] for i in range(len(extra)-minutes+1))
    return base + max_extra`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def maxSatisfied(customers, grumpy, minutes):
    base = sum(c for c, g in zip(customers, grumpy) if not g)
    window = sum(customers[i]*grumpy[i] for i in range(minutes))
    max_extra = window
    for i in range(minutes, len(customers)):
        window += customers[i]*grumpy[i] - customers[i-minutes]*grumpy[i-minutes]
        max_extra = max(max_extra, window)
    return base + max_extra`,
    },
  },

  "Insert Interval": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(n)",
      code: `def insert(intervals, newInterval):
    intervals.append(newInterval)
    intervals.sort()
    merged = [intervals[0]]
    for s, e in intervals[1:]:
        if s <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], e)
        else:
            merged.append([s, e])
    return merged`,
    },
    better: {
      name: "Binary Search Insert",
      time: "O(n)",
      space: "O(n)",
      code: `def insert(intervals, newInterval):
    import bisect
    starts = [i[0] for i in intervals]
    idx = bisect.bisect_left(starts, newInterval[0])
    intervals.insert(idx, newInterval)
    merged = [intervals[0]]
    for s, e in intervals[1:]:
        if s <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], e)
        else: merged.append([s, e])
    return merged`,
    },
    optimal: {
      name: "Linear Merge",
      time: "O(n)",
      space: "O(n)",
      code: `def insert(intervals, newInterval):
    res, i = [], 0
    while i < len(intervals) and intervals[i][1] < newInterval[0]:
        res.append(intervals[i]); i += 1
    while i < len(intervals) and intervals[i][0] <= newInterval[1]:
        newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]
        i += 1
    res.append(newInterval)
    return res + intervals[i:]`,
    },
  },

  "Jump Game": {
    brute: {
      name: "Brute Force",
      time: "O(2^n)",
      space: "O(n)",
      code: `def canJump(nums):
    def helper(i):
        if i >= len(nums) - 1: return True
        for j in range(1, nums[i] + 1):
            if helper(i + j): return True
        return False
    return helper(0)`,
    },
    better: {
      name: "DP",
      time: "O(n²)",
      space: "O(n)",
      code: `def canJump(nums):
    n = len(nums)
    dp = [False] * n
    dp[0] = True
    for i in range(1, n):
        for j in range(i):
            if dp[j] and j + nums[j] >= i:
                dp[i] = True
                break
    return dp[-1]`,
    },
    optimal: {
      name: "Greedy",
      time: "O(n)",
      space: "O(1)",
      code: `def canJump(nums):
    max_reach = 0
    for i in range(len(nums)):
        if i > max_reach: return False
        max_reach = max(max_reach, i + nums[i])
    return True`,
    },
  },

  "Jump Game II": {
    brute: {
      name: "Brute Force",
      time: "O(2^n)",
      space: "O(n)",
      code: `def jump(nums):
    def helper(i):
        if i >= len(nums) - 1: return 0
        min_jumps = float('inf')
        for j in range(1, nums[i] + 1):
            min_jumps = min(min_jumps, 1 + helper(i + j))
        return min_jumps
    return helper(0)`,
    },
    better: {
      name: "BFS / DP",
      time: "O(n²)",
      space: "O(n)",
      code: `def jump(nums):
    n = len(nums)
    dp = [float('inf')] * n
    dp[0] = 0
    for i in range(1, n):
        for j in range(i):
            if j + nums[j] >= i:
                dp[i] = min(dp[i], dp[j] + 1)
    return dp[-1]`,
    },
    optimal: {
      name: "Greedy BFS",
      time: "O(n)",
      space: "O(1)",
      code: `def jump(nums):
    jumps = cur_end = farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == cur_end:
            jumps += 1
            cur_end = farthest
    return jumps`,
    },
  },

  "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def longestSubarray(nums, limit):
    res = 0
    for i in range(len(nums)):
        mn = mx = nums[i]
        for j in range(i, len(nums)):
            mn, mx = min(mn, nums[j]), max(mx, nums[j])
            if mx - mn > limit: break
            res = max(res, j - i + 1)
    return res`,
    },
    better: {
      name: "Sorted Container",
      time: "O(n log n)",
      space: "O(n)",
      code: `def longestSubarray(nums, limit):
    from sortedcontainers import SortedList
    sl = SortedList()
    l, res = 0, 0
    for r in range(len(nums)):
        sl.add(nums[r])
        while sl[-1] - sl[0] > limit:
            sl.remove(nums[l])
            l += 1
        res = max(res, r - l + 1)
    return res`,
    },
    optimal: {
      name: "Monotonic Deques",
      time: "O(n)",
      space: "O(n)",
      code: `def longestSubarray(nums, limit):
    from collections import deque
    maxd, mind = deque(), deque()
    l, res = 0, 0
    for r in range(len(nums)):
        while maxd and nums[r] >= nums[maxd[-1]]: maxd.pop()
        while mind and nums[r] <= nums[mind[-1]]: mind.pop()
        maxd.append(r); mind.append(r)
        while nums[maxd[0]] - nums[mind[0]] > limit:
            l += 1
            if maxd[0] < l: maxd.popleft()
            if mind[0] < l: mind.popleft()
        res = max(res, r - l + 1)
    return res`,
    },
  },

  "Longest Subarray of 1s After Deleting One Element": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def longestSubarray(nums):
    res = 0
    for i in range(len(nums)):
        zeros = 0
        for j in range(i, len(nums)):
            if nums[j] == 0: zeros += 1
            if zeros > 1: break
            res = max(res, j - i)
    return res`,
    },
    better: {
      name: "Prefix/Suffix",
      time: "O(n)",
      space: "O(n)",
      code: `def longestSubarray(nums):
    n = len(nums)
    left, right = [0]*n, [0]*n
    for i in range(1, n):
        if nums[i-1] == 1: left[i] = left[i-1] + 1
    for i in range(n-2, -1, -1):
        if nums[i+1] == 1: right[i] = right[i+1] + 1
    return max(left[i] + right[i] for i in range(n))`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def longestSubarray(nums):
    l, zeros, res = 0, 0, 0
    for r in range(len(nums)):
        if nums[r] == 0: zeros += 1
        while zeros > 1:
            if nums[l] == 0: zeros -= 1
            l += 1
        res = max(res, r - l)
    return res`,
    },
  },

  "Longest Turbulent Subarray": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def maxTurbulenceSize(arr):
    res = 1
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            valid = True
            for k in range(i, j):
                if k % 2 == i % 2:
                    if not (arr[k] > arr[k+1] if (k-i) % 2 == 0 else arr[k] < arr[k+1]):
                        valid = False; break
            if valid: res = max(res, j-i+1)
            else: break
    return res`,
    },
    better: {
      name: "DP Two States",
      time: "O(n)",
      space: "O(n)",
      code: `def maxTurbulenceSize(arr):
    n = len(arr)
    inc, dec = [1]*n, [1]*n
    for i in range(1, n):
        if arr[i] > arr[i-1]: inc[i] = dec[i-1] + 1
        elif arr[i] < arr[i-1]: dec[i] = inc[i-1] + 1
    return max(max(inc), max(dec))`,
    },
    optimal: {
      name: "Sliding Window O(1) Space",
      time: "O(n)",
      space: "O(1)",
      code: `def maxTurbulenceSize(arr):
    res = inc = dec = 1
    for i in range(1, len(arr)):
        if arr[i] > arr[i-1]:
            inc, dec = dec + 1, 1
        elif arr[i] < arr[i-1]:
            dec, inc = inc + 1, 1
        else:
            inc = dec = 1
        res = max(res, inc, dec)
    return res`,
    },
  },

  "Max Consecutive Ones III": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def longestOnes(nums, k):
    res = 0
    for i in range(len(nums)):
        zeros = 0
        for j in range(i, len(nums)):
            if nums[j] == 0: zeros += 1
            if zeros > k: break
            res = max(res, j - i + 1)
    return res`,
    },
    better: {
      name: "Prefix Sum + Binary Search",
      time: "O(n log n)",
      space: "O(n)",
      code: `def longestOnes(nums, k):
    prefix = [0] * (len(nums) + 1)
    for i in range(len(nums)):
        prefix[i+1] = prefix[i] + (1 - nums[i])
    res = 0
    for r in range(len(nums)):
        lo, hi = 0, r
        while lo <= hi:
            mid = (lo+hi)//2
            if prefix[r+1]-prefix[mid] <= k: hi = mid-1
            else: lo = mid+1
        res = max(res, r - lo + 1)
    return res`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def longestOnes(nums, k):
    l, res = 0, 0
    for r in range(len(nums)):
        if nums[r] == 0: k -= 1
        while k < 0:
            if nums[l] == 0: k += 1
            l += 1
        res = max(res, r - l + 1)
    return res`,
    },
  },

  "Max Points You Can Obtain from Cards": {
    brute: {
      name: "Brute Force",
      time: "O(k²)",
      space: "O(1)",
      code: `def maxScore(cardPoints, k):
    max_score = 0
    for i in range(k + 1):
        score = sum(cardPoints[:i]) + sum(cardPoints[len(cardPoints)-(k-i):])
        max_score = max(max_score, score)
    return max_score`,
    },
    better: {
      name: "Prefix + Suffix Sum",
      time: "O(k)",
      space: "O(k)",
      code: `def maxScore(cardPoints, k):
    left = [0] * (k + 1)
    right = [0] * (k + 1)
    for i in range(k):
        left[i+1] = left[i] + cardPoints[i]
        right[i+1] = right[i] + cardPoints[-(i+1)]
    return max(left[i] + right[k-i] for i in range(k+1))`,
    },
    optimal: {
      name: "Min Subarray Window",
      time: "O(n)",
      space: "O(1)",
      code: `def maxScore(cardPoints, k):
    n = len(cardPoints)
    window_size = n - k
    window_sum = sum(cardPoints[:window_size])
    min_sum = window_sum
    total = sum(cardPoints)
    for i in range(window_size, n):
        window_sum += cardPoints[i] - cardPoints[i - window_size]
        min_sum = min(min_sum, window_sum)
    return total - min_sum`,
    },
  },

  "Maximize the Confusion of an Exam": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def maxConsecutiveAnswers(answerKey, k):
    res = 0
    for i in range(len(answerKey)):
        t_count = f_count = 0
        for j in range(i, len(answerKey)):
            if answerKey[j] == 'T': t_count += 1
            else: f_count += 1
            if min(t_count, f_count) > k: break
            res = max(res, j - i + 1)
    return res`,
    },
    better: {
      name: "Two Sliding Windows",
      time: "O(n)",
      space: "O(1)",
      code: `def maxConsecutiveAnswers(answerKey, k):
    def maxConsec(ch):
        l, count, res = 0, 0, 0
        for r in range(len(answerKey)):
            if answerKey[r] != ch: count += 1
            while count > k:
                if answerKey[l] != ch: count -= 1
                l += 1
            res = max(res, r - l + 1)
        return res
    return max(maxConsec('T'), maxConsec('F'))`,
    },
    optimal: {
      name: "Single Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def maxConsecutiveAnswers(answerKey, k):
    res = l = 0
    count = {'T': 0, 'F': 0}
    for r in range(len(answerKey)):
        count[answerKey[r]] += 1
        while min(count['T'], count['F']) > k:
            count[answerKey[l]] -= 1
            l += 1
        res = max(res, r - l + 1)
    return res`,
    },
  },

  "Maximum Area of Island": {
    brute: {
      name: "Brute Force",
      time: "O(m*n * m*n)",
      space: "O(m*n)",
      code: `def maxAreaOfIsland(grid):
    m, n = len(grid), len(grid[0])
    visited = set()
    def bfs(i, j):
        from collections import deque
        q = deque([(i, j)])
        visited.add((i, j))
        area = 0
        while q:
            x, y = q.popleft()
            area += 1
            for dx, dy in [(0,1),(0,-1),(1,0),(-1,0)]:
                nx, ny = x+dx, y+dy
                if 0<=nx<m and 0<=ny<n and (nx,ny) not in visited and grid[nx][ny]==1:
                    visited.add((nx, ny))
                    q.append((nx, ny))
        return area
    return max((bfs(i,j) for i in range(m) for j in range(n) if grid[i][j]==1 and (i,j) not in visited), default=0)`,
    },
    better: {
      name: "DFS Recursive",
      time: "O(m*n)",
      space: "O(m*n)",
      code: `def maxAreaOfIsland(grid):
    m, n = len(grid), len(grid[0])
    def dfs(i, j):
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 0:
            return 0
        grid[i][j] = 0
        return 1 + dfs(i+1,j) + dfs(i-1,j) + dfs(i,j+1) + dfs(i,j-1)
    return max(dfs(i,j) for i in range(m) for j in range(n))`,
    },
    optimal: {
      name: "DFS Iterative",
      time: "O(m*n)",
      space: "O(m*n)",
      code: `def maxAreaOfIsland(grid):
    m, n = len(grid), len(grid[0])
    res = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1:
                stack, area = [(i,j)], 0
                grid[i][j] = 0
                while stack:
                    x, y = stack.pop()
                    area += 1
                    for dx,dy in [(0,1),(0,-1),(1,0),(-1,0)]:
                        nx, ny = x+dx, y+dy
                        if 0<=nx<m and 0<=ny<n and grid[nx][ny]==1:
                            grid[nx][ny] = 0
                            stack.append((nx,ny))
                res = max(res, area)
    return res`,
    },
  },

  "Maximum Erasure Value": {
    brute: {
      name: "Brute Force",
      time: "O(n³)",
      space: "O(n)",
      code: `def maximumUniqueSubarray(nums):
    res = 0
    for i in range(len(nums)):
        for j in range(i, len(nums)):
            sub = nums[i:j+1]
            if len(sub) == len(set(sub)):
                res = max(res, sum(sub))
    return res`,
    },
    better: {
      name: "Set + Prefix Sum",
      time: "O(n)",
      space: "O(n)",
      code: `def maximumUniqueSubarray(nums):
    seen = set()
    l, res, curr = 0, 0, 0
    for r in range(len(nums)):
        while nums[r] in seen:
            seen.remove(nums[l])
            curr -= nums[l]
            l += 1
        seen.add(nums[r])
        curr += nums[r]
        res = max(res, curr)
    return res`,
    },
    optimal: {
      name: "Sliding Window + HashMap",
      time: "O(n)",
      space: "O(n)",
      code: `def maximumUniqueSubarray(nums):
    last_idx = {}
    l, res, curr = 0, 0, 0
    for r in range(len(nums)):
        if nums[r] in last_idx and last_idx[nums[r]] >= l:
            while l <= last_idx[nums[r]]:
                curr -= nums[l]
                l += 1
        curr += nums[r]
        last_idx[nums[r]] = r
        res = max(res, curr)
    return res`,
    },
  },

  "Maximum Product Subarray": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def maxProduct(nums):
    res = nums[0]
    for i in range(len(nums)):
        prod = 1
        for j in range(i, len(nums)):
            prod *= nums[j]
            res = max(res, prod)
    return res`,
    },
    better: {
      name: "DP Two Arrays",
      time: "O(n)",
      space: "O(n)",
      code: `def maxProduct(nums):
    n = len(nums)
    max_dp, min_dp = [0]*n, [0]*n
    max_dp[0] = min_dp[0] = nums[0]
    for i in range(1, n):
        candidates = [nums[i], nums[i]*max_dp[i-1], nums[i]*min_dp[i-1]]
        max_dp[i], min_dp[i] = max(candidates), min(candidates)
    return max(max_dp)`,
    },
    optimal: {
      name: "Track Max/Min",
      time: "O(n)",
      space: "O(1)",
      code: `def maxProduct(nums):
    res = cur_max = cur_min = nums[0]
    for num in nums[1:]:
        candidates = (num, num * cur_max, num * cur_min)
        cur_max, cur_min = max(candidates), min(candidates)
        res = max(res, cur_max)
    return res`,
    },
  },

  "Maximum Subarray": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def maxSubArray(nums):
    res = float('-inf')
    for i in range(len(nums)):
        curr = 0
        for j in range(i, len(nums)):
            curr += nums[j]
            res = max(res, curr)
    return res`,
    },
    better: {
      name: "Divide and Conquer",
      time: "O(n log n)",
      space: "O(log n)",
      code: `def maxSubArray(nums):
    def helper(l, r):
        if l == r: return nums[l]
        mid = (l + r) // 2
        left = helper(l, mid)
        right = helper(mid + 1, r)
        left_sum = cur = 0
        for i in range(mid, l - 1, -1):
            cur += nums[i]; left_sum = max(left_sum, cur)
        right_sum = cur = 0
        for i in range(mid + 1, r + 1):
            cur += nums[i]; right_sum = max(right_sum, cur)
        return max(left, right, left_sum + right_sum)
    return helper(0, len(nums) - 1)`,
    },
    optimal: {
      name: "Kadane's Algorithm",
      time: "O(n)",
      space: "O(1)",
      code: `def maxSubArray(nums):
    max_sum = cur_sum = nums[0]
    for num in nums[1:]:
        cur_sum = max(num, cur_sum + num)
        max_sum = max(max_sum, cur_sum)
    return max_sum`,
    },
  },

  "Minimum Size Subarray Sum": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def minSubArrayLen(target, nums):
    res = float('inf')
    for i in range(len(nums)):
        total = 0
        for j in range(i, len(nums)):
            total += nums[j]
            if total >= target:
                res = min(res, j - i + 1)
                break
    return res if res != float('inf') else 0`,
    },
    better: {
      name: "Binary Search + Prefix Sum",
      time: "O(n log n)",
      space: "O(n)",
      code: `def minSubArrayLen(target, nums):
    import bisect
    prefix = [0]
    for num in nums: prefix.append(prefix[-1] + num)
    res = float('inf')
    for i in range(len(prefix)):
        j = bisect.bisect_left(prefix, prefix[i] + target)
        if j < len(prefix):
            res = min(res, j - i)
    return res if res != float('inf') else 0`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def minSubArrayLen(target, nums):
    l, total, res = 0, 0, float('inf')
    for r in range(len(nums)):
        total += nums[r]
        while total >= target:
            res = min(res, r - l + 1)
            total -= nums[l]
            l += 1
    return res if res != float('inf') else 0`,
    },
  },

  "Next Permutation": {
    brute: {
      name: "Brute Force",
      time: "O(n! * n)",
      space: "O(n!)",
      code: `def nextPermutation(nums):
    from itertools import permutations
    perms = sorted(set(permutations(nums)))
    idx = perms.index(tuple(nums))
    nxt = perms[(idx + 1) % len(perms)]
    for i in range(len(nums)):
        nums[i] = nxt[i]`,
    },
    better: {
      name: "Find and Swap",
      time: "O(n)",
      space: "O(n)",
      code: `def nextPermutation(nums):
    n = len(nums)
    i = n - 2
    while i >= 0 and nums[i] >= nums[i+1]: i -= 1
    if i >= 0:
        j = n - 1
        while nums[j] <= nums[i]: j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    nums[i+1:] = sorted(nums[i+1:])`,
    },
    optimal: {
      name: "In-Place Reverse",
      time: "O(n)",
      space: "O(1)",
      code: `def nextPermutation(nums):
    i = len(nums) - 2
    while i >= 0 and nums[i] >= nums[i+1]: i -= 1
    if i >= 0:
        j = len(nums) - 1
        while nums[j] <= nums[i]: j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    l, r = i + 1, len(nums) - 1
    while l < r:
        nums[l], nums[r] = nums[r], nums[l]
        l += 1; r -= 1`,
    },
  },

  "Number of Islands": {
    brute: {
      name: "Brute Force",
      time: "O(m*n)",
      space: "O(m*n)",
      code: `def numIslands(grid):
    from collections import deque
    m, n = len(grid), len(grid[0])
    count = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                count += 1
                q = deque([(i, j)])
                grid[i][j] = '0'
                while q:
                    x, y = q.popleft()
                    for dx, dy in [(0,1),(0,-1),(1,0),(-1,0)]:
                        nx, ny = x+dx, y+dy
                        if 0<=nx<m and 0<=ny<n and grid[nx][ny]=='1':
                            grid[nx][ny] = '0'
                            q.append((nx,ny))
    return count`,
    },
    better: {
      name: "DFS",
      time: "O(m*n)",
      space: "O(m*n)",
      code: `def numIslands(grid):
    m, n = len(grid), len(grid[0])
    def dfs(i, j):
        if i<0 or i>=m or j<0 or j>=n or grid[i][j]=='0': return
        grid[i][j] = '0'
        dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1)
    count = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1
    return count`,
    },
    optimal: {
      name: "Union Find",
      time: "O(m*n * α(m*n))",
      space: "O(m*n)",
      code: `def numIslands(grid):
    m, n = len(grid), len(grid[0])
    parent = list(range(m * n))
    def find(x):
        while parent[x] != x: parent[x] = parent[parent[x]]; x = parent[x]
        return x
    def union(a, b): parent[find(a)] = find(b)
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                if i+1<m and grid[i+1][j]=='1': union(i*n+j,(i+1)*n+j)
                if j+1<n and grid[i][j+1]=='1': union(i*n+j,i*n+j+1)
    return len(set(find(i*n+j) for i in range(m) for j in range(n) if grid[i][j]=='1'))`,
    },
  },

  "Number of Sub-arrays of Size K and Average >= Threshold": {
    brute: {
      name: "Brute Force",
      time: "O(n * k)",
      space: "O(1)",
      code: `def numOfSubarrays(arr, k, threshold):
    count = 0
    for i in range(len(arr) - k + 1):
        if sum(arr[i:i+k]) / k >= threshold:
            count += 1
    return count`,
    },
    better: {
      name: "Prefix Sum",
      time: "O(n)",
      space: "O(n)",
      code: `def numOfSubarrays(arr, k, threshold):
    prefix = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        prefix[i+1] = prefix[i] + arr[i]
    target = k * threshold
    return sum(1 for i in range(k, len(arr)+1) if prefix[i]-prefix[i-k] >= target)`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def numOfSubarrays(arr, k, threshold):
    target = k * threshold
    window = sum(arr[:k])
    count = 1 if window >= target else 0
    for i in range(k, len(arr)):
        window += arr[i] - arr[i - k]
        if window >= target: count += 1
    return count`,
    },
  },

  "Product of Array Except Self": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(n)",
      code: `def productExceptSelf(nums):
    n = len(nums)
    res = [1] * n
    for i in range(n):
        for j in range(n):
            if i != j:
                res[i] *= nums[j]
    return res`,
    },
    better: {
      name: "Prefix and Suffix Arrays",
      time: "O(n)",
      space: "O(n)",
      code: `def productExceptSelf(nums):
    n = len(nums)
    left, right = [1]*n, [1]*n
    for i in range(1, n): left[i] = left[i-1] * nums[i-1]
    for i in range(n-2, -1, -1): right[i] = right[i+1] * nums[i+1]
    return [left[i] * right[i] for i in range(n)]`,
    },
    optimal: {
      name: "Single Output Array",
      time: "O(n)",
      space: "O(1)",
      code: `def productExceptSelf(nums):
    n = len(nums)
    res = [1] * n
    for i in range(1, n): res[i] = res[i-1] * nums[i-1]
    right = 1
    for i in range(n-1, -1, -1):
        res[i] *= right
        right *= nums[i]
    return res`,
    },
  },

  "Rotate Array": {
    brute: {
      name: "Brute Force",
      time: "O(n * k)",
      space: "O(1)",
      code: `def rotate(nums, k):
    k %= len(nums)
    for _ in range(k):
        last = nums.pop()
        nums.insert(0, last)`,
    },
    better: {
      name: "Extra Array",
      time: "O(n)",
      space: "O(n)",
      code: `def rotate(nums, k):
    n = len(nums)
    k %= n
    rotated = nums[n-k:] + nums[:n-k]
    for i in range(n):
        nums[i] = rotated[i]`,
    },
    optimal: {
      name: "Reverse Three Times",
      time: "O(n)",
      space: "O(1)",
      code: `def rotate(nums, k):
    def reverse(l, r):
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1; r -= 1
    k %= len(nums)
    reverse(0, len(nums)-1)
    reverse(0, k-1)
    reverse(k, len(nums)-1)`,
    },
  },

  "Rotate Image": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(n²)",
      code: `def rotate(matrix):
    n = len(matrix)
    copy = [row[:] for row in matrix]
    for i in range(n):
        for j in range(n):
            matrix[j][n-1-i] = copy[i][j]`,
    },
    better: {
      name: "Transpose + Reverse",
      time: "O(n²)",
      space: "O(1)",
      code: `def rotate(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i+1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()`,
    },
    optimal: {
      name: "Four-way Swap",
      time: "O(n²)",
      space: "O(1)",
      code: `def rotate(matrix):
    n = len(matrix)
    for i in range(n // 2):
        for j in range(i, n - i - 1):
            tmp = matrix[i][j]
            matrix[i][j] = matrix[n-1-j][i]
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j]
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i]
            matrix[j][n-1-i] = tmp`,
    },
  },

  "Set Matrix Zeroes": {
    brute: {
      name: "Brute Force",
      time: "O(m*n*(m+n))",
      space: "O(m*n)",
      code: `def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    zeros = [(i,j) for i in range(m) for j in range(n) if matrix[i][j]==0]
    for i, j in zeros:
        for k in range(n): matrix[i][k] = 0
        for k in range(m): matrix[k][j] = 0`,
    },
    better: {
      name: "Row/Col Sets",
      time: "O(m*n)",
      space: "O(m+n)",
      code: `def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    rows, cols = set(), set()
    for i in range(m):
        for j in range(n):
            if matrix[i][j] == 0:
                rows.add(i); cols.add(j)
    for i in range(m):
        for j in range(n):
            if i in rows or j in cols:
                matrix[i][j] = 0`,
    },
    optimal: {
      name: "First Row/Col as Marker",
      time: "O(m*n)",
      space: "O(1)",
      code: `def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    first_row = any(matrix[0][j]==0 for j in range(n))
    first_col = any(matrix[i][0]==0 for i in range(m))
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0: matrix[i][0] = matrix[0][j] = 0
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0]==0 or matrix[0][j]==0: matrix[i][j] = 0
    if first_row:
        for j in range(n): matrix[0][j] = 0
    if first_col:
        for i in range(m): matrix[i][0] = 0`,
    },
  },

  "Spiral Matrix": {
    brute: {
      name: "Brute Force",
      time: "O(m*n)",
      space: "O(m*n)",
      code: `def spiralOrder(matrix):
    if not matrix: return []
    m, n = len(matrix), len(matrix[0])
    visited = [[False]*n for _ in range(m)]
    dirs = [(0,1),(1,0),(0,-1),(-1,0)]
    res, d, r, c = [], 0, 0, 0
    for _ in range(m * n):
        res.append(matrix[r][c])
        visited[r][c] = True
        nr, nc = r+dirs[d][0], c+dirs[d][1]
        if not (0<=nr<m and 0<=nc<n and not visited[nr][nc]):
            d = (d + 1) % 4
            nr, nc = r+dirs[d][0], c+dirs[d][1]
        r, c = nr, nc
    return res`,
    },
    better: {
      name: "Layer by Layer",
      time: "O(m*n)",
      space: "O(1)",
      code: `def spiralOrder(matrix):
    res = []
    while matrix:
        res += matrix.pop(0)
        if matrix and matrix[0]:
            for row in matrix: res.append(row.pop())
        if matrix: res += matrix.pop()[::-1]
        if matrix and matrix[0]:
            for row in matrix[::-1]: res.append(row.pop(0))
    return res`,
    },
    optimal: {
      name: "Boundary Shrink",
      time: "O(m*n)",
      space: "O(1)",
      code: `def spiralOrder(matrix):
    res = []
    top, bottom, left, right = 0, len(matrix)-1, 0, len(matrix[0])-1
    while top <= bottom and left <= right:
        for j in range(left, right+1): res.append(matrix[top][j])
        top += 1
        for i in range(top, bottom+1): res.append(matrix[i][right])
        right -= 1
        if top <= bottom:
            for j in range(right, left-1, -1): res.append(matrix[bottom][j])
            bottom -= 1
        if left <= right:
            for i in range(bottom, top-1, -1): res.append(matrix[i][left])
            left += 1
    return res`,
    },
  },

  "Two Sum II - Input Array Is Sorted": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def twoSum(numbers, target):
    for i in range(len(numbers)):
        for j in range(i+1, len(numbers)):
            if numbers[i] + numbers[j] == target:
                return [i+1, j+1]`,
    },
    better: {
      name: "Binary Search",
      time: "O(n log n)",
      space: "O(1)",
      code: `def twoSum(numbers, target):
    import bisect
    for i in range(len(numbers)):
        comp = target - numbers[i]
        j = bisect.bisect_left(numbers, comp, i+1)
        if j < len(numbers) and numbers[j] == comp:
            return [i+1, j+1]`,
    },
    optimal: {
      name: "Two Pointers",
      time: "O(n)",
      space: "O(1)",
      code: `def twoSum(numbers, target):
    l, r = 0, len(numbers) - 1
    while l < r:
        s = numbers[l] + numbers[r]
        if s == target: return [l+1, r+1]
        elif s < target: l += 1
        else: r -= 1`,
    },
  },

  "Add Binary": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def addBinary(a, b):
    return bin(int(a, 2) + int(b, 2))[2:]`,
    },
    better: {
      name: "Character by Character",
      time: "O(n)",
      space: "O(n)",
      code: `def addBinary(a, b):
    result = []
    carry = 0
    i, j = len(a)-1, len(b)-1
    while i >= 0 or j >= 0 or carry:
        total = carry
        if i >= 0: total += int(a[i]); i -= 1
        if j >= 0: total += int(b[j]); j -= 1
        result.append(str(total % 2))
        carry = total // 2
    return ''.join(reversed(result))`,
    },
    optimal: {
      name: "Bit Manipulation",
      time: "O(n)",
      space: "O(n)",
      code: `def addBinary(a, b):
    res, carry = [], 0
    a, b = list(a), list(b)
    while a or b or carry:
        carry += int(a.pop()) if a else 0
        carry += int(b.pop()) if b else 0
        res.append(str(carry % 2))
        carry //= 2
    return ''.join(res[::-1])`,
    },
  },

  "First Unique Character in a String": {
    brute: {
      name: "Brute Force",
      time: "O(n²)",
      space: "O(1)",
      code: `def firstUniqChar(s):
    for i in range(len(s)):
        unique = True
        for j in range(len(s)):
            if i != j and s[i] == s[j]:
                unique = False
                break
        if unique: return i
    return -1`,
    },
    better: {
      name: "Counter",
      time: "O(n)",
      space: "O(1)",
      code: `def firstUniqChar(s):
    from collections import Counter
    count = Counter(s)
    for i, ch in enumerate(s):
        if count[ch] == 1:
            return i
    return -1`,
    },
    optimal: {
      name: "Single Pass HashMap",
      time: "O(n)",
      space: "O(1)",
      code: `def firstUniqChar(s):
    count = {}
    for ch in s:
        count[ch] = count.get(ch, 0) + 1
    for i, ch in enumerate(s):
        if count[ch] == 1: return i
    return -1`,
    },
  },

  "Implement strStr()": {
    brute: {
      name: "Brute Force",
      time: "O(n * m)",
      space: "O(1)",
      code: `def strStr(haystack, needle):
    if not needle: return 0
    for i in range(len(haystack) - len(needle) + 1):
        if haystack[i:i+len(needle)] == needle:
            return i
    return -1`,
    },
    better: {
      name: "Rolling Hash (Rabin-Karp)",
      time: "O(n + m)",
      space: "O(1)",
      code: `def strStr(haystack, needle):
    if not needle: return 0
    n, m = len(haystack), len(needle)
    base, mod = 26, 10**9+7
    target = sum(ord(needle[i])*pow(base,m-1-i,mod) for i in range(m)) % mod
    h = sum(ord(haystack[i])*pow(base,m-1-i,mod) for i in range(m)) % mod
    if h == target and haystack[:m]==needle: return 0
    for i in range(1, n-m+1):
        h = (h*base - ord(haystack[i-1])*pow(base,m,mod) + ord(haystack[i+m-1])) % mod
        if h == target and haystack[i:i+m]==needle: return i
    return -1`,
    },
    optimal: {
      name: "KMP",
      time: "O(n + m)",
      space: "O(m)",
      code: `def strStr(haystack, needle):
    if not needle: return 0
    lps, j = [0]*len(needle), 0
    for i in range(1, len(needle)):
        while j and needle[i]!=needle[j]: j = lps[j-1]
        if needle[i]==needle[j]: j += 1
        lps[i] = j
    j = 0
    for i in range(len(haystack)):
        while j and haystack[i]!=needle[j]: j = lps[j-1]
        if haystack[i]==needle[j]: j += 1
        if j == len(needle): return i - j + 1
    return -1`,
    },
  },

  "Is Subsequence": {
    brute: {
      name: "Brute Force",
      time: "O(n * 2^n)",
      space: "O(n)",
      code: `def isSubsequence(s, t):
    if not s: return True
    def generate(idx, curr):
        if len(curr) == len(s):
            return curr == s
        for i in range(idx, len(t)):
            if generate(i + 1, curr + t[i]):
                return True
        return False
    return generate(0, "")`,
    },
    better: {
      name: "Two Pointers",
      time: "O(n)",
      space: "O(1)",
      code: `def isSubsequence(s, t):
    i = j = 0
    while i < len(s) and j < len(t):
        if s[i] == t[j]:
            i += 1
        j += 1
    return i == len(s)`,
    },
    optimal: {
      name: "Binary Search (for follow-up)",
      time: "O(m log n)",
      space: "O(n)",
      code: `def isSubsequence(s, t):
    from collections import defaultdict
    import bisect
    idx_map = defaultdict(list)
    for i, ch in enumerate(t):
        idx_map[ch].append(i)
    prev = -1
    for ch in s:
        if ch not in idx_map: return False
        pos = bisect.bisect_right(idx_map[ch], prev)
        if pos == len(idx_map[ch]): return False
        prev = idx_map[ch][pos]
    return True`,
    },
  },

  "Longest Common Prefix": {
    brute: {
      name: "Brute Force",
      time: "O(S) where S = sum of all chars",
      space: "O(1)",
      code: `def longestCommonPrefix(strs):
    if not strs: return ""
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix: return ""
    return prefix`,
    },
    better: {
      name: "Vertical Scan",
      time: "O(S)",
      space: "O(1)",
      code: `def longestCommonPrefix(strs):
    if not strs: return ""
    for i in range(len(strs[0])):
        ch = strs[0][i]
        for s in strs[1:]:
            if i >= len(s) or s[i] != ch:
                return strs[0][:i]
    return strs[0]`,
    },
    optimal: {
      name: "Sort and Compare",
      time: "O(n * m log n)",
      space: "O(1)",
      code: `def longestCommonPrefix(strs):
    if not strs: return ""
    strs.sort()
    first, last = strs[0], strs[-1]
    i = 0
    while i < len(first) and i < len(last) and first[i] == last[i]:
        i += 1
    return first[:i]`,
    },
  },



  "Reverse String": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def reverseString(s):
    return s[::-1]  # creates new string`,
    },
    better: {
      name: "Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def reverseString(s):
    stack = list(s)
    result = []
    while stack:
        result.append(stack.pop())
    return ''.join(result)`,
    },
    optimal: {
      name: "Two Pointers",
      time: "O(n)",
      space: "O(1)",
      code: `def reverseString(s):
    s = list(s)
    l, r = 0, len(s) - 1
    while l < r:
        s[l], s[r] = s[r], s[l]
        l += 1
        r -= 1
    return ''.join(s)`,
    },
  },


  "Reverse Vowels of a String": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def reverseVowels(s):
    vowels = [c for c in s if c in 'aeiouAEIOU']
    result = []
    for c in s:
        if c in 'aeiouAEIOU':
            result.append(vowels.pop())
        else:
            result.append(c)
    return ''.join(result)`,
    },
    better: {
      name: "List Conversion",
      time: "O(n)",
      space: "O(n)",
      code: `def reverseVowels(s):
    s = list(s)
    vowels = set('aeiouAEIOU')
    idxs = [i for i, c in enumerate(s) if c in vowels]
    l, r = 0, len(idxs) - 1
    while l < r:
        s[idxs[l]], s[idxs[r]] = s[idxs[r]], s[idxs[l]]
        l += 1
        r -= 1
    return ''.join(s)`,
    },
    optimal: {
      name: "Two Pointers",
      time: "O(n)",
      space: "O(1)",
      code: `def reverseVowels(s):
    s = list(s)
    vowels = set('aeiouAEIOU')
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and s[l] not in vowels: l += 1
        while l < r and s[r] not in vowels: r -= 1
        s[l], s[r] = s[r], s[l]
        l += 1
        r -= 1
    return ''.join(s)`,
    },
  },


  "Roman to Integer": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(1)",
      code: `def romanToInt(s):
    d = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    result = 0
    for i in range(len(s)):
        if i + 1 < len(s) and d[s[i]] < d[s[i+1]]:
            result -= d[s[i]]
        else:
            result += d[s[i]]
    return result`,
    },
    better: {
      name: "Replace Substrings",
      time: "O(n)",
      space: "O(n)",
      code: `def romanToInt(s):
    s = s.replace("IV","IIII").replace("IX","VIIII")
    s = s.replace("XL","XXXX").replace("XC","LXXXX")
    s = s.replace("CD","CCCC").replace("CM","DCCCC")
    d = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    return sum(d[c] for c in s)`,
    },
    optimal: {
      name: "Right to Left",
      time: "O(n)",
      space: "O(1)",
      code: `def romanToInt(s):
    d = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    result, prev = 0, 0
    for c in reversed(s):
        cur = d[c]
        result += cur if cur >= prev else -cur
        prev = cur
    return result`,
    },
  },


  "Student Attendance Record I": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(1)",
      code: `def checkRecord(s):
    a_count = 0
    l_count = 0
    for i, c in enumerate(s):
        if c == 'A': a_count += 1
        if c == 'L': l_count += 1
        else: l_count = 0
        if a_count >= 2 or l_count >= 3: return False
    return True`,
    },
    better: {
      name: "Count Method",
      time: "O(n)",
      space: "O(1)",
      code: `def checkRecord(s):
    return s.count('A') < 2 and 'LLL' not in s`,
    },
    optimal: {
      name: "Single Pass",
      time: "O(n)",
      space: "O(1)",
      code: `def checkRecord(s):
    a, l = 0, 0
    for c in s:
        if c == 'A':
            a += 1
            if a >= 2: return False
        if c == 'L': l += 1
        else: l = 0
        if l >= 3: return False
    return True`,
    },
  },


  "Valid Palindrome": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def isPalindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]`,
    },
    better: {
      name: "Filter and Compare",
      time: "O(n)",
      space: "O(n)",
      code: `def isPalindrome(s):
    filtered = list(filter(str.isalnum, s.lower()))
    return filtered == filtered[::-1]`,
    },
    optimal: {
      name: "Two Pointers",
      time: "O(n)",
      space: "O(1)",
      code: `def isPalindrome(s):
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum(): l += 1
        while l < r and not s[r].isalnum(): r -= 1
        if s[l].lower() != s[r].lower(): return False
        l += 1
        r -= 1
    return True`,
    },
  },


  "Valid Palindrome II": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def validPalindrome(s):
    for i in range(len(s)):
        t = s[:i] + s[i+1:]
        if t == t[::-1]: return True
    return s == s[::-1]`,
    },
    better: {
      name: "Two Pointers with Helper",
      time: "O(n)",
      space: "O(n)",
      code: `def validPalindrome(s):
    def is_pal(s, l, r):
        return s[l:r+1] == s[l:r+1][::-1]
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            return is_pal(s, l+1, r) or is_pal(s, l, r-1)
        l += 1
        r -= 1
    return True`,
    },
    optimal: {
      name: "Two Pointers O(1) Space",
      time: "O(n)",
      space: "O(1)",
      code: `def validPalindrome(s):
    def check(l, r):
        while l < r:
            if s[l] != s[r]: return False
            l += 1
            r -= 1
        return True
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            return check(l+1, r) or check(l, r-1)
        l += 1
        r -= 1
    return True`,
    },
  },


  "Edit Distance": {
    brute: {
      name: "Brute Force (Recursion)",
      time: "O(3^(m+n))",
      space: "O(m+n)",
      code: `def minDistance(word1, word2):
    def dp(i, j):
        if i == 0: return j
        if j == 0: return i
        if word1[i-1] == word2[j-1]: return dp(i-1, j-1)
        return 1 + min(dp(i-1,j), dp(i,j-1), dp(i-1,j-1))
    return dp(len(word1), len(word2))`,
    },
    better: {
      name: "Memoization",
      time: "O(m*n)",
      space: "O(m*n)",
      code: `def minDistance(word1, word2):
    from functools import lru_cache
    @lru_cache(None)
    def dp(i, j):
        if i == 0: return j
        if j == 0: return i
        if word1[i-1] == word2[j-1]: return dp(i-1, j-1)
        return 1 + min(dp(i-1,j), dp(i,j-1), dp(i-1,j-1))
    return dp(len(word1), len(word2))`,
    },
    optimal: {
      name: "DP Space Optimized",
      time: "O(m*n)",
      space: "O(n)",
      code: `def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    prev = list(range(n + 1))
    for i in range(1, m + 1):
        cur = [i] + [0] * n
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]: cur[j] = prev[j-1]
            else: cur[j] = 1 + min(prev[j], cur[j-1], prev[j-1])
        prev = cur
    return prev[n]`,
    },
  },


  "Minimum Window Substring": {
    brute: {
      name: "Brute Force",
      time: "O(n^2 * m)",
      space: "O(n)",
      code: `def minWindow(s, t):
    from collections import Counter
    need = Counter(t)
    res = ""
    for i in range(len(s)):
        for j in range(i + len(t), len(s) + 1):
            window = Counter(s[i:j])
            if all(window[c] >= need[c] for c in need):
                if not res or j - i < len(res): res = s[i:j]
                break
    return res`,
    },
    better: {
      name: "Sliding Window (HashMap)",
      time: "O(n + m)",
      space: "O(n + m)",
      code: `def minWindow(s, t):
    from collections import Counter
    need, window = Counter(t), {}
    have, required = 0, len(need)
    res, resLen = [-1, -1], float('inf')
    l = 0
    for r, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]: have += 1
        while have == required:
            if (r - l + 1) < resLen:
                res, resLen = [l, r], r - l + 1
            window[s[l]] -= 1
            if s[l] in need and window[s[l]] < need[s[l]]: have -= 1
            l += 1
    return s[res[0]:res[1]+1] if resLen != float('inf') else ""`,
    },
    optimal: {
      name: "Optimized Sliding Window",
      time: "O(n + m)",
      space: "O(m)",
      code: `def minWindow(s, t):
    from collections import Counter
    need = Counter(t)
    missing = len(t)
    l = start = end = 0
    for r, c in enumerate(s, 1):
        if need[c] > 0: missing -= 1
        need[c] -= 1
        if missing == 0:
            while need[s[l]] < 0:
                need[s[l]] += 1
                l += 1
            if not end or r - l < end - start:
                start, end = l, r
            need[s[l]] += 1
            missing += 1
            l += 1
    return s[start:end]`,
    },
  },


  "Regular Expression Matching": {
    brute: {
      name: "Brute Force (Recursion)",
      time: "O(2^(m+n))",
      space: "O(m+n)",
      code: `def isMatch(s, p):
    if not p: return not s
    first = bool(s) and p[0] in {s[0], '.'}
    if len(p) >= 2 and p[1] == '*':
        return isMatch(s, p[2:]) or (first and isMatch(s[1:], p))
    return first and isMatch(s[1:], p[1:])`,
    },
    better: {
      name: "Memoization",
      time: "O(m*n)",
      space: "O(m*n)",
      code: `def isMatch(s, p):
    from functools import lru_cache
    @lru_cache(None)
    def dp(i, j):
        if j == len(p): return i == len(s)
        first = i < len(s) and p[j] in {s[i], '.'}
        if j + 1 < len(p) and p[j+1] == '*':
            return dp(i, j+2) or (first and dp(i+1, j))
        return first and dp(i+1, j+1)
    return dp(0, 0)`,
    },
    optimal: {
      name: "Bottom-Up DP",
      time: "O(m*n)",
      space: "O(m*n)",
      code: `def isMatch(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n+1) for _ in range(m+1)]
    dp[0][0] = True
    for j in range(1, n+1):
        if p[j-1] == '*': dp[0][j] = dp[0][j-2]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if p[j-1] == '*':
                dp[i][j] = dp[i][j-2] or (dp[i-1][j] and p[j-2] in {s[i-1], '.'})
            else:
                dp[i][j] = dp[i-1][j-1] and p[j-1] in {s[i-1], '.'}
    return dp[m][n]`,
    },
  },


  "Substring with Concatenation of All Words": {
    brute: {
      name: "Brute Force",
      time: "O(n * m * k)",
      space: "O(m)",
      code: `def findSubstring(s, words):
    from collections import Counter
    if not words: return []
    wlen, wcount = len(words[0]), len(words)
    total = wlen * wcount
    need = Counter(words)
    res = []
    for i in range(len(s) - total + 1):
        seen = Counter()
        j = 0
        while j < wcount:
            w = s[i + j*wlen: i + (j+1)*wlen]
            seen[w] += 1
            if seen[w] > need[w]: break
            j += 1
        if j == wcount: res.append(i)
    return res`,
    },
    better: {
      name: "Sliding Window per Offset",
      time: "O(n * k)",
      space: "O(m)",
      code: `def findSubstring(s, words):
    from collections import Counter
    if not words: return []
    wlen, n = len(words[0]), len(s)
    need = Counter(words)
    res = []
    for offset in range(wlen):
        window, count = Counter(), 0
        l = offset
        for r in range(offset, n - wlen + 1, wlen):
            w = s[r:r+wlen]
            window[w] += 1
            count += 1
            while window[w] > need[w]:
                window[s[l:l+wlen]] -= 1
                l += wlen
                count -= 1
            if count == len(words): res.append(l)
    return res`,
    },
    optimal: {
      name: "Optimized Sliding Window",
      time: "O(n * k)",
      space: "O(m)",
      code: `def findSubstring(s, words):
    from collections import Counter
    wlen, total = len(words[0]), len(words)
    need = Counter(words)
    res = []
    for i in range(wlen):
        window, matched = Counter(), 0
        l = i
        for r in range(i, len(s) - wlen + 1, wlen):
            w = s[r:r+wlen]
            if w in need:
                window[w] += 1
                if window[w] == need[w]: matched += 1
                while window[w] > need[w]:
                    lw = s[l:l+wlen]
                    if window[lw] == need[lw]: matched -= 1
                    window[lw] -= 1
                    l += wlen
                if matched == len(need): res.append(l)
            else:
                window.clear()
                matched = 0
                l = r + wlen
    return res`,
    },
  },


  "Wildcard Matching": {
    brute: {
      name: "Brute Force (Recursion)",
      time: "O(2^(m+n))",
      space: "O(m+n)",
      code: `def isMatch(s, p):
    if not p: return not s
    if p[0] == '*':
        return isMatch(s, p[1:]) or (bool(s) and isMatch(s[1:], p))
    if s and (p[0] == '?' or p[0] == s[0]):
        return isMatch(s[1:], p[1:])
    return False`,
    },
    better: {
      name: "Memoization",
      time: "O(m*n)",
      space: "O(m*n)",
      code: `def isMatch(s, p):
    from functools import lru_cache
    @lru_cache(None)
    def dp(i, j):
        if j == len(p): return i == len(s)
        if p[j] == '*':
            return dp(i, j+1) or (i < len(s) and dp(i+1, j))
        if i < len(s) and (p[j] == '?' or p[j] == s[i]):
            return dp(i+1, j+1)
        return False
    return dp(0, 0)`,
    },
    optimal: {
      name: "Two Pointer Greedy",
      time: "O(m*n)",
      space: "O(1)",
      code: `def isMatch(s, p):
    si, pi, star, match = 0, 0, -1, 0
    while si < len(s):
        if pi < len(p) and (p[pi] == '?' or p[pi] == s[si]):
            si += 1
            pi += 1
        elif pi < len(p) and p[pi] == '*':
            star = pi
            match = si
            pi += 1
        elif star != -1:
            pi = star + 1
            match += 1
            si = match
        else:
            return False
    while pi < len(p) and p[pi] == '*': pi += 1
    return pi == len(p)`,
    },
  },


  "Bulls and Cows": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def getHint(secret, guess):
    bulls = sum(s == g for s, g in zip(secret, guess))
    cows = 0
    s_rem = [s for s, g in zip(secret, guess) if s != g]
    g_rem = [g for s, g in zip(secret, guess) if s != g]
    for g in g_rem:
        if g in s_rem:
            cows += 1
            s_rem.remove(g)
    return f"{bulls}A{cows}B"`,
    },
    better: {
      name: "Counter",
      time: "O(n)",
      space: "O(1)",
      code: `def getHint(secret, guess):
    from collections import Counter
    bulls = sum(s == g for s, g in zip(secret, guess))
    s_count = Counter(secret)
    g_count = Counter(guess)
    total = sum((s_count & g_count).values())
    return f"{bulls}A{total - bulls}B"`,
    },
    optimal: {
      name: "Single Pass",
      time: "O(n)",
      space: "O(1)",
      code: `def getHint(secret, guess):
    bulls = cows = 0
    counts = [0] * 10
    for s, g in zip(secret, guess):
        if s == g:
            bulls += 1
        else:
            if counts[int(s)] < 0: cows += 1
            if counts[int(g)] > 0: cows += 1
            counts[int(s)] += 1
            counts[int(g)] -= 1
    return f"{bulls}A{cows}B"`,
    },
  },


  "Check Inclusion": {
    brute: {
      name: "Brute Force",
      time: "O(n * m!)",
      space: "O(m)",
      code: `def checkInclusion(s1, s2):
    from itertools import permutations
    for p in set(permutations(s1)):
        if ''.join(p) in s2: return True
    return False`,
    },
    better: {
      name: "Sorting Window",
      time: "O(n * m log m)",
      space: "O(m)",
      code: `def checkInclusion(s1, s2):
    m = len(s1)
    sorted_s1 = sorted(s1)
    for i in range(len(s2) - m + 1):
        if sorted(s2[i:i+m]) == sorted_s1:
            return True
    return False`,
    },
    optimal: {
      name: "Sliding Window Counter",
      time: "O(n)",
      space: "O(1)",
      code: `def checkInclusion(s1, s2):
    from collections import Counter
    need = Counter(s1)
    window = Counter()
    l = 0
    for r, c in enumerate(s2):
        window[c] += 1
        if r - l + 1 > len(s1):
            window[s2[l]] -= 1
            if window[s2[l]] == 0: del window[s2[l]]
            l += 1
        if window == need: return True
    return False`,
    },
  },


  "Compare Version Numbers": {
    brute: {
      name: "Brute Force",
      time: "O(n + m)",
      space: "O(n + m)",
      code: `def compareVersion(version1, version2):
    v1 = list(map(int, version1.split('.')))
    v2 = list(map(int, version2.split('.')))
    while len(v1) < len(v2): v1.append(0)
    while len(v2) < len(v1): v2.append(0)
    for a, b in zip(v1, v2):
        if a > b: return 1
        if a < b: return -1
    return 0`,
    },
    better: {
      name: "Zip Longest",
      time: "O(n + m)",
      space: "O(n + m)",
      code: `def compareVersion(version1, version2):
    from itertools import zip_longest
    v1 = map(int, version1.split('.'))
    v2 = map(int, version2.split('.'))
    for a, b in zip_longest(v1, v2, fillvalue=0):
        if a > b: return 1
        if a < b: return -1
    return 0`,
    },
    optimal: {
      name: "Two Pointer (No Split)",
      time: "O(n + m)",
      space: "O(1)",
      code: `def compareVersion(version1, version2):
    i, j = 0, 0
    while i < len(version1) or j < len(version2):
        v1 = v2 = 0
        while i < len(version1) and version1[i] != '.':
            v1 = v1 * 10 + int(version1[i])
            i += 1
        while j < len(version2) and version2[j] != '.':
            v2 = v2 * 10 + int(version2[j])
            j += 1
        if v1 > v2: return 1
        if v1 < v2: return -1
        i += 1
        j += 1
    return 0`,
    },
  },


  "Count Occurrences of Anagram": {
    brute: {
      name: "Brute Force",
      time: "O(n * m log m)",
      space: "O(m)",
      code: `def countAnagrams(s, p):
    m = len(p)
    sorted_p = sorted(p)
    count = 0
    for i in range(len(s) - m + 1):
        if sorted(s[i:i+m]) == sorted_p:
            count += 1
    return count`,
    },
    better: {
      name: "Counter Comparison",
      time: "O(n * m)",
      space: "O(m)",
      code: `def countAnagrams(s, p):
    from collections import Counter
    m = len(p)
    need = Counter(p)
    count = 0
    for i in range(len(s) - m + 1):
        if Counter(s[i:i+m]) == need:
            count += 1
    return count`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def countAnagrams(s, p):
    from collections import Counter
    need = Counter(p)
    window = Counter(s[:len(p)])
    count = 1 if window == need else 0
    for i in range(len(p), len(s)):
        window[s[i]] += 1
        left = s[i - len(p)]
        window[left] -= 1
        if window[left] == 0: del window[left]
        if window == need: count += 1
    return count`,
    },
  },


  "Count and Say": {
    brute: {
      name: "Brute Force (Iterative)",
      time: "O(2^n)",
      space: "O(2^n)",
      code: `def countAndSay(n):
    s = "1"
    for _ in range(n - 1):
        result = ""
        i = 0
        while i < len(s):
            count = 1
            while i + count < len(s) and s[i+count] == s[i]:
                count += 1
            result += str(count) + s[i]
            i += count
        s = result
    return s`,
    },
    better: {
      name: "Groupby",
      time: "O(2^n)",
      space: "O(2^n)",
      code: `def countAndSay(n):
    from itertools import groupby
    s = "1"
    for _ in range(n - 1):
        s = ''.join(str(len(list(g))) + k for k, g in groupby(s))
    return s`,
    },
    optimal: {
      name: "Recursive",
      time: "O(2^n)",
      space: "O(2^n)",
      code: `def countAndSay(n):
    if n == 1: return "1"
    prev = countAndSay(n - 1)
    result, i = "", 0
    while i < len(prev):
        c, count = prev[i], 1
        while i + count < len(prev) and prev[i+count] == c:
            count += 1
        result += str(count) + c
        i += count
    return result`,
    },
  },


  "Decode Ways": {
    brute: {
      name: "Brute Force (Recursion)",
      time: "O(2^n)",
      space: "O(n)",
      code: `def numDecodings(s):
    def helper(i):
        if i == len(s): return 1
        if s[i] == '0': return 0
        ways = helper(i + 1)
        if i + 1 < len(s) and int(s[i:i+2]) <= 26:
            ways += helper(i + 2)
        return ways
    return helper(0)`,
    },
    better: {
      name: "Memoization",
      time: "O(n)",
      space: "O(n)",
      code: `def numDecodings(s):
    from functools import lru_cache
    @lru_cache(None)
    def dp(i):
        if i == len(s): return 1
        if s[i] == '0': return 0
        ways = dp(i + 1)
        if i + 1 < len(s) and int(s[i:i+2]) <= 26:
            ways += dp(i + 2)
        return ways
    return dp(0)`,
    },
    optimal: {
      name: "DP O(1) Space",
      time: "O(n)",
      space: "O(1)",
      code: `def numDecodings(s):
    if not s or s[0] == '0': return 0
    prev2, prev1 = 1, 1
    for i in range(1, len(s)):
        cur = 0
        if s[i] != '0': cur = prev1
        two = int(s[i-1:i+1])
        if 10 <= two <= 26: cur += prev2
        prev2, prev1 = prev1, cur
    return prev1`,
    },
  },


  "Encode and Decode Strings": {
    brute: {
      name: "Brute Force (Delimiter)",
      time: "O(n)",
      space: "O(n)",
      code: `def encode(strs):
    return '\\x00'.join(strs)

def decode(s):
    return s.split('\\x00')`,
    },
    better: {
      name: "Escaping",
      time: "O(n)",
      space: "O(n)",
      code: `def encode(strs):
    return ''.join(s.replace('#', '##') + ' # ' for s in strs)

def decode(s):
    result, cur = [], []
    i = 0
    while i < len(s):
        if s[i:i+3] == ' # ':
            result.append(''.join(cur))
            cur = []
            i += 3
        elif s[i:i+2] == '##':
            cur.append('#')
            i += 2
        else:
            cur.append(s[i])
            i += 1
    return result`,
    },
    optimal: {
      name: "Length Prefix",
      time: "O(n)",
      space: "O(n)",
      code: `def encode(strs):
    return ''.join(f"{len(s)}#{s}" for s in strs)

def decode(s):
    result, i = [], 0
    while i < len(s):
        j = s.index('#', i)
        length = int(s[i:j])
        result.append(s[j+1:j+1+length])
        i = j + 1 + length
    return result`,
    },
  },


  "Find All Anagrams in a String": {
    brute: {
      name: "Brute Force",
      time: "O(n * m log m)",
      space: "O(m)",
      code: `def findAnagrams(s, p):
    m = len(p)
    sorted_p = sorted(p)
    result = []
    for i in range(len(s) - m + 1):
        if sorted(s[i:i+m]) == sorted_p:
            result.append(i)
    return result`,
    },
    better: {
      name: "Counter Comparison",
      time: "O(n * m)",
      space: "O(m)",
      code: `def findAnagrams(s, p):
    from collections import Counter
    need = Counter(p)
    result = []
    for i in range(len(s) - len(p) + 1):
        if Counter(s[i:i+len(p)]) == need:
            result.append(i)
    return result`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def findAnagrams(s, p):
    from collections import Counter
    need = Counter(p)
    window = Counter()
    result = []
    for i, c in enumerate(s):
        window[c] += 1
        if i >= len(p):
            left = s[i - len(p)]
            window[left] -= 1
            if window[left] == 0: del window[left]
        if window == need: result.append(i - len(p) + 1)
    return result`,
    },
  },


  "Generate Parentheses": {
    brute: {
      name: "Brute Force",
      time: "O(2^(2n) * n)",
      space: "O(n)",
      code: `def generateParenthesis(n):
    def valid(s):
        bal = 0
        for c in s:
            bal += 1 if c == '(' else -1
            if bal < 0: return False
        return bal == 0
    result = []
    def generate(cur):
        if len(cur) == 2*n:
            if valid(cur): result.append(cur)
            return
        generate(cur + '(')
        generate(cur + ')')
    generate('')
    return result`,
    },
    better: {
      name: "Backtracking",
      time: "O(4^n / sqrt(n))",
      space: "O(n)",
      code: `def generateParenthesis(n):
    result = []
    def backtrack(cur, open, close):
        if len(cur) == 2 * n:
            result.append(cur)
            return
        if open < n: backtrack(cur + '(', open + 1, close)
        if close < open: backtrack(cur + ')', open, close + 1)
    backtrack('', 0, 0)
    return result`,
    },
    optimal: {
      name: "Iterative DP",
      time: "O(4^n / sqrt(n))",
      space: "O(4^n / sqrt(n))",
      code: `def generateParenthesis(n):
    dp = [[] for _ in range(n + 1)]
    dp[0] = ['']
    for i in range(1, n + 1):
        for j in range(i):
            for left in dp[j]:
                for right in dp[i-1-j]:
                    dp[i].append(f'({left}){right}')
    return dp[n]`,
    },
  },


  "Get Equal Substrings Within Budget": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def equalSubstring(s, t, maxCost):
    n = len(s)
    costs = [abs(ord(s[i]) - ord(t[i])) for i in range(n)]
    res = 0
    for i in range(n):
        total = 0
        for j in range(i, n):
            total += costs[j]
            if total > maxCost: break
            res = max(res, j - i + 1)
    return res`,
    },
    better: {
      name: "Prefix Sum + Binary Search",
      time: "O(n log n)",
      space: "O(n)",
      code: `def equalSubstring(s, t, maxCost):
    import bisect
    n = len(s)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i+1] = prefix[i] + abs(ord(s[i]) - ord(t[i]))
    res = 0
    for i in range(n):
        target = prefix[i] + maxCost
        j = bisect.bisect_right(prefix, target, i+1, n+1) - 1
        res = max(res, j - i)
    return res`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def equalSubstring(s, t, maxCost):
    l = cur = res = 0
    for r in range(len(s)):
        cur += abs(ord(s[r]) - ord(t[r]))
        while cur > maxCost:
            cur -= abs(ord(s[l]) - ord(t[l]))
            l += 1
        res = max(res, r - l + 1)
    return res`,
    },
  },


  "Integer to Roman": {
    brute: {
      name: "Brute Force",
      time: "O(1)",
      space: "O(1)",
      code: `def intToRoman(num):
    result = ""
    vals = [(1000,'M'),(900,'CM'),(500,'D'),(400,'CD'),
            (100,'C'),(90,'XC'),(50,'L'),(40,'XL'),
            (10,'X'),(9,'IX'),(5,'V'),(4,'IV'),(1,'I')]
    for val, sym in vals:
        while num >= val:
            result += sym
            num -= val
    return result`,
    },
    better: {
      name: "Digit by Digit",
      time: "O(1)",
      space: "O(1)",
      code: `def intToRoman(num):
    thousands = ['','M','MM','MMM']
    hundreds = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
    tens = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    ones = ['','I','II','III','IV','V','VI','VII','VIII','IX']
    return (thousands[num//1000] + hundreds[num%1000//100]
            + tens[num%100//10] + ones[num%10])`,
    },
    optimal: {
      name: "Greedy (Concise)",
      time: "O(1)",
      space: "O(1)",
      code: `def intToRoman(num):
    pairs = [(1000,'M'),(900,'CM'),(500,'D'),(400,'CD'),
             (100,'C'),(90,'XC'),(50,'L'),(40,'XL'),
             (10,'X'),(9,'IX'),(5,'V'),(4,'IV'),(1,'I')]
    res = []
    for val, sym in pairs:
        count, num = divmod(num, val)
        res.append(sym * count)
    return ''.join(res)`,
    },
  },


  "Letter Combinations of a Phone Number": {
    brute: {
      name: "Brute Force (Iterative)",
      time: "O(4^n)",
      space: "O(4^n)",
      code: `def letterCombinations(digits):
    if not digits: return []
    phone = {'2':'abc','3':'def','4':'ghi','5':'jkl',
             '6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    result = ['']
    for d in digits:
        result = [combo + c for combo in result for c in phone[d]]
    return result`,
    },
    better: {
      name: "BFS with Queue",
      time: "O(4^n)",
      space: "O(4^n)",
      code: `def letterCombinations(digits):
    if not digits: return []
    phone = {'2':'abc','3':'def','4':'ghi','5':'jkl',
             '6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    from collections import deque
    queue = deque([''])
    for d in digits:
        for _ in range(len(queue)):
            cur = queue.popleft()
            for c in phone[d]:
                queue.append(cur + c)
    return list(queue)`,
    },
    optimal: {
      name: "Backtracking",
      time: "O(4^n)",
      space: "O(n)",
      code: `def letterCombinations(digits):
    if not digits: return []
    phone = {'2':'abc','3':'def','4':'ghi','5':'jkl',
             '6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    result = []
    def backtrack(i, cur):
        if i == len(digits):
            result.append(cur)
            return
        for c in phone[digits[i]]:
            backtrack(i + 1, cur + c)
    backtrack(0, '')
    return result`,
    },
  },


  "Longest Palindromic Substring": {
    brute: {
      name: "Brute Force",
      time: "O(n^3)",
      space: "O(1)",
      code: `def longestPalindrome(s):
    res = ""
    for i in range(len(s)):
        for j in range(i, len(s)):
            sub = s[i:j+1]
            if sub == sub[::-1] and len(sub) > len(res):
                res = sub
    return res`,
    },
    better: {
      name: "DP",
      time: "O(n^2)",
      space: "O(n^2)",
      code: `def longestPalindrome(s):
    n = len(s)
    dp = [[False]*n for _ in range(n)]
    res = s[0]
    for i in range(n): dp[i][i] = True
    for length in range(2, n+1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j] and (length <= 2 or dp[i+1][j-1]):
                dp[i][j] = True
                if length > len(res): res = s[i:j+1]
    return res`,
    },
    optimal: {
      name: "Expand Around Center",
      time: "O(n^2)",
      space: "O(1)",
      code: `def longestPalindrome(s):
    res = ""
    def expand(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l+1:r]
    for i in range(len(s)):
        odd = expand(i, i)
        even = expand(i, i+1)
        res = max(res, odd, even, key=len)
    return res`,
    },
  },


  "Longest Repeating Character Replacement": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def characterReplacement(s, k):
    res = 0
    for i in range(len(s)):
        count = {}
        max_freq = 0
        for j in range(i, len(s)):
            count[s[j]] = count.get(s[j], 0) + 1
            max_freq = max(max_freq, count[s[j]])
            if (j - i + 1) - max_freq <= k:
                res = max(res, j - i + 1)
    return res`,
    },
    better: {
      name: "Sliding Window (Shrink)",
      time: "O(n)",
      space: "O(1)",
      code: `def characterReplacement(s, k):
    count = {}
    l = res = max_freq = 0
    for r in range(len(s)):
        count[s[r]] = count.get(s[r], 0) + 1
        max_freq = max(max_freq, count[s[r]])
        while (r - l + 1) - max_freq > k:
            count[s[l]] -= 1
            l += 1
        res = max(res, r - l + 1)
    return res`,
    },
    optimal: {
      name: "Sliding Window (No Shrink)",
      time: "O(n)",
      space: "O(1)",
      code: `def characterReplacement(s, k):
    count = {}
    l = max_freq = 0
    for r in range(len(s)):
        count[s[r]] = count.get(s[r], 0) + 1
        max_freq = max(max_freq, count[s[r]])
        if (r - l + 1) - max_freq > k:
            count[s[l]] -= 1
            l += 1
    return len(s) - l`,
    },
  },


  "Longest Substring Without Repeating Characters": {
    brute: {
      name: "Brute Force",
      time: "O(n^3)",
      space: "O(min(n,m))",
      code: `def lengthOfLongestSubstring(s):
    res = 0
    for i in range(len(s)):
        seen = set()
        for j in range(i, len(s)):
            if s[j] in seen: break
            seen.add(s[j])
            res = max(res, j - i + 1)
    return res`,
    },
    better: {
      name: "Sliding Window (Set)",
      time: "O(n)",
      space: "O(min(n,m))",
      code: `def lengthOfLongestSubstring(s):
    seen = set()
    l = res = 0
    for r in range(len(s)):
        while s[r] in seen:
            seen.remove(s[l])
            l += 1
        seen.add(s[r])
        res = max(res, r - l + 1)
    return res`,
    },
    optimal: {
      name: "Sliding Window (HashMap)",
      time: "O(n)",
      space: "O(min(n,m))",
      code: `def lengthOfLongestSubstring(s):
    last = {}
    l = res = 0
    for r, c in enumerate(s):
        if c in last and last[c] >= l:
            l = last[c] + 1
        last[c] = r
        res = max(res, r - l + 1)
    return res`,
    },
  },


  "Longest Word in Dictionary": {
    brute: {
      name: "Brute Force",
      time: "O(n * m^2)",
      space: "O(n * m)",
      code: `def longestWord(words):
    word_set = set(words)
    res = ""
    for word in words:
        valid = all(word[:k] in word_set for k in range(1, len(word)+1))
        if valid:
            if len(word) > len(res) or (len(word) == len(res) and word < res):
                res = word
    return res`,
    },
    better: {
      name: "Sort and HashSet",
      time: "O(n * m log n)",
      space: "O(n * m)",
      code: `def longestWord(words):
    words.sort()
    built = {''}
    res = ""
    for word in words:
        if word[:-1] in built:
            built.add(word)
            if len(word) > len(res):
                res = word
    return res`,
    },
    optimal: {
      name: "Trie + BFS",
      time: "O(n * m)",
      space: "O(n * m)",
      code: `def longestWord(words):
    from collections import deque
    trie = {}
    for word in words:
        node = trie
        for c in word:
            node = node.setdefault(c, {})
        node['#'] = word
    res = ""
    queue = deque([trie])
    while queue:
        node = queue.popleft()
        for key in node:
            if key != '#' and '#' in node[key]:
                w = node[key]['#']
                if len(w) > len(res) or (len(w) == len(res) and w < res):
                    res = w
                queue.append(node[key])
    return res`,
    },
  },


  "Minimum Number of Flips to Make Binary String Alternating": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def minFlips(s):
    n = len(s)
    res = n
    for i in range(n):
        rotated = s[i:] + s[:i]
        diff1 = sum(int(rotated[j]) != j % 2 for j in range(n))
        diff2 = sum(int(rotated[j]) != (j+1) % 2 for j in range(n))
        res = min(res, diff1, diff2)
    return res`,
    },
    better: {
      name: "Double String",
      time: "O(n)",
      space: "O(n)",
      code: `def minFlips(s):
    n = len(s)
    s = s + s
    alt1 = ''.join('0' if i%2==0 else '1' for i in range(2*n))
    alt2 = ''.join('1' if i%2==0 else '0' for i in range(2*n))
    d1 = d2 = 0
    res = n
    for r in range(len(s)):
        if s[r] != alt1[r]: d1 += 1
        if s[r] != alt2[r]: d2 += 1
        if r >= n:
            if s[r-n] != alt1[r-n]: d1 -= 1
            if s[r-n] != alt2[r-n]: d2 -= 1
        if r >= n - 1: res = min(res, d1, d2)
    return res`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def minFlips(s):
    n = len(s)
    diff1 = diff2 = 0
    res = n
    for i in range(2 * n):
        idx = i % n
        c = int(s[idx])
        diff1 += c != (i % 2)
        diff2 += c != ((i + 1) % 2)
        if i >= n:
            old = int(s[(i - n) % n])
            diff1 -= old != ((i - n) % 2)
            diff2 -= old != ((i - n + 1) % 2)
        if i >= n - 1:
            res = min(res, diff1, diff2)
    return res`,
    },
  },


  "Multiply Strings": {
    brute: {
      name: "Brute Force",
      time: "O(m*n)",
      space: "O(m+n)",
      code: `def multiply(num1, num2):
    if num1 == "0" or num2 == "0": return "0"
    n1, n2 = 0, 0
    for c in num1: n1 = n1 * 10 + ord(c) - ord('0')
    for c in num2: n2 = n2 * 10 + ord(c) - ord('0')
    return str(n1 * n2)`,
    },
    better: {
      name: "Grade School Multiplication",
      time: "O(m*n)",
      space: "O(m+n)",
      code: `def multiply(num1, num2):
    if num1 == "0" or num2 == "0": return "0"
    m, n = len(num1), len(num2)
    result = [0] * (m + n)
    for i in range(m-1, -1, -1):
        for j in range(n-1, -1, -1):
            mul = (ord(num1[i])-48) * (ord(num2[j])-48)
            p1, p2 = i+j, i+j+1
            total = mul + result[p2]
            result[p2] = total % 10
            result[p1] += total // 10
    res = ''.join(map(str, result)).lstrip('0')
    return res or "0"`,
    },
    optimal: {
      name: "Optimized Array",
      time: "O(m*n)",
      space: "O(m+n)",
      code: `def multiply(num1, num2):
    if num1 == "0" or num2 == "0": return "0"
    res = [0] * (len(num1) + len(num2))
    for i, a in enumerate(reversed(num1)):
        for j, b in enumerate(reversed(num2)):
            res[i+j] += int(a) * int(b)
            res[i+j+1] += res[i+j] // 10
            res[i+j] %= 10
    while len(res) > 1 and res[-1] == 0: res.pop()
    return ''.join(map(str, reversed(res)))`,
    },
  },


  "Number of Substrings Containing All Three Characters": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def numberOfSubstrings(s):
    count = 0
    for i in range(len(s)):
        seen = set()
        for j in range(i, len(s)):
            seen.add(s[j])
            if len(seen) == 3:
                count += len(s) - j
                break
    return count`,
    },
    better: {
      name: "Last Position Tracking",
      time: "O(n)",
      space: "O(1)",
      code: `def numberOfSubstrings(s):
    last = {'a': -1, 'b': -1, 'c': -1}
    count = 0
    for i, c in enumerate(s):
        last[c] = i
        count += 1 + min(last.values())
    return count`,
    },
    optimal: {
      name: "Sliding Window",
      time: "O(n)",
      space: "O(1)",
      code: `def numberOfSubstrings(s):
    count = [0, 0, 0]
    l = res = 0
    for r in range(len(s)):
        count[ord(s[r]) - ord('a')] += 1
        while all(c > 0 for c in count):
            res += len(s) - r
            count[ord(s[l]) - ord('a')] -= 1
            l += 1
    return res`,
    },
  },


  "Palindrome Partitioning": {
    brute: {
      name: "Brute Force",
      time: "O(n * 2^n)",
      space: "O(n)",
      code: `def partition(s):
    result = []
    def backtrack(start, path):
        if start == len(s):
            result.append(path[:])
            return
        for end in range(start + 1, len(s) + 1):
            sub = s[start:end]
            if sub == sub[::-1]:
                path.append(sub)
                backtrack(end, path)
                path.pop()
    backtrack(0, [])
    return result`,
    },
    better: {
      name: "DP Precompute + Backtrack",
      time: "O(n * 2^n)",
      space: "O(n^2)",
      code: `def partition(s):
    n = len(s)
    dp = [[False]*n for _ in range(n)]
    for i in range(n-1, -1, -1):
        for j in range(i, n):
            dp[i][j] = s[i]==s[j] and (j-i<2 or dp[i+1][j-1])
    result = []
    def backtrack(start, path):
        if start == n:
            result.append(path[:])
            return
        for end in range(start, n):
            if dp[start][end]:
                path.append(s[start:end+1])
                backtrack(end+1, path)
                path.pop()
    backtrack(0, [])
    return result`,
    },
    optimal: {
      name: "Optimized Backtrack",
      time: "O(n * 2^n)",
      space: "O(n)",
      code: `def partition(s):
    result = []
    def is_pal(l, r):
        while l < r:
            if s[l] != s[r]: return False
            l += 1
            r -= 1
        return True
    def backtrack(start, path):
        if start == len(s):
            result.append(path[:])
            return
        for end in range(start, len(s)):
            if is_pal(start, end):
                path.append(s[start:end+1])
                backtrack(end+1, path)
                path.pop()
    backtrack(0, [])
    return result`,
    },
  },


  "Palindromic Substrings": {
    brute: {
      name: "Brute Force",
      time: "O(n^3)",
      space: "O(1)",
      code: `def countSubstrings(s):
    count = 0
    for i in range(len(s)):
        for j in range(i, len(s)):
            sub = s[i:j+1]
            if sub == sub[::-1]: count += 1
    return count`,
    },
    better: {
      name: "DP",
      time: "O(n^2)",
      space: "O(n^2)",
      code: `def countSubstrings(s):
    n = len(s)
    dp = [[False]*n for _ in range(n)]
    count = 0
    for i in range(n-1, -1, -1):
        for j in range(i, n):
            if s[i] == s[j] and (j-i < 2 or dp[i+1][j-1]):
                dp[i][j] = True
                count += 1
    return count`,
    },
    optimal: {
      name: "Expand Around Center",
      time: "O(n^2)",
      space: "O(1)",
      code: `def countSubstrings(s):
    count = 0
    def expand(l, r):
        nonlocal count
        while l >= 0 and r < len(s) and s[l] == s[r]:
            count += 1
            l -= 1
            r += 1
    for i in range(len(s)):
        expand(i, i)
        expand(i, i + 1)
    return count`,
    },
  },


  "Permutation in String": {
    brute: {
      name: "Brute Force",
      time: "O(n * m log m)",
      space: "O(m)",
      code: `def checkInclusion(s1, s2):
    m = len(s1)
    sorted_s1 = sorted(s1)
    for i in range(len(s2) - m + 1):
        if sorted(s2[i:i+m]) == sorted_s1:
            return True
    return False`,
    },
    better: {
      name: "Array Counter",
      time: "O(n)",
      space: "O(1)",
      code: `def checkInclusion(s1, s2):
    if len(s1) > len(s2): return False
    s1_count = [0] * 26
    s2_count = [0] * 26
    for c in s1: s1_count[ord(c)-97] += 1
    for i, c in enumerate(s2):
        s2_count[ord(c)-97] += 1
        if i >= len(s1):
            s2_count[ord(s2[i-len(s1)])-97] -= 1
        if s1_count == s2_count: return True
    return False`,
    },
    optimal: {
      name: "Sliding Window Matches",
      time: "O(n)",
      space: "O(1)",
      code: `def checkInclusion(s1, s2):
    if len(s1) > len(s2): return False
    count = [0] * 26
    for c in s1: count[ord(c)-97] -= 1
    for c in s2[:len(s1)]: count[ord(c)-97] += 1
    matches = sum(1 for x in count if x == 0)
    if matches == 26: return True
    for i in range(len(s1), len(s2)):
        idx = ord(s2[i]) - 97
        count[idx] += 1
        if count[idx] == 0: matches += 1
        elif count[idx] == 1: matches -= 1
        idx = ord(s2[i-len(s1)]) - 97
        count[idx] -= 1
        if count[idx] == 0: matches += 1
        elif count[idx] == -1: matches -= 1
        if matches == 26: return True
    return False`,
    },
  },


  "Reorganize String": {
    brute: {
      name: "Brute Force",
      time: "O(n * 26)",
      space: "O(n)",
      code: `def reorganizeString(s):
    from collections import Counter
    count = Counter(s)
    result = []
    prev = ''
    while count:
        found = False
        for c, _ in count.most_common():
            if c != prev:
                result.append(c)
                count[c] -= 1
                if count[c] == 0: del count[c]
                prev = c
                found = True
                break
        if not found: return ""
    return ''.join(result)`,
    },
    better: {
      name: "Max Heap",
      time: "O(n log 26)",
      space: "O(n)",
      code: `def reorganizeString(s):
    from collections import Counter
    import heapq
    count = Counter(s)
    heap = [(-v, k) for k, v in count.items()]
    heapq.heapify(heap)
    result = []
    prev = (0, '')
    while heap:
        cnt, ch = heapq.heappop(heap)
        result.append(ch)
        if prev[0] < 0: heapq.heappush(heap, prev)
        prev = (cnt + 1, ch)
    return ''.join(result) if len(result) == len(s) else ""`,
    },
    optimal: {
      name: "Greedy Fill",
      time: "O(n)",
      space: "O(n)",
      code: `def reorganizeString(s):
    from collections import Counter
    count = Counter(s)
    max_freq = max(count.values())
    if max_freq > (len(s) + 1) // 2: return ""
    result = [''] * len(s)
    sorted_chars = sorted(count, key=lambda x: -count[x])
    idx = 0
    for c in sorted_chars:
        for _ in range(count[c]):
            result[idx] = c
            idx += 2
            if idx >= len(s): idx = 1
    return ''.join(result)`,
    },
  },


  "Repeated DNA Sequences": {
    brute: {
      name: "Brute Force",
      time: "O(n * 10)",
      space: "O(n)",
      code: `def findRepeatedDnaSequences(s):
    seen = set()
    result = set()
    for i in range(len(s) - 9):
        sub = s[i:i+10]
        if sub in seen:
            result.add(sub)
        seen.add(sub)
    return list(result)`,
    },
    better: {
      name: "Counter",
      time: "O(n)",
      space: "O(n)",
      code: `def findRepeatedDnaSequences(s):
    from collections import Counter
    subs = [s[i:i+10] for i in range(len(s)-9)]
    count = Counter(subs)
    return [k for k, v in count.items() if v > 1]`,
    },
    optimal: {
      name: "Rolling Hash",
      time: "O(n)",
      space: "O(n)",
      code: `def findRepeatedDnaSequences(s):
    d = {'A':0,'C':1,'G':2,'T':3}
    seen, result = set(), set()
    h, base = 0, 4**9
    for i, c in enumerate(s):
        h = h * 4 + d[c]
        if i >= 10: h -= d[s[i-10]] * base * 4
        if i >= 9:
            if h in seen: result.add(s[i-9:i+1])
            seen.add(h)
    return list(result)`,
    },
  },


  "Restore IP Addresses": {
    brute: {
      name: "Brute Force",
      time: "O(n^3)",
      space: "O(1)",
      code: `def restoreIpAddresses(s):
    result = []
    n = len(s)
    for i in range(1, min(4,n)):
        for j in range(i+1, min(i+4,n)):
            for k in range(j+1, min(j+4,n)):
                parts = [s[:i],s[i:j],s[j:k],s[k:]]
                if all(len(p)<=3 and int(p)<=255 and
                       (len(p)==1 or p[0]!='0') for p in parts):
                    result.append('.'.join(parts))
    return result`,
    },
    better: {
      name: "Backtracking",
      time: "O(1)",
      space: "O(1)",
      code: `def restoreIpAddresses(s):
    result = []
    def backtrack(start, parts):
        if len(parts) == 4:
            if start == len(s): result.append('.'.join(parts))
            return
        for end in range(start+1, min(start+4, len(s)+1)):
            seg = s[start:end]
            if int(seg) <= 255 and (len(seg)==1 or seg[0]!='0'):
                backtrack(end, parts + [seg])
    backtrack(0, [])
    return result`,
    },
    optimal: {
      name: "Iterative 3 Splits",
      time: "O(1)",
      space: "O(1)",
      code: `def restoreIpAddresses(s):
    def valid(seg):
        return len(seg) <= 3 and int(seg) <= 255 and (seg=='0' or seg[0]!='0')
    result = []
    for i in range(1, 4):
        for j in range(i+1, i+4):
            for k in range(j+1, j+4):
                if k < len(s):
                    a,b,c,d = s[:i],s[i:j],s[j:k],s[k:]
                    if all(valid(x) for x in [a,b,c,d]):
                        result.append(f"{a}.{b}.{c}.{d}")
    return result`,
    },
  },


  "Reverse Integer": {
    brute: {
      name: "Brute Force",
      time: "O(log n)",
      space: "O(log n)",
      code: `def reverse(x):
    sign = -1 if x < 0 else 1
    rev = int(str(abs(x))[::-1]) * sign
    if rev < -2**31 or rev > 2**31 - 1: return 0
    return rev`,
    },
    better: {
      name: "Math (Pop and Push)",
      time: "O(log n)",
      space: "O(1)",
      code: `def reverse(x):
    sign = -1 if x < 0 else 1
    x = abs(x)
    rev = 0
    while x:
        rev = rev * 10 + x % 10
        x //= 10
    rev *= sign
    return rev if -2**31 <= rev <= 2**31 - 1 else 0`,
    },
    optimal: {
      name: "Optimized Math",
      time: "O(log n)",
      space: "O(1)",
      code: `def reverse(x):
    MAX = 2**31 - 1
    sign = -1 if x < 0 else 1
    x, rev = abs(x), 0
    while x:
        digit = x % 10
        x //= 10
        if rev > MAX // 10: return 0
        rev = rev * 10 + digit
    return rev * sign if rev <= MAX else 0`,
    },
  },


  "Reverse Words in a String": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def reverseWords(s):
    words = s.split()
    return ' '.join(words[::-1])`,
    },
    better: {
      name: "Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def reverseWords(s):
    stack = s.split()
    result = []
    while stack:
        result.append(stack.pop())
    return ' '.join(result)`,
    },
    optimal: {
      name: "Two Pointer In-Place Style",
      time: "O(n)",
      space: "O(n)",
      code: `def reverseWords(s):
    words = []
    i, n = 0, len(s)
    while i < n:
        while i < n and s[i] == ' ': i += 1
        if i < n:
            j = i
            while j < n and s[j] != ' ': j += 1
            words.append(s[i:j])
            i = j
    return ' '.join(reversed(words))`,
    },
  },


  "String to Integer (atoi)": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def myAtoi(s):
    s = s.strip()
    if not s: return 0
    sign = -1 if s[0] == '-' else 1
    start = 1 if s[0] in '+-' else 0
    digits = ''
    for c in s[start:]:
        if not c.isdigit(): break
        digits += c
    if not digits: return 0
    result = sign * int(digits)
    return max(-2**31, min(2**31 - 1, result))`,
    },
    better: {
      name: "Character by Character",
      time: "O(n)",
      space: "O(1)",
      code: `def myAtoi(s):
    i, n, sign = 0, len(s), 1
    while i < n and s[i] == ' ': i += 1
    if i < n and s[i] in '+-':
        sign = -1 if s[i] == '-' else 1
        i += 1
    result = 0
    while i < n and s[i].isdigit():
        result = result * 10 + int(s[i])
        i += 1
    result *= sign
    return max(-2**31, min(2**31 - 1, result))`,
    },
    optimal: {
      name: "Overflow Check",
      time: "O(n)",
      space: "O(1)",
      code: `def myAtoi(s):
    MAX, MIN = 2**31 - 1, -2**31
    i, n, sign, result = 0, len(s), 1, 0
    while i < n and s[i] == ' ': i += 1
    if i < n and s[i] in '+-':
        sign = -1 if s[i] == '-' else 1
        i += 1
    while i < n and s[i].isdigit():
        digit = int(s[i])
        if result > (MAX - digit) // 10:
            return MIN if sign == -1 else MAX
        result = result * 10 + digit
        i += 1
    return result * sign`,
    },
  },


  "Word Break": {
    brute: {
      name: "Brute Force (Recursion)",
      time: "O(2^n)",
      space: "O(n)",
      code: `def wordBreak(s, wordDict):
    def helper(start):
        if start == len(s): return True
        for end in range(start + 1, len(s) + 1):
            if s[start:end] in wordDict and helper(end):
                return True
        return False
    return helper(0)`,
    },
    better: {
      name: "Memoization",
      time: "O(n^2 * m)",
      space: "O(n)",
      code: `def wordBreak(s, wordDict):
    from functools import lru_cache
    words = set(wordDict)
    @lru_cache(None)
    def dp(start):
        if start == len(s): return True
        for end in range(start + 1, len(s) + 1):
            if s[start:end] in words and dp(end):
                return True
        return False
    return dp(0)`,
    },
    optimal: {
      name: "Bottom-Up DP",
      time: "O(n^2 * m)",
      space: "O(n)",
      code: `def wordBreak(s, wordDict):
    words = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in words:
                dp[i] = True
                break
    return dp[len(s)]`,
    },
  },


  "Word Search": {
    brute: {
      name: "Brute Force (DFS)",
      time: "O(m * n * 4^L)",
      space: "O(L)",
      code: `def exist(board, word):
    m, n = len(board), len(board[0])
    def dfs(i, j, k, visited):
        if k == len(word): return True
        if (i<0 or i>=m or j<0 or j>=n or
            (i,j) in visited or board[i][j] != word[k]):
            return False
        visited.add((i,j))
        for di,dj in [(0,1),(0,-1),(1,0),(-1,0)]:
            if dfs(i+di, j+dj, k+1, visited): return True
        visited.remove((i,j))
        return False
    for i in range(m):
        for j in range(n):
            if dfs(i, j, 0, set()): return True
    return False`,
    },
    better: {
      name: "DFS with In-Place Marking",
      time: "O(m * n * 4^L)",
      space: "O(L)",
      code: `def exist(board, word):
    m, n = len(board), len(board[0])
    def dfs(i, j, k):
        if k == len(word): return True
        if i<0 or i>=m or j<0 or j>=n or board[i][j]!=word[k]:
            return False
        tmp, board[i][j] = board[i][j], '#'
        found = any(dfs(i+di,j+dj,k+1) for di,dj in [(0,1),(0,-1),(1,0),(-1,0)])
        board[i][j] = tmp
        return found
    for i in range(m):
        for j in range(n):
            if dfs(i, j, 0): return True
    return False`,
    },
    optimal: {
      name: "Optimized DFS with Pruning",
      time: "O(m * n * 4^L)",
      space: "O(L)",
      code: `def exist(board, word):
    from collections import Counter
    m, n = len(board), len(board[0])
    count = Counter(c for row in board for c in row)
    for c in word:
        if count[c] == 0: return False
    if count[word[0]] > count[word[-1]]: word = word[::-1]
    def dfs(i, j, k):
        if k == len(word): return True
        if i<0 or i>=m or j<0 or j>=n or board[i][j]!=word[k]:
            return False
        board[i][j] = '#'
        res = any(dfs(i+d,j+e,k+1) for d,e in [(0,1),(0,-1),(1,0),(-1,0)])
        board[i][j] = word[k]
        return res
    for i in range(m):
        for j in range(n):
            if dfs(i,j,0): return True
    return False`,
    },
  },


  "ZigZag Conversion": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def convert(s, numRows):
    if numRows == 1: return s
    rows = [''] * numRows
    cur_row, going_down = 0, False
    for c in s:
        rows[cur_row] += c
        if cur_row == 0 or cur_row == numRows - 1:
            going_down = not going_down
        cur_row += 1 if going_down else -1
    return ''.join(rows)`,
    },
    better: {
      name: "Visit by Row",
      time: "O(n)",
      space: "O(n)",
      code: `def convert(s, numRows):
    if numRows == 1: return s
    cycle = 2 * numRows - 2
    result = []
    for row in range(numRows):
        for i in range(row, len(s), cycle):
            result.append(s[i])
            diag = i + cycle - 2 * row
            if 0 < row < numRows-1 and diag < len(s):
                result.append(s[diag])
    return ''.join(result)`,
    },
    optimal: {
      name: "Math Index",
      time: "O(n)",
      space: "O(1)",
      code: `def convert(s, numRows):
    if numRows == 1 or numRows >= len(s): return s
    cycle = 2 * numRows - 2
    res = []
    for r in range(numRows):
        for i in range(r, len(s), cycle):
            res.append(s[i])
            mid = i + cycle - 2 * r
            if r != 0 and r != numRows - 1 and mid < len(s):
                res.append(s[mid])
    return ''.join(res)`,
    },
  },


  "Contains Duplicate II": {
    brute: {
      name: "Brute Force",
      time: "O(n * k)",
      space: "O(1)",
      code: `def containsNearbyDuplicate(nums, k):
    for i in range(len(nums)):
        for j in range(i+1, min(i+k+1, len(nums))):
            if nums[i] == nums[j]: return True
    return False`,
    },
    better: {
      name: "HashSet Sliding Window",
      time: "O(n)",
      space: "O(k)",
      code: `def containsNearbyDuplicate(nums, k):
    window = set()
    for i, num in enumerate(nums):
        if num in window: return True
        window.add(num)
        if len(window) > k:
            window.remove(nums[i - k])
    return False`,
    },
    optimal: {
      name: "HashMap",
      time: "O(n)",
      space: "O(n)",
      code: `def containsNearbyDuplicate(nums, k):
    last_seen = {}
    for i, num in enumerate(nums):
        if num in last_seen and i - last_seen[num] <= k:
            return True
        last_seen[num] = i
    return False`,
    },
  },


  "Count Good Pairs": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def numIdenticalPairs(nums):
    count = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] == nums[j]: count += 1
    return count`,
    },
    better: {
      name: "Counter Math",
      time: "O(n)",
      space: "O(n)",
      code: `def numIdenticalPairs(nums):
    from collections import Counter
    count = Counter(nums)
    return sum(v * (v-1) // 2 for v in count.values())`,
    },
    optimal: {
      name: "Running Count",
      time: "O(n)",
      space: "O(n)",
      code: `def numIdenticalPairs(nums):
    count = {}
    result = 0
    for num in nums:
        result += count.get(num, 0)
        count[num] = count.get(num, 0) + 1
    return result`,
    },
  },


  "Design HashMap": {
    brute: {
      name: "Brute Force (Array)",
      time: "O(1)",
      space: "O(10^6)",
      code: `class MyHashMap:
    def __init__(self):
        self.data = [-1] * 1000001
    def put(self, key, value):
        self.data[key] = value
    def get(self, key):
        return self.data[key]
    def remove(self, key):
        self.data[key] = -1`,
    },
    better: {
      name: "Chaining (List of Lists)",
      time: "O(n/k)",
      space: "O(n + k)",
      code: `class MyHashMap:
    def __init__(self):
        self.size = 1000
        self.buckets = [[] for _ in range(self.size)]
    def put(self, key, value):
        bucket = self.buckets[key % self.size]
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        bucket.append((key, value))
    def get(self, key):
        for k, v in self.buckets[key % self.size]:
            if k == key: return v
        return -1
    def remove(self, key):
        bucket = self.buckets[key % self.size]
        self.buckets[key%self.size] = [(k,v) for k,v in bucket if k!=key]`,
    },
    optimal: {
      name: "Chaining (Linked List)",
      time: "O(n/k)",
      space: "O(n + k)",
      code: `class ListNode:
    def __init__(self, key=-1, val=-1, nxt=None):
        self.key, self.val, self.next = key, val, nxt

class MyHashMap:
    def __init__(self):
        self.size = 1000
        self.buckets = [ListNode() for _ in range(self.size)]
    def put(self, key, value):
        cur = self.buckets[key % self.size]
        while cur.next:
            if cur.next.key == key:
                cur.next.val = value
                return
            cur = cur.next
        cur.next = ListNode(key, value)
    def get(self, key):
        cur = self.buckets[key % self.size].next
        while cur:
            if cur.key == key: return cur.val
            cur = cur.next
        return -1
    def remove(self, key):
        cur = self.buckets[key % self.size]
        while cur.next:
            if cur.next.key == key:
                cur.next = cur.next.next
                return
            cur = cur.next`,
    },
  },


  "Design HashSet": {
    brute: {
      name: "Brute Force (Boolean Array)",
      time: "O(1)",
      space: "O(10^6)",
      code: `class MyHashSet:
    def __init__(self):
        self.data = [False] * 1000001
    def add(self, key):
        self.data[key] = True
    def remove(self, key):
        self.data[key] = False
    def contains(self, key):
        return self.data[key]`,
    },
    better: {
      name: "Chaining (List of Lists)",
      time: "O(n/k)",
      space: "O(n + k)",
      code: `class MyHashSet:
    def __init__(self):
        self.size = 1000
        self.buckets = [[] for _ in range(self.size)]
    def add(self, key):
        bucket = self.buckets[key % self.size]
        if key not in bucket:
            bucket.append(key)
    def remove(self, key):
        bucket = self.buckets[key % self.size]
        if key in bucket:
            bucket.remove(key)
    def contains(self, key):
        return key in self.buckets[key % self.size]`,
    },
    optimal: {
      name: "Linked List Chaining",
      time: "O(n/k)",
      space: "O(n + k)",
      code: `class ListNode:
    def __init__(self, val=-1, nxt=None):
        self.val, self.next = val, nxt

class MyHashSet:
    def __init__(self):
        self.size = 1000
        self.buckets = [ListNode() for _ in range(self.size)]
    def add(self, key):
        cur = self.buckets[key % self.size]
        while cur.next:
            if cur.next.val == key: return
            cur = cur.next
        cur.next = ListNode(key)
    def remove(self, key):
        cur = self.buckets[key % self.size]
        while cur.next:
            if cur.next.val == key:
                cur.next = cur.next.next
                return
            cur = cur.next
    def contains(self, key):
        cur = self.buckets[key % self.size].next
        while cur:
            if cur.val == key: return True
            cur = cur.next
        return False`,
    },
  },


  "Find Common Characters": {
    brute: {
      name: "Brute Force",
      time: "O(n * m)",
      space: "O(m)",
      code: `def commonChars(words):
    result = []
    for c in set(words[0]):
        min_count = min(word.count(c) for word in words)
        result.extend([c] * min_count)
    return result`,
    },
    better: {
      name: "Counter Intersection",
      time: "O(n * m)",
      space: "O(1)",
      code: `def commonChars(words):
    from collections import Counter
    common = Counter(words[0])
    for word in words[1:]:
        common &= Counter(word)
    return list(common.elements())`,
    },
    optimal: {
      name: "Array Count",
      time: "O(n * m)",
      space: "O(1)",
      code: `def commonChars(words):
    min_freq = [float('inf')] * 26
    for word in words:
        freq = [0] * 26
        for c in word: freq[ord(c)-97] += 1
        for i in range(26): min_freq[i] = min(min_freq[i], freq[i])
    result = []
    for i in range(26):
        result.extend([chr(i+97)] * min_freq[i])
    return result`,
    },
  },


  "Happy Number": {
    brute: {
      name: "Brute Force (HashSet)",
      time: "O(log n)",
      space: "O(log n)",
      code: `def isHappy(n):
    seen = set()
    while n != 1:
        n = sum(int(d)**2 for d in str(n))
        if n in seen: return False
        seen.add(n)
    return True`,
    },
    better: {
      name: "Limit Iterations",
      time: "O(log n)",
      space: "O(1)",
      code: `def isHappy(n):
    def get_next(num):
        total = 0
        while num:
            num, d = divmod(num, 10)
            total += d * d
        return total
    for _ in range(100):
        n = get_next(n)
        if n == 1: return True
    return False`,
    },
    optimal: {
      name: "Floyd's Cycle Detection",
      time: "O(log n)",
      space: "O(1)",
      code: `def isHappy(n):
    def get_next(num):
        total = 0
        while num:
            num, d = divmod(num, 10)
            total += d * d
        return total
    slow, fast = n, get_next(n)
    while fast != 1 and slow != fast:
        slow = get_next(slow)
        fast = get_next(get_next(fast))
    return fast == 1`,
    },
  },


  "Intersection of Two Arrays": {
    brute: {
      name: "Brute Force",
      time: "O(m * n)",
      space: "O(min(m,n))",
      code: `def intersection(nums1, nums2):
    result = set()
    for num in nums1:
        if num in nums2:
            result.add(num)
    return list(result)`,
    },
    better: {
      name: "Sort + Two Pointers",
      time: "O(m log m + n log n)",
      space: "O(1)",
      code: `def intersection(nums1, nums2):
    nums1.sort()
    nums2.sort()
    result = set()
    i = j = 0
    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]: i += 1
        elif nums1[i] > nums2[j]: j += 1
        else:
            result.add(nums1[i])
            i += 1
            j += 1
    return list(result)`,
    },
    optimal: {
      name: "HashSet",
      time: "O(m + n)",
      space: "O(m + n)",
      code: `def intersection(nums1, nums2):
    return list(set(nums1) & set(nums2))`,
    },
  },


  "Intersection of Two Arrays II": {
    brute: {
      name: "Brute Force",
      time: "O(m * n)",
      space: "O(min(m,n))",
      code: `def intersect(nums1, nums2):
    result = []
    nums2_copy = nums2[:]
    for num in nums1:
        if num in nums2_copy:
            result.append(num)
            nums2_copy.remove(num)
    return result`,
    },
    better: {
      name: "Sort + Two Pointers",
      time: "O(m log m + n log n)",
      space: "O(1)",
      code: `def intersect(nums1, nums2):
    nums1.sort()
    nums2.sort()
    result = []
    i = j = 0
    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]: i += 1
        elif nums1[i] > nums2[j]: j += 1
        else:
            result.append(nums1[i])
            i += 1
            j += 1
    return result`,
    },
    optimal: {
      name: "HashMap",
      time: "O(m + n)",
      space: "O(min(m,n))",
      code: `def intersect(nums1, nums2):
    from collections import Counter
    count = Counter(nums1)
    result = []
    for num in nums2:
        if count[num] > 0:
            result.append(num)
            count[num] -= 1
    return result`,
    },
  },


  "Isomorphic Strings": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def isIsomorphic(s, t):
    for i in range(len(s)):
        for j in range(i+1, len(s)):
            if (s[i] == s[j]) != (t[i] == t[j]):
                return False
    return True`,
    },
    better: {
      name: "Two HashMaps",
      time: "O(n)",
      space: "O(n)",
      code: `def isIsomorphic(s, t):
    s_to_t, t_to_s = {}, {}
    for c1, c2 in zip(s, t):
        if c1 in s_to_t and s_to_t[c1] != c2: return False
        if c2 in t_to_s and t_to_s[c2] != c1: return False
        s_to_t[c1] = c2
        t_to_s[c2] = c1
    return True`,
    },
    optimal: {
      name: "Index Mapping",
      time: "O(n)",
      space: "O(1)",
      code: `def isIsomorphic(s, t):
    return len(set(zip(s, t))) == len(set(s)) == len(set(t))`,
    },
  },


  "Number of Good Pairs": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def numIdenticalPairs(nums):
    count = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] == nums[j]: count += 1
    return count`,
    },
    better: {
      name: "Counter Formula",
      time: "O(n)",
      space: "O(n)",
      code: `def numIdenticalPairs(nums):
    from collections import Counter
    return sum(v*(v-1)//2 for v in Counter(nums).values())`,
    },
    optimal: {
      name: "Running Count",
      time: "O(n)",
      space: "O(n)",
      code: `def numIdenticalPairs(nums):
    seen = {}
    result = 0
    for num in nums:
        result += seen.get(num, 0)
        seen[num] = seen.get(num, 0) + 1
    return result`,
    },
  },


  "Ransom Note": {
    brute: {
      name: "Brute Force",
      time: "O(m * n)",
      space: "O(n)",
      code: `def canConstruct(ransomNote, magazine):
    mag = list(magazine)
    for c in ransomNote:
        if c in mag:
            mag.remove(c)
        else:
            return False
    return True`,
    },
    better: {
      name: "Counter",
      time: "O(m + n)",
      space: "O(1)",
      code: `def canConstruct(ransomNote, magazine):
    from collections import Counter
    return not (Counter(ransomNote) - Counter(magazine))`,
    },
    optimal: {
      name: "Array Count",
      time: "O(m + n)",
      space: "O(1)",
      code: `def canConstruct(ransomNote, magazine):
    count = [0] * 26
    for c in magazine: count[ord(c)-97] += 1
    for c in ransomNote:
        count[ord(c)-97] -= 1
        if count[ord(c)-97] < 0: return False
    return True`,
    },
  },


  "Two Sum": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
    },
    better: {
      name: "Sort + Two Pointers",
      time: "O(n log n)",
      space: "O(n)",
      code: `def twoSum(nums, target):
    indexed = sorted(enumerate(nums), key=lambda x: x[1])
    l, r = 0, len(indexed) - 1
    while l < r:
        total = indexed[l][1] + indexed[r][1]
        if total == target: return [indexed[l][0], indexed[r][0]]
        elif total < target: l += 1
        else: r -= 1
    return []`,
    },
    optimal: {
      name: "HashMap",
      time: "O(n)",
      space: "O(n)",
      code: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        comp = target - num
        if comp in seen: return [seen[comp], i]
        seen[num] = i
    return []`,
    },
  },




  "Unique Email Addresses": {
    brute: {
      name: "Brute Force",
      time: "O(n * m)",
      space: "O(n * m)",
      code: `def numUniqueEmails(emails):
    unique = set()
    for email in emails:
        local, domain = email.split('@')
        local = local.split('+')[0].replace('.', '')
        unique.add(local + '@' + domain)
    return len(unique)`,
    },
    better: {
      name: "Manual Parsing",
      time: "O(n * m)",
      space: "O(n * m)",
      code: `def numUniqueEmails(emails):
    unique = set()
    for email in emails:
        local, domain = email.split('@')
        cleaned = []
        for c in local:
            if c == '+': break
            if c != '.': cleaned.append(c)
        unique.add(''.join(cleaned) + '@' + domain)
    return len(unique)`,
    },
    optimal: {
      name: "Set with Generator",
      time: "O(n * m)",
      space: "O(n * m)",
      code: `def numUniqueEmails(emails):
    def clean(email):
        local, domain = email.split('@')
        local = local.split('+')[0].replace('.', '')
        return f"{local}@{domain}"
    return len(set(clean(e) for e in emails))`,
    },
  },




  "Valid Anagram": {
    brute: {
      name: "Brute Force",
      time: "O(n log n)",
      space: "O(n)",
      code: `def isAnagram(s, t):
    return sorted(s) == sorted(t)`,
    },
    better: {
      name: "Counter Comparison",
      time: "O(n)",
      space: "O(1)",
      code: `def isAnagram(s, t):
    from collections import Counter
    return Counter(s) == Counter(t)`,
    },
    optimal: {
      name: "Array Count",
      time: "O(n)",
      space: "O(1)",
      code: `def isAnagram(s, t):
    if len(s) != len(t): return False
    count = [0] * 26
    for a, b in zip(s, t):
        count[ord(a)-97] += 1
        count[ord(b)-97] -= 1
    return all(c == 0 for c in count)`,
    },
  },




  "Word Pattern": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def wordPattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words): return False
    for i in range(len(pattern)):
        for j in range(i+1, len(pattern)):
            if (pattern[i]==pattern[j]) != (words[i]==words[j]):
                return False
    return True`,
    },
    better: {
      name: "Two HashMaps",
      time: "O(n)",
      space: "O(n)",
      code: `def wordPattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words): return False
    p2w, w2p = {}, {}
    for p, w in zip(pattern, words):
        if p in p2w and p2w[p] != w: return False
        if w in w2p and w2p[w] != p: return False
        p2w[p], w2p[w] = w, p
    return True`,
    },
    optimal: {
      name: "Index Mapping",
      time: "O(n)",
      space: "O(n)",
      code: `def wordPattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words): return False
    return (len(set(zip(pattern, words))) ==
            len(set(pattern)) == len(set(words)))`,
    },
  },




  "Contains Duplicate III": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff):
    for i in range(len(nums)):
        for j in range(i+1, min(i+indexDiff+1, len(nums))):
            if abs(nums[i] - nums[j]) <= valueDiff:
                return True
    return False`,
    },
    better: {
      name: "Sorted Container",
      time: "O(n log k)",
      space: "O(k)",
      code: `def containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff):
    from sortedcontainers import SortedList
    sl = SortedList()
    for i, num in enumerate(nums):
        if i > indexDiff: sl.remove(nums[i-indexDiff-1])
        pos = sl.bisect_left(num - valueDiff)
        if pos < len(sl) and sl[pos] <= num + valueDiff:
            return True
        sl.add(num)
    return False`,
    },
    optimal: {
      name: "Bucket Sort",
      time: "O(n)",
      space: "O(k)",
      code: `def containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff):
    if valueDiff < 0: return False
    buckets = {}
    w = valueDiff + 1
    for i, num in enumerate(nums):
        b = num // w
        if b in buckets: return True
        if b-1 in buckets and abs(num - buckets[b-1]) <= valueDiff: return True
        if b+1 in buckets and abs(num - buckets[b+1]) <= valueDiff: return True
        buckets[b] = num
        if i >= indexDiff: del buckets[nums[i-indexDiff] // w]
    return False`,
    },
  },




  "4Sum II": {
    brute: {
      name: "Brute Force",
      time: "O(n^4)",
      space: "O(1)",
      code: `def fourSumCount(nums1, nums2, nums3, nums4):
    count = 0
    for a in nums1:
        for b in nums2:
            for c in nums3:
                for d in nums4:
                    if a+b+c+d == 0: count += 1
    return count`,
    },
    better: {
      name: "Three Loops + Set",
      time: "O(n^3)",
      space: "O(n)",
      code: `def fourSumCount(nums1, nums2, nums3, nums4):
    from collections import Counter
    d4 = Counter(nums4)
    count = 0
    for a in nums1:
        for b in nums2:
            for c in nums3:
                count += d4.get(-(a+b+c), 0)
    return count`,
    },
    optimal: {
      name: "Two-Sum Pairs",
      time: "O(n^2)",
      space: "O(n^2)",
      code: `def fourSumCount(nums1, nums2, nums3, nums4):
    from collections import Counter
    ab = Counter(a+b for a in nums1 for b in nums2)
    return sum(ab.get(-(c+d), 0) for c in nums3 for d in nums4)`,
    },
  },




  "Brick Wall": {
    brute: {
      name: "Brute Force",
      time: "O(n * w)",
      space: "O(w)",
      code: `def leastBricks(wall):
    width = sum(wall[0])
    min_cross = len(wall)
    for pos in range(1, width):
        cross = 0
        for row in wall:
            s = 0
            for b in row:
                s += b
                if s == pos: break
            else: cross += 1
            if s != pos: cross += 0
        min_cross = min(min_cross, cross)
    return min_cross`,
    },
    better: {
      name: "Edge Counter",
      time: "O(n * m)",
      space: "O(n * m)",
      code: `def leastBricks(wall):
    from collections import Counter
    edges = Counter()
    for row in wall:
        pos = 0
        for b in row[:-1]:
            pos += b
            edges[pos] += 1
    return len(wall) - max(edges.values(), default=0)`,
    },
    optimal: {
      name: "HashMap (Concise)",
      time: "O(n * m)",
      space: "O(n * m)",
      code: `def leastBricks(wall):
    edges = {}
    for row in wall:
        pos = 0
        for b in row[:-1]:
            pos += b
            edges[pos] = edges.get(pos, 0) + 1
    return len(wall) - max(edges.values(), default=0)`,
    },
  },




  "Continuous Subarray Sum": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def checkSubarraySum(nums, k):
    for i in range(len(nums)):
        total = 0
        for j in range(i, len(nums)):
            total += nums[j]
            if j - i >= 1 and total % k == 0:
                return True
    return False`,
    },
    better: {
      name: "Prefix Sum Mod",
      time: "O(n)",
      space: "O(min(n, k))",
      code: `def checkSubarraySum(nums, k):
    remainder_map = {0: -1}
    prefix = 0
    for i, num in enumerate(nums):
        prefix += num
        rem = prefix % k
        if rem in remainder_map:
            if i - remainder_map[rem] >= 2: return True
        else:
            remainder_map[rem] = i
    return False`,
    },
    optimal: {
      name: "HashMap First Occurrence",
      time: "O(n)",
      space: "O(min(n, k))",
      code: `def checkSubarraySum(nums, k):
    seen = {0: -1}
    prefix = 0
    for i, num in enumerate(nums):
        prefix = (prefix + num) % k
        if prefix in seen:
            if i - seen[prefix] > 1: return True
        else:
            seen[prefix] = i
    return False`,
    },
  },




  "Find Duplicate File in System": {
    brute: {
      name: "Brute Force",
      time: "O(n^2 * m)",
      space: "O(n * m)",
      code: `def findDuplicate(paths):
    files = []
    for path in paths:
        parts = path.split()
        root = parts[0]
        for f in parts[1:]:
            name, content = f.split('(')
            files.append((root + '/' + name, content[:-1]))
    result = []
    used = set()
    for i in range(len(files)):
        if i in used: continue
        group = [files[i][0]]
        for j in range(i+1, len(files)):
            if files[j][1] == files[i][1]:
                group.append(files[j][0])
                used.add(j)
        if len(group) > 1: result.append(group)
    return result`,
    },
    better: {
      name: "HashMap Grouping",
      time: "O(n * m)",
      space: "O(n * m)",
      code: `def findDuplicate(paths):
    from collections import defaultdict
    content_map = defaultdict(list)
    for path in paths:
        parts = path.split()
        root = parts[0]
        for f in parts[1:]:
            name, content = f.split('(')
            content_map[content[:-1]].append(root + '/' + name)
    return [v for v in content_map.values() if len(v) > 1]`,
    },
    optimal: {
      name: "Dict Comprehension",
      time: "O(n * m)",
      space: "O(n * m)",
      code: `def findDuplicate(paths):
    groups = {}
    for path in paths:
        parts = path.split()
        root = parts[0]
        for f in parts[1:]:
            name, content = f.split('(')
            key = content[:-1]
            groups.setdefault(key, []).append(f"{root}/{name}")
    return [v for v in groups.values() if len(v) > 1]`,
    },
  },




  "Group Anagrams": {
    brute: {
      name: "Brute Force",
      time: "O(n^2 * m log m)",
      space: "O(n * m)",
      code: `def groupAnagrams(strs):
    used = [False] * len(strs)
    result = []
    for i in range(len(strs)):
        if used[i]: continue
        group = [strs[i]]
        for j in range(i+1, len(strs)):
            if not used[j] and sorted(strs[i]) == sorted(strs[j]):
                group.append(strs[j])
                used[j] = True
        result.append(group)
    return result`,
    },
    better: {
      name: "Sort Key HashMap",
      time: "O(n * m log m)",
      space: "O(n * m)",
      code: `def groupAnagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)
    for s in strs:
        groups[tuple(sorted(s))].append(s)
    return list(groups.values())`,
    },
    optimal: {
      name: "Count Key HashMap",
      time: "O(n * m)",
      space: "O(n * m)",
      code: `def groupAnagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)
    for s in strs:
        count = [0] * 26
        for c in s: count[ord(c)-97] += 1
        groups[tuple(count)].append(s)
    return list(groups.values())`,
    },
  },




  "Insert Delete GetRandom O(1)": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `class RandomizedSet:
    def __init__(self): self.data = []
    def insert(self, val):
        if val in self.data: return False
        self.data.append(val)
        return True
    def remove(self, val):
        if val not in self.data: return False
        self.data.remove(val)
        return True
    def getRandom(self):
        import random
        return random.choice(self.data)`,
    },
    better: {
      name: "Set + List",
      time: "O(1) avg",
      space: "O(n)",
      code: `class RandomizedSet:
    def __init__(self):
        self.s = set()
        self.lst = []
    def insert(self, val):
        if val in self.s: return False
        self.s.add(val)
        self.lst.append(val)
        return True
    def remove(self, val):
        if val not in self.s: return False
        self.s.remove(val)
        self.lst.remove(val)
        return True
    def getRandom(self):
        import random
        return random.choice(self.lst)`,
    },
    optimal: {
      name: "HashMap + List Swap",
      time: "O(1)",
      space: "O(n)",
      code: `class RandomizedSet:
    def __init__(self):
        self.d = {}
        self.lst = []
    def insert(self, val):
        if val in self.d: return False
        self.d[val] = len(self.lst)
        self.lst.append(val)
        return True
    def remove(self, val):
        if val not in self.d: return False
        idx, last = self.d[val], self.lst[-1]
        self.lst[idx], self.d[last] = last, idx
        self.lst.pop()
        del self.d[val]
        return True
    def getRandom(self):
        import random
        return random.choice(self.lst)`,
    },
  },




  "LRU Cache": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(capacity)",
      code: `class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = []
    def get(self, key):
        for i, (k, v) in enumerate(self.cache):
            if k == key:
                self.cache.append(self.cache.pop(i))
                return v
        return -1
    def put(self, key, value):
        for i, (k, v) in enumerate(self.cache):
            if k == key:
                self.cache.pop(i)
                break
        self.cache.append((key, value))
        if len(self.cache) > self.cap: self.cache.pop(0)`,
    },
    better: {
      name: "OrderedDict",
      time: "O(1)",
      space: "O(capacity)",
      code: `from collections import OrderedDict
class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.cap = capacity
    def get(self, key):
        if key not in self.cache: return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    def put(self, key, value):
        if key in self.cache: self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)`,
    },
    optimal: {
      name: "Doubly Linked List + HashMap",
      time: "O(1)",
      space: "O(capacity)",
      code: `class Node:
    def __init__(self, k=0, v=0):
        self.key, self.val, self.prev, self.next = k, v, None, None
class LRUCache:
    def __init__(self, capacity):
        self.cap, self.d = capacity, {}
        self.head, self.tail = Node(), Node()
        self.head.next, self.tail.prev = self.tail, self.head
    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev
    def _add(self, node):
        node.prev, node.next = self.tail.prev, self.tail
        self.tail.prev.next = self.tail.prev = node
    def get(self, key):
        if key not in self.d: return -1
        self._remove(self.d[key]); self._add(self.d[key])
        return self.d[key].val
    def put(self, key, value):
        if key in self.d: self._remove(self.d[key])
        node = Node(key, value); self._add(node); self.d[key] = node
        if len(self.d) > self.cap:
            lru = self.head.next; self._remove(lru); del self.d[lru.key]`,
    },
  },




  "Longest Consecutive Sequence": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def longestConsecutive(nums):
    res = 0
    for num in nums:
        cur, streak = num, 1
        while cur + 1 in nums:
            cur += 1
            streak += 1
        res = max(res, streak)
    return res`,
    },
    better: {
      name: "Sort",
      time: "O(n log n)",
      space: "O(1)",
      code: `def longestConsecutive(nums):
    if not nums: return 0
    nums.sort()
    res = cur = 1
    for i in range(1, len(nums)):
        if nums[i] == nums[i-1]: continue
        if nums[i] == nums[i-1] + 1: cur += 1
        else: cur = 1
        res = max(res, cur)
    return res`,
    },
    optimal: {
      name: "HashSet Sequence Start",
      time: "O(n)",
      space: "O(n)",
      code: `def longestConsecutive(nums):
    num_set = set(nums)
    res = 0
    for num in num_set:
        if num - 1 not in num_set:
            cur = num
            while cur + 1 in num_set: cur += 1
            res = max(res, cur - num + 1)
    return res`,
    },
  },




  "Maximum Size Subarray Sum Equals k": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def maxSubArrayLen(nums, k):
    res = 0
    for i in range(len(nums)):
        total = 0
        for j in range(i, len(nums)):
            total += nums[j]
            if total == k:
                res = max(res, j - i + 1)
    return res`,
    },
    better: {
      name: "Prefix Sum HashMap",
      time: "O(n)",
      space: "O(n)",
      code: `def maxSubArrayLen(nums, k):
    prefix_map = {0: -1}
    prefix = res = 0
    for i, num in enumerate(nums):
        prefix += num
        if prefix - k in prefix_map:
            res = max(res, i - prefix_map[prefix - k])
        if prefix not in prefix_map:
            prefix_map[prefix] = i
    return res`,
    },
    optimal: {
      name: "HashMap First Index",
      time: "O(n)",
      space: "O(n)",
      code: `def maxSubArrayLen(nums, k):
    seen = {0: -1}
    total = res = 0
    for i, num in enumerate(nums):
        total += num
        if total - k in seen:
            res = max(res, i - seen[total - k])
        seen.setdefault(total, i)
    return res`,
    },
  },




  "Subarray Sum Divisible by K": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def subarraysDivByK(nums, k):
    count = 0
    for i in range(len(nums)):
        total = 0
        for j in range(i, len(nums)):
            total += nums[j]
            if total % k == 0: count += 1
    return count`,
    },
    better: {
      name: "Prefix Sum Mod Count",
      time: "O(n)",
      space: "O(k)",
      code: `def subarraysDivByK(nums, k):
    from collections import Counter
    count = Counter({0: 1})
    prefix = res = 0
    for num in nums:
        prefix = (prefix + num) % k
        res += count[prefix]
        count[prefix] += 1
    return res`,
    },
    optimal: {
      name: "Array Mod Count",
      time: "O(n)",
      space: "O(k)",
      code: `def subarraysDivByK(nums, k):
    mods = [0] * k
    mods[0] = 1
    prefix = res = 0
    for num in nums:
        prefix = (prefix + num) % k
        res += mods[prefix]
        mods[prefix] += 1
    return res`,
    },
  },




  "Subarray Sum Equals K": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def subarraySum(nums, k):
    count = 0
    for i in range(len(nums)):
        total = 0
        for j in range(i, len(nums)):
            total += nums[j]
            if total == k: count += 1
    return count`,
    },
    better: {
      name: "Prefix Sum Array",
      time: "O(n^2)",
      space: "O(n)",
      code: `def subarraySum(nums, k):
    prefix = [0] * (len(nums) + 1)
    for i in range(len(nums)):
        prefix[i+1] = prefix[i] + nums[i]
    count = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)+1):
            if prefix[j] - prefix[i] == k: count += 1
    return count`,
    },
    optimal: {
      name: "Prefix Sum HashMap",
      time: "O(n)",
      space: "O(n)",
      code: `def subarraySum(nums, k):
    count = prefix = 0
    seen = {0: 1}
    for num in nums:
        prefix += num
        count += seen.get(prefix - k, 0)
        seen[prefix] = seen.get(prefix, 0) + 1
    return count`,
    },
  },




  "Top K Frequent Elements": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def topKFrequent(nums, k):
    from collections import Counter
    count = Counter(nums)
    result = sorted(count.keys(), key=lambda x: -count[x])
    return result[:k]`,
    },
    better: {
      name: "Min Heap",
      time: "O(n log k)",
      space: "O(n)",
      code: `def topKFrequent(nums, k):
    from collections import Counter
    import heapq
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)`,
    },
    optimal: {
      name: "Bucket Sort",
      time: "O(n)",
      space: "O(n)",
      code: `def topKFrequent(nums, k):
    from collections import Counter
    count = Counter(nums)
    buckets = [[] for _ in range(len(nums)+1)]
    for num, freq in count.items():
        buckets[freq].append(num)
    result = []
    for i in range(len(buckets)-1, -1, -1):
        result.extend(buckets[i])
        if len(result) >= k: return result[:k]
    return result[:k]`,
    },
  },




  "Binary Search": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(1)",
      code: `def search(nums, target):
    for i in range(len(nums)):
        if nums[i] == target: return i
    return -1`,
    },
    better: {
      name: "Iterative Binary Search",
      time: "O(log n)",
      space: "O(1)",
      code: `def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        elif nums[mid] < target: l = mid + 1
        else: r = mid - 1
    return -1`,
    },
    optimal: {
      name: "Recursive Binary Search",
      time: "O(log n)",
      space: "O(log n)",
      code: `def search(nums, target):
    def bs(l, r):
        if l > r: return -1
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        elif nums[mid] < target: return bs(mid+1, r)
        else: return bs(l, mid-1)
    return bs(0, len(nums)-1)`,
    },
  },




  "First Bad Version": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(1)",
      code: `def firstBadVersion(n):
    for i in range(1, n+1):
        if isBadVersion(i): return i`,
    },
    better: {
      name: "Binary Search",
      time: "O(log n)",
      space: "O(1)",
      code: `def firstBadVersion(n):
    l, r = 1, n
    while l < r:
        mid = (l + r) // 2
        if isBadVersion(mid): r = mid
        else: l = mid + 1
    return l`,
    },
    optimal: {
      name: "Binary Search (Bit Shift)",
      time: "O(log n)",
      space: "O(1)",
      code: `def firstBadVersion(n):
    l, r = 1, n
    while l < r:
        mid = l + (r - l) // 2
        if isBadVersion(mid): r = mid
        else: l = mid + 1
    return l`,
    },
  },




  "Guess Number Higher or Lower": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(1)",
      code: `def guessNumber(n):
    for i in range(1, n+1):
        if guess(i) == 0: return i`,
    },
    better: {
      name: "Binary Search",
      time: "O(log n)",
      space: "O(1)",
      code: `def guessNumber(n):
    l, r = 1, n
    while l <= r:
        mid = (l + r) // 2
        res = guess(mid)
        if res == 0: return mid
        elif res == -1: r = mid - 1
        else: l = mid + 1`,
    },
    optimal: {
      name: "Binary Search (Overflow Safe)",
      time: "O(log n)",
      space: "O(1)",
      code: `def guessNumber(n):
    l, r = 1, n
    while l <= r:
        mid = l + (r - l) // 2
        g = guess(mid)
        if g == 0: return mid
        elif g == -1: r = mid - 1
        else: l = mid + 1`,
    },
  },




  "Merge Sorted Array": {
    brute: {
      name: "Brute Force",
      time: "O((m+n) log(m+n))",
      space: "O(1)",
      code: `def merge(nums1, m, nums2, n):
    nums1[m:] = nums2
    nums1.sort()`,
    },
    better: {
      name: "Extra Array",
      time: "O(m+n)",
      space: "O(m)",
      code: `def merge(nums1, m, nums2, n):
    copy = nums1[:m]
    i = j = k = 0
    while i < m and j < n:
        if copy[i] <= nums2[j]:
            nums1[k] = copy[i]; i += 1
        else:
            nums1[k] = nums2[j]; j += 1
        k += 1
    while i < m: nums1[k] = copy[i]; i += 1; k += 1
    while j < n: nums1[k] = nums2[j]; j += 1; k += 1`,
    },
    optimal: {
      name: "Merge from End",
      time: "O(m+n)",
      space: "O(1)",
      code: `def merge(nums1, m, nums2, n):
    i, j, k = m-1, n-1, m+n-1
    while j >= 0:
        if i >= 0 and nums1[i] > nums2[j]:
            nums1[k] = nums1[i]; i -= 1
        else:
            nums1[k] = nums2[j]; j -= 1
        k -= 1`,
    },
  },




  "Sqrt(x)": {
    brute: {
      name: "Brute Force",
      time: "O(sqrt(x))",
      space: "O(1)",
      code: `def mySqrt(x):
    i = 0
    while i * i <= x:
        i += 1
    return i - 1`,
    },
    better: {
      name: "Binary Search",
      time: "O(log x)",
      space: "O(1)",
      code: `def mySqrt(x):
    l, r = 0, x
    while l <= r:
        mid = (l + r) // 2
        if mid * mid <= x < (mid+1)*(mid+1): return mid
        elif mid * mid > x: r = mid - 1
        else: l = mid + 1`,
    },
    optimal: {
      name: "Newton's Method",
      time: "O(log x)",
      space: "O(1)",
      code: `def mySqrt(x):
    if x < 2: return x
    r = x
    while r * r > x:
        r = (r + x // r) // 2
    return r`,
    },
  },




  "Valid Perfect Square": {
    brute: {
      name: "Brute Force",
      time: "O(sqrt(n))",
      space: "O(1)",
      code: `def isPerfectSquare(num):
    i = 1
    while i * i < num:
        i += 1
    return i * i == num`,
    },
    better: {
      name: "Binary Search",
      time: "O(log n)",
      space: "O(1)",
      code: `def isPerfectSquare(num):
    l, r = 1, num
    while l <= r:
        mid = (l + r) // 2
        sq = mid * mid
        if sq == num: return True
        elif sq < num: l = mid + 1
        else: r = mid - 1
    return False`,
    },
    optimal: {
      name: "Newton's Method",
      time: "O(log n)",
      space: "O(1)",
      code: `def isPerfectSquare(num):
    r = num
    while r * r > num:
        r = (r + num // r) // 2
    return r * r == num`,
    },
  },




  "Count of Smaller Numbers After Self": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def countSmaller(nums):
    result = []
    for i in range(len(nums)):
        count = sum(1 for j in range(i+1, len(nums)) if nums[j] < nums[i])
        result.append(count)
    return result`,
    },
    better: {
      name: "Sorted List (bisect)",
      time: "O(n^2)",
      space: "O(n)",
      code: `def countSmaller(nums):
    import bisect
    sorted_arr = []
    result = []
    for num in reversed(nums):
        pos = bisect.bisect_left(sorted_arr, num)
        result.append(pos)
        sorted_arr.insert(pos, num)
    return result[::-1]`,
    },
    optimal: {
      name: "Merge Sort",
      time: "O(n log n)",
      space: "O(n)",
      code: `def countSmaller(nums):
    result = [0] * len(nums)
    indices = list(range(len(nums)))
    def merge_sort(arr):
        if len(arr) <= 1: return arr
        mid = len(arr) // 2
        left, right = merge_sort(arr[:mid]), merge_sort(arr[mid:])
        merged, i, j = [], 0, 0
        while i < len(left) and j < len(right):
            if nums[left[i]] <= nums[right[j]]:
                result[left[i]] += j
                merged.append(left[i]); i += 1
            else: merged.append(right[j]); j += 1
        while i < len(left):
            result[left[i]] += j
            merged.append(left[i]); i += 1
        merged.extend(right[j:])
        return merged
    merge_sort(indices)
    return result`,
    },
  },




  "Find Median from Data Stream": {
    brute: {
      name: "Brute Force",
      time: "O(n log n) per find",
      space: "O(n)",
      code: `class MedianFinder:
    def __init__(self): self.data = []
    def addNum(self, num): self.data.append(num)
    def findMedian(self):
        self.data.sort()
        n = len(self.data)
        if n % 2: return self.data[n//2]
        return (self.data[n//2-1] + self.data[n//2]) / 2`,
    },
    better: {
      name: "Bisect Insert",
      time: "O(n) per add",
      space: "O(n)",
      code: `import bisect
class MedianFinder:
    def __init__(self): self.data = []
    def addNum(self, num): bisect.insort(self.data, num)
    def findMedian(self):
        n = len(self.data)
        if n % 2: return self.data[n//2]
        return (self.data[n//2-1] + self.data[n//2]) / 2`,
    },
    optimal: {
      name: "Two Heaps",
      time: "O(log n) per add",
      space: "O(n)",
      code: `import heapq
class MedianFinder:
    def __init__(self):
        self.lo = []  # max-heap (negated)
        self.hi = []  # min-heap
    def addNum(self, num):
        heapq.heappush(self.lo, -num)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo):
            heapq.heappush(self.lo, -heapq.heappop(self.hi))
    def findMedian(self):
        if len(self.lo) > len(self.hi): return -self.lo[0]
        return (-self.lo[0] + self.hi[0]) / 2`,
    },
  },




  "Median of Two Sorted Arrays": {
    brute: {
      name: "Brute Force",
      time: "O(m+n)",
      space: "O(m+n)",
      code: `def findMedianSortedArrays(nums1, nums2):
    merged = sorted(nums1 + nums2)
    n = len(merged)
    if n % 2: return merged[n//2]
    return (merged[n//2-1] + merged[n//2]) / 2`,
    },
    better: {
      name: "Two Pointers Merge",
      time: "O(m+n)",
      space: "O(1)",
      code: `def findMedianSortedArrays(nums1, nums2):
    total = len(nums1) + len(nums2)
    i = j = 0
    prev = cur = 0
    for _ in range(total // 2 + 1):
        prev = cur
        if i < len(nums1) and (j >= len(nums2) or nums1[i] <= nums2[j]):
            cur = nums1[i]; i += 1
        else:
            cur = nums2[j]; j += 1
    if total % 2: return cur
    return (prev + cur) / 2`,
    },
    optimal: {
      name: "Binary Search",
      time: "O(log(min(m,n)))",
      space: "O(1)",
      code: `def findMedianSortedArrays(nums1, nums2):
    if len(nums1) > len(nums2): nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    l, r = 0, m
    while l <= r:
        i = (l + r) // 2
        j = (m + n + 1) // 2 - i
        left1 = nums1[i-1] if i > 0 else float('-inf')
        right1 = nums1[i] if i < m else float('inf')
        left2 = nums2[j-1] if j > 0 else float('-inf')
        right2 = nums2[j] if j < n else float('inf')
        if left1 <= right2 and left2 <= right1:
            if (m+n) % 2: return max(left1, left2)
            return (max(left1,left2) + min(right1,right2)) / 2
        elif left1 > right2: r = i - 1
        else: l = i + 1`,
    },
  },




  "Car Fleet": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def carFleet(target, position, speed):
    cars = sorted(zip(position, speed), reverse=True)
    times = [(target - p) / s for p, s in cars]
    fleets = 0
    max_time = 0
    for t in times:
        if t > max_time:
            fleets += 1
            max_time = t
    return fleets`,
    },
    better: {
      name: "Sort + Stack",
      time: "O(n log n)",
      space: "O(n)",
      code: `def carFleet(target, position, speed):
    cars = sorted(zip(position, speed), reverse=True)
    stack = []
    for p, s in cars:
        time = (target - p) / s
        if not stack or time > stack[-1]:
            stack.append(time)
    return len(stack)`,
    },
    optimal: {
      name: "Sort + Counter",
      time: "O(n log n)",
      space: "O(n)",
      code: `def carFleet(target, position, speed):
    cars = sorted(zip(position, speed), reverse=True)
    fleets = cur_max = 0
    for p, s in cars:
        t = (target - p) / s
        if t > cur_max:
            cur_max = t
            fleets += 1
    return fleets`,
    },
  },




  "Find Minimum in Rotated Sorted Array": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(1)",
      code: `def findMin(nums):
    return min(nums)`,
    },
    better: {
      name: "Linear Scan",
      time: "O(n)",
      space: "O(1)",
      code: `def findMin(nums):
    for i in range(1, len(nums)):
        if nums[i] < nums[i-1]: return nums[i]
    return nums[0]`,
    },
    optimal: {
      name: "Binary Search",
      time: "O(log n)",
      space: "O(1)",
      code: `def findMin(nums):
    l, r = 0, len(nums) - 1
    while l < r:
        mid = (l + r) // 2
        if nums[mid] > nums[r]: l = mid + 1
        else: r = mid
    return nums[l]`,
    },
  },




  "Find Peak Element": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(1)",
      code: `def findPeakElement(nums):
    return nums.index(max(nums))`,
    },
    better: {
      name: "Linear Scan",
      time: "O(n)",
      space: "O(1)",
      code: `def findPeakElement(nums):
    for i in range(len(nums)-1):
        if nums[i] > nums[i+1]: return i
    return len(nums) - 1`,
    },
    optimal: {
      name: "Binary Search",
      time: "O(log n)",
      space: "O(1)",
      code: `def findPeakElement(nums):
    l, r = 0, len(nums) - 1
    while l < r:
        mid = (l + r) // 2
        if nums[mid] > nums[mid+1]: r = mid
        else: l = mid + 1
    return l`,
    },
  },




  "H-Index": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def hIndex(citations):
    n = len(citations)
    for h in range(n, 0, -1):
        count = sum(1 for c in citations if c >= h)
        if count >= h: return h
    return 0`,
    },
    better: {
      name: "Sort",
      time: "O(n log n)",
      space: "O(1)",
      code: `def hIndex(citations):
    citations.sort(reverse=True)
    for i, c in enumerate(citations):
        if c < i + 1: return i
    return len(citations)`,
    },
    optimal: {
      name: "Counting Sort",
      time: "O(n)",
      space: "O(n)",
      code: `def hIndex(citations):
    n = len(citations)
    counts = [0] * (n + 1)
    for c in citations:
        counts[min(c, n)] += 1
    total = 0
    for i in range(n, -1, -1):
        total += counts[i]
        if total >= i: return i
    return 0`,
    },
  },




  "K Closest Points to Origin": {
    brute: {
      name: "Brute Force",
      time: "O(n log n)",
      space: "O(n)",
      code: `def kClosest(points, k):
    points.sort(key=lambda p: p[0]**2 + p[1]**2)
    return points[:k]`,
    },
    better: {
      name: "Max Heap",
      time: "O(n log k)",
      space: "O(k)",
      code: `def kClosest(points, k):
    import heapq
    heap = []
    for x, y in points:
        dist = -(x*x + y*y)
        if len(heap) < k: heapq.heappush(heap, (dist, x, y))
        else: heapq.heappushpop(heap, (dist, x, y))
    return [[x, y] for _, x, y in heap]`,
    },
    optimal: {
      name: "Quickselect",
      time: "O(n) average",
      space: "O(1)",
      code: `def kClosest(points, k):
    def dist(p): return p[0]**2 + p[1]**2
    def partition(l, r):
        pivot = dist(points[r])
        i = l
        for j in range(l, r):
            if dist(points[j]) <= pivot:
                points[i], points[j] = points[j], points[i]
                i += 1
        points[i], points[r] = points[r], points[i]
        return i
    l, r = 0, len(points)-1
    while l <= r:
        p = partition(l, r)
        if p == k: break
        elif p < k: l = p + 1
        else: r = p - 1
    return points[:k]`,
    },
  },




  "Kth Largest Element in an Array": {
    brute: {
      name: "Brute Force",
      time: "O(n log n)",
      space: "O(1)",
      code: `def findKthLargest(nums, k):
    nums.sort()
    return nums[-k]`,
    },
    better: {
      name: "Min Heap",
      time: "O(n log k)",
      space: "O(k)",
      code: `def findKthLargest(nums, k):
    import heapq
    heap = nums[:k]
    heapq.heapify(heap)
    for num in nums[k:]:
        if num > heap[0]:
            heapq.heapreplace(heap, num)
    return heap[0]`,
    },
    optimal: {
      name: "Quickselect",
      time: "O(n) average",
      space: "O(1)",
      code: `def findKthLargest(nums, k):
    import random
    def quickselect(l, r, k_idx):
        pivot = random.randint(l, r)
        nums[pivot], nums[r] = nums[r], nums[pivot]
        store = l
        for i in range(l, r):
            if nums[i] < nums[r]:
                nums[i], nums[store] = nums[store], nums[i]
                store += 1
        nums[store], nums[r] = nums[r], nums[store]
        if store == k_idx: return nums[store]
        elif store < k_idx: return quickselect(store+1, r, k_idx)
        else: return quickselect(l, store-1, k_idx)
    return quickselect(0, len(nums)-1, len(nums)-k)`,
    },
  },




  "Kth Smallest Element in a Sorted Matrix": {
    brute: {
      name: "Brute Force",
      time: "O(n^2 log(n^2))",
      space: "O(n^2)",
      code: `def kthSmallest(matrix, k):
    flat = sorted(x for row in matrix for x in row)
    return flat[k-1]`,
    },
    better: {
      name: "Min Heap",
      time: "O(k log n)",
      space: "O(n)",
      code: `def kthSmallest(matrix, k):
    import heapq
    n = len(matrix)
    heap = [(matrix[i][0], i, 0) for i in range(min(n, k))]
    heapq.heapify(heap)
    for _ in range(k):
        val, r, c = heapq.heappop(heap)
        if c + 1 < n:
            heapq.heappush(heap, (matrix[r][c+1], r, c+1))
    return val`,
    },
    optimal: {
      name: "Binary Search",
      time: "O(n log(max-min))",
      space: "O(1)",
      code: `def kthSmallest(matrix, k):
    n = len(matrix)
    lo, hi = matrix[0][0], matrix[-1][-1]
    while lo < hi:
        mid = (lo + hi) // 2
        count = 0
        j = n - 1
        for i in range(n):
            while j >= 0 and matrix[i][j] > mid: j -= 1
            count += j + 1
        if count < k: lo = mid + 1
        else: hi = mid
    return lo`,
    },
  },




  "Largest Number": {
    brute: {
      name: "Brute Force",
      time: "O(n! * n)",
      space: "O(n)",
      code: `def largestNumber(nums):
    from itertools import permutations
    best = ""
    for perm in permutations(map(str, nums)):
        candidate = ''.join(perm)
        if candidate > best: best = candidate
    return best if best[0] != '0' else '0'`,
    },
    better: {
      name: "Custom Comparator",
      time: "O(n log n)",
      space: "O(n)",
      code: `def largestNumber(nums):
    from functools import cmp_to_key
    def compare(a, b):
        if a+b > b+a: return -1
        elif a+b < b+a: return 1
        return 0
    strs = sorted(map(str, nums), key=cmp_to_key(compare))
    result = ''.join(strs)
    return '0' if result[0] == '0' else result`,
    },
    optimal: {
      name: "Key Function",
      time: "O(n log n)",
      space: "O(n)",
      code: `def largestNumber(nums):
    from functools import cmp_to_key
    s = sorted(map(str, nums), key=cmp_to_key(
        lambda a, b: (1, -1)[a+b > b+a] if a+b != b+a else 0))
    return ''.join(s) if s[0] != '0' else '0'`,
    },
  },




  "Meeting Rooms II": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def minMeetingRooms(intervals):
    if not intervals: return 0
    intervals.sort()
    rooms = [intervals[0][1]]
    for start, end in intervals[1:]:
        placed = False
        for i in range(len(rooms)):
            if rooms[i] <= start:
                rooms[i] = end
                placed = True
                break
        if not placed: rooms.append(end)
    return len(rooms)`,
    },
    better: {
      name: "Min Heap",
      time: "O(n log n)",
      space: "O(n)",
      code: `def minMeetingRooms(intervals):
    import heapq
    if not intervals: return 0
    intervals.sort()
    heap = [intervals[0][1]]
    for start, end in intervals[1:]:
        if heap[0] <= start:
            heapq.heapreplace(heap, end)
        else:
            heapq.heappush(heap, end)
    return len(heap)`,
    },
    optimal: {
      name: "Chronological Ordering",
      time: "O(n log n)",
      space: "O(n)",
      code: `def minMeetingRooms(intervals):
    starts = sorted(i[0] for i in intervals)
    ends = sorted(i[1] for i in intervals)
    rooms = ep = 0
    for sp in range(len(starts)):
        if starts[sp] < ends[ep]: rooms += 1
        else: ep += 1
    return rooms`,
    },
  },




  "Merge Intervals": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def merge(intervals):
    intervals.sort()
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged`,
    },
    better: {
      name: "Sort + Linear Merge",
      time: "O(n log n)",
      space: "O(n)",
      code: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    result = []
    for interval in intervals:
        if result and interval[0] <= result[-1][1]:
            result[-1][1] = max(result[-1][1], interval[1])
        else:
            result.append(interval[:])
    return result`,
    },
    optimal: {
      name: "Sort + In-Place",
      time: "O(n log n)",
      space: "O(1)",
      code: `def merge(intervals):
    intervals.sort()
    i = 0
    while i < len(intervals) - 1:
        if intervals[i][1] >= intervals[i+1][0]:
            intervals[i][1] = max(intervals[i][1], intervals[i+1][1])
            intervals.pop(i+1)
        else:
            i += 1
    return intervals`,
    },
  },




  "Minimum Number of Arrows to Burst Balloons": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def findMinArrowShots(points):
    if not points: return 0
    points.sort()
    arrows = 0
    while points:
        arrows += 1
        end = points[0][1]
        i = 1
        while i < len(points):
            if points[i][0] <= end:
                end = min(end, points[i][1])
                points.pop(i)
            else: i += 1
        points.pop(0)
    return arrows`,
    },
    better: {
      name: "Sort by End",
      time: "O(n log n)",
      space: "O(1)",
      code: `def findMinArrowShots(points):
    if not points: return 0
    points.sort(key=lambda x: x[1])
    arrows = 1
    end = points[0][1]
    for i in range(1, len(points)):
        if points[i][0] > end:
            arrows += 1
            end = points[i][1]
    return arrows`,
    },
    optimal: {
      name: "Greedy (Sort by End)",
      time: "O(n log n)",
      space: "O(1)",
      code: `def findMinArrowShots(points):
    points.sort(key=lambda x: x[1])
    arrows, cur_end = 1, points[0][1]
    for start, end in points[1:]:
        if start > cur_end:
            arrows += 1
            cur_end = end
    return arrows`,
    },
  },




  "Non-overlapping Intervals": {
    brute: {
      name: "Brute Force",
      time: "O(2^n)",
      space: "O(n)",
      code: `def eraseOverlapIntervals(intervals):
    intervals.sort()
    n = len(intervals)
    # Find max non-overlapping set
    def backtrack(i, last_end):
        if i == n: return 0
        skip = backtrack(i+1, last_end)
        take = 0
        if intervals[i][0] >= last_end:
            take = 1 + backtrack(i+1, intervals[i][1])
        return max(skip, take)
    return n - backtrack(0, float('-inf'))`,
    },
    better: {
      name: "Sort by Start + Greedy",
      time: "O(n log n)",
      space: "O(1)",
      code: `def eraseOverlapIntervals(intervals):
    intervals.sort()
    count = 0
    prev_end = intervals[0][1]
    for i in range(1, len(intervals)):
        if intervals[i][0] < prev_end:
            count += 1
            prev_end = min(prev_end, intervals[i][1])
        else:
            prev_end = intervals[i][1]
    return count`,
    },
    optimal: {
      name: "Sort by End",
      time: "O(n log n)",
      space: "O(1)",
      code: `def eraseOverlapIntervals(intervals):
    intervals.sort(key=lambda x: x[1])
    end = intervals[0][1]
    count = 0
    for i in range(1, len(intervals)):
        if intervals[i][0] < end: count += 1
        else: end = intervals[i][1]
    return count`,
    },
  },




  "Search a 2D Matrix": {
    brute: {
      name: "Brute Force",
      time: "O(m*n)",
      space: "O(1)",
      code: `def searchMatrix(matrix, target):
    for row in matrix:
        for val in row:
            if val == target: return True
    return False`,
    },
    better: {
      name: "Row Binary Search",
      time: "O(m + log n)",
      space: "O(1)",
      code: `def searchMatrix(matrix, target):
    import bisect
    for row in matrix:
        if row[0] <= target <= row[-1]:
            idx = bisect.bisect_left(row, target)
            if idx < len(row) and row[idx] == target:
                return True
    return False`,
    },
    optimal: {
      name: "Single Binary Search",
      time: "O(log(m*n))",
      space: "O(1)",
      code: `def searchMatrix(matrix, target):
    m, n = len(matrix), len(matrix[0])
    l, r = 0, m*n - 1
    while l <= r:
        mid = (l + r) // 2
        val = matrix[mid // n][mid % n]
        if val == target: return True
        elif val < target: l = mid + 1
        else: r = mid - 1
    return False`,
    },
  },




  "Search a 2D Matrix II": {
    brute: {
      name: "Brute Force",
      time: "O(m*n)",
      space: "O(1)",
      code: `def searchMatrix(matrix, target):
    for row in matrix:
        for val in row:
            if val == target: return True
    return False`,
    },
    better: {
      name: "Binary Search Each Row",
      time: "O(m log n)",
      space: "O(1)",
      code: `def searchMatrix(matrix, target):
    import bisect
    for row in matrix:
        idx = bisect.bisect_left(row, target)
        if idx < len(row) and row[idx] == target:
            return True
    return False`,
    },
    optimal: {
      name: "Staircase Search",
      time: "O(m+n)",
      space: "O(1)",
      code: `def searchMatrix(matrix, target):
    r, c = 0, len(matrix[0]) - 1
    while r < len(matrix) and c >= 0:
        if matrix[r][c] == target: return True
        elif matrix[r][c] > target: c -= 1
        else: r += 1
    return False`,
    },
  },




  "Search in Rotated Sorted Array": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(1)",
      code: `def search(nums, target):
    for i, num in enumerate(nums):
        if num == target: return i
    return -1`,
    },
    better: {
      name: "Find Pivot + Binary Search",
      time: "O(log n)",
      space: "O(1)",
      code: `def search(nums, target):
    l, r = 0, len(nums)-1
    while l < r:
        mid = (l+r)//2
        if nums[mid] > nums[r]: l = mid+1
        else: r = mid
    pivot = l
    l, r = 0, len(nums)-1
    if target >= nums[pivot] and target <= nums[r]: l = pivot
    else: r = pivot - 1
    while l <= r:
        mid = (l+r)//2
        if nums[mid] == target: return mid
        elif nums[mid] < target: l = mid+1
        else: r = mid-1
    return -1`,
    },
    optimal: {
      name: "Modified Binary Search",
      time: "O(log n)",
      space: "O(1)",
      code: `def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        if nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]: r = mid - 1
            else: l = mid + 1
        else:
            if nums[mid] < target <= nums[r]: l = mid + 1
            else: r = mid - 1
    return -1`,
    },
  },




  "Search in Rotated Sorted Array II": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(1)",
      code: `def search(nums, target):
    return target in nums`,
    },
    better: {
      name: "Set Lookup",
      time: "O(n)",
      space: "O(n)",
      code: `def search(nums, target):
    return target in set(nums)`,
    },
    optimal: {
      name: "Modified Binary Search",
      time: "O(log n) avg, O(n) worst",
      space: "O(1)",
      code: `def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return True
        if nums[l] == nums[mid] == nums[r]:
            l += 1; r -= 1
        elif nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]: r = mid - 1
            else: l = mid + 1
        else:
            if nums[mid] < target <= nums[r]: l = mid + 1
            else: r = mid - 1
    return False`,
    },
  },




  "Sort Colors": {
    brute: {
      name: "Brute Force",
      time: "O(n log n)",
      space: "O(1)",
      code: `def sortColors(nums):
    nums.sort()`,
    },
    better: {
      name: "Counting Sort",
      time: "O(n)",
      space: "O(1)",
      code: `def sortColors(nums):
    count = [0, 0, 0]
    for num in nums: count[num] += 1
    i = 0
    for c in range(3):
        for _ in range(count[c]):
            nums[i] = c; i += 1`,
    },
    optimal: {
      name: "Dutch National Flag",
      time: "O(n)",
      space: "O(1)",
      code: `def sortColors(nums):
    lo, mid, hi = 0, 0, len(nums) - 1
    while mid <= hi:
        if nums[mid] == 0:
            nums[lo], nums[mid] = nums[mid], nums[lo]
            lo += 1; mid += 1
        elif nums[mid] == 1: mid += 1
        else:
            nums[mid], nums[hi] = nums[hi], nums[mid]
            hi -= 1`,
    },
  },




  "Sort List": {
    brute: {
      name: "Brute Force",
      time: "O(n log n)",
      space: "O(n)",
      code: `def sortList(head):
    vals = []
    cur = head
    while cur: vals.append(cur.val); cur = cur.next
    vals.sort()
    cur = head
    for v in vals: cur.val = v; cur = cur.next
    return head`,
    },
    better: {
      name: "Top-Down Merge Sort",
      time: "O(n log n)",
      space: "O(log n)",
      code: `def sortList(head):
    if not head or not head.next: return head
    slow, fast = head, head.next
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
    mid = slow.next
    slow.next = None
    left, right = sortList(head), sortList(mid)
    dummy = cur = ListNode(0)
    while left and right:
        if left.val < right.val: cur.next = left; left = left.next
        else: cur.next = right; right = right.next
        cur = cur.next
    cur.next = left or right
    return dummy.next`,
    },
    optimal: {
      name: "Bottom-Up Merge Sort",
      time: "O(n log n)",
      space: "O(1)",
      code: `def sortList(head):
    def get_size(h):
        c = 0
        while h: c += 1; h = h.next
        return c
    def split(h, n):
        for _ in range(n-1):
            if not h: break
            h = h.next
        if not h: return None
        nxt = h.next; h.next = None
        return nxt
    def merge(a, b):
        d = cur = ListNode(0)
        while a and b:
            if a.val < b.val: cur.next = a; a = a.next
            else: cur.next = b; b = b.next
            cur = cur.next
        cur.next = a or b
        while cur.next: cur = cur.next
        return d.next, cur
    size = get_size(head); step = 1
    dummy = ListNode(0); dummy.next = head
    while step < size:
        cur, tail = dummy.next, dummy
        while cur:
            left = cur; right = split(left, step)
            cur = split(right, step)
            merged, end = merge(left, right)
            tail.next = merged; tail = end
        step *= 2
    return dummy.next`,
    },
  },




  "Task Scheduler": {
    brute: {
      name: "Brute Force",
      time: "O(n * 26)",
      space: "O(1)",
      code: `def leastInterval(tasks, n):
    from collections import Counter
    count = Counter(tasks)
    time = 0
    while any(count.values()):
        available = sorted(count.keys(), key=lambda x: -count[x])
        cycle = []
        for i in range(n + 1):
            if not any(count.values()): break
            if i < len(available) and count[available[i]] > 0:
                cycle.append(available[i])
                count[available[i]] -= 1
            time += 1
    return time`,
    },
    better: {
      name: "Max Heap + Cooldown",
      time: "O(n log 26)",
      space: "O(1)",
      code: `def leastInterval(tasks, n):
    from collections import Counter, deque
    import heapq
    count = Counter(tasks)
    heap = [-c for c in count.values()]
    heapq.heapify(heap)
    queue = deque()
    time = 0
    while heap or queue:
        time += 1
        if heap:
            cnt = heapq.heappop(heap) + 1
            if cnt: queue.append((cnt, time + n))
        if queue and queue[0][1] == time:
            heapq.heappush(heap, queue.popleft()[0])
    return time`,
    },
    optimal: {
      name: "Math Formula",
      time: "O(n)",
      space: "O(1)",
      code: `def leastInterval(tasks, n):
    from collections import Counter
    count = Counter(tasks)
    max_freq = max(count.values())
    max_count = sum(1 for v in count.values() if v == max_freq)
    result = (max_freq - 1) * (n + 1) + max_count
    return max(result, len(tasks))`,
    },
  },




  "Wiggle Sort II": {
    brute: {
      name: "Brute Force",
      time: "O(n log n)",
      space: "O(n)",
      code: `def wiggleSort(nums):
    sorted_nums = sorted(nums)
    n = len(nums)
    mid = (n - 1) // 2
    small = sorted_nums[:mid+1][::-1]
    large = sorted_nums[mid+1:][::-1]
    for i in range(n):
        nums[i] = small[i//2] if i % 2 == 0 else large[i//2]`,
    },
    better: {
      name: "Sort + Interleave",
      time: "O(n log n)",
      space: "O(n)",
      code: `def wiggleSort(nums):
    s = sorted(nums)
    n = len(nums)
    half = (n + 1) // 2
    small, large = s[:half][::-1], s[half:][::-1]
    for i in range(n):
        nums[i] = small[i//2] if i%2==0 else large[i//2]`,
    },
    optimal: {
      name: "Quickselect + 3-way partition",
      time: "O(n) average",
      space: "O(1)",
      code: `def wiggleSort(nums):
    import random
    n = len(nums)
    def nth(k):
        l, r = 0, n-1
        while True:
            pivot = nums[random.randint(l, r)]
            i, j, p = l, l, r
            while j <= p:
                if nums[j] < pivot: nums[i],nums[j]=nums[j],nums[i]; i+=1; j+=1
                elif nums[j] > pivot: nums[j],nums[p]=nums[p],nums[j]; p-=1
                else: j+=1
            if i <= k <= p: return nums[k]
            elif k < i: r = i-1
            else: l = p+1
    median = nth(n//2)
    def idx(i): return (1+2*i) % (n|1)
    i, j, k = 0, 0, n-1
    while j <= k:
        if nums[idx(j)] > median:
            nums[idx(i)],nums[idx(j)]=nums[idx(j)],nums[idx(i)]; i+=1; j+=1
        elif nums[idx(j)] < median:
            nums[idx(j)],nums[idx(k)]=nums[idx(k)],nums[idx(j)]; k-=1
        else: j+=1`,
    },
  },




  "Backspace String Compare": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def backspaceCompare(s, t):
    def build(st):
        res = []
        for c in st:
            if c != '#': res.append(c)
            elif res: res.pop()
        return ''.join(res)
    return build(s) == build(t)`,
    },
    better: {
      name: "Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def backspaceCompare(s, t):
    def process(st):
        stack = []
        for c in st:
            if c == '#':
                if stack: stack.pop()
            else: stack.append(c)
        return stack
    return process(s) == process(t)`,
    },
    optimal: {
      name: "Two Pointers (O(1) Space)",
      time: "O(n)",
      space: "O(1)",
      code: `def backspaceCompare(s, t):
    def next_char(st, i):
        skip = 0
        while i >= 0:
            if st[i] == '#': skip += 1
            elif skip: skip -= 1
            else: break
            i -= 1
        return i
    i, j = len(s)-1, len(t)-1
    while i >= 0 or j >= 0:
        i, j = next_char(s, i), next_char(t, j)
        if i >= 0 and j >= 0 and s[i] != t[j]: return False
        if (i >= 0) != (j >= 0): return False
        i -= 1; j -= 1
    return True`,
    },
  },




  "Implement Queue using Stacks": {
    brute: {
      name: "Brute Force",
      time: "O(n) per push",
      space: "O(n)",
      code: `class MyQueue:
    def __init__(self): self.stack = []
    def push(self, x):
        tmp = []
        while self.stack: tmp.append(self.stack.pop())
        self.stack.append(x)
        while tmp: self.stack.append(tmp.pop())
    def pop(self): return self.stack.pop()
    def peek(self): return self.stack[-1]
    def empty(self): return not self.stack`,
    },
    better: {
      name: "Two Stacks (Eager)",
      time: "O(n) per push",
      space: "O(n)",
      code: `class MyQueue:
    def __init__(self):
        self.s1, self.s2 = [], []
    def push(self, x):
        while self.s1: self.s2.append(self.s1.pop())
        self.s1.append(x)
        while self.s2: self.s1.append(self.s2.pop())
    def pop(self): return self.s1.pop()
    def peek(self): return self.s1[-1]
    def empty(self): return not self.s1`,
    },
    optimal: {
      name: "Two Stacks (Lazy)",
      time: "O(1) amortized",
      space: "O(n)",
      code: `class MyQueue:
    def __init__(self):
        self.in_stack, self.out_stack = [], []
    def push(self, x): self.in_stack.append(x)
    def pop(self):
        self.peek()
        return self.out_stack.pop()
    def peek(self):
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
        return self.out_stack[-1]
    def empty(self): return not self.in_stack and not self.out_stack`,
    },
  },




  "Implement Stack using Queues": {
    brute: {
      name: "Brute Force",
      time: "O(n) per push",
      space: "O(n)",
      code: `from collections import deque
class MyStack:
    def __init__(self): self.q = deque()
    def push(self, x):
        self.q.append(x)
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())
    def pop(self): return self.q.popleft()
    def top(self): return self.q[0]
    def empty(self): return not self.q`,
    },
    better: {
      name: "Two Queues",
      time: "O(n) per push",
      space: "O(n)",
      code: `from collections import deque
class MyStack:
    def __init__(self): self.q1, self.q2 = deque(), deque()
    def push(self, x):
        self.q2.append(x)
        while self.q1: self.q2.append(self.q1.popleft())
        self.q1, self.q2 = self.q2, self.q1
    def pop(self): return self.q1.popleft()
    def top(self): return self.q1[0]
    def empty(self): return not self.q1`,
    },
    optimal: {
      name: "Single Queue (Rotate)",
      time: "O(n) per push",
      space: "O(n)",
      code: `from collections import deque
class MyStack:
    def __init__(self): self.q = deque()
    def push(self, x):
        self.q.append(x)
        for _ in range(len(self.q)-1):
            self.q.append(self.q.popleft())
    def pop(self): return self.q.popleft()
    def top(self): return self.q[0]
    def empty(self): return len(self.q) == 0`,
    },
  },




  "Moving Average from Data Stream": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `class MovingAverage:
    def __init__(self, size):
        self.size = size
        self.data = []
    def next(self, val):
        self.data.append(val)
        window = self.data[-self.size:]
        return sum(window) / len(window)`,
    },
    better: {
      name: "Deque",
      time: "O(1)",
      space: "O(size)",
      code: `from collections import deque
class MovingAverage:
    def __init__(self, size):
        self.q = deque(maxlen=size)
        self.total = 0
    def next(self, val):
        if len(self.q) == self.q.maxlen:
            self.total -= self.q[0]
        self.q.append(val)
        self.total += val
        return self.total / len(self.q)`,
    },
    optimal: {
      name: "Circular Array",
      time: "O(1)",
      space: "O(size)",
      code: `class MovingAverage:
    def __init__(self, size):
        self.size = size
        self.arr = [0] * size
        self.idx = self.total = self.count = 0
    def next(self, val):
        self.total -= self.arr[self.idx % self.size]
        self.arr[self.idx % self.size] = val
        self.total += val
        self.idx += 1
        self.count = min(self.count + 1, self.size)
        return self.total / self.count`,
    },
  },




  "Next Greater Element I": {
    brute: {
      name: "Brute Force",
      time: "O(n * m)",
      space: "O(1)",
      code: `def nextGreaterElement(nums1, nums2):
    result = []
    for num in nums1:
        idx = nums2.index(num)
        found = -1
        for j in range(idx+1, len(nums2)):
            if nums2[j] > num:
                found = nums2[j]; break
        result.append(found)
    return result`,
    },
    better: {
      name: "HashMap + Linear Scan",
      time: "O(n * m)",
      space: "O(n)",
      code: `def nextGreaterElement(nums1, nums2):
    idx_map = {v: i for i, v in enumerate(nums2)}
    result = []
    for num in nums1:
        found = -1
        for j in range(idx_map[num]+1, len(nums2)):
            if nums2[j] > num:
                found = nums2[j]; break
        result.append(found)
    return result`,
    },
    optimal: {
      name: "Monotonic Stack",
      time: "O(n + m)",
      space: "O(m)",
      code: `def nextGreaterElement(nums1, nums2):
    stack = []
    nge = {}
    for num in nums2:
        while stack and stack[-1] < num:
            nge[stack.pop()] = num
        stack.append(num)
    return [nge.get(num, -1) for num in nums1]`,
    },
  },




  "Number of Recent Calls": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `class RecentCounter:
    def __init__(self): self.calls = []
    def ping(self, t):
        self.calls.append(t)
        return sum(1 for c in self.calls if c >= t - 3000)`,
    },
    better: {
      name: "Binary Search",
      time: "O(log n)",
      space: "O(n)",
      code: `import bisect
class RecentCounter:
    def __init__(self): self.calls = []
    def ping(self, t):
        self.calls.append(t)
        idx = bisect.bisect_left(self.calls, t - 3000)
        return len(self.calls) - idx`,
    },
    optimal: {
      name: "Queue",
      time: "O(1) amortized",
      space: "O(w)",
      code: `from collections import deque
class RecentCounter:
    def __init__(self): self.q = deque()
    def ping(self, t):
        self.q.append(t)
        while self.q[0] < t - 3000:
            self.q.popleft()
        return len(self.q)`,
    },
  },




  "Remove All Adjacent Duplicates in String": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def removeDuplicates(s):
    changed = True
    while changed:
        changed = False
        i = 0
        while i < len(s) - 1:
            if s[i] == s[i+1]:
                s = s[:i] + s[i+2:]
                changed = True
            else: i += 1
    return s`,
    },
    better: {
      name: "Replace Loop",
      time: "O(n^2)",
      space: "O(n)",
      code: `def removeDuplicates(s):
    prev = ""
    while prev != s:
        prev = s
        for c in set(s):
            s = s.replace(c*2, "")
    return s`,
    },
    optimal: {
      name: "Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def removeDuplicates(s):
    stack = []
    for c in s:
        if stack and stack[-1] == c:
            stack.pop()
        else:
            stack.append(c)
    return ''.join(stack)`,
    },
  },




  "Valid Parentheses": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def isValid(s):
    while '()' in s or '[]' in s or '{}' in s:
        s = s.replace('()', '').replace('[]', '').replace('{}', '')
    return s == ''`,
    },
    better: {
      name: "Stack with Map",
      time: "O(n)",
      space: "O(n)",
      code: `def isValid(s):
    stack = []
    mapping = {')':'(', ']':'[', '}':'{'}
    for c in s:
        if c in mapping:
            if not stack or stack[-1] != mapping[c]: return False
            stack.pop()
        else:
            stack.append(c)
    return not stack`,
    },
    optimal: {
      name: "Stack (Concise)",
      time: "O(n)",
      space: "O(n)",
      code: `def isValid(s):
    stack = []
    pairs = {'(':')', '[':']', '{':'}'}
    for c in s:
        if c in pairs: stack.append(pairs[c])
        elif not stack or stack.pop() != c: return False
    return not stack`,
    },
  },




  "Basic Calculator": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def calculate(s):
    def eval_simple(expr):
        result = num = 0
        sign = 1
        for c in expr:
            if c.isdigit(): num = num*10 + int(c)
            elif c in '+-':
                result += sign * num
                num = 0
                sign = 1 if c == '+' else -1
        return result + sign * num
    while '(' in s:
        i = s.rfind('(')
        j = s.find(')', i)
        s = s[:i] + str(eval_simple(s[i+1:j])) + s[j+1:]
    return eval_simple(s)`,
    },
    better: {
      name: "Stack (Sign Tracking)",
      time: "O(n)",
      space: "O(n)",
      code: `def calculate(s):
    stack = []
    num, sign, result = 0, 1, 0
    for c in s:
        if c.isdigit(): num = num*10 + int(c)
        elif c == '+':
            result += sign * num; num = 0; sign = 1
        elif c == '-':
            result += sign * num; num = 0; sign = -1
        elif c == '(':
            stack.append(result); stack.append(sign)
            result, sign = 0, 1
        elif c == ')':
            result += sign * num; num = 0
            result *= stack.pop(); result += stack.pop()
    return result + sign * num`,
    },
    optimal: {
      name: "Recursive",
      time: "O(n)",
      space: "O(n)",
      code: `def calculate(s):
    def helper(i):
        num, sign, result = 0, 1, 0
        while i < len(s):
            if s[i].isdigit(): num = num*10 + int(s[i])
            elif s[i] == '+':
                result += sign*num; num = 0; sign = 1
            elif s[i] == '-':
                result += sign*num; num = 0; sign = -1
            elif s[i] == '(':
                val, i = helper(i+1)
                num = val
            elif s[i] == ')':
                return result + sign*num, i
            i += 1
        return result + sign*num, i
    return helper(0)[0]`,
    },
  },




  "Largest Rectangle in Histogram": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def largestRectangleArea(heights):
    res = 0
    for i in range(len(heights)):
        min_h = heights[i]
        for j in range(i, len(heights)):
            min_h = min(min_h, heights[j])
            res = max(res, min_h * (j - i + 1))
    return res`,
    },
    better: {
      name: "Left/Right Boundaries",
      time: "O(n)",
      space: "O(n)",
      code: `def largestRectangleArea(heights):
    n = len(heights)
    left, right = [0]*n, [0]*n
    stack = []
    for i in range(n):
        while stack and heights[stack[-1]] >= heights[i]: stack.pop()
        left[i] = stack[-1]+1 if stack else 0
        stack.append(i)
    stack = []
    for i in range(n-1, -1, -1):
        while stack and heights[stack[-1]] >= heights[i]: stack.pop()
        right[i] = stack[-1]-1 if stack else n-1
        stack.append(i)
    return max(heights[i]*(right[i]-left[i]+1) for i in range(n))`,
    },
    optimal: {
      name: "Monotonic Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def largestRectangleArea(heights):
    stack = [-1]
    res = 0
    for i, h in enumerate(heights):
        while stack[-1] != -1 and heights[stack[-1]] >= h:
            height = heights[stack.pop()]
            width = i - stack[-1] - 1
            res = max(res, height * width)
        stack.append(i)
    while stack[-1] != -1:
        height = heights[stack.pop()]
        width = len(heights) - stack[-1] - 1
        res = max(res, height * width)
    return res`,
    },
  },




  "Maximal Rectangle": {
    brute: {
      name: "Brute Force",
      time: "O(m^2 * n^2)",
      space: "O(1)",
      code: `def maximalRectangle(matrix):
    if not matrix: return 0
    m, n = len(matrix), len(matrix[0])
    res = 0
    for i in range(m):
        for j in range(n):
            if matrix[i][j] == '1':
                width = n
                for r in range(i, m):
                    if matrix[r][j] == '0': break
                    w = 0
                    while j+w < width and matrix[r][j+w] == '1': w += 1
                    width = min(width, j+w)
                    res = max(res, (r-i+1) * (width-j))
    return res`,
    },
    better: {
      name: "Heights + Histogram",
      time: "O(m * n)",
      space: "O(n)",
      code: `def maximalRectangle(matrix):
    if not matrix: return 0
    n = len(matrix[0])
    heights = [0] * n
    res = 0
    for row in matrix:
        for j in range(n):
            heights[j] = heights[j]+1 if row[j]=='1' else 0
        stack = [-1]
        for i, h in enumerate(heights):
            while stack[-1]!=-1 and heights[stack[-1]]>=h:
                ht = heights[stack.pop()]
                res = max(res, ht*(i-stack[-1]-1))
            stack.append(i)
        while stack[-1] != -1:
            ht = heights[stack.pop()]
            res = max(res, ht*(n-stack[-1]-1))
    return res`,
    },
    optimal: {
      name: "DP Heights + Stack",
      time: "O(m * n)",
      space: "O(n)",
      code: `def maximalRectangle(matrix):
    if not matrix: return 0
    n = len(matrix[0])
    h = [0]*(n+1)
    res = 0
    for row in matrix:
        for j in range(n):
            h[j] = h[j]+1 if row[j]=='1' else 0
        stack = [-1]
        for i in range(n+1):
            while stack[-1]!=-1 and h[stack[-1]]>=h[i]:
                height = h[stack.pop()]
                res = max(res, height*(i-stack[-1]-1))
            stack.append(i)
    return res`,
    },
  },




  "Sliding Window Maximum": {
    brute: {
      name: "Brute Force",
      time: "O(n * k)",
      space: "O(n)",
      code: `def maxSlidingWindow(nums, k):
    return [max(nums[i:i+k]) for i in range(len(nums)-k+1)]`,
    },
    better: {
      name: "Max Heap",
      time: "O(n log n)",
      space: "O(n)",
      code: `def maxSlidingWindow(nums, k):
    import heapq
    heap = [(-nums[i], i) for i in range(k)]
    heapq.heapify(heap)
    result = [-heap[0][0]]
    for i in range(k, len(nums)):
        heapq.heappush(heap, (-nums[i], i))
        while heap[0][1] <= i - k: heapq.heappop(heap)
        result.append(-heap[0][0])
    return result`,
    },
    optimal: {
      name: "Monotonic Deque",
      time: "O(n)",
      space: "O(k)",
      code: `def maxSlidingWindow(nums, k):
    from collections import deque
    dq = deque()
    result = []
    for i, num in enumerate(nums):
        while dq and nums[dq[-1]] <= num: dq.pop()
        dq.append(i)
        if dq[0] <= i - k: dq.popleft()
        if i >= k - 1: result.append(nums[dq[0]])
    return result`,
    },
  },




  "Asteroid Collision": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def asteroidCollision(asteroids):
    changed = True
    while changed:
        changed = False
        result = []
        i = 0
        while i < len(asteroids):
            if result and result[-1]>0 and asteroids[i]<0:
                changed = True
                if abs(result[-1]) < abs(asteroids[i]): result.pop(); continue
                elif abs(result[-1]) == abs(asteroids[i]): result.pop()
            else: result.append(asteroids[i])
            i += 1
        asteroids = result
    return asteroids`,
    },
    better: {
      name: "Stack (Basic)",
      time: "O(n)",
      space: "O(n)",
      code: `def asteroidCollision(asteroids):
    stack = []
    for ast in asteroids:
        alive = True
        while alive and stack and ast < 0 < stack[-1]:
            if stack[-1] < -ast: stack.pop()
            elif stack[-1] == -ast: stack.pop(); alive = False
            else: alive = False
        if alive: stack.append(ast)
    return stack`,
    },
    optimal: {
      name: "Stack (Concise)",
      time: "O(n)",
      space: "O(n)",
      code: `def asteroidCollision(asteroids):
    stack = []
    for a in asteroids:
        while stack and a < 0 < stack[-1]:
            if stack[-1] < -a: stack.pop(); continue
            elif stack[-1] == -a: stack.pop()
            break
        else:
            stack.append(a)
    return stack`,
    },
  },




  "Basic Calculator II": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def calculate(s):
    tokens, num = [], ''
    for c in s:
        if c.isdigit(): num += c
        elif c in '+-*/':
            tokens.append(int(num)); num = ''; tokens.append(c)
    tokens.append(int(num))
    # Handle * /
    stack = [tokens[0]]
    i = 1
    while i < len(tokens):
        op, val = tokens[i], tokens[i+1]
        if op == '*': stack.append(stack.pop() * val)
        elif op == '/': stack.append(int(stack.pop() / val))
        else: stack.extend([op, val])
        i += 2
    result = stack[0]
    i = 1
    while i < len(stack):
        if stack[i] == '+': result += stack[i+1]
        else: result -= stack[i+1]
        i += 2
    return result`,
    },
    better: {
      name: "Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def calculate(s):
    stack, num, op = [], 0, '+'
    for i, c in enumerate(s):
        if c.isdigit(): num = num*10 + int(c)
        if c in '+-*/' or i == len(s)-1:
            if op == '+': stack.append(num)
            elif op == '-': stack.append(-num)
            elif op == '*': stack.append(stack.pop()*num)
            elif op == '/': stack.append(int(stack.pop()/num))
            op, num = c, 0
    return sum(stack)`,
    },
    optimal: {
      name: "O(1) Space",
      time: "O(n)",
      space: "O(1)",
      code: `def calculate(s):
    result = last = num = 0
    op = '+'
    for i, c in enumerate(s):
        if c.isdigit(): num = num*10 + int(c)
        if c in '+-*/' or i == len(s)-1:
            if op == '+': result += last; last = num
            elif op == '-': result += last; last = -num
            elif op == '*': last *= num
            elif op == '/': last = int(last/num)
            op, num = c, 0
    return result + last`,
    },
  },




  "Build an Array With Stack Operations": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def buildArray(target, n):
    ops = []
    idx = 0
    for i in range(1, n+1):
        if idx >= len(target): break
        ops.append("Push")
        if target[idx] == i: idx += 1
        else: ops.append("Pop")
    return ops`,
    },
    better: {
      name: "Set Lookup",
      time: "O(n)",
      space: "O(n)",
      code: `def buildArray(target, n):
    ops = []
    target_set = set(target)
    for i in range(1, target[-1]+1):
        ops.append("Push")
        if i not in target_set: ops.append("Pop")
    return ops`,
    },
    optimal: {
      name: "Two Pointers",
      time: "O(n)",
      space: "O(1)",
      code: `def buildArray(target, n):
    ops = []
    j = 0
    for i in range(1, target[-1]+1):
        ops.append("Push")
        if i == target[j]: j += 1
        else: ops.append("Pop")
    return ops`,
    },
  },




  "Daily Temperatures": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def dailyTemperatures(temps):
    n = len(temps)
    result = [0] * n
    for i in range(n):
        for j in range(i+1, n):
            if temps[j] > temps[i]:
                result[i] = j - i
                break
    return result`,
    },
    better: {
      name: "Reverse Traversal",
      time: "O(n)",
      space: "O(n)",
      code: `def dailyTemperatures(temps):
    n = len(temps)
    result = [0] * n
    hottest = 0
    for i in range(n-1, -1, -1):
        if temps[i] >= hottest:
            hottest = temps[i]
            continue
        days = 1
        while temps[i+days] <= temps[i]:
            days += result[i+days]
        result[i] = days
    return result`,
    },
    optimal: {
      name: "Monotonic Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def dailyTemperatures(temps):
    n = len(temps)
    result = [0] * n
    stack = []
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            idx = stack.pop()
            result[idx] = i - idx
        stack.append(i)
    return result`,
    },
  },




  "Decode String": {
    brute: {
      name: "Brute Force",
      time: "O(n * max_k)",
      space: "O(n)",
      code: `def decodeString(s):
    while '[' in s:
        i = s.rfind('[')
        j = s.find(']', i)
        inner = s[i+1:j]
        k_start = i - 1
        while k_start >= 0 and s[k_start].isdigit(): k_start -= 1
        k = int(s[k_start+1:i])
        s = s[:k_start+1] + inner * k + s[j+1:]
    return s`,
    },
    better: {
      name: "Stack",
      time: "O(n * max_k)",
      space: "O(n)",
      code: `def decodeString(s):
    stack = []
    cur_str = ''
    cur_num = 0
    for c in s:
        if c.isdigit(): cur_num = cur_num*10 + int(c)
        elif c == '[':
            stack.append((cur_str, cur_num))
            cur_str, cur_num = '', 0
        elif c == ']':
            prev_str, num = stack.pop()
            cur_str = prev_str + cur_str * num
        else: cur_str += c
    return cur_str`,
    },
    optimal: {
      name: "Recursive",
      time: "O(n * max_k)",
      space: "O(n)",
      code: `def decodeString(s):
    def helper(i):
        result, num = '', 0
        while i < len(s):
            if s[i].isdigit(): num = num*10 + int(s[i])
            elif s[i] == '[':
                inner, i = helper(i+1)
                result += inner * num
                num = 0
            elif s[i] == ']': return result, i
            else: result += s[i]
            i += 1
        return result, i
    return helper(0)[0]`,
    },
  },




  "Design Browser History": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `class BrowserHistory:
    def __init__(self, homepage):
        self.history = [homepage]
        self.cur = 0
    def visit(self, url):
        self.history = self.history[:self.cur+1]
        self.history.append(url)
        self.cur += 1
    def back(self, steps):
        self.cur = max(0, self.cur - steps)
        return self.history[self.cur]
    def forward(self, steps):
        self.cur = min(len(self.history)-1, self.cur + steps)
        return self.history[self.cur]`,
    },
    better: {
      name: "Two Stacks",
      time: "O(1)",
      space: "O(n)",
      code: `class BrowserHistory:
    def __init__(self, homepage):
        self.back_stack = [homepage]
        self.fwd_stack = []
    def visit(self, url):
        self.back_stack.append(url)
        self.fwd_stack = []
    def back(self, steps):
        while steps > 0 and len(self.back_stack) > 1:
            self.fwd_stack.append(self.back_stack.pop())
            steps -= 1
        return self.back_stack[-1]
    def forward(self, steps):
        while steps > 0 and self.fwd_stack:
            self.back_stack.append(self.fwd_stack.pop())
            steps -= 1
        return self.back_stack[-1]`,
    },
    optimal: {
      name: "Array + Pointer",
      time: "O(1)",
      space: "O(n)",
      code: `class BrowserHistory:
    def __init__(self, homepage):
        self.urls = [homepage]
        self.cur = 0
        self.end = 0
    def visit(self, url):
        self.cur += 1
        if self.cur == len(self.urls): self.urls.append(url)
        else: self.urls[self.cur] = url
        self.end = self.cur
    def back(self, steps):
        self.cur = max(0, self.cur - steps)
        return self.urls[self.cur]
    def forward(self, steps):
        self.cur = min(self.end, self.cur + steps)
        return self.urls[self.cur]`,
    },
  },




  "Design Circular Deque": {
    brute: {
      name: "Brute Force",
      time: "O(n) per insert/delete",
      space: "O(k)",
      code: `class MyCircularDeque:
    def __init__(self, k):
        self.data = []
        self.cap = k
    def insertFront(self, value):
        if len(self.data) == self.cap: return False
        self.data.insert(0, value); return True
    def insertLast(self, value):
        if len(self.data) == self.cap: return False
        self.data.append(value); return True
    def deleteFront(self):
        if not self.data: return False
        self.data.pop(0); return True
    def deleteLast(self):
        if not self.data: return False
        self.data.pop(); return True
    def getFront(self): return self.data[0] if self.data else -1
    def getRear(self): return self.data[-1] if self.data else -1
    def isEmpty(self): return not self.data
    def isFull(self): return len(self.data) == self.cap`,
    },
    better: {
      name: "Doubly Linked List",
      time: "O(1)",
      space: "O(k)",
      code: `class Node:
    def __init__(self, v=0): self.val, self.prev, self.next = v, None, None
class MyCircularDeque:
    def __init__(self, k):
        self.cap, self.size = k, 0
        self.head, self.tail = Node(), Node()
        self.head.next, self.tail.prev = self.tail, self.head
    def insertFront(self, value):
        if self.size == self.cap: return False
        n = Node(value)
        n.next, n.prev = self.head.next, self.head
        self.head.next.prev = n; self.head.next = n
        self.size += 1; return True
    def insertLast(self, value):
        if self.size == self.cap: return False
        n = Node(value)
        n.prev, n.next = self.tail.prev, self.tail
        self.tail.prev.next = n; self.tail.prev = n
        self.size += 1; return True
    def deleteFront(self):
        if not self.size: return False
        self.head.next = self.head.next.next
        self.head.next.prev = self.head
        self.size -= 1; return True
    def deleteLast(self):
        if not self.size: return False
        self.tail.prev = self.tail.prev.prev
        self.tail.prev.next = self.tail
        self.size -= 1; return True
    def getFront(self): return self.head.next.val if self.size else -1
    def getRear(self): return self.tail.prev.val if self.size else -1
    def isEmpty(self): return self.size == 0
    def isFull(self): return self.size == self.cap`,
    },
    optimal: {
      name: "Circular Array",
      time: "O(1)",
      space: "O(k)",
      code: `class MyCircularDeque:
    def __init__(self, k):
        self.arr = [0]*(k+1)
        self.cap = k+1
        self.front = 0
        self.rear = 0
    def insertFront(self, value):
        if self.isFull(): return False
        self.front = (self.front-1) % self.cap
        self.arr[self.front] = value; return True
    def insertLast(self, value):
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear+1) % self.cap; return True
    def deleteFront(self):
        if self.isEmpty(): return False
        self.front = (self.front+1) % self.cap; return True
    def deleteLast(self):
        if self.isEmpty(): return False
        self.rear = (self.rear-1) % self.cap; return True
    def getFront(self): return -1 if self.isEmpty() else self.arr[self.front]
    def getRear(self): return -1 if self.isEmpty() else self.arr[(self.rear-1)%self.cap]
    def isEmpty(self): return self.front == self.rear
    def isFull(self): return (self.rear+1)%self.cap == self.front`,
    },
  },




  "Design Circular Queue": {
    brute: {
      name: "Brute Force",
      time: "O(n) per enqueue",
      space: "O(k)",
      code: `class MyCircularQueue:
    def __init__(self, k):
        self.data = []
        self.cap = k
    def enQueue(self, value):
        if len(self.data) == self.cap: return False
        self.data.append(value); return True
    def deQueue(self):
        if not self.data: return False
        self.data.pop(0); return True
    def Front(self): return self.data[0] if self.data else -1
    def Rear(self): return self.data[-1] if self.data else -1
    def isEmpty(self): return not self.data
    def isFull(self): return len(self.data) == self.cap`,
    },
    better: {
      name: "Linked List",
      time: "O(1)",
      space: "O(k)",
      code: `class Node:
    def __init__(self, v): self.val, self.next = v, None
class MyCircularQueue:
    def __init__(self, k):
        self.cap, self.size = k, 0
        self.head = self.tail = None
    def enQueue(self, value):
        if self.size == self.cap: return False
        node = Node(value)
        if not self.head: self.head = self.tail = node
        else: self.tail.next = node; self.tail = node
        self.size += 1; return True
    def deQueue(self):
        if not self.size: return False
        self.head = self.head.next
        self.size -= 1; return True
    def Front(self): return self.head.val if self.head else -1
    def Rear(self): return self.tail.val if self.tail else -1
    def isEmpty(self): return self.size == 0
    def isFull(self): return self.size == self.cap`,
    },
    optimal: {
      name: "Circular Array",
      time: "O(1)",
      space: "O(k)",
      code: `class MyCircularQueue:
    def __init__(self, k):
        self.arr = [0] * k
        self.cap, self.size = k, 0
        self.front = 0
    def enQueue(self, value):
        if self.isFull(): return False
        self.arr[(self.front+self.size) % self.cap] = value
        self.size += 1; return True
    def deQueue(self):
        if self.isEmpty(): return False
        self.front = (self.front+1) % self.cap
        self.size -= 1; return True
    def Front(self): return -1 if self.isEmpty() else self.arr[self.front]
    def Rear(self): return -1 if self.isEmpty() else self.arr[(self.front+self.size-1)%self.cap]
    def isEmpty(self): return self.size == 0
    def isFull(self): return self.size == self.cap`,
    },
  },




  "Evaluate Reverse Polish Notation": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def evalRPN(tokens):
    while len(tokens) > 1:
        for i in range(len(tokens)):
            if tokens[i] in '+-*/':
                a, b = int(tokens[i-2]), int(tokens[i-1])
                if tokens[i]=='+': res = a+b
                elif tokens[i]=='-': res = a-b
                elif tokens[i]=='*': res = a*b
                else: res = int(a/b)
                tokens = tokens[:i-2] + [str(res)] + tokens[i+1:]
                break
    return int(tokens[0])`,
    },
    better: {
      name: "Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def evalRPN(tokens):
    stack = []
    ops = {'+': lambda a,b: a+b, '-': lambda a,b: a-b,
           '*': lambda a,b: a*b, '/': lambda a,b: int(a/b)}
    for t in tokens:
        if t in ops:
            b, a = stack.pop(), stack.pop()
            stack.append(ops[t](a, b))
        else:
            stack.append(int(t))
    return stack[0]`,
    },
    optimal: {
      name: "Stack (Concise)",
      time: "O(n)",
      space: "O(n)",
      code: `def evalRPN(tokens):
    stack = []
    for t in tokens:
        if t in '+-*/' and len(t) == 1:
            b, a = stack.pop(), stack.pop()
            if t == '+': stack.append(a+b)
            elif t == '-': stack.append(a-b)
            elif t == '*': stack.append(a*b)
            else: stack.append(int(a/b))
        else: stack.append(int(t))
    return stack[0]`,
    },
  },




  "Flatten Nested List Iterator": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `class NestedIterator:
    def __init__(self, nestedList):
        self.flat = []
        def flatten(lst):
            for item in lst:
                if item.isInteger(): self.flat.append(item.getInteger())
                else: flatten(item.getList())
        flatten(nestedList)
        self.idx = 0
    def next(self):
        val = self.flat[self.idx]
        self.idx += 1
        return val
    def hasNext(self): return self.idx < len(self.flat)`,
    },
    better: {
      name: "Generator",
      time: "O(1) per call",
      space: "O(d)",
      code: `class NestedIterator:
    def __init__(self, nestedList):
        def gen(lst):
            for item in lst:
                if item.isInteger(): yield item.getInteger()
                else: yield from gen(item.getList())
        self.iter = gen(nestedList)
        self.val = None
        self._advance()
    def _advance(self):
        try: self.val = next(self.iter)
        except StopIteration: self.val = None
    def next(self):
        result = self.val
        self._advance()
        return result
    def hasNext(self): return self.val is not None`,
    },
    optimal: {
      name: "Stack Iterator",
      time: "O(1) amortized",
      space: "O(d)",
      code: `class NestedIterator:
    def __init__(self, nestedList):
        self.stack = list(reversed(nestedList))
    def next(self):
        return self.stack.pop().getInteger()
    def hasNext(self):
        while self.stack:
            top = self.stack[-1]
            if top.isInteger(): return True
            self.stack.pop()
            self.stack.extend(reversed(top.getList()))
        return False`,
    },
  },




  "Maximum Width Ramp": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(1)",
      code: `def maxWidthRamp(nums):
    res = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] <= nums[j]:
                res = max(res, j - i)
    return res`,
    },
    better: {
      name: "Sort by Value",
      time: "O(n log n)",
      space: "O(n)",
      code: `def maxWidthRamp(nums):
    indices = sorted(range(len(nums)), key=lambda i: (nums[i], i))
    res = 0
    min_idx = indices[0]
    for i in indices:
        res = max(res, i - min_idx)
        min_idx = min(min_idx, i)
    return res`,
    },
    optimal: {
      name: "Monotonic Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def maxWidthRamp(nums):
    stack = []
    for i, num in enumerate(nums):
        if not stack or nums[stack[-1]] > num:
            stack.append(i)
    res = 0
    for j in range(len(nums)-1, -1, -1):
        while stack and nums[stack[-1]] <= nums[j]:
            res = max(res, j - stack.pop())
    return res`,
    },
  },




  "Min Stack": {
    brute: {
      name: "Brute Force",
      time: "O(n) getMin",
      space: "O(n)",
      code: `class MinStack:
    def __init__(self): self.stack = []
    def push(self, val): self.stack.append(val)
    def pop(self): self.stack.pop()
    def top(self): return self.stack[-1]
    def getMin(self): return min(self.stack)`,
    },
    better: {
      name: "Two Stacks",
      time: "O(1)",
      space: "O(n)",
      code: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val):
        self.stack.append(val)
        self.min_stack.append(min(val, self.min_stack[-1] if self.min_stack else val))
    def pop(self):
        self.stack.pop()
        self.min_stack.pop()
    def top(self): return self.stack[-1]
    def getMin(self): return self.min_stack[-1]`,
    },
    optimal: {
      name: "Single Stack (Tuple)",
      time: "O(1)",
      space: "O(n)",
      code: `class MinStack:
    def __init__(self): self.stack = []
    def push(self, val):
        cur_min = min(val, self.stack[-1][1] if self.stack else val)
        self.stack.append((val, cur_min))
    def pop(self): self.stack.pop()
    def top(self): return self.stack[-1][0]
    def getMin(self): return self.stack[-1][1]`,
    },
  },




  "Next Greater Element II": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def nextGreaterElements(nums):
    n = len(nums)
    result = [-1] * n
    for i in range(n):
        for j in range(1, n):
            if nums[(i+j) % n] > nums[i]:
                result[i] = nums[(i+j) % n]
                break
    return result`,
    },
    better: {
      name: "Double Array + Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def nextGreaterElements(nums):
    n = len(nums)
    result = [-1] * n
    stack = []
    doubled = nums + nums
    for i in range(2*n):
        while stack and doubled[stack[-1]] < doubled[i]:
            idx = stack.pop()
            if idx < n: result[idx] = doubled[i]
        stack.append(i)
    return result`,
    },
    optimal: {
      name: "Monotonic Stack (Circular)",
      time: "O(n)",
      space: "O(n)",
      code: `def nextGreaterElements(nums):
    n = len(nums)
    result = [-1] * n
    stack = []
    for i in range(2*n - 1, -1, -1):
        while stack and stack[-1] <= nums[i % n]:
            stack.pop()
        if stack: result[i % n] = stack[-1]
        stack.append(nums[i % n])
    return result`,
    },
  },




  "Online Stock Span": {
    brute: {
      name: "Brute Force",
      time: "O(n) per call",
      space: "O(n)",
      code: `class StockSpanner:
    def __init__(self): self.prices = []
    def next(self, price):
        self.prices.append(price)
        span = 1
        i = len(self.prices) - 2
        while i >= 0 and self.prices[i] <= price:
            span += 1; i -= 1
        return span`,
    },
    better: {
      name: "Stack (Price + Count)",
      time: "O(1) amortized",
      space: "O(n)",
      code: `class StockSpanner:
    def __init__(self): self.stack = []
    def next(self, price):
        span = 1
        while self.stack and self.stack[-1][0] <= price:
            span += self.stack.pop()[1]
        self.stack.append((price, span))
        return span`,
    },
    optimal: {
      name: "Monotonic Stack + Index",
      time: "O(1) amortized",
      space: "O(n)",
      code: `class StockSpanner:
    def __init__(self):
        self.stack = []
        self.idx = -1
    def next(self, price):
        self.idx += 1
        while self.stack and self.stack[-1][0] <= price:
            self.stack.pop()
        span = self.idx - self.stack[-1][1] if self.stack else self.idx + 1
        self.stack.append((price, self.idx))
        return span`,
    },
  },




  "Remove K Digits": {
    brute: {
      name: "Brute Force",
      time: "O(n * k)",
      space: "O(n)",
      code: `def removeKdigits(num, k):
    for _ in range(k):
        removed = False
        for i in range(len(num)-1):
            if num[i] > num[i+1]:
                num = num[:i] + num[i+1:]
                removed = True
                break
        if not removed: num = num[:-1]
    return num.lstrip('0') or '0'`,
    },
    better: {
      name: "Stack (Greedy)",
      time: "O(n)",
      space: "O(n)",
      code: `def removeKdigits(num, k):
    stack = []
    for d in num:
        while k and stack and stack[-1] > d:
            stack.pop()
            k -= 1
        stack.append(d)
    while k: stack.pop(); k -= 1
    return ''.join(stack).lstrip('0') or '0'`,
    },
    optimal: {
      name: "Monotonic Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def removeKdigits(num, k):
    stack = []
    for digit in num:
        while k > 0 and stack and stack[-1] > digit:
            stack.pop(); k -= 1
        stack.append(digit)
    result = ''.join(stack[:len(stack)-k]).lstrip('0')
    return result or '0'`,
    },
  },




  "Score of Parentheses": {
    brute: {
      name: "Brute Force",
      time: "O(n^2)",
      space: "O(n)",
      code: `def scoreOfParentheses(s):
    while '()' in s:
        s = s.replace('()', '1')
        # Combine adjacent numbers and multiply nested
        new_s = ''
        for c in s:
            new_s += c
        s = new_s
    # Evaluate using recursion
    def score(s, l, r):
        if r - l == 2: return 1
        bal, mid = 0, l
        for i in range(l, r):
            if s[i] == '(': bal += 1
            elif s[i] == ')': bal -= 1
            if bal == 0:
                if i == l+1: return 1 + score(s, i+1, r) if i+1<r else 1
                return 2*score(s, l+1, i) + (score(s, i+1, r) if i+1<r else 0)
        return 0
    return score(s, 0, len(s))`,
    },
    better: {
      name: "Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def scoreOfParentheses(s):
    stack = [0]
    for c in s:
        if c == '(':
            stack.append(0)
        else:
            v = stack.pop()
            stack[-1] += max(2 * v, 1)
    return stack[0]`,
    },
    optimal: {
      name: "Depth Counting",
      time: "O(n)",
      space: "O(1)",
      code: `def scoreOfParentheses(s):
    depth = result = 0
    for i, c in enumerate(s):
        if c == '(': depth += 1
        else:
            depth -= 1
            if s[i-1] == '(':
                result += 2 ** depth
    return result`,
    },
  },




  "Simplify Path": {
    brute: {
      name: "Brute Force",
      time: "O(n)",
      space: "O(n)",
      code: `def simplifyPath(path):
    parts = path.split('/')
    result = []
    for part in parts:
        if part == '' or part == '.': continue
        elif part == '..':
            if result: result.pop()
        else: result.append(part)
    return '/' + '/'.join(result)`,
    },
    better: {
      name: "Stack",
      time: "O(n)",
      space: "O(n)",
      code: `def simplifyPath(path):
    stack = []
    for component in path.split('/'):
        if component == '..':
            if stack: stack.pop()
        elif component and component != '.':
            stack.append(component)
    return '/' + '/'.join(stack)`,
    },
    optimal: {
      name: "Stack (Concise)",
      time: "O(n)",
      space: "O(n)",
      code: `def simplifyPath(path):
    stack = []
    for p in path.split('/'):
        if p == '..': stack and stack.pop()
        elif p and p != '.': stack.append(p)
    return '/' + '/'.join(stack)`,
    },
  },


};
