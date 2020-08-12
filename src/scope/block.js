const friuts = () => {
  if(true) {
    var fruits1 = 'apple';
    let fruits2 = 'banano';
    const fruits3 = 'kiwi';
    console.log(fruits2)
    console.log(fruits3)
  }
  console.log(fruits1)

}

// friuts();

var  x = 1;

{
  var x = 2;
  // console.log(x); 
}

// console.log(x);

const anotherfuctions  = () => {
  for(let i= 0; i < 10; i++){
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
} 

anotherfuctions();
