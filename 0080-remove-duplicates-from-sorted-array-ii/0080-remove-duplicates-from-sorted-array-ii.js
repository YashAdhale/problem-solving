/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (num) {
    if (num.length <= 2) return num.length;
        let left = 2

    for (let i = 2; i < num.length; i++) {
        if (num[i] != num[left-2]) {
            num[left] = num[i]
                    left++

        }
        
    }

    return left
};