/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left =0 , max=0
    let map = new Map()
    for(let right=0 ; right<s.length ;right++){
        while(map.has(s[right])){
            map.delete(s[left])
            left++
        }
        max =Math.max(max,right-left+1)
        map.set(s[right], true)
    }
    return max
}