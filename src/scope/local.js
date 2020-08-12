// const helloWold = () => {
//   const hello = 'Hello World';
//   console.log(hello);
// };

// helloWold();

var scope = 'I a global';

const functionsScope = ()  => {
  var scope = 'I am local';
  const func = () => { return scope };
  console.log(func());
  functionsScope2();
}

const functionsScope2 = ()  => {
  var scope = 'I am local 2';
  const func = () => { return scope };
  console.log(func());
  functionsScope3();
}

const functionsScope3 = ()  => {
  var scope = 'I am local 3';
  const func = () => { return scope };
  console.log(func());
}

functionsScope();
