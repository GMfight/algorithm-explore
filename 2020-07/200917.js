// 1.(118)杨辉三角
// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。
// arr[0][0] = 1;
// arr[(1, 0)] =
function generate(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let arr = [[1], [1, 1]];
  while (arr.length < numRows) {
    let len = arr.length,
      cur = [];
    for (let i = 0; i < len + 1; i++) {
      if (i === 0) {
        cur[i] = 1;
        continue;
      }
      if (i === len) {
        cur[i] = 1;
        continue;
      }
      cur[i] = arr[len - 1][i - 1] + arr[len - 1][i];
    }
    arr[len] = cur;
  }
  return arr;
}
// console.log(generate(5));

// 2.(119)给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。
function getRow(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  let result = generate(rowIndex + 1);
  return result[rowIndex];
}
// console.log(getRow(3));

// 3.(136)给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
function singleNumber(nums) {
  if (nums.length <= 2) return nums[0];
  nums = nums.sort();
  for (let i = 0; i < nums.length - 1; ) {
    if (nums[i] === nums[i + 1]) {
      i += 2;
      if (i === nums.length - 1) return nums[nums.length - 1];
    } else {
      return nums[i];
    }
  }
}
// console.log(singleNumber([4, 1, 2, 1, 2]));
// 排序相关算法整理
// 4.（147）链表插入排序
// 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
// 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
// 重复直到所有输入数据插入完为止。
// * function ListNode(val) {
//     *     this.val = val;
//     *     this.next = null;
//     * }
function insertionSortList(head)
// 5.(242)给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// s = "anagram", t = "nagaram"
// 输出: true
// s = "rat", t = "car"
// 输出: false
function isAnagram(s, t) {}

// 6.链表排序
// 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
// 示例 1:
// 输入: 4->2->1->3
// 输出: 1->2->3->4

// function ListNode(val, next) {
//     *     this.val = (val===undefined ? 0 : val)
//     *     this.next = (next===undefined ? null : next)
//     * }
function sortList(head){}

// 7.（922）按照奇偶数排序
// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
// 输入：[4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
// 你可以返回任何满足上述条件的数组作为答案。
function sortArrayByParityII(arr){}

// 8.(976)三角形最大周长
// 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
// 如果不能形成任何面积不为零的三角形，返回 0。
// 输入：[2,1,2]
// 输出：5
function largestPerimeter(){}
// 9.(1356)给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。
// 如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。
// 请你返回排序后的数组。
// 输入：arr = [0,1,2,3,4,5,6,7,8]
// 输出：[0,1,2,4,8,3,5,6,7]
// 解释：[0] 是唯一一个有 0 个 1 的数。
// [1,2,4,8] 都有 1 个 1 。
// [3,5,6] 有 2 个 1 。
// [7] 有 3 个 1 。
// 按照 1 的个数排序得到的结果数组为 [0,1,2,4,8,3,5,6,7]
function sortByBits(arr){}

// 10.(1366)
// 现在有一个特殊的排名系统，依据参赛团队在投票人心中的次序进行排名，每个投票者都需要按从高到低的顺序对参与排名的所有团队进行排位。

// 排名规则如下：

// 参赛团队的排名次序依照其所获「排位第一」的票的多少决定。如果存在多个团队并列的情况，将继续考虑其「排位第二」的票的数量。以此类推，直到不再存在并列的情况。
// 如果在考虑完所有投票情况后仍然出现并列现象，则根据团队字母的字母顺序进行排名。
// 给你一个字符串数组 votes 代表全体投票者给出的排位情况，请你根据上述排名规则对所有参赛团队进行排名。

// 请你返回能表示按排名系统
// 输入：votes = ["ABC","ACB","ABC","ACB","ACB"]
// 输出："ACB"
// 解释：A 队获得五票「排位第一」，没有其他队获得「排位第一」，所以 A 队排名第一。
// B 队获得两票「排位第二」，三票「排位第三」。
// C 队获得三票「排位第二」，两票「排位第三」。
// 由于 C 队「排位第二」的票数较多，所以 C 队排第二，B 队排第三。
function rankTeams(votes){}

// 11.(1502)判断能否形成等差数列
// 给你一个数字数组 arr 。
// 如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。
// 如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。
// 输入：arr = [3,5,1]
// 输出：true
// 解释：对数组重新排序得到 [1,3,5] 或者 [5,3,1] ，任意相邻两项的差分别为 2 或 -2 ，可以形成等差数列。
function canMakeArithmeticProgression(arr){}

// 12.（1528）重新排列字符串
// 给你一个字符串 s 和一个 长度相同 的整数数组 indices 。
// 请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。
// 返回重新排列后的字符串。
// 输入：s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// 输出："leetcode"
// 解释：如图所示，"codeleet" 重新排列后变为 "leetcode" 。
function restoreString (s, indices) {

};
// 2.搜索相关算法整理
// 13.(27)给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
function removeElement(nums, val) {

};

// 14.(28)给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
// 输入: haystack = "hello", needle = "ll"
// 输出: 2
function strStr(haystack, needle) {

};

// 15.(88)给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
function merge (nums1, m, nums2, n) {}

// 16.(125)给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
function isPalindrome(s){}


