function minEatingSpeed(piles: number[], h: number): number {
    let left = 1
    let right = Math.max(...piles)
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        
      
        if (canEatAll(piles,h,mid)) {
            right = mid
        }
        else {
            left = mid + 1

        }
    }
    return left
};

function canEatAll(piles: number[],h:number,mid:number):boolean{
       let hours = 0
       for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid)
        }
        return hours<= h
}