function cache(fn) {
  const cache = {};

  return (n) => {
    if (cache[n]) {
      console.log(`Cache ${n}: ${cache[n]}`);
      return cache[n];
    }

    let result = fn(n);

    console.log(`Function ${n}: ${result}`);
    cache[n] = result;

    return result;
  };
}

function factorial(n) {
  let result = 1;

  while (n != 1) {
    result *= n;
    n -= 1;
  }

  return result;
}

const cachedFactorial = cache(factorial);

cachedFactorial(5);
cachedFactorial(4);
cachedFactorial(3);
cachedFactorial(5);
cachedFactorial(1);
cachedFactorial(4);
