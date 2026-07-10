/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (num) {
    let left = 2
    if (num.length <= 2) return num.length;
    for (let i = 2; i < num.length; i++) {
        if (num[i] != num[left-2]) {
            num[left] = num[i]
                    left++

        }
        
    }
    console.log(num)

    return left
};