module.exports = factorsOf = (n) => {
    let factors = [];
    if (n > 1) {
        if (n % 2 === 0) {
            factors.push(2);
            n /= 2;
        }
    }

    if (n > 1) {
        factors.push(n);
    }

    return factors;
};