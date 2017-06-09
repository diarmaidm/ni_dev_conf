module.exports = factorsOf = (n) => {
    let factors = [];
    if (n > 1) {
        while (n % 2 === 0) {
            factors.push(2);
            n /= 2;
        }
        if (n % 3 === 0) {
            factors.push(3);
            n /= 3;
        }
        if (n % 5 === 0) {
            factors.push(5);
            n /= 5;
        }
    }

    if (n > 1) {
        factors.push(n);
    }

    return factors;
};