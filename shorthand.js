const Hunter = function (name, palico) {
  this.name = name;
  this.nick = `@ ${this.name}`;
  this.palico = palico;
};

// this is same

function createPalico(palicoName) {
  const gen = "awok" + palicoName;
  return { palicoName, gen };
}

function createHunter(name, palico) {
  const { palicoName } = createPalico(palico);
  let hr = 0;

  const showHr = () => hr;
  const addHr = () => hr++;

  return { name, palicoName, showHr, addHr };
}
const qot = createHunter("Al-Qot", "Qot");
qot.addHr();

console.log({
  name: qot.name,
  hr: qot.addHr(),
  palico: qot.palicoName,
});

// this is shorthand version

const nameDisplay = "Disguise";
const weapon = "Sword";
const hr = 3;

const hunter = { nameDisplay, weapon, hr };
// const hunter = { nameDisplay : nameDisplay , weapon : weapon , hr : hr };
//
console.log(nameDisplay, weapon, hr);
