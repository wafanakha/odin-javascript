const User = function (name) {
  this.name = name;
  this.nick = `@ ${this.name}`;
};

// this is same
function createUser(name) {
  const nick = "@" + name;
  return { name, nick };
}
