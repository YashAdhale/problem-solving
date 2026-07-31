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
        needed[t[i]] = needed[t[i]] + 1 || 1 // formed freq map for t
    }
    let required = Object.keys(needed).length; // number unique char in t

    for (let right = 0; right < s.length; right++) {
       
        // if (needed[s[right]] !== undefined) {
        //     window[s[right]] = window[s[right]] + 1 || 1
        // }

        if (needed[s[right]] !== undefined) { // if present 

            window[s[right]] = window[s[right]] + 1 || 1 // add in window

            if (window[s[right]] === needed[s[right]]) { // if value in both obj same one char pair completed
                formed++;
            }
        }

        while (formed === required) { // after finding answer 
            if (right - left + 1 < minLength) { // compared current window with min
                min = s.slice(left, right + 1) // saved min ans till now
                minLength = min.length
            }

            if (needed[s[left]] !== undefined) {
                window[s[left]]--;
                if (window[s[left]] < needed[s[left]]) {
                    formed--; // condition will false and we will enter until next time it satisfied if not we have our saved min
                }
            }

            left++;
        }
    }
    return min
};