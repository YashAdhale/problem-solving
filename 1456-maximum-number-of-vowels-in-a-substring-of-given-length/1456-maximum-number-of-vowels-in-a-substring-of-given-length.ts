function maxVowels(s: string, k: number): number {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let current = 0
    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) {
            current++
        }
    }
    if (current == k) {
        return current
    }
    let currentMax = current

    for (let right = k; right < s.length; right++) {
        if (vowels.includes(s[right - k])) current--;
        if (vowels.includes(s[right])) current++;
        if (current == k) {
            return current
        }
        if (current > currentMax) currentMax = current
    }
    return currentMax
};