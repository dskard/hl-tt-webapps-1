const math = require('mathjs');

/*
 *  linspace(a,b,n)
 *
 *  a (number): The start of the linear space to be created
 *  b (number): The end of the linear space to be created
 *  n (number): The non-negative number of elements in the linear
 *              space, inclusive of start (a) and end (b) values.
 *
 *  References:
 *  * https://github.com/sloisel/numeric/blob/master/src/numeric.js#L922
 */

function linspace(a,b,n) {

  // make sure n has a reasonable default
  if (typeof n === "undefined") {
    n = math.max(math.round(b-a)+1,1);
  }

  // if n is 0 or 1 return array immediately.
  if (n < 2) {
    return n === 1 ? [a] : [];
  }

  // calculate the step between elements
  const step = 1.0*(b-a)/(n-1);

  // calculate the array values
  const ret = Array(n);
  var i;
  for (i = 0; i < n; i++) {
    ret[i] = a+(step*i);
  }

  return ret;
} //end linspace


function spiro(n1,n2,n3) {
  const t = linspace(0,1,1000);
  const z = math.add(
              math.exp(math.multiply(math.i,2,math.pi,n1,t)),
              math.exp(math.multiply(math.i,2,math.pi,n2,t)),
              math.exp(math.multiply(math.i,2,math.pi,n3,t)),
            );
  return { x : math.re(z),
           y : math.im(z) };
} // end spiro


module.exports = spiro;

