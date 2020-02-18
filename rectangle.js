export class Reptile {
  constructor (name, canItSwim) {
    this.name = name;
    this.canItSwim = canItSwim;
  }

  doesItDrown () {
   if(this.canItSwim) 
    console.log(`${this.name} can swim`);
   else
    console.log(`${this.name} has drowned`);
  }
}