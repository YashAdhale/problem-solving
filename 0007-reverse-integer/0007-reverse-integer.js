/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = Math.sign(x)
    let n = Math.abs(x)
    let rev =0 
    while(n>0){
        let digit = n %10
        rev = (rev * 10)+ digit
        n = Math.floor(n/10)
    }
    if(rev > Math.pow(2,31)){
        return 0
    }
    return rev * sign
};