/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj ={}
 
    for(let num =0 ; num< nums.length;num++){
      let  a = target - nums[num]
        if (obj[a]!== undefined){
            return [num , obj[a]]
        }
        obj[nums[num]]=num
    }
};