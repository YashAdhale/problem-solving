function characterReplacement(s: string, k: number): number {
    let obj = {}
    let left = 0
    let maxFrequency = 0
    let ans = 0;
    for (let right = 0; right < s.length; right++) {

        obj[s[right]] = obj[s[right]] + 1 || 1
        maxFrequency = Math.max(maxFrequency, obj[s[right]])
        while ((right - left + 1) - maxFrequency > k) {
            obj[s[left]]--;
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans
};
