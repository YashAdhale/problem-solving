function minWindow(s: string, t: string): string {
    if (s.length < t.length) {
        return ""
    }
    let needed = {}
    let window = {}
    let formed = 0;
    let min = ""
    let minLength = Infinity
    let left = 0
    for (let i = 0; i < t.length; i++) {
        needed[t[i]] = needed[t[i]] + 1 || 1
    }
    let required = Object.keys(needed).length;

    for (let right = 0; right < s.length; right++) {
       
        // if (needed[s[right]] !== undefined) {
        //     window[s[right]] = window[s[right]] + 1 || 1
        // }

        if (needed[s[right]] !== undefined) {

            window[s[right]] = window[s[right]] + 1 || 1

            if (window[s[right]] === needed[s[right]]) {
                formed++;
            }
        }

        while (formed === required) {
            if (right - left + 1 < minLength) {
                min = s.slice(left, right + 1)
                minLength = min.length
            }

            if (needed[s[left]] !== undefined) {
                window[s[left]]--;
                if (window[s[left]] < needed[s[left]]) {
                    formed--;
                }
            }

            left++;
        }
    }
    return min
};