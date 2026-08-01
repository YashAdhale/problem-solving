function isPalindrome(s: string): boolean {
    let cleanText = s.replace(/[^a-zA-Z0-9\s]/g, "")
   let a = cleanText.toLowerCase().split(" ").join("")
   let l = a.length-1
    for(let i =0 ; i<= Math.floor(l/2);i++){
        if(a[i]!==a[l-i]){
            return false
        }
    }
    return true
};