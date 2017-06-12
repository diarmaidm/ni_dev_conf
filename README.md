# NI Dev Conference
## Code and Slides for inaugural Northern Ireland Developer Conference talk https://www.nidevconf.com/

## Step by step instructions to recreate kata.

### Create new directory
`mkdir ni_dev_conf`

### Change into the new directory
`cd ni_dev_conf`

### Initialize
`npm init`

Example:
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (ni_dev_conf)
version: (1.0.0)
description: node version of prime factors kata done by uncle bob at ndc 2014
entry point: (index.js) factorsOf.js
test command: node node_modules/.bin/mocha
git repository:
keywords: prime factors kata uncle bob nidevconf nidevconf17
author: Diarmaid McGowan
license: (ISC)
About to write to /home/diarmaid/ni_dev_conf/package.json:

{
  "name": "ni_dev_conf",
  "version": "1.0.0",
  "description": "node version of prime factors kata done by uncle bob at ndc 2014",
  "main": "factorsOf.js",
  "scripts": {
    "test": "node node_modules/.bin/mocha"
  },
  "keywords": [
    "prime",
    "factors",
    "kata",
    "uncle",
    "bob",
    "nidevconf",
    "nidevconf17"
  ],
  "author": "Diarmaid McGowan",
  "license": "ISC"
}


Is this ok? (yes)
```

### Install mocha and chai as devDependencies
`npm install --save-dev mocha chai` or shorthand `npm i -D mocha chai`

### Create test directory
`mkdir test`

### Create empty test file
`touch test/factorsOf_test.js`

## Open the folder in Visual Studio Code
You can download and install from https://code.visualstudio.com/

### Start writing our first test
I am using chai for the BDD style http://chaijs.com/guide/styles/#expect http://chaijs.com/api/bdd/
```
const expect = require('chai').expect;

describe('Prime Factors calculator', function () {
  it('returns the prime factors of a given integer', function () {

  });
});
```

Run the test `npm test` or shorthand `npm t`

All pass as we don't have any assertions

---

Add our first test
```
    expect(factorsOf(1)).to.eql([]);
```
Run the test `npm test` or shorthand `npm t`

It fails.
```
  1) Prime Factors calculator returns the prime factors of a given in
teger:
     ReferenceError: factorsOf is not defined
```

---

Add require for our implementation file.
```
const factorsOf = require('./factorsOf');
```

Run the test `npm test` or shorthand `npm t`

It fails.
```
Error: Cannot find module 'factorsOf'
```

---

### Create empty implementation file
`touch test/factorsOf.js` Storing in the test directory for convenience.

---
Run the test `npm test` or shorthand `npm t`

It fails.
```
  1) Prime Factors calculator returns the prime factors of a given in
teger:
     TypeError: factorsOf is not a function
```

---

Add empty function to the implementation file
```
let factorsOf = _ => undefined;
```

Run the test `npm test` or shorthand `npm t`

It still fails - same error.
```
  1) Prime Factors calculator returns the prime factors of a given in
teger:
     TypeError: factorsOf is not a function
```

---

Export the function
```
module.exports = factorsOf;
```

Run the test `npm test` or shorthand `npm t`

It fails - but we now have the error we were expecting.
```
  1) Prime Factors calculator returns the prime factors of a given in
teger:
     AssertionError: expected undefined to deeply equal []
      at Context.<anonymous> (test/factorsOf_test.js:6:29)
```

---

### We can now start TDD
#### test for 1
```
expect(factorsOf(1)).to.eql([]);
```

solution (replace undefined with empty array)
```
let factorsOf = _ => [];

module.exports = factorsOf;
```

---

#### test for 2
```
expect(factorsOf(2)).to.eql([2]);
```

solution
Try this but it fails first test. We need a condition here.
```
let factorsOf = _ => [2];

module.exports = factorsOf;
```
Lets refactor a bit....

Accept a parameter (n)
declare a variable and initialize to empty array
return the array
At least we ar passing the first tests again.
```
let factorsOf = (n) => {
  let factors = [];
  return factors;
}

module.exports = factorsOf;
```

Lets add condition and push 2 onto the array
```
let factorsOf = (n) => {
  let factors = [];
  if (n > 1) {
    factors.push(2);
  }
  return factors;
}

module.exports = factorsOf;
```

---

#### test for 3
```
expect(factorsOf(3)).to.eql([3]);
```

solution (Whats the absolute minimum keystrokes)
change the constant 2 to variable n
```
let factorsOf = (n) => {
  let factors = [];
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

module.exports = factorsOf;
```

---

#### test for 4
```
expect(factorsOf(4)).to.eql([2, 2]);
```

solution (we have nothing that will add two entries)
add a check mod 2 and add 2
but fails first test
```
let factorsOf = (n) => {
  let factors = [];
  if (n > 1) {
    if (n % 2 === 0) {
      factors.push(2);
      n /= 2;
    }
    factors.push(n);
  }
  return factors;
}

module.exports = factorsOf;
```

We need to surround `factors.push(n);` with a condition
Starting to sense a smell here
```
let factorsOf = (n) => {
  let factors = [];
  if (n > 1) {
    if (n % 2 === 0) {
      factors.push(2);
      n /= 2;
    }
    if (n > 1) {
      factors.push(n);
    }
  }
  return factors;
}

module.exports = factorsOf;
```

---

#### test for 5, 6 and 7
```
expect(factorsOf(5)).to.eql([5]);
expect(factorsOf(6)).to.eql([2, 3]);
expect(factorsOf(7)).to.eql([7]);
```

solution (these work with solution for 4)
```
```

---

#### test for 8
```
expect(factorsOf(8)).to.eql([2, 2, 2]);
```

solution (change if to while)
```
let factorsOf = (n) => {
  let factors = [];
  if (n > 1) {
    while (n % 2 === 0) {
      factors.push(2);
      n /= 2;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

module.exports = factorsOf;
```

---

#### test for 9
```
expect(factorsOf(9)).to.eql([3, 3]);
```

solution (There is nothing that inserts a 3)
We are really seeing a pattern here.
```
let factorsOf = (n) => {
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
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

module.exports = factorsOf;
```

---

#### test for 27
```
expect(factorsOf(27)).to.eql([3, 3, 3]);
```

solution (same as for 2, we see engine developing)
Rules re being broken.
```
let factorsOf = (n) => {
  let factors = [];
  if (n > 1) {
    while (n % 2 === 0) {
      factors.push(2);
      n /= 2;
    }
    while (n % 3 === 0) {
      factors.push(3);
      n /= 3;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

module.exports = factorsOf;
```

---

#### Lets refactor

Add a divisor variable and initialize to 2

replace 2 with divisor in while loop

increment the divisor after the while

remove the while for 3
```
let factorsOf = (n) => {
  let factors = [];
  let divisor = 2;
  if (n > 1) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
    divisor++;
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

module.exports = factorsOf;
```

we need to change the if to while
```
let factorsOf = (n) => {
  let factors = [];
  let divisor = 2;
  while (n > 1) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
    divisor++;
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

module.exports = factorsOf;
```

no longer need that last if
```
let factorsOf = (n) => {
  let factors = [];
  let divisor = 2;
  while (n > 1) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
    divisor++;
  }
  return factors;
}

module.exports = factorsOf;
```

I think that us done.

---

lets refactor first while to a for
```
let factorsOf = (n) => {
  let factors = [];
  for (let divisor = 2; n > 1; divisor++) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
  }
  return factors;
}

module.exports = factorsOf;
```

---

lets refactor the other while to a for

```
let factorsOf = (n) => {
  let factors = [];
  for (let divisor = 2; n > 1; divisor++) {
    for (; n % divisor === 0; n /= divisor) {
      factors.push(divisor);
    }
  }
  return factors;
}

module.exports = factorsOf;
```

**Thanks us done.**
