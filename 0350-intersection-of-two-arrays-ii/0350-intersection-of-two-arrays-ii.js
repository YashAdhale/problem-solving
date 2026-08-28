/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let map = {};
    let ans = [];

    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }

    for (let num of nums2) {
        if (map[num] > 0) {
            ans.push(num);
            map[num]--;
        }
    }

    return ans;
};