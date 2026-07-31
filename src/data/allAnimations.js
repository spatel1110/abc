/**
 * Master animation config for all 188 problems.
 * Each problem has: title, pattern, explanation, steps[]
 * Steps use visualization types: array, string, bars, hashmap, stack, queue, matrix, pointers, twoarray, info
 */

import { listsAnimations } from './listsAnimations';


export const stringsAnimations = {
"Add Binary": { title:"Add Binary", pattern:"Right-to-Left Addition", explanation:"Add binary strings from right to left, carrying over 1s just like decimal addition.", difficulty:"Easy", steps:[
  {type:"string",data:"1 1 0 + 1",highlights:[],pointers:[],desc:"a='11', b='1'. Add binary strings."},
  {type:"string",data:"  1 1 0",highlights:[2],pointers:[],desc:"Position 0: 0+1=1, carry=0",vars:{carry:0}},
  {type:"string",data:"  1 1 0",highlights:[1],pointers:[],desc:"Position 1: 1+0=1, carry=0",vars:{carry:0}},
  {type:"string",data:"  1 0 0",highlights:[0],pointers:[],desc:"Position 2: 1+0=1, carry=0",vars:{carry:0}},
  {type:"info",visual:"Result: '100'",desc:"Answer: '100' ✓",vars:{result:"100"}}
]},
"First Unique Character in a String": { title:"First Unique Character", pattern:"Frequency Count", explanation:"Count character frequencies, then find first char with count 1.", difficulty:"Easy", steps:[
  {type:"string",data:"leetcode",highlights:[],pointers:[],desc:"Find first non-repeating character"},
  {type:"hashmap",data:[{key:"l",value:1},{key:"e",value:3},{key:"t",value:1},{key:"c",value:1},{key:"o",value:1},{key:"d",value:1}],highlights:[],desc:"Count frequencies"},
  {type:"string",data:"leetcode",highlights:[0],pointers:[{idx:0,label:"✓",color:"var(--accent-green)"}],desc:"'l' has count 1 → first unique! Index 0 ✓",vars:{result:0}}
]},
"Implement strStr()": { title:"Implement strStr()", pattern:"Sliding Window / KMP", explanation:"Find first occurrence of needle in haystack. Slide needle along haystack comparing characters.", difficulty:"Easy", steps:[
  {type:"string",data:"hello",highlights:[],pointers:[],desc:"haystack='hello', needle='ll'"},
  {type:"string",data:"hello",window:[0,1],pointers:[],desc:"Compare 'he' vs 'll' → no match"},
  {type:"string",data:"hello",window:[1,2],pointers:[],desc:"Compare 'el' vs 'll' → no match"},
  {type:"string",data:"hello",window:[2,3],highlights:[2,3],pointers:[],desc:"Compare 'll' vs 'll' → MATCH! Index=2 ✓",vars:{result:2}}
]},
"Is Subsequence": { title:"Is Subsequence", pattern:"Two Pointers", explanation:"Use one pointer for each string. Advance t-pointer always, advance s-pointer only on match.", difficulty:"Easy", steps:[
  {type:"string",data:"ahbgdc",highlights:[],pointers:[],desc:"Is 'abc' a subsequence of 'ahbgdc'?"},
  {type:"string",data:"ahbgdc",highlights:[0],pointers:[{idx:0,label:"✓a",color:"var(--accent-green)"}],desc:"Found 'a' at index 0",vars:{matched:"a"}},
  {type:"string",data:"ahbgdc",highlights:[2],pointers:[{idx:2,label:"✓b",color:"var(--accent-green)"}],desc:"Found 'b' at index 2",vars:{matched:"ab"}},
  {type:"string",data:"ahbgdc",highlights:[5],pointers:[{idx:5,label:"✓c",color:"var(--accent-green)"}],desc:"Found 'c' at index 5. All matched! ✓",vars:{result:true}}
]},
"Longest Common Prefix": { title:"Longest Common Prefix", pattern:"Vertical Scan", explanation:"Compare characters at same position across all strings. Stop at first mismatch.", difficulty:"Easy", steps:[
  {type:"info",visual:'["flower","flow","flight"]',desc:"Find longest common prefix"},
  {type:"string",data:"flower",highlights:[0],pointers:[{idx:0,label:"col",color:"var(--accent-blue)"}],desc:"Col 0: f,f,f → all match",vars:{prefix:"f"}},
  {type:"string",data:"flower",highlights:[1],pointers:[{idx:1,label:"col",color:"var(--accent-blue)"}],desc:"Col 1: l,l,l → all match",vars:{prefix:"fl"}},
  {type:"string",data:"flower",highlights:[2],pointers:[{idx:2,label:"col",color:"var(--accent-red)"}],desc:"Col 2: o,o,i → mismatch! Stop.",vars:{prefix:"fl"}},
  {type:"info",visual:"Result: 'fl'",desc:"Answer: 'fl' ✓",vars:{result:"fl"}}
]},

"Reverse String": { title:"Reverse String", pattern:"Two Pointers", explanation:"Swap characters from both ends moving inward until pointers meet.", difficulty:"Easy", steps:[
  {type:"string",data:"hello",highlights:[],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}],desc:"Reverse in-place using two pointers"},
  {type:"string",data:"oellh",highlights:[0,4],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}],desc:"Swap h↔o"},
  {type:"string",data:"olleh",highlights:[1,3],pointers:[{idx:1,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}],desc:"Swap e↔l"},
  {type:"string",data:"olleh",highlights:[0,1,2,3,4],pointers:[],desc:"Done! 'olleh' ✓"}
]},
"Reverse Vowels of a String": { title:"Reverse Vowels", pattern:"Two Pointers", explanation:"Two pointers from ends, skip non-vowels, swap vowels when both found.", difficulty:"Easy", steps:[
  {type:"string",data:"hello",highlights:[],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}],desc:"Reverse only vowels: 'hello'"},
  {type:"string",data:"hello",highlights:[1,4],pointers:[{idx:1,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}],desc:"Found vowels: e(1) and o(4). Swap!"},
  {type:"string",data:"holle",highlights:[0,1,2,3,4],pointers:[],desc:"Result: 'holle' ✓"}
]},
"Roman to Integer": { title:"Roman to Integer", pattern:"Greedy Scan", explanation:"Scan right-to-left. If current < next, subtract it; otherwise add it.", difficulty:"Easy", steps:[
  {type:"string",data:"MCMXCIV",highlights:[],pointers:[],desc:"Convert Roman numeral to integer"},
  {type:"string",data:"MCMXCIV",highlights:[0],pointers:[],desc:"M=1000, add",vars:{result:1000}},
  {type:"string",data:"MCMXCIV",highlights:[1],pointers:[],desc:"C=100 < M=1000, subtract 100",vars:{result:900}},
  {type:"string",data:"MCMXCIV",highlights:[2],pointers:[],desc:"M=1000, add",vars:{result:1900}},
  {type:"string",data:"MCMXCIV",highlights:[3],pointers:[],desc:"X=10 < C=100, subtract",vars:{result:1890}},
  {type:"string",data:"MCMXCIV",highlights:[4],pointers:[],desc:"C=100, add",vars:{result:1990}},
  {type:"string",data:"MCMXCIV",highlights:[5],pointers:[],desc:"I=1 < V=5, subtract",vars:{result:1989}},
  {type:"string",data:"MCMXCIV",highlights:[6],pointers:[],desc:"V=5, add → 1994 ✓",vars:{result:1994}}
]},
"Student Attendance Record I": { title:"Student Attendance Record I", pattern:"Linear Scan", explanation:"Count A's (must be <2) and check for 3+ consecutive L's.", difficulty:"Easy", steps:[
  {type:"string",data:"PPALLP",highlights:[],pointers:[],desc:"Check: <2 A's AND no 3+ consecutive L's"},
  {type:"string",data:"PPALLP",highlights:[2],pointers:[],desc:"Found A at index 2 (count=1 < 2, OK)",vars:{a_count:1,consec_l:0}},
  {type:"string",data:"PPALLP",highlights:[3,4],pointers:[],desc:"L,L consecutive (count=2 < 3, OK)",vars:{a_count:1,consec_l:2}},
  {type:"string",data:"PPALLP",highlights:[5],pointers:[],desc:"P resets L count. Result: true ✓",vars:{result:true}}
]},
"Valid Palindrome": { title:"Valid Palindrome", pattern:"Two Pointers", explanation:"Skip non-alphanumeric, compare lowercase chars from both ends.", difficulty:"Easy", steps:[
  {type:"string",data:"A man, a plan, a canal: Panama",highlights:[],pointers:[],desc:"Ignore non-alphanumeric, check if palindrome"},
  {type:"string",data:"amanaplanacanalpanama",highlights:[],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:20,label:"R",color:"var(--accent-green)"}],desc:"Clean: 'amanaplanacanalpanama'"},
  {type:"string",data:"amanaplanacanalpanama",highlights:[0,20],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:20,label:"R",color:"var(--accent-green)"}],desc:"'a'=='a' ✓, move inward"},
  {type:"string",data:"amanaplanacanalpanama",highlights:[9,10],pointers:[{idx:9,label:"L",color:"var(--accent-blue)"},{idx:10,label:"R",color:"var(--accent-green)"}],desc:"All pairs match! It IS a palindrome ✓",vars:{result:true}}
]},
"Valid Palindrome II": { title:"Valid Palindrome II", pattern:"Two Pointers + Skip", explanation:"Normal palindrome check. On mismatch, try skipping left OR right character.", difficulty:"Easy", steps:[
  {type:"string",data:"abca",highlights:[],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}],desc:"Can we make palindrome by removing at most 1 char?"},
  {type:"string",data:"abca",highlights:[1,2],pointers:[{idx:1,label:"L",color:"var(--accent-blue)"},{idx:2,label:"R",color:"var(--accent-green)"}],desc:"a==a ✓. Now b≠c. Try skip left(b) or right(c)"},
  {type:"string",data:"abca",highlights:[2,2],pointers:[],desc:"Skip left: check 'ca'→no. Skip right: check 'bc'→no. Try 'a' ✓"},
  {type:"info",visual:"Remove 'b' → 'aca' is palindrome!",desc:"Answer: true ✓",vars:{result:true}}
]},

"Edit Distance": { title:"Edit Distance", pattern:"2D Dynamic Programming", explanation:"dp[i][j] = min operations to convert word1[:i] to word2[:j]. Three choices: insert, delete, replace.", difficulty:"Hard", steps:[
  {type:"info",visual:"word1='horse', word2='ros'",desc:"Min edits to convert 'horse' → 'ros'"},
  {type:"matrix",data:[["","r","o","s"],["h",1,1,1],["o",1,1,2],["r",1,2,2],["s",2,2,2],["e",2,2,3]],highlights:[[5,3]],desc:"DP table filled. dp[5][3] = 3 operations"},
  {type:"info",visual:"horse → rorse (replace h→r)\nrorse → rose (delete r)\nrose → ros (delete e)",desc:"Answer: 3 operations ✓",vars:{result:3}}
]},
"Minimum Window Substring": { title:"Minimum Window Substring", pattern:"Sliding Window + Hash Map", explanation:"Expand right to include all chars of t. Then shrink left to find minimum window.", difficulty:"Hard", steps:[
  {type:"string",data:"ADOBECODEBANC",highlights:[],pointers:[],desc:"s='ADOBECODEBANC', t='ABC'. Find min window containing all of t."},
  {type:"string",data:"ADOBECODEBANC",window:[0,1,2,3,4,5],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:5,label:"R",color:"var(--accent-green)"}],desc:"'ADOBEC' contains A,B,C! Length=6",vars:{min:6}},
  {type:"string",data:"ADOBECODEBANC",window:[9,10,11,12],pointers:[{idx:9,label:"L",color:"var(--accent-blue)"},{idx:12,label:"R",color:"var(--accent-green)"}],desc:"'BANC' contains A,B,C! Length=4",vars:{min:4}},
  {type:"string",data:"ADOBECODEBANC",sorted:[9,10,11,12],pointers:[],desc:"Answer: 'BANC' (length 4) ✓",vars:{result:"BANC"}}
]},
"Regular Expression Matching": { title:"Regular Expression Matching", pattern:"2D DP / Recursion", explanation:"'.' matches any char. '*' means zero or more of previous. Use DP table.", difficulty:"Hard", steps:[
  {type:"info",visual:"s='aab', p='c*a*b'",desc:"Does pattern match entire string?"},
  {type:"info",visual:"c* = zero c's ✓\na* = two a's ✓\nb = one b ✓",desc:"c*→'', a*→'aa', b→'b' matches 'aab'"},
  {type:"info",visual:"Result: True",desc:"Answer: true ✓",vars:{result:true}}
]},
"Substring with Concatenation of All Words": { title:"Substring with Concatenation of All Words", pattern:"Sliding Window + Word Map", explanation:"Slide a window of total word length, check if it contains exact word frequencies.", difficulty:"Hard", steps:[
  {type:"string",data:"barfoothefoobarman",highlights:[],pointers:[],desc:"words=['foo','bar']. Find all starting indices."},
  {type:"string",data:"barfoothefoobarman",window:[0,1,2,3,4,5],pointers:[],desc:"'barfoo': has 'bar'+'foo' ✓ Index 0!",vars:{found:[0]}},
  {type:"string",data:"barfoothefoobarman",window:[9,10,11,12,13,14],pointers:[],desc:"'foobar': has 'foo'+'bar' ✓ Index 9!",vars:{found:[0,9]}},
  {type:"info",visual:"Result: [0, 9]",desc:"Answer: [0, 9] ✓",vars:{result:"[0,9]"}}
]},
"Wildcard Matching": { title:"Wildcard Matching", pattern:"DP / Greedy", explanation:"'?' matches one char, '*' matches any sequence. Use DP or greedy backtracking.", difficulty:"Hard", steps:[
  {type:"info",visual:"s='adceb', p='*a*b'",desc:"Does wildcard pattern match string?"},
  {type:"string",data:"adceb",highlights:[0,4],pointers:[],desc:"*→'', a→'a', *→'dce', b→'b'. Match!"},
  {type:"info",visual:"Result: True",desc:"Answer: true ✓",vars:{result:true}}
]},
"Bulls and Cows": { title:"Bulls and Cows", pattern:"Frequency Count", explanation:"Bulls = exact position matches. Cows = correct digit, wrong position (use frequency count).", difficulty:"Medium", steps:[
  {type:"string",data:"1807",highlights:[],pointers:[],desc:"secret='1807', guess='7810'"},
  {type:"string",data:"1807",highlights:[1],pointers:[{idx:1,label:"bull",color:"var(--accent-green)"}],desc:"Position 1: 8==8 → 1 bull",vars:{bulls:1}},
  {type:"info",visual:"Remaining: 1_07 vs 7_10\nMatched digits in wrong spots: 0,1 → 2 cows",desc:"2 cows (0 and 1 present but wrong position)"},
  {type:"info",visual:"Result: '1A2B'",desc:"Answer: '1A2B' (1 bull, 2 cows) ✓",vars:{result:"1A2B"}}
]},

"Check Inclusion": { title:"Check Inclusion", pattern:"Sliding Window + Frequency", explanation:"Slide window of size len(s1) over s2. Compare character frequencies.", difficulty:"Medium", steps:[
  {type:"string",data:"eidbaooo",highlights:[],pointers:[],desc:"s1='ab', s2='eidbaooo'. Is permutation of s1 in s2?"},
  {type:"string",data:"eidbaooo",window:[2,3],pointers:[],desc:"'db': freq doesn't match 'ab'"},
  {type:"string",data:"eidbaooo",window:[3,4],highlights:[3,4],pointers:[],desc:"'ba': freq matches 'ab'! ✓",vars:{result:true}}
]},
"Compare Version Numbers": { title:"Compare Version Numbers", pattern:"Split + Compare", explanation:"Split by '.', compare each revision level as integers.", difficulty:"Medium", steps:[
  {type:"info",visual:"v1='1.01', v2='1.001'",desc:"Compare version numbers"},
  {type:"info",visual:"Split: [1,01] vs [1,001]\nCompare: 1==1, 1==1",desc:"All equal → return 0 ✓",vars:{result:0}}
]},
"Count Occurrences of Anagram": { title:"Count Anagram Occurrences", pattern:"Sliding Window + Freq Match", explanation:"Slide window of pattern length, count windows where frequencies match pattern.", difficulty:"Medium", steps:[
  {type:"string",data:"cbaebabacd",highlights:[],pointers:[],desc:"pattern='abc'. Count anagram occurrences."},
  {type:"string",data:"cbaebabacd",window:[0,1,2],highlights:[0,1,2],pointers:[],desc:"'cba' is anagram of 'abc' ✓",vars:{count:1}},
  {type:"string",data:"cbaebabacd",window:[6,7,8],highlights:[6,7,8],pointers:[],desc:"'bac' is anagram of 'abc' ✓",vars:{count:2}},
  {type:"info",visual:"Result: 2",desc:"Answer: 2 ✓",vars:{result:2}}
]},
"Count and Say": { title:"Count and Say", pattern:"String Simulation", explanation:"Each term describes the previous: count consecutive same digits.", difficulty:"Medium", steps:[
  {type:"info",visual:"1 → '1'\n'1' → '11' (one 1)\n'11' → '21' (two 1s)\n'21' → '1211' (one 2, one 1)",desc:"Build sequence by describing previous term"},
  {type:"string",data:"1211",highlights:[],pointers:[],desc:"n=4: '1211' (one 2, one 1, one 1)",vars:{result:"1211"}}
]},
"Decode Ways": { title:"Decode Ways", pattern:"1D Dynamic Programming", explanation:"dp[i] = ways to decode s[:i]. Check if last 1 or 2 digits form valid letters (1-26).", difficulty:"Medium", steps:[
  {type:"string",data:"226",highlights:[],pointers:[],desc:"How many ways to decode? (1=A, 2=B, ..., 26=Z)"},
  {type:"string",data:"226",highlights:[0],pointers:[],desc:"'2'→B: dp[1]=1",vars:{dp:"[1,1,_,_]"}},
  {type:"string",data:"226",highlights:[0,1],pointers:[],desc:"'22'→BB or V: dp[2]=2",vars:{dp:"[1,1,2,_]"}},
  {type:"string",data:"226",highlights:[0,1,2],pointers:[],desc:"'226': '2-2-6'(BBF),'22-6'(VF),'2-26'(BZ): dp[3]=3",vars:{dp:"[1,1,2,3]"}},
  {type:"info",visual:"Result: 3",desc:"Answer: 3 ways ✓",vars:{result:3}}
]},
"Encode and Decode Strings": { title:"Encode and Decode Strings", pattern:"Length Prefix", explanation:"Encode each string as 'length#string'. Decode by reading length, then extracting that many chars.", difficulty:"Medium", steps:[
  {type:"info",visual:'Input: ["hello","world"]\nEncode: "5#hello5#world"',desc:"Encode list of strings into single string"},
  {type:"info",visual:'Decode: read 5→"hello", read 5→"world"',desc:"Decode back to original list ✓"}
]},
"Find All Anagrams in a String": { title:"Find All Anagrams", pattern:"Sliding Window", explanation:"Slide window of len(p) over s. Use frequency array to check anagram match.", difficulty:"Medium", steps:[
  {type:"string",data:"cbaebabacd",highlights:[],pointers:[],desc:"s='cbaebabacd', p='abc'. Find all anagram start indices."},
  {type:"string",data:"cbaebabacd",window:[0,1,2],highlights:[0,1,2],pointers:[],desc:"'cba' matches freq of 'abc' ✓ Index 0",vars:{result:[0]}},
  {type:"string",data:"cbaebabacd",window:[6,7,8],highlights:[6,7,8],pointers:[],desc:"'bac' matches freq of 'abc' ✓ Index 6",vars:{result:[0,6]}},
  {type:"info",visual:"Result: [0, 6]",desc:"Answer: [0, 6] ✓"}
]},
"Generate Parentheses": { title:"Generate Parentheses", pattern:"Backtracking", explanation:"Build valid combos: add '(' if open<n, add ')' if close<open. Recurse.", difficulty:"Medium", steps:[
  {type:"info",visual:"n=3. Generate all valid parentheses combinations.",desc:"Use backtracking with open/close counts"},
  {type:"stack",data:["(","(","(",")",")",")"],highlights:[0,1,2],desc:"Build: '((()))' — always valid if close≤open≤n"},
  {type:"info",visual:'["((()))","(()())","(())()","()(())","()()()"]',desc:"Answer: 5 combinations for n=3 ✓",vars:{count:5}}
]},

"Get Equal Substrings Within Budget": { title:"Get Equal Substrings Within Budget", pattern:"Sliding Window", explanation:"Cost to change s[i]→t[i] is |s[i]-t[i]|. Find longest window with total cost ≤ maxCost.", difficulty:"Medium", steps:[
  {type:"string",data:"abcd",highlights:[],pointers:[],desc:"s='abcd',t='bcdf',maxCost=3"},
  {type:"array",data:[1,1,1,2],highlights:[],pointers:[],desc:"Costs: |a-b|=1, |b-c|=1, |c-d|=1, |d-f|=2"},
  {type:"array",data:[1,1,1,2],window:[0,1,2],pointers:[],desc:"Window [0..2]: cost=3 ≤ 3, length=3!",vars:{cost:3,max:3}},
  {type:"info",visual:"Result: 3",desc:"Answer: 3 ✓",vars:{result:3}}
]},
"Integer to Roman": { title:"Integer to Roman", pattern:"Greedy (Largest First)", explanation:"Greedily subtract largest Roman value that fits, append its symbol.", difficulty:"Medium", steps:[
  {type:"info",visual:"num=1994\nValues: M=1000, CM=900, D=500, CD=400, C=100, XC=90...",desc:"Convert integer to Roman numeral"},
  {type:"info",visual:"1994 - 1000 = 994 → 'M'\n994 - 900 = 94 → 'CM'\n94 - 90 = 4 → 'XC'\n4 - 4 = 0 → 'IV'",desc:"Answer: 'MCMXCIV' ✓",vars:{result:"MCMXCIV"}}
]},
"Letter Combinations of a Phone Number": { title:"Letter Combinations of Phone", pattern:"Backtracking / BFS", explanation:"Map each digit to letters. Generate all combinations by choosing one letter per digit.", difficulty:"Medium", steps:[
  {type:"info",visual:"digits='23'\n2→'abc', 3→'def'",desc:"Generate all letter combinations"},
  {type:"info",visual:"Choose from 'abc': a,b,c\nFor each, choose from 'def': d,e,f",desc:"3×3 = 9 combinations"},
  {type:"info",visual:'["ad","ae","af","bd","be","bf","cd","ce","cf"]',desc:"Answer: 9 combinations ✓",vars:{count:9}}
]},
"Longest Palindromic Substring": { title:"Longest Palindromic Substring", pattern:"Expand Around Center", explanation:"For each center (char or between chars), expand outward while palindrome. Track longest.", difficulty:"Medium", steps:[
  {type:"string",data:"babad",highlights:[],pointers:[],desc:"Find longest palindromic substring"},
  {type:"string",data:"babad",highlights:[0],pointers:[{idx:0,label:"center",color:"var(--accent-orange)"}],desc:"Center at 0: 'b' (length 1)"},
  {type:"string",data:"babad",window:[0,1,2],pointers:[{idx:1,label:"center",color:"var(--accent-orange)"}],desc:"Center at 1: expand 'bab' (length 3)!",vars:{longest:"bab"}},
  {type:"string",data:"babad",window:[1,2,3],pointers:[{idx:2,label:"center",color:"var(--accent-orange)"}],desc:"Center at 2: expand 'aba' (length 3)",vars:{longest:"bab"}},
  {type:"string",data:"babad",sorted:[0,1,2],pointers:[],desc:"Answer: 'bab' (or 'aba') ✓",vars:{result:"bab"}}
]},
"Longest Repeating Character Replacement": { title:"Longest Repeating Char Replacement", pattern:"Sliding Window", explanation:"Window is valid if (length - maxFreq) ≤ k. Expand right, shrink left when invalid.", difficulty:"Medium", steps:[
  {type:"string",data:"AABABBA",highlights:[],pointers:[],desc:"k=1. Longest substring after at most 1 replacement."},
  {type:"string",data:"AABABBA",window:[0,1,2,3],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}],desc:"'AABA': maxFreq=3(A), changes=1≤k ✓ len=4",vars:{max:4}},
  {type:"string",data:"AABABBA",window:[3,4,5,6],pointers:[{idx:3,label:"L",color:"var(--accent-blue)"},{idx:6,label:"R",color:"var(--accent-green)"}],desc:"'ABBA': maxFreq=2, changes=2>k. Shrink.",vars:{max:4}},
  {type:"info",visual:"Result: 4",desc:"Answer: 4 ✓",vars:{result:4}}
]},
"Longest Substring Without Repeating Characters": { title:"Longest Substring No Repeat", pattern:"Sliding Window + Hash Set", explanation:"Expand right, adding chars to set. On duplicate, shrink from left until removed.", difficulty:"Medium", steps:[
  {type:"string",data:"abcabcbb",highlights:[],pointers:[],desc:"Find longest substring with all unique chars"},
  {type:"string",data:"abcabcbb",window:[0,1,2],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:2,label:"R",color:"var(--accent-green)"}],desc:"'abc': all unique, length=3",vars:{max:3}},
  {type:"string",data:"abcabcbb",highlights:[3],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}],desc:"Add 'a': duplicate! Shrink left past 'a'"},
  {type:"string",data:"abcabcbb",window:[1,2,3],pointers:[{idx:1,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}],desc:"'bca': unique, length=3",vars:{max:3}},
  {type:"info",visual:"Result: 3 ('abc')",desc:"Answer: 3 ✓",vars:{result:3}}
]},
"Longest Word in Dictionary": { title:"Longest Word in Dictionary", pattern:"Trie / Sort + Hash Set", explanation:"Sort words. A word can be built if all its prefixes exist. Track longest.", difficulty:"Medium", steps:[
  {type:"info",visual:'["w","wo","wor","worl","world"]',desc:"Find longest word buildable one char at a time"},
  {type:"info",visual:"w ✓ (in set)\nwo ✓ (w exists)\nwor ✓ (wo exists)\nworl ✓\nworld ✓",desc:"Each prefix exists → 'world' buildable"},
  {type:"info",visual:"Result: 'world'",desc:"Answer: 'world' ✓",vars:{result:"world"}}
]},
"Minimum Number of Flips to Make Binary String Alternating": { title:"Min Flips for Alternating", pattern:"Sliding Window on Doubled String", explanation:"Double the string, slide window of size n. Count mismatches for both target patterns.", difficulty:"Medium", steps:[
  {type:"string",data:"111000",highlights:[],pointers:[],desc:"Circular rotation + flip to make alternating"},
  {type:"info",visual:"Double: '111000111000'\nSlide window of 6, count flips for '010101' and '101010'",desc:"Try all rotations efficiently"},
  {type:"info",visual:"Best window needs 2 flips",desc:"Answer: 2 ✓",vars:{result:2}}
]},

"Multiply Strings": { title:"Multiply Strings", pattern:"Grade School Multiplication", explanation:"Multiply digit by digit, accumulate products at correct positions in result array.", difficulty:"Medium", steps:[
  {type:"info",visual:"num1='123', num2='456'",desc:"Multiply without using built-in big integer"},
  {type:"info",visual:"3×6=18, 3×5=15, 3×4=12\n2×6=12, 2×5=10, 2×4=8\n1×6=6, 1×5=5, 1×4=4",desc:"Digit-by-digit multiplication, position i+j"},
  {type:"array",data:[0,5,6,0,8,8],highlights:[0,1,2,3,4,5],pointers:[],desc:"Result array after all products: 56088"},
  {type:"info",visual:"Result: '56088'",desc:"Answer: '56088' ✓",vars:{result:"56088"}}
]},
"Number of Substrings Containing All Three Characters": { title:"Substrings With All Three Chars", pattern:"Sliding Window", explanation:"Shrink window from left when all a,b,c present. Count valid substrings.", difficulty:"Medium", steps:[
  {type:"string",data:"abcabc",highlights:[],pointers:[],desc:"Count substrings containing at least one a, b, and c"},
  {type:"string",data:"abcabc",window:[0,1,2],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:2,label:"R",color:"var(--accent-green)"}],desc:"'abc' has all 3! Substrings from here: 4",vars:{count:4}},
  {type:"string",data:"abcabc",window:[1,2,3],pointers:[{idx:1,label:"L",color:"var(--accent-blue)"},{idx:3,label:"R",color:"var(--accent-green)"}],desc:"'bca' has all 3! Substrings: +3",vars:{count:7}},
  {type:"info",visual:"Result: 10",desc:"Answer: 10 ✓",vars:{result:10}}
]},
"Palindrome Partitioning": { title:"Palindrome Partitioning", pattern:"Backtracking + DP", explanation:"Try all partitions. For each prefix that's a palindrome, recurse on remainder.", difficulty:"Medium", steps:[
  {type:"string",data:"aab",highlights:[],pointers:[],desc:"Partition into all possible palindrome substrings"},
  {type:"info",visual:'Try: "a"|"a"|"b" → all palindromes ✓\nTry: "aa"|"b" → both palindromes ✓\nTry: "aab" → not palindrome ✗',desc:"Check all partitions via backtracking"},
  {type:"info",visual:'Result: [["a","a","b"],["aa","b"]]',desc:"Answer: 2 valid partitions ✓"}
]},
"Palindromic Substrings": { title:"Palindromic Substrings", pattern:"Expand Around Center", explanation:"For each center point, expand outward counting palindromes. n single + (n-1) pair centers.", difficulty:"Medium", steps:[
  {type:"string",data:"aaa",highlights:[],pointers:[],desc:"Count all palindromic substrings"},
  {type:"string",data:"aaa",highlights:[0],pointers:[{idx:0,label:"c",color:"var(--accent-orange)"}],desc:"Center 0: 'a' → 1 palindrome",vars:{count:1}},
  {type:"string",data:"aaa",highlights:[0,1,2],pointers:[{idx:1,label:"c",color:"var(--accent-orange)"}],desc:"Center 1: 'a','aaa' → +2",vars:{count:3}},
  {type:"string",data:"aaa",window:[0,1],pointers:[],desc:"Between 0-1: 'aa' → +1",vars:{count:5}},
  {type:"info",visual:"Total: 6 palindromic substrings",desc:"Answer: 6 ✓ (a,a,a,aa,aa,aaa)",vars:{result:6}}
]},
"Permutation in String": { title:"Permutation in String", pattern:"Sliding Window + Frequency", explanation:"Same as Check Inclusion — slide window of len(s1), compare freq arrays.", difficulty:"Medium", steps:[
  {type:"string",data:"eidbaooo",highlights:[],pointers:[],desc:"s1='ab'. Is any permutation of s1 a substring of s2?"},
  {type:"string",data:"eidbaooo",window:[3,4],highlights:[3,4],pointers:[],desc:"Window 'ba': same freq as 'ab' ✓",vars:{result:true}}
]},
"Reorganize String": { title:"Reorganize String", pattern:"Greedy + Max Heap", explanation:"Always place the most frequent character next. Use heap to pick greedily.", difficulty:"Medium", steps:[
  {type:"string",data:"aab",highlights:[],pointers:[],desc:"Rearrange so no two adjacent are same"},
  {type:"info",visual:"Freq: a=2, b=1\nPlace most frequent first: a_a\nFill gaps: aba",desc:"Greedy: alternate most frequent"},
  {type:"string",data:"aba",highlights:[0,1,2],pointers:[],desc:"Answer: 'aba' ✓",vars:{result:"aba"}}
]},
"Repeated DNA Sequences": { title:"Repeated DNA Sequences", pattern:"Hash Set + Sliding Window", explanation:"Slide window of size 10. Use set to track seen sequences, second set for repeated.", difficulty:"Medium", steps:[
  {type:"string",data:"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",highlights:[],pointers:[],desc:"Find 10-letter sequences occurring more than once"},
  {type:"string",data:"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",window:[0,1,2,3,4,5,6,7,8,9],pointers:[],desc:"'AAAAACCCCC' → add to seen",vars:{seen:1}},
  {type:"string",data:"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",window:[5,6,7,8,9,10,11,12,13,14],pointers:[],desc:"'CCCCCAAAAA' → add to seen"},
  {type:"info",visual:'Repeated: ["AAAAACCCCC","CCCCCAAAAA"]',desc:"Answer: 2 repeated sequences ✓"}
]},
"Restore IP Addresses": { title:"Restore IP Addresses", pattern:"Backtracking", explanation:"Try placing dots at valid positions. Each segment must be 0-255 with no leading zeros.", difficulty:"Medium", steps:[
  {type:"string",data:"25525511135",highlights:[],pointers:[],desc:"Insert 3 dots to form valid IP addresses"},
  {type:"info",visual:'"255.255.11.135" ✓\n"255.255.111.35" ✓',desc:"Backtrack: try 1-3 digit segments, validate 0-255"},
  {type:"info",visual:'Result: ["255.255.11.135","255.255.111.35"]',desc:"Answer: 2 valid IPs ✓",vars:{count:2}}
]},
"Reverse Integer": { title:"Reverse Integer", pattern:"Math (Mod/Divide)", explanation:"Extract digits from right with %10, build reversed number. Check overflow.", difficulty:"Medium", steps:[
  {type:"info",visual:"x = 123",desc:"Reverse digits of integer"},
  {type:"info",visual:"123 % 10 = 3, rev = 3\n12 % 10 = 2, rev = 32\n1 % 10 = 1, rev = 321",desc:"Extract digits right-to-left, build result"},
  {type:"info",visual:"Result: 321",desc:"Answer: 321 ✓ (check: within 32-bit range)",vars:{result:321}}
]},
"Reverse Words in a String": { title:"Reverse Words in a String", pattern:"Split + Reverse", explanation:"Split by whitespace, reverse the list of words, join with single space.", difficulty:"Medium", steps:[
  {type:"info",visual:'"  the sky  is blue  "',desc:"Reverse word order, trim extra spaces"},
  {type:"info",visual:'Split: ["the","sky","is","blue"]\nReverse: ["blue","is","sky","the"]',desc:"Split, reverse, join"},
  {type:"info",visual:'Result: "blue is sky the"',desc:"Answer: 'blue is sky the' ✓",vars:{result:"blue is sky the"}}
]},
"String to Integer (atoi)": { title:"String to Integer (atoi)", pattern:"State Machine / Linear Scan", explanation:"Skip whitespace, handle sign, read digits until non-digit. Clamp to 32-bit range.", difficulty:"Medium", steps:[
  {type:"string",data:"   -42abc",highlights:[],pointers:[],desc:"Parse integer from string with edge cases"},
  {type:"string",data:"   -42abc",window:[0,1,2],pointers:[],desc:"Skip whitespace",vars:{}},
  {type:"string",data:"   -42abc",highlights:[3],pointers:[{idx:3,label:"sign",color:"var(--accent-orange)"}],desc:"Read sign: negative",vars:{sign:-1}},
  {type:"string",data:"   -42abc",highlights:[4,5],pointers:[],desc:"Read digits: '42'",vars:{num:42}},
  {type:"string",data:"   -42abc",highlights:[6],pointers:[{idx:6,label:"stop",color:"var(--accent-red)"}],desc:"Non-digit 'a': stop. Result: -42",vars:{result:-42}}
]},
"Word Break": { title:"Word Break", pattern:"Dynamic Programming", explanation:"dp[i] = true if s[:i] can be segmented. For each i, check all possible last words.", difficulty:"Medium", steps:[
  {type:"string",data:"leetcode",highlights:[],pointers:[],desc:"wordDict=['leet','code']. Can we segment?"},
  {type:"string",data:"leetcode",window:[0,1,2,3],pointers:[],desc:"s[0:4]='leet' in dict! dp[4]=true",vars:{dp:"[T,_,_,_,T,_,_,_,_]"}},
  {type:"string",data:"leetcode",window:[4,5,6,7],pointers:[],desc:"s[4:8]='code' in dict AND dp[4]=true! dp[8]=true",vars:{dp:"[T,_,_,_,T,_,_,_,T]"}},
  {type:"info",visual:"dp[8] = True",desc:"Answer: true ✓ ('leet'+'code')",vars:{result:true}}
]},
"Word Search": { title:"Word Search", pattern:"DFS Backtracking on Grid", explanation:"From each cell matching first letter, DFS in 4 directions marking visited.", difficulty:"Medium", steps:[
  {type:"matrix",data:[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],highlights:[],desc:"Find 'ABCCED' in grid"},
  {type:"matrix",data:[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],highlights:[[0,0],[0,1],[0,2],[1,2],[2,2],[2,1]],desc:"Path: A→B→C→C→E→D ✓"},
  {type:"info",visual:"Result: True",desc:"Answer: true ✓",vars:{result:true}}
]},
"ZigZag Conversion": { title:"ZigZag Conversion", pattern:"Row Simulation", explanation:"Assign chars to rows in zigzag pattern. Concatenate all rows.", difficulty:"Medium", steps:[
  {type:"info",visual:"s='PAYPALISHIRING', numRows=3\nP   A   H   N\nA P L S I I G\nY   I   R",desc:"Place characters in zigzag pattern"},
  {type:"info",visual:"Read row by row: PAHNAPLSIIGYIR",desc:"Answer: 'PAHNAPLSIIGYIR' ✓",vars:{result:"PAHNAPLSIIGYIR"}}
]},
};


export const dictionariesAnimations = {
"Contains Duplicate II": { title:"Contains Duplicate II", pattern:"Sliding Window + Hash Map", explanation:"Keep a set of values in a window of size k. If duplicate found within window, return true.", difficulty:"Easy", steps:[
  {type:"array",data:[1,2,3,1],highlights:[],pointers:[],desc:"k=3. Any duplicate within distance k?"},
  {type:"array",data:[1,2,3,1],highlights:[0,3],pointers:[],desc:"nums[0]=nums[3]=1, distance=3 ≤ k ✓",vars:{result:true}}
]},
"Count Good Pairs": { title:"Count Good Pairs", pattern:"Frequency Count", explanation:"For each number, count how many times we've seen it before. Each previous occurrence forms a good pair.", difficulty:"Easy", steps:[
  {type:"array",data:[1,2,3,1,1,3],highlights:[],pointers:[],desc:"Count pairs (i,j) where nums[i]==nums[j] and i<j"},
  {type:"array",data:[1,2,3,1,1,3],highlights:[0,3],pointers:[],desc:"See 1 again (count=1): +1 pair",vars:{pairs:1}},
  {type:"array",data:[1,2,3,1,1,3],highlights:[0,3,4],pointers:[],desc:"See 1 again (count=2): +2 pairs",vars:{pairs:3}},
  {type:"array",data:[1,2,3,1,1,3],highlights:[2,5],pointers:[],desc:"See 3 again (count=1): +1 pair",vars:{pairs:4}},
  {type:"info",visual:"Result: 4",desc:"Answer: 4 ✓",vars:{result:4}}
]},
"Design HashMap": { title:"Design HashMap", pattern:"Array of Buckets + Chaining", explanation:"Hash key to bucket index. Handle collisions with linked list in each bucket.", difficulty:"Easy", steps:[
  {type:"hashmap",data:[],highlights:[],desc:"Implement put, get, remove operations"},
  {type:"hashmap",data:[{key:1,value:1}],highlights:[0],desc:"put(1,1): hash(1)=bucket, store {1:1}"},
  {type:"hashmap",data:[{key:1,value:1},{key:2,value:2}],highlights:[1],desc:"put(2,2): store {2:2}"},
  {type:"hashmap",data:[{key:1,value:1},{key:2,value:2}],highlights:[0],desc:"get(1) → 1 ✓, get(3) → -1 (not found)"},
  {type:"hashmap",data:[{key:1,value:1}],highlights:[],desc:"remove(2): delete key 2 ✓"}
]},
"Design HashSet": { title:"Design HashSet", pattern:"Array of Buckets", explanation:"Similar to HashMap but only stores keys. Use hash function to determine bucket.", difficulty:"Easy", steps:[
  {type:"hashmap",data:[],highlights:[],desc:"Implement add, remove, contains"},
  {type:"hashmap",data:[{key:1,value:"✓"},{key:2,value:"✓"}],highlights:[0,1],desc:"add(1), add(2)"},
  {type:"hashmap",data:[{key:1,value:"✓"},{key:2,value:"✓"}],highlights:[0],desc:"contains(1)→true, contains(3)→false"},
  {type:"hashmap",data:[{key:1,value:"✓"}],highlights:[],desc:"remove(2), contains(2)→false ✓"}
]},
"Find Common Characters": { title:"Find Common Characters", pattern:"Intersection of Frequency Arrays", explanation:"For each string, count frequencies. Take minimum frequency for each char across all strings.", difficulty:"Easy", steps:[
  {type:"info",visual:'["bella","label","roller"]',desc:"Find characters common to all strings (with repetition)"},
  {type:"info",visual:"bella: {b:1,e:1,l:2,a:1}\nlabel: {l:2,a:1,b:1,e:1}\nroller: {r:2,o:1,l:2,e:1}",desc:"Count frequencies per string"},
  {type:"info",visual:"min: e=1, l=2\nResult: ['e','l','l']",desc:"Answer: ['e','l','l'] ✓"}
]},
"Happy Number": { title:"Happy Number", pattern:"Cycle Detection (Floyd's)", explanation:"Sum of squares of digits. If reaches 1, happy. If cycles, not happy. Use fast/slow pointers.", difficulty:"Easy", steps:[
  {type:"info",visual:"n=19",desc:"Is 19 a happy number? Sum of squared digits repeatedly."},
  {type:"info",visual:"19 → 1²+9² = 82\n82 → 64+4 = 68\n68 → 36+64 = 100\n100 → 1+0+0 = 1 ✓",desc:"Reached 1! It's happy! ✓",vars:{result:true}}
]},
"Intersection of Two Arrays": { title:"Intersection of Two Arrays", pattern:"Set Intersection", explanation:"Convert both to sets. Return their intersection.", difficulty:"Easy", steps:[
  {type:"twoarray",data1:[1,2,2,1],data2:[2,2],highlights1:[],highlights2:[],label1:"nums1",label2:"nums2",desc:"Find common elements (unique)"},
  {type:"info",visual:"set1={1,2}, set2={2}\nIntersection: {2}",desc:"Answer: [2] ✓",vars:{result:"[2]"}}
]},
"Intersection of Two Arrays II": { title:"Intersection of Two Arrays II", pattern:"Frequency Count", explanation:"Count frequencies of each array. Take min count for each number.", difficulty:"Easy", steps:[
  {type:"twoarray",data1:[1,2,2,1],data2:[2,2],highlights1:[],highlights2:[],label1:"nums1",label2:"nums2",desc:"Find intersection with duplicates"},
  {type:"info",visual:"freq1: {1:2, 2:2}\nfreq2: {2:2}\nmin: {2:2}",desc:"Answer: [2,2] ✓",vars:{result:"[2,2]"}}
]},

"Isomorphic Strings": { title:"Isomorphic Strings", pattern:"Two Hash Maps (Bijection)", explanation:"Map each char in s to char in t and vice versa. If mapping conflicts, not isomorphic.", difficulty:"Easy", steps:[
  {type:"string",data:"egg",highlights:[],pointers:[],desc:"Is 'egg' isomorphic to 'add'?"},
  {type:"hashmap",data:[{key:"e",value:"a"},{key:"g",value:"d"}],highlights:[0,1],desc:"Mapping: e→a, g→d. Consistent!"},
  {type:"info",visual:"'egg' → 'add': e→a, g→d, g→d ✓",desc:"Answer: true ✓",vars:{result:true}}
]},
"Number of Good Pairs": { title:"Number of Good Pairs", pattern:"Frequency Count", explanation:"Same as Count Good Pairs. For each element seen k times, it contributes k*(k-1)/2 pairs.", difficulty:"Easy", steps:[
  {type:"array",data:[1,2,3,1,1,3],highlights:[],pointers:[],desc:"Count (i,j) pairs where nums[i]==nums[j], i<j"},
  {type:"info",visual:"1 appears 3 times: C(3,2)=3 pairs\n3 appears 2 times: C(2,2)=1 pair\nTotal: 4",desc:"Answer: 4 ✓",vars:{result:4}}
]},
"Ransom Note": { title:"Ransom Note", pattern:"Frequency Count", explanation:"Count chars in magazine. Check if all chars in ransom note are available.", difficulty:"Easy", steps:[
  {type:"info",visual:"ransomNote='aa', magazine='aab'",desc:"Can we construct ransom note from magazine letters?"},
  {type:"hashmap",data:[{key:"a",value:"2/2"},{key:"b",value:"0/1"}],highlights:[0],desc:"Need 2 a's, have 2. Need 0 b's. Sufficient!"},
  {type:"info",visual:"Result: True",desc:"Answer: true ✓",vars:{result:true}}
]},
"Two Sum": { title:"Two Sum", pattern:"Hash Map Complement", explanation:"For each number, check if (target - num) exists in hash map. If yes, return indices.", difficulty:"Easy", steps:[
  {type:"array",data:[2,7,11,15],highlights:[],pointers:[],desc:"target=9. Find two indices that sum to 9."},
  {type:"array",data:[2,7,11,15],highlights:[0],pointers:[],desc:"num=2, need 7. Not in map. Store {2:0}",vars:{map:"{2:0}"}},
  {type:"array",data:[2,7,11,15],highlights:[1],pointers:[],desc:"num=7, need 2. Found in map at idx 0!",vars:{map:"{2:0}"}},
  {type:"array",data:[2,7,11,15],sorted:[0,1],pointers:[],desc:"Answer: [0, 1] ✓",vars:{result:"[0,1]"}}
]},
"Unique Email Addresses": { title:"Unique Email Addresses", pattern:"String Processing + Set", explanation:"Process each email: ignore dots and text after '+' in local name. Count unique.", difficulty:"Easy", steps:[
  {type:"info",visual:'"a.b@example.com" → "ab@example.com"\n"a+b@example.com" → "a@example.com"',desc:"Normalize emails and count unique"},
  {type:"info",visual:"Add normalized emails to set\nSet size = unique count",desc:"Answer: count of unique addresses ✓"}
]},
"Valid Anagram": { title:"Valid Anagram", pattern:"Frequency Count (Array)", explanation:"Count char frequencies for both strings. If identical, they're anagrams.", difficulty:"Easy", steps:[
  {type:"string",data:"anagram",highlights:[],pointers:[],desc:"Is 'anagram' an anagram of 'nagaram'?"},
  {type:"info",visual:"Count 'anagram': {a:3,n:1,g:1,r:1,m:1}\nCount 'nagaram': {a:3,n:1,g:1,r:1,m:1}",desc:"Frequencies match!"},
  {type:"info",visual:"Result: True",desc:"Answer: true ✓",vars:{result:true}}
]},
"Word Pattern": { title:"Word Pattern", pattern:"Bijection (Two Maps)", explanation:"Map each pattern char to a word and each word to a pattern char. Check consistency.", difficulty:"Easy", steps:[
  {type:"info",visual:"pattern='abba', s='dog cat cat dog'",desc:"Does pattern match word sequence?"},
  {type:"hashmap",data:[{key:"a",value:"dog"},{key:"b",value:"cat"}],highlights:[0,1],desc:"a→dog, b→cat. Check: a→dog ✓, b→cat ✓"},
  {type:"info",visual:"Consistent bijection: true",desc:"Answer: true ✓",vars:{result:true}}
]},
"Contains Duplicate III": { title:"Contains Duplicate III", pattern:"Bucket Sort / SortedList", explanation:"Divide into buckets of size t+1. Numbers in same/adjacent buckets may satisfy condition.", difficulty:"Hard", steps:[
  {type:"array",data:[1,5,9,1,5,9],highlights:[],pointers:[],desc:"indexDiff=2, valueDiff=3. Any pair within range?"},
  {type:"info",visual:"Bucket size = valueDiff+1 = 4\nBuckets: {0:[1], 1:[5,9]}\nCheck same/adjacent buckets within index window",desc:"Use bucket technique for O(n) solution"},
  {type:"info",visual:"Result: False (no valid pair)",desc:"Answer: false ✓",vars:{result:false}}
]},

"4Sum II": { title:"4Sum II", pattern:"Hash Map (Divide in Two)", explanation:"Compute all A[i]+B[j] sums in a map. For each C[k]+D[l], check if -(C+D) exists.", difficulty:"Medium", steps:[
  {type:"info",visual:"A=[1,2], B=[-2,-1], C=[-1,2], D=[0,2]",desc:"Count tuples where A[i]+B[j]+C[k]+D[l]=0"},
  {type:"hashmap",data:[{key:"-1",value:1},{key:"0",value:2},{key:"1",value:1}],highlights:[],desc:"Map of A+B sums: {-1:1, 0:2, 1:1}"},
  {type:"info",visual:"C+D pairs: -1,1,2,4\nLook for negatives in map:\n-(-1)=1 ✓, -(1)=-1 ✓",desc:"Answer: 2 tuples ✓",vars:{result:2}}
]},
"Brick Wall": { title:"Brick Wall", pattern:"Hash Map (Gap Counting)", explanation:"Count gap positions across all rows. Most common gap = fewest bricks crossed.", difficulty:"Medium", steps:[
  {type:"info",visual:"Wall with bricks of varying widths\nGaps at positions where rows end (not edges)",desc:"Find line crossing fewest bricks"},
  {type:"hashmap",data:[{key:"pos 2",value:3},{key:"pos 3",value:2},{key:"pos 4",value:1}],highlights:[0],desc:"Position 2 has most gaps (3). Cross rows-3 bricks."},
  {type:"info",visual:"Result: totalRows - maxGaps",desc:"Answer: minimum bricks crossed ✓"}
]},
"Continuous Subarray Sum": { title:"Continuous Subarray Sum", pattern:"Prefix Sum + Modulo", explanation:"If prefix_sum[j] % k == prefix_sum[i] % k, then sum(i..j) is divisible by k.", difficulty:"Medium", steps:[
  {type:"array",data:[23,2,4,6,7],highlights:[],pointers:[],desc:"k=6. Any subarray (len≥2) with sum multiple of 6?"},
  {type:"array",data:[23,2,4,6,7],highlights:[0],pointers:[],desc:"prefix%6: 23%6=5. Store {5:0}",vars:{map:"{0:-1,5:0}"}},
  {type:"array",data:[23,2,4,6,7],highlights:[1],pointers:[],desc:"prefix=25, 25%6=1. Store {1:1}",vars:{map:"{0:-1,5:0,1:1}"}},
  {type:"array",data:[23,2,4,6,7],highlights:[2],pointers:[],desc:"prefix=29, 29%6=5. 5 seen at idx 0! gap=2≥2 ✓",vars:{found:true}},
  {type:"info",visual:"sum(23,2,4)=29, not div by 6. But sum(2,4)=6 ✓",desc:"Answer: true (subarray [2,4]) ✓",vars:{result:true}}
]},
"Find Duplicate File in System": { title:"Find Duplicate File in System", pattern:"Hash Map (Content Key)", explanation:"Group files by content. Files with same content are duplicates.", difficulty:"Medium", steps:[
  {type:"info",visual:'"root/a 1.txt(abc) 2.txt(def)"\n"root/b 3.txt(abc)"',desc:"Group files with same content"},
  {type:"hashmap",data:[{key:"abc",value:"[root/a/1.txt, root/b/3.txt]"},{key:"def",value:"[root/a/2.txt]"}],highlights:[0],desc:"Files with content 'abc' are duplicates"},
  {type:"info",visual:'Result: [["root/a/1.txt","root/b/3.txt"]]',desc:"Answer: 1 group of duplicates ✓"}
]},
"Group Anagrams": { title:"Group Anagrams", pattern:"Hash Map (Sorted Key)", explanation:"Sort each word to create a canonical form. Group words with same sorted form.", difficulty:"Medium", steps:[
  {type:"info",visual:'["eat","tea","tan","ate","nat","bat"]',desc:"Group words that are anagrams of each other"},
  {type:"hashmap",data:[{key:"aet",value:'["eat","tea","ate"]'},{key:"ant",value:'["tan","nat"]'},{key:"abt",value:'["bat"]'}],highlights:[0,1,2],desc:"Sort each word as key, group values"},
  {type:"info",visual:'Result: [["eat","tea","ate"],["tan","nat"],["bat"]]',desc:"Answer: 3 groups ✓",vars:{groups:3}}
]},
"Insert Delete GetRandom O(1)": { title:"Insert Delete GetRandom O(1)", pattern:"Hash Map + Array", explanation:"Array for O(1) random access. Map stores value→index. Swap with last on delete.", difficulty:"Medium", steps:[
  {type:"info",visual:"Operations: insert, remove, getRandom — all O(1)",desc:"Need both fast lookup AND random access"},
  {type:"twoarray",data1:[1,2,3],data2:[],highlights1:[],highlights2:[],label1:"Array",label2:"Map: {1:0, 2:1, 3:2}",desc:"Array for random, map for O(1) lookup"},
  {type:"info",visual:"Remove 2: swap with last (3), pop.\nArray: [1,3], Map: {1:0, 3:1}",desc:"Swap-with-last trick keeps O(1) delete ✓"}
]},
"LRU Cache": { title:"LRU Cache", pattern:"Hash Map + Doubly Linked List", explanation:"Map gives O(1) lookup. Doubly linked list tracks usage order. Move to front on access.", difficulty:"Medium", steps:[
  {type:"info",visual:"capacity=2",desc:"Implement Least Recently Used cache"},
  {type:"hashmap",data:[{key:1,value:1}],highlights:[0],desc:"put(1,1): cache = {1:1}"},
  {type:"hashmap",data:[{key:1,value:1},{key:2,value:2}],highlights:[1],desc:"put(2,2): cache = {1:1, 2:2}"},
  {type:"hashmap",data:[{key:1,value:1},{key:2,value:2}],highlights:[0],desc:"get(1)→1: move key 1 to front (most recent)"},
  {type:"hashmap",data:[{key:1,value:1},{key:3,value:3}],highlights:[1],desc:"put(3,3): evict LRU (key 2)! cache = {1:1, 3:3}"},
  {type:"info",visual:"get(2) → -1 (evicted!)",desc:"Key 2 was evicted as LRU ✓"}
]},
"Longest Consecutive Sequence": { title:"Longest Consecutive Sequence", pattern:"Hash Set", explanation:"Put all in set. For each sequence start (num-1 not in set), count consecutive numbers.", difficulty:"Medium", steps:[
  {type:"array",data:[100,4,200,1,3,2],highlights:[],pointers:[],desc:"Find longest consecutive sequence. Must be O(n)."},
  {type:"info",visual:"Set: {100,4,200,1,3,2}\nSequence starts: where num-1 NOT in set",desc:"Only start counting from sequence beginnings"},
  {type:"array",data:[100,4,200,1,3,2],highlights:[3,5,1,0],pointers:[],desc:"Start at 1: 1→2→3→4 (length 4!)",vars:{max:4}},
  {type:"info",visual:"Result: 4 (sequence: 1,2,3,4)",desc:"Answer: 4 ✓",vars:{result:4}}
]},
"Maximum Size Subarray Sum Equals k": { title:"Max Subarray Sum = k", pattern:"Prefix Sum + Hash Map", explanation:"Store prefix sums. If prefix[j]-prefix[i]=k, subarray (i,j] sums to k. Find longest.", difficulty:"Medium", steps:[
  {type:"array",data:[1,-1,5,-2,3],highlights:[],pointers:[],desc:"k=3. Find longest subarray summing to 3."},
  {type:"array",data:[1,-1,5,-2,3],highlights:[0,1,2,3],pointers:[],desc:"prefix sums: [1,0,5,3,6]. prefix[3]=3=k → length 4!",vars:{max_len:4}},
  {type:"info",visual:"Result: 4 (subarray [1,-1,5,-2])",desc:"Answer: 4 ✓",vars:{result:4}}
]},
"Subarray Sum Divisible by K": { title:"Subarray Sum Divisible by K", pattern:"Prefix Sum + Modulo + Count", explanation:"Same remainder means subarray between is divisible by K. Count pairs with same remainder.", difficulty:"Medium", steps:[
  {type:"array",data:[4,5,0,-2,-3,1],highlights:[],pointers:[],desc:"k=5. Count subarrays with sum divisible by 5."},
  {type:"info",visual:"Prefix mods: [4,4,4,2,4,0]\nCount remainders: {0:2, 4:4, 2:1}\nPairs: C(2,2)+C(4,2)+C(1,2) = 1+6+0 = 7",desc:"Answer: 7 ✓",vars:{result:7}}
]},
"Subarray Sum Equals K": { title:"Subarray Sum Equals K", pattern:"Prefix Sum + Hash Map", explanation:"Count prefix sums. If prefix[j]-prefix[i]=k, count it. Use map for O(1) lookup.", difficulty:"Medium", steps:[
  {type:"array",data:[1,1,1],highlights:[],pointers:[],desc:"k=2. Count subarrays summing to 2."},
  {type:"array",data:[1,1,1],highlights:[0],pointers:[],desc:"prefix=1, need prefix-k=-1: not in map",vars:{count:0,map:"{0:1}"}},
  {type:"array",data:[1,1,1],highlights:[1],pointers:[],desc:"prefix=2, need 0: found! count++",vars:{count:1,map:"{0:1,1:1}"}},
  {type:"array",data:[1,1,1],highlights:[2],pointers:[],desc:"prefix=3, need 1: found! count++",vars:{count:2,map:"{0:1,1:1,2:1}"}},
  {type:"info",visual:"Result: 2",desc:"Answer: 2 ([1,1] at idx 0-1 and 1-2) ✓",vars:{result:2}}
]},
"Top K Frequent Elements": { title:"Top K Frequent Elements", pattern:"Hash Map + Heap/Bucket Sort", explanation:"Count frequencies, then get top k using heap or bucket sort.", difficulty:"Medium", steps:[
  {type:"array",data:[1,1,1,2,2,3],highlights:[],pointers:[],desc:"k=2. Find 2 most frequent elements."},
  {type:"hashmap",data:[{key:"1",value:3},{key:"2",value:2},{key:"3",value:1}],highlights:[0,1],desc:"Frequencies: {1:3, 2:2, 3:1}. Top 2: [1, 2]"},
  {type:"info",visual:"Result: [1, 2]",desc:"Answer: [1, 2] ✓",vars:{result:"[1,2]"}}
]},
};


export const sortingAnimations = {
"Binary Search": { title:"Binary Search", pattern:"Divide and Conquer", explanation:"Check middle element. If target, done. If smaller, search right half. If larger, search left.", difficulty:"Easy", steps:[
  {type:"array",data:[-1,0,3,5,9,12],highlights:[],pointers:[],desc:"target=9. Search sorted array."},
  {type:"array",data:[-1,0,3,5,9,12],highlights:[2],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:2,label:"M",color:"var(--accent-orange)"},{idx:5,label:"R",color:"var(--accent-green)"}],desc:"mid=2: arr[2]=3 < 9, search right",vars:{}},
  {type:"array",data:[-1,0,3,5,9,12],highlights:[4],pointers:[{idx:3,label:"L",color:"var(--accent-blue)"},{idx:4,label:"M",color:"var(--accent-orange)"},{idx:5,label:"R",color:"var(--accent-green)"}],desc:"mid=4: arr[4]=9 == target! Found! ✓",vars:{result:4}}
]},
"First Bad Version": { title:"First Bad Version", pattern:"Binary Search (Boundary)", explanation:"Binary search for the transition point from good to bad.", difficulty:"Easy", steps:[
  {type:"array",data:["G","G","G","B","B"],highlights:[],pointers:[],desc:"n=5, first bad version=4"},
  {type:"array",data:["G","G","G","B","B"],highlights:[2],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:2,label:"M",color:"var(--accent-orange)"},{idx:4,label:"R",color:"var(--accent-green)"}],desc:"mid=3: good → search right"},
  {type:"array",data:["G","G","G","B","B"],highlights:[3],pointers:[{idx:3,label:"L=M",color:"var(--accent-orange)"},{idx:4,label:"R",color:"var(--accent-green)"}],desc:"mid=4: bad → search left. L=R=4 → answer!",vars:{result:4}}
]},
"Guess Number Higher or Lower": { title:"Guess Number", pattern:"Binary Search", explanation:"Classic binary search. API tells you higher/lower/equal.", difficulty:"Easy", steps:[
  {type:"info",visual:"n=10, pick=6",desc:"Guess number 1-10 with higher/lower hints"},
  {type:"array",data:[1,2,3,4,5,6,7,8,9,10],highlights:[4],pointers:[{idx:4,label:"guess",color:"var(--accent-orange)"}],desc:"Guess 5: 'higher' → search 6-10"},
  {type:"array",data:[1,2,3,4,5,6,7,8,9,10],highlights:[7],pointers:[{idx:7,label:"guess",color:"var(--accent-orange)"}],desc:"Guess 8: 'lower' → search 6-7"},
  {type:"array",data:[1,2,3,4,5,6,7,8,9,10],highlights:[5],pointers:[{idx:5,label:"✓",color:"var(--accent-green)"}],desc:"Guess 6: correct! ✓",vars:{result:6}}
]},
"Merge Sorted Array": { title:"Merge Sorted Array", pattern:"Three Pointers (Back to Front)", explanation:"Fill from the back of nums1. Compare last elements of both arrays.", difficulty:"Easy", steps:[
  {type:"twoarray",data1:[1,2,3,0,0,0],data2:[2,5,6],highlights1:[],highlights2:[],label1:"nums1",label2:"nums2",desc:"Merge nums2 into nums1 (has extra space)"},
  {type:"array",data:[1,2,3,0,0,6],highlights:[5],pointers:[{idx:2,label:"p1",color:"var(--accent-blue)"},{idx:5,label:"w",color:"var(--accent-orange)"}],desc:"Compare 3 vs 6: place 6 at end"},
  {type:"array",data:[1,2,3,0,5,6],highlights:[4],pointers:[{idx:2,label:"p1",color:"var(--accent-blue)"},{idx:4,label:"w",color:"var(--accent-orange)"}],desc:"Compare 3 vs 5: place 5"},
  {type:"array",data:[1,2,2,3,5,6],sorted:[0,1,2,3,4,5],pointers:[],desc:"Final: [1,2,2,3,5,6] ✓"}
]},
"Sqrt(x)": { title:"Sqrt(x)", pattern:"Binary Search", explanation:"Binary search for largest k where k*k ≤ x.", difficulty:"Easy", steps:[
  {type:"info",visual:"x=8. Find floor(sqrt(8)).",desc:"Binary search between 1 and 8"},
  {type:"info",visual:"mid=4: 4²=16 > 8 → search left\nmid=2: 2²=4 ≤ 8 → ans=2, search right\nmid=3: 3²=9 > 8 → search left",desc:"Narrow down to 2"},
  {type:"info",visual:"Result: 2 (since 2²=4 ≤ 8 < 9=3²)",desc:"Answer: 2 ✓",vars:{result:2}}
]},
"Valid Perfect Square": { title:"Valid Perfect Square", pattern:"Binary Search", explanation:"Binary search for k where k*k == num.", difficulty:"Easy", steps:[
  {type:"info",visual:"num=16",desc:"Is 16 a perfect square?"},
  {type:"info",visual:"Binary search: mid=8 → 64>16\nmid=4 → 16==16 ✓",desc:"Answer: true (4²=16) ✓",vars:{result:true}}
]},
"Count of Smaller Numbers After Self": { title:"Count Smaller After Self", pattern:"Merge Sort (Count Inversions)", explanation:"During merge sort, count how many elements from right subarray are placed before left elements.", difficulty:"Hard", steps:[
  {type:"array",data:[5,2,6,1],highlights:[],pointers:[],desc:"For each element, count smaller elements to its right"},
  {type:"info",visual:"Merge sort with inversion counting:\n[5,2,6,1] → [5,2] [6,1]\n→ [2,5] [1,6] (count inversions during merge)",desc:"Modified merge sort tracks right-to-left movements"},
  {type:"array",data:[2,1,1,0],sorted:[0,1,2,3],pointers:[],desc:"Answer: [2,1,1,0] ✓ (5 has 2 smaller, 2 has 1, 6 has 1, 1 has 0)"}
]},
"Find Median from Data Stream": { title:"Find Median from Data Stream", pattern:"Two Heaps (Max + Min)", explanation:"Max-heap for lower half, min-heap for upper half. Median is at the tops.", difficulty:"Hard", steps:[
  {type:"info",visual:"addNum(1): maxHeap=[1], minHeap=[]\naddNum(2): maxHeap=[1], minHeap=[2]",desc:"Balance two heaps"},
  {type:"info",visual:"Median = (1+2)/2 = 1.5",desc:"Even count: average of two tops",vars:{median:1.5}},
  {type:"info",visual:"addNum(3): maxHeap=[1,2], minHeap=[3]\nMedian = top of maxHeap = 2",desc:"Odd count: top of larger heap = 2 ✓",vars:{median:2}}
]},
"Median of Two Sorted Arrays": { title:"Median of Two Sorted Arrays", pattern:"Binary Search on Partition", explanation:"Binary search for correct partition in shorter array. O(log(min(m,n))).", difficulty:"Hard", steps:[
  {type:"twoarray",data1:[1,3],data2:[2],highlights1:[],highlights2:[],label1:"nums1",label2:"nums2",desc:"Find median of merged sorted arrays in O(log n)"},
  {type:"info",visual:"Partition nums1 at 1: left=[1], right=[3]\nPartition nums2 at 1: left=[2], right=[]\n1≤2 and 2≤3 ✓ Valid partition!",desc:"Binary search for correct partition"},
  {type:"info",visual:"Merged length=3 (odd)\nMedian = max(left sides) = max(1,2) = 2",desc:"Answer: 2.0 ✓",vars:{result:2.0}}
]},

"Car Fleet": { title:"Car Fleet", pattern:"Sort + Stack/Greedy", explanation:"Sort by position desc. If car behind arrives at or before car ahead, they fleet together.", difficulty:"Medium", steps:[
  {type:"info",visual:"target=12, pos=[10,8,0,5,3], speed=[2,4,1,1,3]",desc:"Cars that catch up form a fleet"},
  {type:"info",visual:"Sort by position desc:\npos=10, time=(12-10)/2=1.0\npos=8, time=(12-8)/4=1.0 ≤ 1.0 → joins fleet\npos=5, time=7.0 → new fleet",desc:"Count cars that DON'T catch the one ahead"},
  {type:"info",visual:"Result: 3 fleets",desc:"Answer: 3 ✓",vars:{result:3}}
]},
"Find Minimum in Rotated Sorted Array": { title:"Find Min in Rotated Array", pattern:"Binary Search", explanation:"If arr[mid] > arr[right], min is in right half. Otherwise, min is in left half (or at mid).", difficulty:"Medium", steps:[
  {type:"array",data:[3,4,5,1,2],highlights:[],pointers:[{idx:0,label:"L",color:"var(--accent-blue)"},{idx:4,label:"R",color:"var(--accent-green)"}],desc:"Find minimum in rotated sorted array"},
  {type:"array",data:[3,4,5,1,2],highlights:[2],pointers:[{idx:2,label:"M",color:"var(--accent-orange)"}],desc:"mid=2: arr[2]=5 > arr[4]=2 → min in right half"},
  {type:"array",data:[3,4,5,1,2],highlights:[3],pointers:[{idx:3,label:"M",color:"var(--accent-green)"}],desc:"mid=3: arr[3]=1 ≤ arr[4]=2 → min at or left of mid"},
  {type:"array",data:[3,4,5,1,2],sorted:[3],pointers:[],desc:"Answer: 1 ✓",vars:{result:1}}
]},
"Find Peak Element": { title:"Find Peak Element", pattern:"Binary Search", explanation:"If arr[mid] < arr[mid+1], peak exists in right half. Otherwise in left half.", difficulty:"Medium", steps:[
  {type:"array",data:[1,2,3,1],highlights:[],pointers:[],desc:"Find any peak element (greater than neighbors)"},
  {type:"array",data:[1,2,3,1],highlights:[1],pointers:[{idx:1,label:"M",color:"var(--accent-orange)"}],desc:"mid=1: arr[1]=2 < arr[2]=3 → peak is right"},
  {type:"array",data:[1,2,3,1],highlights:[2],pointers:[{idx:2,label:"peak",color:"var(--accent-green)"}],desc:"mid=2: arr[2]=3 > arr[3]=1. Peak found! ✓",vars:{result:2}}
]},
"H-Index": { title:"H-Index", pattern:"Sort + Linear Scan", explanation:"Sort citations desc. H-index is largest h where h papers have ≥ h citations.", difficulty:"Medium", steps:[
  {type:"array",data:[3,0,6,1,5],highlights:[],pointers:[],desc:"Find h-index"},
  {type:"array",data:[6,5,3,1,0],highlights:[0,1,2,3,4],pointers:[],desc:"Sort desc: [6,5,3,1,0]"},
  {type:"array",data:[6,5,3,1,0],highlights:[0,1,2],pointers:[{idx:2,label:"h=3",color:"var(--accent-green)"}],desc:"3 papers with ≥3 citations each. h=3 ✓",vars:{result:3}}
]},
"K Closest Points to Origin": { title:"K Closest Points", pattern:"Max Heap / Quickselect", explanation:"Maintain max-heap of size k. Or use quickselect for O(n) average.", difficulty:"Medium", steps:[
  {type:"info",visual:"points=[[1,3],[-2,2]], k=1",desc:"Find k closest points to origin (0,0)"},
  {type:"info",visual:"Distances: [1,3]→√10, [-2,2]→√8\n√8 < √10 → [-2,2] is closer",desc:"Compare squared distances to avoid sqrt"},
  {type:"info",visual:"Result: [[-2,2]]",desc:"Answer: [[-2,2]] ✓",vars:{result:"[[-2,2]]"}}
]},
"Kth Largest Element in an Array": { title:"Kth Largest Element", pattern:"Quickselect / Min Heap", explanation:"Quickselect: partition like quicksort, but only recurse into the half containing kth position.", difficulty:"Medium", steps:[
  {type:"array",data:[3,2,1,5,6,4],highlights:[],pointers:[],desc:"k=2. Find 2nd largest element."},
  {type:"array",data:[3,2,1,5,6,4],highlights:[4],pointers:[{idx:4,label:"pivot",color:"var(--accent-purple)"}],desc:"Quickselect: pivot=6, position=5 (0-indexed)"},
  {type:"array",data:[3,2,1,4,5,6],highlights:[4],pointers:[{idx:4,label:"pivot",color:"var(--accent-purple)"}],desc:"Pivot=5 at position 4. k=2 → need pos 4. Found!"},
  {type:"array",data:[3,2,1,4,5,6],sorted:[4],pointers:[],desc:"Answer: 5 ✓",vars:{result:5}}
]},
"Kth Smallest Element in a Sorted Matrix": { title:"Kth Smallest in Matrix", pattern:"Binary Search on Value", explanation:"Binary search on value range. For each mid, count elements ≤ mid in matrix.", difficulty:"Medium", steps:[
  {type:"matrix",data:[[1,5,9],[10,11,13],[12,13,15]],highlights:[],desc:"k=8. Find 8th smallest element."},
  {type:"info",visual:"Range [1,15]. mid=8: count≤8 is 2 (<8)\nmid=12: count≤12 is 6 (<8)\nmid=13: count≤13 is 8 (≥8) → answer in [13,13]",desc:"Binary search on value, count using matrix property"},
  {type:"info",visual:"Result: 13",desc:"Answer: 13 ✓",vars:{result:13}}
]},
"Largest Number": { title:"Largest Number", pattern:"Custom Sort Comparator", explanation:"Sort numbers by comparing ''+a+b vs ''+b+a. Largest concatenation first.", difficulty:"Medium", steps:[
  {type:"array",data:[3,30,34,5,9],highlights:[],pointers:[],desc:"Arrange to form largest number"},
  {type:"info",visual:"Compare: '330' vs '303' → 3 before 30\n'534' vs '345' → 5 before 34\nSort: 9,5,34,3,30",desc:"Custom comparator: a+b vs b+a"},
  {type:"info",visual:'Result: "9534330"',desc:"Answer: '9534330' ✓",vars:{result:"9534330"}}
]},
"Meeting Rooms II": { title:"Meeting Rooms II", pattern:"Sort + Min Heap / Sweep Line", explanation:"Sort by start. Use min-heap tracking end times. If new start < min end, need new room.", difficulty:"Medium", steps:[
  {type:"info",visual:"intervals: [[0,30],[5,10],[15,20]]",desc:"Min meeting rooms needed at peak"},
  {type:"info",visual:"Sort by start: [0,30],[5,10],[15,20]\nt=0: room 1 (ends 30)\nt=5: 5<30, room 2 (ends 10)\nt=15: 15>10, reuse room 2",desc:"Track rooms with heap of end times"},
  {type:"info",visual:"Max rooms at once: 2",desc:"Answer: 2 ✓",vars:{result:2}}
]},
"Merge Intervals": { title:"Merge Intervals", pattern:"Sort + Linear Merge", explanation:"Sort by start. If current overlaps previous, merge. Otherwise add new interval.", difficulty:"Medium", steps:[
  {type:"info",visual:"[[1,3],[2,6],[8,10],[15,18]]",desc:"Merge overlapping intervals"},
  {type:"info",visual:"[1,3]+[2,6] overlap → [1,6]\n[1,6]+[8,10] no overlap → keep both\n[8,10]+[15,18] no overlap → keep both",desc:"Merge when start ≤ prev end"},
  {type:"info",visual:"Result: [[1,6],[8,10],[15,18]]",desc:"Answer: [[1,6],[8,10],[15,18]] ✓"}
]},
"Minimum Number of Arrows to Burst Balloons": { title:"Min Arrows to Burst Balloons", pattern:"Sort + Greedy (Interval Scheduling)", explanation:"Sort by end. Shoot at each balloon's end — bursts all overlapping.", difficulty:"Medium", steps:[
  {type:"info",visual:"balloons: [[10,16],[2,8],[1,6],[7,12]]",desc:"Minimum arrows to burst all balloons"},
  {type:"info",visual:"Sort by end: [1,6],[2,8],[7,12],[10,16]\nArrow at 6: bursts [1,6],[2,8]\nArrow at 12: bursts [7,12],[10,16]",desc:"Greedy: shoot at end of earliest-ending balloon"},
  {type:"info",visual:"Result: 2 arrows",desc:"Answer: 2 ✓",vars:{result:2}}
]},
"Non-overlapping Intervals": { title:"Non-overlapping Intervals", pattern:"Sort + Greedy", explanation:"Sort by end time. Keep intervals that don't overlap. Count removals.", difficulty:"Medium", steps:[
  {type:"info",visual:"[[1,2],[2,3],[3,4],[1,3]]",desc:"Min removals to eliminate all overlaps"},
  {type:"info",visual:"Sort by end: [1,2],[2,3],[1,3],[3,4]\nKeep [1,2] (end=2)\nKeep [2,3] (start≥2)\nSkip [1,3] (start<2) → REMOVE\nKeep [3,4] (start≥3)",desc:"Greedy: keep earliest-ending non-overlapping"},
  {type:"info",visual:"Result: 1 removal",desc:"Answer: 1 ✓",vars:{result:1}}
]},
"Search a 2D Matrix": { title:"Search a 2D Matrix", pattern:"Binary Search (Treat as 1D)", explanation:"Matrix is sorted left-to-right, top-to-bottom continuously. Treat as flattened sorted array.", difficulty:"Medium", steps:[
  {type:"matrix",data:[[1,3,5,7],[10,11,16,20],[23,30,34,60]],highlights:[],desc:"target=3. Binary search in matrix."},
  {type:"info",visual:"Treat as 1D array of 12 elements\nmid=5 → row=5/4=1, col=5%4=1 → val=11 > 3\nSearch left half",desc:"Map 1D index to 2D: row=idx/cols, col=idx%cols"},
  {type:"matrix",data:[[1,3,5,7],[10,11,16,20],[23,30,34,60]],highlights:[[0,1]],desc:"Found 3 at (0,1) ✓",vars:{result:true}}
]},
"Search a 2D Matrix II": { title:"Search a 2D Matrix II", pattern:"Staircase Search", explanation:"Start at top-right. If target < current, go left. If target > current, go down.", difficulty:"Medium", steps:[
  {type:"matrix",data:[[1,4,7],[2,5,8],[3,6,9]],highlights:[],desc:"target=5. Each row and column is sorted."},
  {type:"matrix",data:[[1,4,7],[2,5,8],[3,6,9]],highlights:[[0,2]],desc:"Start top-right: 7 > 5 → go left"},
  {type:"matrix",data:[[1,4,7],[2,5,8],[3,6,9]],highlights:[[0,1]],desc:"4 < 5 → go down"},
  {type:"matrix",data:[[1,4,7],[2,5,8],[3,6,9]],highlights:[[1,1]],desc:"5 == 5 → Found! ✓",vars:{result:true}}
]},
"Search in Rotated Sorted Array": { title:"Search in Rotated Sorted Array", pattern:"Modified Binary Search", explanation:"One half is always sorted. Check if target is in sorted half, otherwise search other half.", difficulty:"Medium", steps:[
  {type:"array",data:[4,5,6,7,0,1,2],highlights:[],pointers:[],desc:"target=0. Array rotated at some pivot."},
  {type:"array",data:[4,5,6,7,0,1,2],highlights:[3],pointers:[{idx:3,label:"M",color:"var(--accent-orange)"}],desc:"mid=3(7). Left [4,5,6,7] sorted. 0 not in [4,7] → search right"},
  {type:"array",data:[4,5,6,7,0,1,2],highlights:[5],pointers:[{idx:5,label:"M",color:"var(--accent-orange)"}],desc:"mid=5(1). Right [1,2] sorted. 0 not in [1,2] → search left"},
  {type:"array",data:[4,5,6,7,0,1,2],sorted:[4],pointers:[],desc:"Found 0 at index 4 ✓",vars:{result:4}}
]},
"Search in Rotated Sorted Array II": { title:"Search in Rotated Array II", pattern:"Modified Binary Search (with Duplicates)", explanation:"Same as above but skip duplicates when arr[left]==arr[mid]==arr[right].", difficulty:"Medium", steps:[
  {type:"array",data:[2,5,6,0,0,1,2],highlights:[],pointers:[],desc:"target=0. May contain duplicates."},
  {type:"info",visual:"When nums[L]==nums[M]==nums[R],\ncan't determine which half is sorted.\nShrink: L++, R--",desc:"Handle duplicates by shrinking bounds"},
  {type:"array",data:[2,5,6,0,0,1,2],sorted:[3],pointers:[],desc:"Found 0 at index 3 ✓",vars:{result:true}}
]},
"Sort Colors": { title:"Sort Colors (Dutch Flag)", pattern:"Three Pointers", explanation:"Pointer for 0s (left), 2s (right), current. Swap 0s left, 2s right, skip 1s.", difficulty:"Medium", steps:[
  {type:"array",data:[2,0,2,1,1,0],highlights:[],pointers:[{idx:0,label:"lo",color:"var(--accent-blue)"},{idx:0,label:"mid",color:"var(--accent-orange)"},{idx:5,label:"hi",color:"var(--accent-green)"}],desc:"Sort [2,0,2,1,1,0] using 3-way partition"},
  {type:"array",data:[0,0,2,1,1,2],swaps:[0,5],pointers:[{idx:0,label:"lo",color:"var(--accent-blue)"},{idx:2,label:"mid",color:"var(--accent-orange)"},{idx:4,label:"hi",color:"var(--accent-green)"}],desc:"Swap 2→right, 0→left"},
  {type:"array",data:[0,0,1,1,2,2],sorted:[0,1,2,3,4,5],pointers:[],desc:"Sorted: [0,0,1,1,2,2] ✓"}
]},
"Sort List": { title:"Sort List", pattern:"Merge Sort (Linked List)", explanation:"Split list in half (slow/fast pointers), sort each half, merge.", difficulty:"Medium", steps:[
  {type:"array",data:[4,2,1,3],highlights:[],pointers:[],desc:"Sort linked list in O(n log n)"},
  {type:"info",visual:"Split: [4,2] [1,3]\nSplit: [4][2] [1][3]\nMerge: [2,4] [1,3]\nMerge: [1,2,3,4]",desc:"Merge sort: split by slow/fast, merge sorted halves"},
  {type:"array",data:[1,2,3,4],sorted:[0,1,2,3],pointers:[],desc:"Sorted: [1,2,3,4] ✓"}
]},
"Task Scheduler": { title:"Task Scheduler", pattern:"Greedy + Math", explanation:"Most frequent task determines min time. Gaps filled by other tasks.", difficulty:"Medium", steps:[
  {type:"info",visual:'tasks=["A","A","A","B","B","B"], n=2',desc:"Schedule with cooldown n between same tasks"},
  {type:"info",visual:"A _ _ A _ _ A\nA B _ A B _ A B\nMin intervals = (maxFreq-1)*(n+1) + countMax",desc:"Formula: (3-1)*(2+1) + 2 = 8"},
  {type:"info",visual:"Result: 8",desc:"Answer: 8 intervals ✓",vars:{result:8}}
]},
"Wiggle Sort II": { title:"Wiggle Sort II", pattern:"Sort + Interleave", explanation:"Sort, split into halves. Interleave: smaller at even indices, larger at odd indices (reversed).", difficulty:"Medium", steps:[
  {type:"array",data:[1,5,1,1,6,4],highlights:[],pointers:[],desc:"Rearrange so nums[0]<nums[1]>nums[2]<nums[3]..."},
  {type:"array",data:[1,1,1,4,5,6],highlights:[0,1,2,3,4,5],pointers:[],desc:"Sort: [1,1,1,4,5,6]. Split: small=[1,1,1], large=[4,5,6]"},
  {type:"array",data:[1,6,1,5,1,4],sorted:[0,1,2,3,4,5],pointers:[],desc:"Interleave reversed: [1,6,1,5,1,4] ✓ (zigzag!)"}
]},
};


export const stacksQueuesAnimations = {
"Backspace String Compare": { title:"Backspace String Compare", pattern:"Stack / Two Pointer (Reverse)", explanation:"Process each string with a stack: push chars, pop on '#'. Compare final results.", difficulty:"Easy", steps:[
  {type:"string",data:"ab#c",highlights:[],pointers:[],desc:"s='ab#c', t='ad#c'. Compare after backspaces."},
  {type:"stack",data:["c","a"],highlights:[],desc:"Process 'ab#c': push a,b → # pops b → push c. Stack: [a,c]"},
  {type:"stack",data:["c","a"],highlights:[],desc:"Process 'ad#c': push a,d → # pops d → push c. Stack: [a,c]"},
  {type:"info",visual:"Both produce 'ac'. Equal!",desc:"Answer: true ✓",vars:{result:true}}
]},
"Implement Queue using Stacks": { title:"Queue using Two Stacks", pattern:"Two Stacks (Lazy Transfer)", explanation:"Push to stack1. On pop/peek, if stack2 empty, transfer all from stack1 to stack2.", difficulty:"Easy", steps:[
  {type:"info",visual:"Use 2 stacks to simulate FIFO queue",desc:"push stack reverses order; pop stack gives FIFO"},
  {type:"stack",data:[3,2,1],highlights:[],desc:"Push 1,2,3: pushStack = [3,2,1]"},
  {type:"stack",data:[1,2,3],highlights:[0],desc:"Pop: transfer to popStack = [1,2,3]. Pop 1 (FIFO!) ✓"},
  {type:"info",visual:"peek()→2, pop()→2, pop()→3",desc:"Amortized O(1) per operation ✓"}
]},
"Implement Stack using Queues": { title:"Stack using Queues", pattern:"Single Queue (Rotate)", explanation:"On push, add element then rotate queue so new element is at front.", difficulty:"Easy", steps:[
  {type:"queue",data:[3,2,1],highlights:[0],desc:"Push 1,2,3. After each push, rotate so newest is front."},
  {type:"info",visual:"push(1): q=[1]\npush(2): q=[2,1] (rotate 1 to back)\npush(3): q=[3,2,1] (rotate 2 elements)",desc:"Rotate queue after each push for LIFO order"},
  {type:"queue",data:[2,1],highlights:[0],desc:"pop()→3, now front is 2. LIFO order ✓"}
]},
"Moving Average from Data Stream": { title:"Moving Average", pattern:"Queue (Fixed Window)", explanation:"Keep a queue of last k elements. On new element, add to sum, remove oldest if over size.", difficulty:"Easy", steps:[
  {type:"queue",data:[1],highlights:[],desc:"size=3. next(1): sum=1, avg=1.0"},
  {type:"queue",data:[1,10],highlights:[],desc:"next(10): sum=11, avg=5.5"},
  {type:"queue",data:[1,10,3],highlights:[],desc:"next(3): sum=14, avg=4.67"},
  {type:"queue",data:[10,3,5],highlights:[],desc:"next(5): remove 1, sum=18, avg=6.0 ✓"}
]},
"Next Greater Element I": { title:"Next Greater Element I", pattern:"Monotonic Stack + Hash Map", explanation:"Use decreasing stack on nums2. When we pop, the current element is the 'next greater'.", difficulty:"Easy", steps:[
  {type:"array",data:[1,3,4,2],highlights:[],pointers:[],desc:"nums1=[4,1,2], nums2=[1,3,4,2]. Find next greater in nums2."},
  {type:"stack",data:[1],highlights:[],desc:"Push 1. Stack: [1]"},
  {type:"stack",data:[3],highlights:[],desc:"3>1: pop 1, nextGreater[1]=3. Push 3."},
  {type:"stack",data:[4],highlights:[],desc:"4>3: pop 3, nextGreater[3]=4. Push 4."},
  {type:"info",visual:"nextGreater: {1:3, 3:4, 4:-1, 2:-1}\nAnswer for [4,1,2]: [-1,3,-1]",desc:"Answer: [-1,3,-1] ✓"}
]},
"Number of Recent Calls": { title:"Number of Recent Calls", pattern:"Queue", explanation:"Keep timestamps in queue. On new ping, add it, then remove all timestamps older than t-3000.", difficulty:"Easy", steps:[
  {type:"queue",data:[1],highlights:[],desc:"ping(1): queue=[1], count=1"},
  {type:"queue",data:[1,100],highlights:[],desc:"ping(100): queue=[1,100], count=2"},
  {type:"queue",data:[1,100,3001],highlights:[],desc:"ping(3001): queue=[1,100,3001], count=3"},
  {type:"queue",data:[3001,3002],highlights:[],desc:"ping(3002): remove <2, queue=[3001,3002], count=2 ✓"}
]},
"Remove All Adjacent Duplicates in String": { title:"Remove Adjacent Duplicates", pattern:"Stack", explanation:"Push chars to stack. If top equals current char, pop instead of pushing.", difficulty:"Easy", steps:[
  {type:"string",data:"abbaca",highlights:[],pointers:[],desc:"Remove adjacent duplicates repeatedly"},
  {type:"stack",data:["a"],highlights:[],desc:"Push 'a'"},
  {type:"stack",data:[],highlights:[],desc:"'b','b' adjacent → cancel! Pop both."},
  {type:"stack",data:["c","a"],highlights:[],desc:"Push 'a','c'. Then 'a': top='c'≠'a', push."},
  {type:"info",visual:'Result: "ca"',desc:"Answer: 'ca' ✓",vars:{result:"ca"}}
]},
"Valid Parentheses": { title:"Valid Parentheses", pattern:"Stack", explanation:"Push opening brackets. On closing, check if top matches. Stack must be empty at end.", difficulty:"Easy", steps:[
  {type:"string",data:"({[]})",highlights:[],pointers:[],desc:"Check if brackets are valid"},
  {type:"stack",data:["("],highlights:[],desc:"Push '('"},
  {type:"stack",data:["{","("],highlights:[],desc:"Push '{'"},
  {type:"stack",data:["[","{","("],highlights:[],desc:"Push '['"},
  {type:"stack",data:["{","("],highlights:[],desc:"']' matches '[' → pop!"},
  {type:"stack",data:["("],highlights:[],desc:"'}' matches '{' → pop!"},
  {type:"stack",data:[],highlights:[],desc:"')' matches '(' → pop! Stack empty = Valid ✓",vars:{result:true}}
]},

"Basic Calculator": { title:"Basic Calculator", pattern:"Stack + Recursion", explanation:"Use stack for sign tracking. Handle parentheses by pushing current result/sign.", difficulty:"Hard", steps:[
  {type:"string",data:"(1+(4+5+2)-3)",highlights:[],pointers:[],desc:"Evaluate expression with +, -, ( )"},
  {type:"stack",data:["+1","+1"],highlights:[],desc:"Enter (: push result=0, sign=+1"},
  {type:"info",visual:"1 + (4+5+2) - 3\n= 1 + 11 - 3 = 9",desc:"Process inside-out"},
  {type:"info",visual:"Result: 9",desc:"Answer: 9 ✓",vars:{result:9}}
]},
"Largest Rectangle in Histogram": { title:"Largest Rectangle in Histogram", pattern:"Monotonic Stack", explanation:"Maintain increasing stack of indices. On shorter bar, pop and calculate area with popped bar as height.", difficulty:"Hard", steps:[
  {type:"bars",data:[2,1,5,6,2,3],highlights:[],sorted:[],desc:"Find largest rectangle in histogram"},
  {type:"bars",data:[2,1,5,6,2,3],highlights:[2,3],sorted:[],desc:"Stack: increasing heights. At bar 4(h=2), pop 6 and 5."},
  {type:"info",visual:"Pop h=6: width=1, area=6\nPop h=5: width=2, area=10 ← max!",desc:"Calculate area when popping: h × (right-left-1)"},
  {type:"bars",data:[2,1,5,6,2,3],highlights:[2,3],sorted:[2,3],desc:"Answer: 10 (5×2 rectangle) ✓",vars:{result:10}}
]},
"Maximal Rectangle": { title:"Maximal Rectangle", pattern:"Histogram per Row + Monotonic Stack", explanation:"Build histogram heights row by row. Apply largest-rectangle-in-histogram for each row.", difficulty:"Hard", steps:[
  {type:"matrix",data:[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"]],highlights:[],desc:"Find largest rectangle of 1s"},
  {type:"info",visual:"Row 0 histogram: [1,0,1,0,0]\nRow 1 histogram: [2,0,2,1,1]\nRow 2 histogram: [3,1,3,2,2]",desc:"Build histogram heights per row"},
  {type:"bars",data:[3,1,3,2,2],highlights:[2,3,4],sorted:[],desc:"Row 2: largest rect in [3,1,3,2,2] = 6 (2×3)"},
  {type:"info",visual:"Result: 6",desc:"Answer: 6 ✓",vars:{result:6}}
]},
"Sliding Window Maximum": { title:"Sliding Window Maximum", pattern:"Monotonic Deque", explanation:"Maintain decreasing deque. Front is always the max. Remove front if outside window.", difficulty:"Hard", steps:[
  {type:"array",data:[1,3,-1,-3,5,3,6,7],highlights:[],pointers:[],desc:"k=3. Find max in each window."},
  {type:"array",data:[1,3,-1,-3,5,3,6,7],window:[0,1,2],pointers:[],desc:"Window [1,3,-1]: max=3",vars:{result:"[3]"}},
  {type:"array",data:[1,3,-1,-3,5,3,6,7],window:[1,2,3],pointers:[],desc:"Window [3,-1,-3]: max=3",vars:{result:"[3,3]"}},
  {type:"array",data:[1,3,-1,-3,5,3,6,7],window:[2,3,4],pointers:[],desc:"Window [-1,-3,5]: max=5",vars:{result:"[3,3,5]"}},
  {type:"info",visual:"Result: [3,3,5,5,6,7]",desc:"Answer: [3,3,5,5,6,7] ✓"}
]},
"Asteroid Collision": { title:"Asteroid Collision", pattern:"Stack", explanation:"Process left-to-right. Positive go right, negative go left. Use stack for rightward asteroids.", difficulty:"Medium", steps:[
  {type:"array",data:[5,10,-5],highlights:[],pointers:[],desc:"Positive=right, negative=left. What survives?"},
  {type:"stack",data:[5,10],highlights:[],desc:"Push 5, 10 (going right)"},
  {type:"stack",data:[5,10],highlights:[0],desc:"-5 hits 10: |-5|<10, -5 destroyed. Stack unchanged."},
  {type:"info",visual:"Result: [5, 10]",desc:"Answer: [5, 10] ✓ (-5 destroyed)"}
]},
"Basic Calculator II": { title:"Basic Calculator II", pattern:"Stack (Operator Precedence)", explanation:"Process * and / immediately (higher precedence). Push +/- terms to stack, sum at end.", difficulty:"Medium", steps:[
  {type:"string",data:"3+2*2",highlights:[],pointers:[],desc:"Evaluate 3+2*2 (no parentheses)"},
  {type:"stack",data:[3],highlights:[],desc:"Push 3"},
  {type:"stack",data:[4,3],highlights:[],desc:"Op=*, compute 2*2=4, push 4"},
  {type:"info",visual:"Stack: [3, 4]\nSum: 3+4 = 7",desc:"Answer: 7 ✓",vars:{result:7}}
]},
"Build an Array With Stack Operations": { title:"Build Array with Stack Ops", pattern:"Stack Simulation", explanation:"Read stream 1..n. Push each, pop if not in target.", difficulty:"Medium", steps:[
  {type:"array",data:[1,3],highlights:[],pointers:[],desc:"target=[1,3], n=3. Build using Push/Pop only."},
  {type:"info",visual:'Stream 1: Push (need 1) ✓\nStream 2: Push, Pop (skip 2)\nStream 3: Push (need 3) ✓',desc:"Answer: ['Push','Push','Pop','Push'] ✓"}
]},
"Daily Temperatures": { title:"Daily Temperatures", pattern:"Monotonic Stack (Decreasing)", explanation:"Stack of indices with decreasing temps. When warmer day found, pop and record the gap.", difficulty:"Medium", steps:[
  {type:"array",data:[73,74,75,71,69,72,76,73],highlights:[],pointers:[],desc:"Days until warmer temperature"},
  {type:"array",data:[73,74,75,71,69,72,76,73],highlights:[0],pointers:[],desc:"Push idx 0(73)"},
  {type:"array",data:[73,74,75,71,69,72,76,73],highlights:[1],pointers:[],desc:"74>73: pop idx 0, answer[0]=1-0=1",vars:{answer:"[1,...]"}},
  {type:"array",data:[73,74,75,71,69,72,76,73],highlights:[5],pointers:[],desc:"72>69: pop idx 4, answer[4]=5-4=1. 72>71: pop idx 3, answer[3]=5-3=2"},
  {type:"array",data:[1,1,4,2,1,1,0,0],sorted:[0,1,2,3,4,5,6,7],pointers:[],desc:"Answer: [1,1,4,2,1,1,0,0] ✓"}
]},
"Decode String": { title:"Decode String", pattern:"Stack (Nested Encoding)", explanation:"Push current string and multiplier when hitting '['. On ']', pop and repeat.", difficulty:"Medium", steps:[
  {type:"string",data:"3[a2[c]]",highlights:[],pointers:[],desc:"Decode: repeat inner strings"},
  {type:"stack",data:["3","["],highlights:[],desc:"num=3, push to stack on '['"},
  {type:"info",visual:'Inner: 2[c] → "cc"\nOuter: 3[a + "cc"] → 3["acc"] → "accaccacc"',desc:"Process inside-out"},
  {type:"info",visual:'Result: "accaccacc"',desc:"Answer: 'accaccacc' ✓",vars:{result:"accaccacc"}}
]},
"Design Browser History": { title:"Browser History", pattern:"Two Stacks / Array + Pointer", explanation:"Array with current index. Back goes left, forward goes right, visit clears forward.", difficulty:"Medium", steps:[
  {type:"array",data:["home","google","fb","yt"],highlights:[3],pointers:[{idx:3,label:"curr",color:"var(--accent-blue)"}],desc:"Visit: home→google→fb→youtube"},
  {type:"array",data:["home","google","fb","yt"],highlights:[1],pointers:[{idx:1,label:"curr",color:"var(--accent-blue)"}],desc:"back(2): move 2 steps back → google"},
  {type:"array",data:["home","google","fb","yt"],highlights:[2],pointers:[{idx:2,label:"curr",color:"var(--accent-blue)"}],desc:"forward(1): move 1 step forward → fb ✓"}
]},
"Design Circular Deque": { title:"Circular Deque", pattern:"Array + Two Pointers (Modular)", explanation:"Use circular array with front/rear pointers. Modular arithmetic for wrapping.", difficulty:"Medium", steps:[
  {type:"info",visual:"Circular buffer with front and rear pointers",desc:"insertFront, insertLast, deleteFront, deleteLast"},
  {type:"queue",data:[1,2,3],highlights:[0,2],desc:"Front=1, Rear=3. All operations O(1)."},
  {type:"info",visual:"Modular indexing: (ptr + 1) % capacity",desc:"Wrap-around using modulo ✓"}
]},
"Design Circular Queue": { title:"Circular Queue", pattern:"Array + Modular Arithmetic", explanation:"Fixed array with head pointer and count. enQueue/deQueue adjust pointers with modulo.", difficulty:"Medium", steps:[
  {type:"queue",data:[],highlights:[],desc:"Capacity=3. Implement FIFO with circular array."},
  {type:"queue",data:[1,2,3],highlights:[0],desc:"enQueue(1,2,3): full!"},
  {type:"queue",data:[2,3],highlights:[0],desc:"deQueue: remove front(1). head moves forward modulo size."},
  {type:"info",visual:"isFull/isEmpty check using count vs capacity",desc:"O(1) all operations ✓"}
]},
"Evaluate Reverse Polish Notation": { title:"Evaluate RPN", pattern:"Stack", explanation:"Push numbers. On operator, pop two, compute, push result.", difficulty:"Medium", steps:[
  {type:"array",data:["2","1","+","3","*"],highlights:[],pointers:[],desc:"Evaluate: (2+1)*3"},
  {type:"stack",data:[2,1],highlights:[],desc:"Push 2, 1"},
  {type:"stack",data:[3],highlights:[],desc:"'+': pop 1,2 → 2+1=3, push 3"},
  {type:"stack",data:[3,3],highlights:[],desc:"Push 3"},
  {type:"stack",data:[9],highlights:[],desc:"'*': pop 3,3 → 3*3=9, push 9 ✓",vars:{result:9}}
]},
"Flatten Nested List Iterator": { title:"Flatten Nested List", pattern:"Stack (Recursive Flatten)", explanation:"Use stack to flatten nested structure lazily. Push elements in reverse order.", difficulty:"Medium", steps:[
  {type:"info",visual:"Input: [[1,1],2,[1,1]]",desc:"Implement iterator that flattens nested lists"},
  {type:"stack",data:["[1,1]",2,"[1,1]"],highlights:[],desc:"Push in reverse to stack"},
  {type:"info",visual:"On next(): if top is list, expand it\nnext()→1,1,2,1,1",desc:"Lazily flatten: expand lists when needed ✓"}
]},
"Maximum Width Ramp": { title:"Maximum Width Ramp", pattern:"Monotonic Stack (Decreasing) + Right Scan", explanation:"Build decreasing stack of indices from left. Then scan from right to find widest valid pair.", difficulty:"Medium", steps:[
  {type:"array",data:[6,0,8,2,1,5],highlights:[],pointers:[],desc:"Find max j-i where A[i]≤A[j]"},
  {type:"array",data:[6,0,8,2,1,5],highlights:[0,1],pointers:[],desc:"Decreasing stack of potential i's: [0(6), 1(0)]"},
  {type:"array",data:[6,0,8,2,1,5],highlights:[1,5],pointers:[],desc:"Scan right: idx5(5)≥idx1(0) → width=5-1=4!",vars:{max:4}},
  {type:"info",visual:"Result: 4",desc:"Answer: 4 ✓",vars:{result:4}}
]},
"Min Stack": { title:"Min Stack", pattern:"Two Stacks (Value + Min)", explanation:"Maintain second stack/variable tracking minimum at each level.", difficulty:"Medium", steps:[
  {type:"stack",data:[-2,0,-3],highlights:[2],desc:"push(-2), push(0), push(-3). getMin()=-3"},
  {type:"stack",data:[-2,0],highlights:[0],desc:"pop(-3). getMin()=-2"},
  {type:"info",visual:"Each push also records min so far. O(1) getMin!",desc:"Min tracked at each stack level ✓"}
]},
"Next Greater Element II": { title:"Next Greater Element II (Circular)", pattern:"Monotonic Stack + Circular", explanation:"Process array twice (simulating circular). Use decreasing stack.", difficulty:"Medium", steps:[
  {type:"array",data:[1,2,1],highlights:[],pointers:[],desc:"Circular array. Next greater for each element."},
  {type:"info",visual:"Process [1,2,1,1,2,1] (doubled)\n1→2, 2→-1(no greater), 1→2(circular!)",desc:"Double the array to handle wrap-around"},
  {type:"info",visual:"Result: [2,-1,2]",desc:"Answer: [2,-1,2] ✓"}
]},
"Online Stock Span": { title:"Online Stock Span", pattern:"Monotonic Stack (Decreasing)", explanation:"Stack stores (price, span). Pop while current ≥ top, accumulate their spans.", difficulty:"Medium", steps:[
  {type:"array",data:[100,80,60,70,60,75,85],highlights:[],pointers:[],desc:"For each day, count consecutive days with price ≤ today"},
  {type:"info",visual:"Day 6(85): pop 75(span 4), pop 80(span 1)\nspan = 1+4+1 = 6",desc:"Stack accumulates spans of popped elements"},
  {type:"info",visual:"Spans: [1,1,1,2,1,4,6]",desc:"Answer includes span 6 for price 85 ✓"}
]},
"Remove K Digits": { title:"Remove K Digits", pattern:"Monotonic Stack (Greedy)", explanation:"Maintain increasing stack. Pop when current digit is smaller (removes larger leading digits).", difficulty:"Medium", steps:[
  {type:"string",data:"1432219",highlights:[],pointers:[],desc:"k=3. Remove 3 digits to minimize number."},
  {type:"stack",data:["1"],highlights:[],desc:"Push 1"},
  {type:"stack",data:["1","4"],highlights:[],desc:"Push 4"},
  {type:"stack",data:["1","2"],highlights:[],desc:"3<4: pop 4 (k=2). 3<nothing, push 3. Then 2<3: pop 3(k=1). Push 2."},
  {type:"info",visual:'Stack: "1219" → remove one more → "1219"[:-1]? No, keep leftmost.\nResult: "1219"',desc:"Answer: '1219' ✓",vars:{result:"1219"}}
]},
"Score of Parentheses": { title:"Score of Parentheses", pattern:"Stack (Score Tracking)", explanation:"() = 1, (A) = 2*A, AB = A+B. Use stack to track scores at each nesting level.", difficulty:"Medium", steps:[
  {type:"string",data:"(()(()))",highlights:[],pointers:[],desc:"Score: ()=1, (A)=2A, AB=A+B"},
  {type:"stack",data:[0],highlights:[],desc:"Start with score 0"},
  {type:"info",visual:"( → push 0\n( → push 0\n) → score = max(2*0, 1) = 1, add to prev\n...",desc:"Track nested scores via stack"},
  {type:"info",visual:"Result: 6",desc:"Answer: 6 ✓ (2*(1+2*1) = 6)",vars:{result:6}}
]},
"Simplify Path": { title:"Simplify Path", pattern:"Stack + Split", explanation:"Split by '/'. Push directory names. Pop on '..'. Ignore '.' and empty.", difficulty:"Medium", steps:[
  {type:"info",visual:'"/a/./b/../../c/"',desc:"Simplify Unix path"},
  {type:"stack",data:["a"],highlights:[],desc:"Push 'a'"},
  {type:"stack",data:["a"],highlights:[],desc:"'.' → ignore (current dir)"},
  {type:"stack",data:["a","b"],highlights:[],desc:"Push 'b'"},
  {type:"stack",data:["a"],highlights:[],desc:"'..' → pop 'b' (go up)"},
  {type:"stack",data:[],highlights:[],desc:"'..' → pop 'a' (go up)"},
  {type:"stack",data:["c"],highlights:[],desc:"Push 'c'. Result: '/c' ✓",vars:{result:"/c"}}
]},
};


// Master lookup function
export function getAnimation(topic, problemName) {
  switch(topic) {
    case 'lists': return listsAnimations[problemName] || null;
    case 'strings': return stringsAnimations[problemName] || null;
    case 'dictionaries': return dictionariesAnimations[problemName] || null;
    case 'sorting': return sortingAnimations[problemName] || null;
    case 'stacks-queues': return stacksQueuesAnimations[problemName] || null;
    default: return null;
  }
}
