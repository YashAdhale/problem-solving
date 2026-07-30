function findMaxAverage(nums: number[], k: number): number {
    let sum = 0
    for ( let left = 0; left < k; left++) {
        sum += nums[left]
    }
    let max = sum
    for (let right = k; right < nums.length; right++) {
        sum += nums[right] - nums[right-k]
        max = Math.max(sum, max)
    }
    return max / k
};