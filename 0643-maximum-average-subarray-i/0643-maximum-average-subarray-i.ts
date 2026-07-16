function findMaxAverage(nums: number[], k: number): number {

    let sum = 0

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
   let  maxSum = sum
    for (let right = k; right < nums.length; right++) {
        sum = sum + nums[right] - nums[right - k]
        if (sum > maxSum) maxSum = sum;
    }
    return maxSum / k
};