/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (num) {
    let left = 1
    for (let i = 1; i < num.length; i++) {
        if (num[i] != num[i-1]) {
            num[left] = num[i]
                    left++

        }
        
    }

    return left
};