/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let left = 0
    let map = new Set()
    // map.add(s.slice(left, left + 10))
    let result = new Set()
    for (let right = 10; right <= s.length; right++) {
        if (map.has(s.slice(left, right))) {
            result.add(s.slice(left, right))
        } else {
            map.add(s.slice(left, right))
        }
        left++

    }
    return [...result]
};