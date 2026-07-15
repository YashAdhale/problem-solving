function shipWithinDays(weights: number[], days: number): number {
    let left = Math.max(...weights);
    let right = weights.reduce((acc: number, num: number) => acc + num, 0)
    while (left <right) {
        let mid = Math.floor((left + right) / 2)
        let day = 1
        let current = 0
        for (let w of weights) {
           
            if ( current+w > mid) {
                day++
                current = w
            }
            else {
                current += w;
            }
        }
        if (day > days) {
            left = mid + 1

        }
        else {
            right = mid

        }
    }
    return right
};