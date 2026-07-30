function longestSubarray(nums: number[]): number {
  let left = 0
    let max = 0
    let k =1
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            k--
        }
        while (k < 0) {
            if (nums[left] == 0) {
                k++
            }
            left++
        }

        max = Math.max(max, right - left )


    }
    return max
};


