function findAnagrams(s2: string, s1: string): number[] {
    let k = s1.length
    let left = 0
    let arr = []
    let obj = {}
    let obj2 = {}
    // if (s1.length > s2.length) return false;
    for (let i = 0; i < k; i++) {
        obj[s1[i]] = obj[s1[i]] + 1 || 1
    }

    for (let left = 0; left < k; left++) {
        obj2[s2[left]] = obj2[s2[left]] + 1 || 1
    }

    if (deepEqual(obj2, obj)) {
        arr.push(left)
    }



    for (let right = k; right < s2.length; right++) {

        obj2[s2[left]]--
        if (obj2[s2[left]] === 0) {
            delete obj2[s2[left]]
        }
        left++

        obj2[s2[right]] = obj2[s2[right]] + 1 || 1

        if (deepEqual(obj2, obj)) {
            arr.push(left)
        }



    }


    return arr

};

function deepEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false
    }
    return true;
}