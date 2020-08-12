const bildConst = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  }
  return displayCount;
}

const newBild = bildConst(1);

newBild();
newBild();
newBild();
