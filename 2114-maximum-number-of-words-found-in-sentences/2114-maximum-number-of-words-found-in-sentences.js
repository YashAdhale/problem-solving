/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let max = 0
    sentences.forEach((sent) => {
       let l= sent.split(" ")
        console.log(l)
        if (l.length > max) {
            max = l.length
        }
    })
    return max
};