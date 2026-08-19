/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let newA = []
    let s = size
    let a = []

    for (let i = 0; i < arr.length; i++) {
        a.push(arr[i])
        s--

        if (s === 0) {
            newA.push(a)
            s = size
             a = []
        }
    }
    if(a.length>0){
        newA.push(a)
    }
    
    return newA
};
