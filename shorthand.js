const Hunter = function (name) {
  this.name = name;
  this.nick = `@ ${this.name}`;
};

// this is same
function createHunter(name) {
  const nick = "@" + name;

  let hr = 0;

  const showHr = () => hr;
  const addHr = () => hr++;

  return { name, nick, showHr, addHr };
}
const qot = createHunter("Al-Qot");
qot.addHr();

console.log({
  name: qot.name,
  hr: qot.addHr(),
});

// this is shorthand version

const nameDisplay = "Disguise";
const weapon = "Sword";
const hr = 3;

const hunter = { nameDisplay, weapon, hr };
// const hunter = { nameDisplay : nameDisplay , weapon : weapon , hr : hr };
//
console.log(nameDisplay, weapon, hr);
