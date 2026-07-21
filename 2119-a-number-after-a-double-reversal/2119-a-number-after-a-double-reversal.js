/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  let temp=num
  let digit=0
  let rev=0
  while(temp>0){
    digit= temp%10
     rev= (rev*10)+digit
     temp=Math.floor(temp/10)
  }  


  if(rev.toString().length != num.toString().length) return false
  return true
};