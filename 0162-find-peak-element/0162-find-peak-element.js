/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let left = 0
    let right = nums.length - 1
    let mid = 0
    while (left < right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] >= nums[mid + 1]) {
            right = mid;
        }
        else if (nums[mid] <= nums[mid + 1]) {

            left = mid +1
        }

    }
    return right

};