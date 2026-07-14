/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
   left = 1
   right = Math.max(...piles)
   while (left<right){
            let hours = 0;

    let mid= Math.floor((left+right)/2)
     for(let i=0;i<piles.length;i++){
      hours+=  Math.ceil(piles[i]/mid)
         
     }
     if(hours>h){
                left=mid+1

     }
     if(hours<=h){
            right= mid    

     }
   } 
   return left
};