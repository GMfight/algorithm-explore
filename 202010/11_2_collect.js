/* (78)给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。
 */
function subsets(nums){
    function dp(nums,startIndex){
      if(startIndex===nums.length-1) return [[nums[startIndex]]]
      let res1=[]
      // res1.push([nums[startIndex]])
      for(let i=startIndex;i<nums.length;i++){
        res1.push([nums[i]])
        if(i===nums.length-1){
          // res1.push([nums[i]]);
          continue;
        }
        res=dp(nums,i+1)
        res.map(o=>{
          o.unshift(nums[i])
        });
        res1.push(...res)
      }
      return res1;
    }
    let result=dp(nums,0)
  return result;
}
// console.log(subsets([1,2,3]),'a');
/* (79)给定一个二维网格和一个单词，找出该单词是否存在于网格中。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
示例:
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false
 */
// dp[m][n]=(dp[m-1][n]&&board[m][n]===word[i])||(dp[m][n-1]&&board[m][n]===word[i])

function exist(board,word){
  word=word.split('')
  // board=board.map(b=>{
  //   return b.map(o=>{
  //     return {
  //       data:o,
  //       flag:false
  //     }
  //   })
  // })
  let h=board.length,w=board[0].length;
  let visited=new Array(h).fill(new Array(w).fill(false));
  
  function dp(m,n,i){
      if(i===word.length) return true;

      if(m<0||n<0||n>=w||m>=h) return false;
      console.log('val',board[m][n],'visited',visited[m][n])
      if(board[m][n]!==word[i]||visited[m][n]){
        return false;
      }
        visited[m][n]=true;
      let t,r,b,l;
        b=dp(m+1,n,i+1);
        t=dp(m-1,n,i+1)
        r=dp(m,n+1,i+1);
        l=dp(m,n-1,i+1);
        console.log('t',t,'r',r,'b',b,'l',l,'i',i)
      if(t||r||b||l) return true;
      visited[m][n]=false;
      return false;
  }

  for(let i=0;i<h;i++){
    for(let j=0;j<w;j++){
      if(board[i][j]===word[0]&&dp(i,j,0)){
        console.log(visited,115)
        // console.log('i',i,'j',j,116)
        return true;
        // return dp(i,j,0)

      }else{
        console.log(visited,121)

        return false;
      }
    }
  }
  
}

function exist1(board,word){
  let str=str.split('');
  let h=board.length,w=board[0].length,visited=[];

  let dp=(i,j,sIndex)=>{
    if(sIndex===str.length) return true;
    if(i==h||i<0||j==w||j<0) return false;
    if(board[i][j]!=str[sIndex]){
      return false;
    }
    if(visited[i][j]) return false;
    visited[i][j]=true;
    if(dp(i,j+1,sIndex+1)||dp(i,j-1,sIndex+1)||dp(i+1,j,sIndex+1)||dp(i-1,j,sIndex+1)){
      return true;
    }
    visited[i][j]=false;
    return false;
  }

  for(let i=0;i<h;i++){
    visited[i]=[]
    for(let j=0;j<w;j++){
      visited[i][j]=false;
    }
  }
  for(let i=0;i<h;i++){
    visited[i]=[]
    for(let j=0;j<w;j++){
      visited[i][j]=false;
      if(board[i][j]===str[0]){
        if(dp(i,j,0)) return true;
      }
    }
  }
  return false;
}
// console.log(exist([
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ],'ABCCED'),'a')

// console.log(exist([
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ],'SEE'),'b')

/* (121)给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。
 */
function maxProfit(arr){
  let len=arr.length,max=0,buy=1,sold=1;
  for(let i=0;i<len-1;i++){
    for(let j=i+1;j<len;j++){
      if(arr[j]-arr[i]>max){
        max=arr[j]-arr[i]
        buy=i;
        sold=j;
      }
    }
  }
  return max;
}
// console.log(maxProfit([7,1,5,3,6,4]))

/* (139)给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 2：
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
 */
// 递归存在性能问题
 function wordBreak(s,wordDict){
  //  let arr=s.split('')
   let dp=(str)=>{
     if(!str||str.length===0) return true;

     for(let i=0;i<wordDict.length;i++){
       let dirIndex=str.indexOf(wordDict[i]);
       if(dirIndex>=0){
         let lres,rres;
         if(dirIndex+wordDict[i].length!=str.length){
          //  右边为空
          rres=dp(str.slice(dirIndex+wordDict[i].length,str.length))
         }else{
           rres=true;
         }
         if(dirIndex!==0){
          lres=dp(str.slice(0,dirIndex))
          }else{
          lres=true;
         }
         if(rres&&lres){
           return true;
         }
       }
     }
     return false;
   }
   return dp(s)
 }
//  console.log(wordBreak('leetcode',["leet", "code"]),'a')
// console.log(wordBreak('applepenapple',["apple", "pen"]),'b')
// console.log(wordBreak('catsandog',["cats", "dog",'sand','and','cat']),'c')
// console.log(wordBreak("ccbb",["bc","cb"]),'d')
// 贪心算法解决？





function wordBreak2(s,wordDict){
  let dp=[true]
  function hasWord(str){
    return wordDict.findIndex(o=>o===str)>=0
  }
  for(let i=0;i<=s.length;i++){
    for(let j=0;j<i;j++){
      if(dp[j]&&hasWord(s.slice(j,i))){
        dp[i]=true
      }
      // console.log('i',i,'j',j,dp[i])
    }
  }
  // console.log(dp,248)
  return dp[s.length]||false;
}
// console.log(wordBreak2('leetcode',["leet", "code"]),'a')
// console.log(wordBreak2('applepenapple',["apple", "pen"]),'b')
// console.log(wordBreak2('catsandog',["cats", "dog",'sand','and','cat']),'c')
// console.log(wordBreak2("ccbb",["bc","cb"]),'d')

/* (141)给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

进阶：
 */
/* (142)给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

进阶：

你是否可以使用 O(1) 空间解决此题？
 */
// 解题思路一：给每个结点设置访问flag
// 实现参考：
var detectCycle = function(head) {
  const visited = new Set();
  while (head !== null) {
      if (visited.has(head)) {
          return head;
      }
      visited.add(head);
      head = head.next;
  }
  return null;
};

// 解题思路二：双指针，遍历时一个跳一次，一个跳两次，遇上说明有环
// 实现参考：
var detectCycle = function(head) {
  var p = [head, head]
  while (p[0] && p[1]) {
      p = [p[0].next, p[1].next ? p[1].next.next : null]
      if (p[0] && p[0] === p[1]) {
          while (head) {
              if (p[0] === head) return head
              p[0] = p[0].next, head = head.next
          }
      }
  }
  return null
};
/* (146)运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。
当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例:
 */
//LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

/* cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
 */

/*  解法一 利用对象数组属性，有性能缺陷
 */
 function LRUCache(size){
  this.cache=[];
  this.maxSize=size;
  this.curSize=0;
 }
 LRUCache.prototype.put=function(key,val){
   if(this.cache[`cache_${key}`]!==null&&this.cache[`cache_${key}`]!==undefined){
     delete this.cache[`cache_${key}`];
    this.cache[`cache_${key}`]=val;
    return;
   }
  if(this.curSize===this.maxSize){
    let delKey=Object.keys(this.cache).shift();
    delete this.cache[delKey]
    --this.curSize;
  }
  this.cache[`cache_${key}`]=val;
  ++this.curSize;
 }
 LRUCache.prototype.get=function(key){
   let relKey=`cache_${key}`
   if(this.cache[relKey]===null||this.cache[relKey]===undefined) return -1;
   let tmp=this.cache[relKey];
   delete this.cache[relKey]
   this.cache[relKey]=tmp;
   return tmp;
 }

//  let lru1=new LRUCache(2);
//  lru1.put(2,1);
//  lru1.put(1,1);
//  lru1.put(2,3);
//  lru1.put(4,1);
//    console.log(lru1.get(1));
//   console.log(lru1.get(2));

/*   解法二 利用set
 */
// 参考：
var LRUCache = function(capacity) {
  this.q = new Set(), this.h = new Map(), this.capacity = capacity
};

LRUCache.prototype.get = function(key, v) {
  return (v = this.h.get(key)) && (this.q.delete(key), this.q.add(key)) && v || -1
};

LRUCache.prototype.put = function(key, value, k) {
  this.h.set(key, value), this.q.delete(key), this.q.add(key)
  this.q.size > this.capacity && (k = this.q.values().next().value, this.h.delete(k), this.q.delete(k))
};


/*  解法三 利用双向链表+哈希表
 */
// (148)给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

// 进阶：

// 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
function sortList(head){
  if(!head) return null;
  let midNode,curNode;
  midNode=curNode=head;
  let leftHead,leftEnd,rightHead,rightEnd;
  while(curNode.next){
    curNode=curNode.next;
    if(curNode.val<=midNode.val){
      leftHead=leftHead||curNode;
      if(leftEnd){
        leftEnd.next=curNode;
        leftEnd=leftEnd.next;
      }else{
        leftEnd=curNode;
      }
    }else{
      rightHead=rightHead||curNode;
      if(rightEnd){
        rightEnd.next=curNode;
        rightEnd=rightEnd.next;
      }else{
        rightEnd=curNode;
      }
    }

  }
  midNode={
    val:midNode.val,
    next:null
  }
  if(leftHead){
    leftEnd.next=null;
    let leftLink=sortList(leftHead)
    leftHead=leftLink
    let leftNode=leftHead
    while(leftNode&&leftNode.next){
      leftNode=leftNode.next;
    }
    leftNode.next=midNode
  }
  if(rightHead){

    rightEnd.next=null;

    rightHead=sortList(rightHead)
    midNode.next=rightHead;
  }

  return leftHead?leftHead:midNode;
}
let link1={
    val:'0',
    next:{
      val:'3',
      next:{
        val:'2',
        next:
        {
          val:'1'
        }
      }
    }
  }
// console.log(JSON.stringify(sortList(link1)),'a')
/* (152)给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

思路一 找出所有连续子数组
示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 */

function findSub(arr){
  let maxV=preMax=preMin=arr[0],arrLen=arr.length;
  for(let i=1;i<arrLen;i++){
    // if(arr[i]>0){
      // maxV=Math.max(lastMax*arr[i],arr[i]);
      let tmp=Math.max(preMax*arr[i],preMin*arr[i],arr[i])
      preMin=Math.min(preMax*arr[i],preMin*arr[i],arr[i])
      preMax=tmp;
      maxV=Math.max(maxV,preMax,preMin)
      console.log('i',i,'preMax',preMax,'preMin',preMin)
    // }
  }
  return maxV;
}
let arr1=[3,-2,3,2]
// console.log(findSub(arr1),'a')

/* (200)给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。 */
// 思路1，用bfs
function numIslands(arr){

  let h=arr.length,w=arr[0].length,i=0,j=0,visited=[],res=0;
  let dp=(i,j)=>{
    if(i===-1||j===-1||i===h||j===w) return;
    if(arr[i][j]!=1){
      return;
    }
    if(visited[i][j]) return;
    visited[i][j]=true;
    dp(i+1,j);
    dp(i-1,j);
    dp(i,j+1);
    dp(i,j-1)
  }
  for(let i=0;i<h;i++){
    visited[i]=[]
    for(let j=0;j<w;j++){
        visited[i][j]=false;
    }
  }
  for(let i=0;i<h;i++){
    for(let j=0;j<w;j++){
      if(arr[i][j]==1&&!visited[i][j]){
        dp(i,j)
        ++res;
      }
    }
  }
  return res;
}
let grid1= [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
// console.log(numIslands(grid1),'a')

/* （206）转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */
// 思路1，用新链表
// 思路2，原地修改

 function reverseList1(head){
  let preNode=null,curNode=head;
  while(curNode){
    let tmp=curNode.next;
    curNode.next=preNode;
    preNode=curNode;
    if(tmp===null) return curNode;
    curNode=tmp;
  }
  return curNode;
 }

 function reverseList2(head){
   let newHead=null;
   let curNode=head;
   while(curNode){
    
    let newNode={
      val:curNode.val,
      next:newHead
    }
    newHead=newNode;
    curNode=curNode.next;
   }
   return newHead;
 }
//  1->2->3
 let link206_1={
   val:1,
   next:{
     val:2,
     next:{
       val:3,
       next:null
     }
   }
 }
//  console.log(JSON.stringify(reverseList2(link206_1)),'550')


/*  (207)
 你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。

在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们：[0,1]

给定课程总量以及它们的先决条件，请你判断是否可能完成所有课程的学习？


示例 1:

输入: 2, [[1,0]] 
输出: true
解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
示例 2:

输入: 2, [[1,0],[0,1]]
输出: false
解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
提示：
输入的先决条件是由 边缘列表 表示的图形，而不是 邻接矩阵 。详情请参见图的表示法。
你可以假定输入的先决条件中没有重复的边。
输入 3 [3,0],[0,1],[1,3]
输入3  [3,1],[0,1]
1 <= numCourses <= 10^5 */

// 解题思路1：邻接表表示的深度优先遍历
var canFinish = function(numCourses, prerequisites) {

};

/* (208) 前缀树
实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

示例:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true
说明:

你可以假设所有的输入都是由小写字母 a-z 构成的。
保证所有输入均为非空字符串。 */

var Trie = function() {
  this.words=[]
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.words.push(word)
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  this.words.findIndex(o=>o===word)>=0
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  this.words[0].indexOf(prefix)>=0
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
/* （215)

在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4 */
var findKthLargest = function(nums, k) {
  let dp=(nums,k)=>{
    if(nums.length<k) return -1;
    if(k===1) return Math.min(...nums)
    let midVal=nums[0],len=nums.length,lArr=[],rArr=[];
    for(let j=1;j<len;j++){
      if(nums[j]<midVal) lArr.push(nums[j])
      else rArr.push(nums[j])
    }
    if(lArr.length===k-1) return midVal;
    if(lArr.length<k-1){
      return dp(rArr,k-lArr.length-1);
    }else{
      return dp(lArr,k);
    }
  }
  return dp(nums,nums.length-k+1)
};
// console.log(findKthLargest([3,2,1,5,6,4],1),'a_215')

// (347)
// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
// 需要找更好的题解
var topKFrequent = function(nums, k) {
  let arr={}
  for(let i=0;i<nums.length;i++){
    arr[nums[i]]=arr[nums[i]]?++arr[nums[i]]:1;
  }
  // console.log(arr,693)

  let sortValues=Object.values(arr)
  sortValues.sort((a,b)=>{
    return b-a;
  })
  // console.log(sortValues,693)
  sortValues=sortValues.slice(0,k);
  let keys=Object.keys(arr),res=[]
  // console.log(keys)
  sortValues.forEach(o=>{
    keys.findIndex(key=>{
      if(arr[key]===o){
        res.push(key)
        // return true;
      }
    })
  })
  res=new Set(res);
  res=Array.from(res);
  return res;
};
// console.log(topKFrequent([1,2], 2),'a_347')
//  

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]

/* (221)在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

示例:
输入: 
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4
 */
// 思路：bfs 
var maximalSquare = function(matrix) {
  let dp=(i,j)=>{
    if(i==-1||j==-1||i==h||j==w) return 0;
    if(matrix[i][j]!=1) return 0;
    let queue=[[i,j]],startI=i,startJ=j;
    while(queue&&queue.length>0){
      let curEl=queue.shift();
      let hIndex=curEl[0],wIndex=curEl[1]
      if(hIndex>=h||wIndex>=w){
        return Math.min(hIndex-1-startI,wIndex-1-startJ)
      }
      if(matrix[hIndex][wIndex]!=1) {
        return Math.min(hIndex-1-startI,wIndex-1-startJ)
      }
      // if(matrix[hIndex][wIndex+1]===1&&)
      queue.push([hIndex,wIndex+1])
      queue.push([hIndex+1,wIndex])
      queue.push([hIndex+1,wIndex+1])
    }
  }
  let h=matrix.length,w=matrix[0].length,visited=[],maxLen=0;

  console.log('w',w,'h',h,756)
  for(let i=0;i<h;i++){
    for(let j=0;j<w;j++){
      
      if(matrix[i][j]==1){
        let res=dp(i,j);
        console.log('i',i,'j',j,760)
        console.log(res,765)
        maxLen=Math.max(res,maxLen);
      }
    }
  }
  // return maxLen;

};
// dp[i][j]=Min(dp[i][j-1],dp[i][j+1],dp[i-1][j-1])
function maximalSquare2(matrix){
  let h=matrix.length,w=matrix[0].length,dp=[],maxLen=0;
  if(h===0||w===0) return 0;
  for(let i=0;i<h;i++){
    dp[i]=new Array(w).fill(0)
    for(let j=0;j<w;j++){
      if(matrix[i][j]=='1'){
        if(i===0||j===0){
          dp[i][j]=1;
          maxLen=Math.max(dp[i][j],maxLen)

          continue;
        }
        dp[i][j]=Math.min(dp[i-1][j-1],dp[i][j-1],dp[i-1][j])+1;
        maxLen=Math.max(dp[i][j],maxLen)
      }
    }
  }
  return maxLen*maxLen;
}

let test_772_1=[["1","0","1","0","0"],
                ["1","0","1","1","1"],
                ["1","1","1","1","1"],
                ["1","0","0","1","0"]]
            
let test_772_2=[["1"]]
// console.log(maximalSquare2(test_772_1),'772_a')
// console.log(maximalSquare2(test_772_2),'772_a')


/* (238)给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
 

提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 */
// 方法1 n*n时间复杂度
// 方法2





var productExceptSelf1 = function(nums) {
  let res=[]
  for(let i=0;i<nums.length;i++){
    res[i]=1;
    for(let j=0;j<nums.length;j++){
      if(i===j) continue;
      res[i]*=nums[j];
    }
  }
  return res;
};
// console.log(productExceptSelf1([1,2,3,4]),'238_a')
// O(1)
function productExceptSelf2(nums){
  let resL=[1];
  for(let i=1;i<nums.length;i++){
    resL[i]=resL[i-1]*nums[i-1]
  }
  let resR=1;
  for(let i=nums.length-1;i>=0;i--){
    resL[i]=resL[i]*resR;
    resR*=nums[i];
  }
  // console.log(resL,824)
}
// console.log(productExceptSelf2([1,2,3,4]),'238_b')
// O(n)
function productExceptSelf3(nums){
  let resL=[1]
  for(let i=1;i<nums.length;i++){
    resL[i]=resL[i-1]*nums[i-1];
  }
  let rRes=[];
  rRes[nums.length-1]=1;
  for(let i=nums.length-2;i>=0;i--){
    rRes[i]=rRes[i+1]*nums[i+1];
  }
  delete rRes[nums.length]
  for(let i=0;i<nums.length;i++){
    resL[i]=resL[i]*rRes[i]
  }
  return resL;
}
// console.log(productExceptSelf3([1,2,3,4]),'238_c')


/* (240)
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
现有矩阵 matrix 如下：
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。
给定 target = 20，返回 false。 */







function findInMatrix(arr,target){
  let h=arr.length,w=arr[0].length;

  // let findH=(startIndex,endIndex)=>{
  //   let midH=Math.round((endIndex+startIndex)/2);
  //   if(target<arr[midH][0]){
  //     return findH(startIndex,midH)
  //   }else{
  //     // return findH(midH,endIndex)
  //   }
  // }
    let midH=Math.round((endIndex+startIndex)/2);
    while(target<arr[midH][0]){
      endIndex=midH;
      midH=Math.round((startIndex+midH)/2);
    }
    while(target>arr[midH][w-1]){
      midH++;
    }
    for(let i=midH;i<endIndex;i++){
      let curArr=arr[i];
      let midW=Math.round((startW+endW)/2);
      while(curArr[midw]>target){
        endW=midW;
        midW=Math.round((startW+endW)/2);
      }
    }


}
// 使用数组本身规律
function findInMatrix2(arr,target){
  let h=arr.length,w=arr[0].length;
  let i=h-1,j=0;
  while(i>=0&&j>=0&&j<w){
    if(arr[i][j]===target) return true;
    if(arr[i][j]>target){
      i--;
      continue;
    }
    if(arr[i][j]<target){
      j++;
      continue;
    }
  }
  return false;
}
// 使用二分法切片
function findInMatrix3(arr,target){

}

/* (279)
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3 
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.
 */
// 方案一：测试用例覆盖不全，方案错误
var numSquares = function(num) {
  let dp=(n)=>{
    if(n===0) return 0;
    if(n===1) return 1;
    // let arr=[]
    let initNum=n,minLen=0;
    while(!isPosNum(Math.sqrt(n))&&n>0){
      n--;
    }
    // arr.push(n)
    console.log('initNum',initNum,'n',n,931)
    minLen=1;
    let res=dp(initNum-n);
    return minLen+res;

  }
  let minLen=0;
  for(let i=num;i>0;i--){
    if(isPosNum(Math.sqrt(i))){
      // console.log('i',i)
      let res=dp(num-i)
      
      minLen=minLen>0?Math.min(res+1,minLen):res+1;
      console.log('i',i,'res',res)
      // console.log('minLen',minLen)
    }
  }
  return minLen;
};
function isPosNum(num){
  let reg=/^[0-9]+$/g
  if(reg.test(num)){
    return true;
  }else{
    return false;
  }
  // return 
}
// dp[i] 从i的最小长度
// 方案二 利用动态规划
function numSquares2(num){
  let dp=[]
  for(let i=0;i<=num;i++){
    if(i===0){
      dp[i]=0;
      continue;
    }
    if(i===1){
      dp[i]=1;
      continue;
    }
    dp[i]=i;
    for(let j=0;j<=i;j++){
      if(isPosNum(Math.sqrt(j))){
        dp[i]=Math.min(dp[i-j]+1,dp[i])
      }
    }
  }
  return dp[num]
}
// console.log(numSquares2(12),'279_a')
// console.log(isPosNum(Math.sqrt(3)),'a')

/* (287)给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

示例 1:

输入: [1,3,4,2,2]
输出: 2
示例 2:

输入: [3,1,3,4,2]
输出: 3
说明：

不能更改原数组（假设数组是只读的）。
只能使用额外的 O(1) 的空间。
时间复杂度小于 O(n*2) 。
数组中只有一个重复的数字，但它可能不止重复出现一次。 */
// 解法一:两次遍历比较
var findDuplicate = function(nums) {
  let len=nums.length;
  for(let i=0;i<len-1;i++){
    for(let j=i+1;j<len;j++){
      if(nums[i]!==nums[j]) continue;
      return nums[i]
    }
  }
};
// 解法二.构造循环链表，使用快指针和慢指针
// console.log(findDuplicate([3,1,3,4,2]),'287_a')


/* (300)给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
 */
// 1.双指针
// 2.停止for循环；

// 思路一.双指针
// 思路二 动态规划 dp[i] 升序数组长度 dp[i]=dp[i-1]&&dp[i]>Max(0,i)
// 思路三 动态规划 dp[i]=Max(dp[j]) j>=0;j<i;
var lengthOfLIS = function(nums) {
  if(!nums||nums.length===0) return 0;
  if(nums.length===1) return 1;
  let maxLen=0;
  for(let i=0;i<nums.length-1;i++){
    let nearMax=nums[i],curLen=1,curArr=[nums[i]];
    for(let j=i+1;j<nums.length;j++){
      if(nums[j]>=nearMax){
        curArr.push(nums[j])
        nearMax=nums[j];
        ++curLen;
      }
    }
    // console.log('curArr',curArr,1012)
    maxLen=Math.max(maxLen,curLen)
  }
  return maxLen;
};

function lengthOfLIS3(nums){
  let dp=[],len=nums.length,maxLen=0;
  for(let i=0;i<len;i++){
    dp[i]=1;
    for(let j=0;j<i;j++){
      if(nums[i]>nums[j]){

        dp[i]=Math.max(dp[i],dp[j]+1)
      } 
    }
    maxLen=Math.max(maxLen,dp[i])
  }
  return maxLen;
}
// console.log(lengthOfLIS3([2,2]),'300_a')
/* (309)
给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
示例:

输入: [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 */
// 抽象：找出两个差值最大子数组，子数组间隔为1
// dp[i][j] 第j天买入，第i天卖出的收益
// res[i] 第i天卖出,收获的最大收益
// 穷举法不可行
// 贪心算法

// 分析:需要再研究
// i 已持有：
// i-1 已持有；
// i-2 卖出；i买入
// i 未持有：
// i-1 持有 i卖出；
// i-1 未持有
var maxProfit = function(price) {
  let len=price.length,hold=[],unhold=[];
  for(let i=0;i<len;i++){
    if(i===0){
      hold[i]=-price[i];
      unhold[i]=0;
      continue;
    }
    if(i===1){
      hold[i]=Math.max(hold[i-1],-price[i])
      unhold[i]=Math.max(hold[i-1]+price[i],unhold[i-1])
      continue;
    }
    hold[i]=Math.max(hold[i-1],unhold[i-2]-price[i]);
    unhold[i]=Math.max(hold[i-1]+price[i],unhold[i-1])
  }
  return unhold[len-1];
};
// console.log(maxProfit([1,2,3,0,2]),'309_a')






/* (198)
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

 

示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 */
// dp[i]=Max(dp[i-1],dp[i-2]+nums[i])
var rob = function(nums) {
  if(!nums||nums.length===0) return 0;
  if(nums.length===1) return nums[0]
  let dp=[],len=nums.length
  for(let i=0;i<len;i++){
    if(i===0){
      dp[i]=nums[i]
    }else if(i===1){
      dp[i]=Math.max(nums[i],dp[i-1])
    }else{
      dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i]);
    }
  }
  return dp[len-1]
};
// console.log(rob([2,7,9,3,1]),'198_a');




/* (337)
在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。
 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 
 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

示例 1:

输入: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

输出: 7 
解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
示例 2:
输入: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

输出: 9
解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.

 */
// 思路一用邻接矩阵+图 未实现
// 思路二,隔代广度遍历 未实现
// 思路三，树型结构的动态规划
// method1=root.val+root.left.left+root.left.right+root.right.left+root.right.right;
// method2=root.left.val+root.right.val;
function robII(root){
  let dp=(node)=>{
    if(!node) return 0;
    if(!node.left&&!node.right) return node.val;
    let val1=node.val,val2=0;
    if(node.left){
      val1+=dp(node.left.left);
      val1+dp(node.left.right);
      val2+=dp(node.left);
    }
    if(node.right){
      val1+=dp(node.right.left)
      val1+=dp(node.right.right)
      val2+=dp(node.right);
    }
    return Math.max(val1,val2);
  }
  return dp(root);
}
    // function robII2(root){
    //   let queue=[root],visited=false;
    //   while(queue&&queue.length){
    //     let curNode=queue.shift();
        
    //   }
    // }



    /* (338)
 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
要求算法的空间复杂度为O(n)。
你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。
 */
var countBits = function(num) {
  let res=[]
  for(let i=0;i<=num;i++){
    let matches=i.toString(2).match(/1/g);
    matches?res.push(matches.length):res.push(0)
  }
  return res;
};

// 数字的二进制表示，1的个数
let num_338=12
// console.log(countBits(num_338),'a')
// console.log(num_338.toString(2).match(/1/g))

// （322）有性能缺陷
function coinChange(coins,target){
  if(target===0) return 0;
  let minCoin=Math.min(...coins);
  let dp=new Array(target+1).fill(-1)
  for(let j=0;j<coins.length;j++){
    dp[coins[j]]=1;
  }
  for(let i=0;i<=target;i++){
    if(i<minCoin){
      dp[i]=-1;
      continue;
    }
    for(let l=0;l<coins.length;l++){
      let j=0;
      while(j<i){
        if(dp[j]>=0&&dp[i-j]>=0){
          dp[i]=dp[i]>-1?Math.min(dp[j]+dp[i-j],dp[i]):(dp[j]+dp[i-j])
        }
        j+=coins[l]
      }
    }

  }
  console.log(dp,1302)
  return dp[target];
}
// console.log(coinChange([1],1),'a')
// (394)
// 正则无法解决
// 需要使用队列处理
// 1) Aabc
// 2）3[abc]

// let s = "3[a]2[bc]";
// let s = "3[a2[c]]";

// console.log(s.match(/((([0-9a-z]+))(?=(\b|[0-9])))/g),'394_a')
// console.log(s.match(/\[[a/g),'b')
// 思路一 递归



function decodeString(str){
  console.log(str)
  let arr=str.split(''),len=arr.length;
  let dp=(start,end)=>{
    if(start==len-1) return arr[len-1]
    let result='';
    let num=0;
    for(let i=start;i<end;i++){
      if(arr[i]==-1) continue;
      if(isNumber(arr[i])){
        num=Number(num*10)+Number(arr[i]);
        console.log('num',num)
        arr[i]=-1;

        continue;
      }
      if(arr[i]=='['){
        let childStr=dp(i+1,end);
        result+=repeat(childStr,num);
        num=0;
        arr[i]=-1;
        continue;
      }
      if(arr[i]==']'){
        arr[i]=-1;
        return result;
      }
      result+=arr[i]
      arr[i]=-1;

    }
    return result;  
  }
  return dp(0,len);
}

function decodeString2(str){
  let result='',queue=[],num=1;
  for(let i=0;i<str.length;i++){
    if(str[i]=='['){
      queue.push(result);
      queue.push(num);
      // console.log('res',result,1370)
      // console.log('num',num,1370)

      result='';
      num=1;
      continue;
    }
    if(isNumber(str[i])){
      num=str[i];
      continue;
    }
    if(str[i]==']'){
      let repeatNum=queue.pop();
      let repeatStr=queue.pop();
      // console.log('res',repeatStr,1384)
      // console.log('num',repeatNum,1384)
      // console.log('result',result,1384)
      result=repeat(result,repeatNum);

      result=repeatStr+result;
      continue;
    }
    result+=str[i]
  }
  return result;
}

function isNumber(str){
  return (/^[0-9]+$/g).test(str);
}
function repeat(str,num){
  let tmp='';
  while(num>0){
    tmp=tmp+str;
    num--;
  }
  return tmp;
}
// console.log(repeat('aa',3),'1413')
// console.log(isNumber('12'))

// console.log(decodeString('3[a]2[bc]'),'394_a');
// console.log(decodeString('3[a2[c]]'),'394_b');
// console.log(decodeString2('2[abc]3[cd]ef'),'394_c');
console.log(decodeString('10[leetcode]'),'394_d');
