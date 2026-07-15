function minDays(bloomDay: number[], m: number, k: number): number {
      if (m * k > bloomDay.length) {
        return -1;
    }
    let left = 1
    let right = Math.max(...bloomDay)
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        let flower = 0;   
        let bouquet = 0;  
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
               flower++
               if(flower==k ){
                bouquet++
                flower=0
               }
               
            }
            else{
                 flower = 0
               }
            

        }
           if( bouquet < m){
            left=mid+1

           }
           else{
            right=mid
           }
       
    }
return left
};