const User = function (name) {
  this.name = name;
  this.nick = `@ ${this.name}`;
};

// this is same
function createUser(name) {
  const nick = "@" + name;
  return { name, nick };
}

// this is shorthand version

const nameDisplay = "Disguise";
const weapon = "Sword";
const hr = 3;

const hunter = { nameDisplay, weapon, hr };
// const hunter = { nameDisplay : nameDisplay , weapon : weapon , hr : hr };
//
console.log(nameDisplay, weapon, hr);
