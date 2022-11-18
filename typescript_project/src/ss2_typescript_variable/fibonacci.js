function isFibonacci(number) {
    if (number == 0) {
        return 0;
    }
    if (number == 1) {
        return 1;
    }
    return isFibonacci(number - 1) + isFibonacci(number - 2);
}
console.log(isFibonacci(3));
