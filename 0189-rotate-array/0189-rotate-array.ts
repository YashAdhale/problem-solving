function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k %= n;

    const newArr = new Array(n);

    for (let i = 0; i < n; i++) {
        newArr[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = newArr[i];
    }
}