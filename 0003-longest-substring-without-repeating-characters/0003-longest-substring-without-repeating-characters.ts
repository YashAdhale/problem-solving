function lengthOfLongestSubstring(s: string): number {
    let obj = {}
    let left = 0
    let ans = 0
    for (let right = 0; right < s.length; right++) {

        obj[s[right]] = obj[s[right]] + 1 || 1
        while (obj[s[right]] > 1) {
            obj[s[left]]--;
            left++;
        }
        ans= Math.max(right - left + 1, ans)

    }
    return ans
};