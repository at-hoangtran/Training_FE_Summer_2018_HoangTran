function exercise1(a, b) {
  if (a !== b)
    return a + b;
  else
    return (a + b) * 3;
};
console.log(exercise1(5, 6));

function exercise2(a) {
  if (a <= 19)
    return 19 - a;
  else
    return (a - 19) * 3;
};
console.log(exercise2(22));

function exercise34(a, b) {
  var result = [];
  for (var i=0; i<10; i++) {
    var num = Number(a.replace('*', i));
    if (num % b === 0)
      result.push(num);
  };
  return result;
};
console.log(exercise34('1*9', 3));
console.log(exercise34('1234567890*', 6));
