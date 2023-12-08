function Player(nama, clas) {
  this.nama = nama;
  this.clas = clas;
  this.sayName = () => console.log(nama);
}

let wafa = new Player("Wafa", "Mage");
wafa.sayName();
