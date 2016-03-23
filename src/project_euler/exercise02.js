

function makeFib(a, b, length) {
  let result = [a,b];
  while (true) {
    c = a + b;
    if(result.length > length) break
    result.push(c)
    a = b;
    b = c;
  }
  return result;
}

function* naturalNumbers() {
  let i = 0;
  while(true) {
    yield i++;
  }
}

function* fib(a, b) {
  let c = 0
  yield a
  yield b
  while (true) {
    c = a + b
    a = b
    b = c
    yield c
  }
}

function take(n, iterable) {
  let result = [], i = 0
  while (i < n) {
    result.push(iterable.next().value)
    i++
  }
  return result
}

function takeWhile(conditionFn, iterable) {
  let result = []
  let value = take(1, iterable)
  while (conditionFn(value)) {
    result = result.concat(value)
    value = take(1, iterable)
  }
  return result
}

function sum(a,b) { return a + b }
function isEven(n) { return n % 2 === 0}

const solution = takeWhile(n => n < 4000000, fib(1,2)).filter(isEven).reduce(sum)

4613732
