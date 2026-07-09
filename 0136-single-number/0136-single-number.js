/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj ={}
    for(num of nums){
  
            obj[num]= obj[num] +1 || 1
        
    }
   
    return  Number(Object.keys(obj).find(key => obj[key] === 1))

};