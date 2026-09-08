var findRepeatedDnaSequences = function (s) {
    let left = 0
    let seen = new Set()
    let result = new Set()

    for (let right = 10; right <= s.length; right++) {

        let sequence = s.slice(left, right)

        if (seen.has(sequence)) {
            result.add(sequence)
        } else {
            seen.add(sequence)
        }

        left++
    }

    return [...result]
}