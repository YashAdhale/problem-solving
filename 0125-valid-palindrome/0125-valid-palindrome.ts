function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(!isAlphaNumeric(s[right])) {
            right--
            continue;
        }
        if(!isAlphaNumeric(s[left])) {
            left++
            continue;
        }
        if(s[right].toLowerCase() !== s[left].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

const isAlphaNumeric = (c: string) => /[a-z0-9]/i.test(c);