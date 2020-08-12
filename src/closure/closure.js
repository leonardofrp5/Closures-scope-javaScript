const moneBox1 = coin => {
  var saveCoin = 0;
  saveCoin += coin;
  console.log(saveCoin);
}
moneBox1(1)
moneBox1(3)
moneBox1(10)


const moneBox = () => {
  var saveCoin = 0;
  const other = coin => {
    saveCoin += coin;
    console.log(saveCoin);
  }
  return other
}

let newBox = moneBox()

newBox(1)
newBox(3)
newBox(10)
