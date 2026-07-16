function findMaxAverage(nums: number[], k: number): number {

    let max = 0
    let sum = 0
    let avg = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    avg = sum / k
    max = avg
    for (let right = k; right < nums.length; right++) {
        sum -= nums[right - k]
        sum += nums[right]
        avg = sum / k
        if (max < avg) {
            max = avg
        }
    }
    return max
};