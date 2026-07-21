function reverse(n) {
    let rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return rev;
}

var sumOfNumberAndReverse = function(num) {
    const start = Math.max(0, num - 100000);

    for (let i = start; i <= num; i++) {
        if (i + reverse(i) === num) {
            return true;
        }
    }

    return false;
};