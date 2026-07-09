/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let ans = []
    let right = 1;
    ans[0] = 1
    right[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        ans[i] = ans[i - 1] * nums[i - 1]
    }
    console.log(ans)
    for (let i = nums.length-1 ; i >= 0; i--) {
        ans[i] *= right;
        right *= nums[i];
    }
    return ans
};