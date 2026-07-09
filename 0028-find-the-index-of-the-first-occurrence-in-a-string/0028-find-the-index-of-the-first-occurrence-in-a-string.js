/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let first = -1
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            console.log(haystack[i])
            first = i
            let j = 0
            while (j <= needle.length - 1) {
                if (haystack[i + j] !== needle[j]) break
                j++
                if (j == needle.length)
                    return first;
                    

            }
        }
    }
    return -1
};