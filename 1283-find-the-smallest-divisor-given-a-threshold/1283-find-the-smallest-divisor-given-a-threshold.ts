function smallestDivisor(nums: number[], threshold: number): number {
    let left = 1
    let right = Math.max(...nums)
    while(left<right){
    let mid= Math.floor((left+right)/2)
    let sum=0
    for(let num of nums){
      sum += Math.ceil(num / mid) 
    }
    console.log(sum , mid)
    if(sum>threshold){
                left=mid+1

    }
    else{
                right=mid

    }
    }
    return left
};