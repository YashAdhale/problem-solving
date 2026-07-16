function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let sum = 0
    let ans = 0
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }
    let avg = sum / k
    if (avg >= threshold) {
        ans++
    }

    for (let right = k; right < arr.length; right++) {
        sum += arr[right] - arr[right - k]
        avg=sum / k
         if (avg >= threshold) {
        ans++
    }

    }

    return ans
};