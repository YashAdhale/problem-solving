function minEatingSpeed(piles: number[], h: number): number {
    let left = 1
    let right = Math.max(...piles)
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        let hours = 0
        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid)
        }
        if (hours<= h) {
            right = mid
        }
        else if (hours > h) {
            left = mid + 1

        }
    }
    return left
};