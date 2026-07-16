function findMaxAverage(nums: number[], k: number): number {

    let maxSum = 0
    let sum = 0

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    maxSum = sum
    for (let right = k; right < nums.length; right++) {
        sum = sum + nums[right] - nums[right - k]
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum / k
};