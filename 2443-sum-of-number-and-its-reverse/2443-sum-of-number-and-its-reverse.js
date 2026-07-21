/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    if(num===0){
        return true
    }
    for(let i =1 ; i<= num ; i++){
        let n = i
        let n1 = Number(i.toString().split('').reverse().join(''));
        if(n+n1 === num){
            return true
        }
    }
    return false
};