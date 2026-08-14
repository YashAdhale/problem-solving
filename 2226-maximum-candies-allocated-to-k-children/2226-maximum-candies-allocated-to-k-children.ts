function maximumCandies(candies: number[], k: number): number {
    let totalCandies = candies.reduce((acc, c) => acc + c, 0)
    if (totalCandies < k) return 0
    let left = 1
    let right = Math.max(...candies)
    while (left < right) {
        let mid = Math.ceil((left + right) / 2)
        let c = 0
        for (let p of candies) {
            c += Math.floor(p / mid)
        }
        if (c >= k) {
            left = mid 

        }
        else {
            right = mid -1

        }

    }
    return left
};