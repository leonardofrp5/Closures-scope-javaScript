const person = () => {
  var saveName = 'Name';
  return {
    getname: () => {
      return saveName
    },
    setName: (name) => {
      saveName = name;
    }
  }
}

newperson = person();
console.log(newperson.getname());
newperson.setName('Leo');
console.log(newperson.getname())
