/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let newA = []
    let a = []

    for (let i = 0; i < arr.length; i++) {
        a.push(arr[i])

        if (a.length === size) {
            newA.push(a)
            a = []
        }
    }
    if(a.length>0){
        newA.push(a)
    }
    
    return newA
};
