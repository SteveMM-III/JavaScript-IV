const log = msg => console.log(msg);
/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*=== Classes ==================================================*/
/*=== GameObject ===*/
class GameObject {
   constructor( params ) {
      this.createdAt = params.createdAt;
      this.name = params.name;
      this.dimensions = params.dimensions;
   }
   destroy() { return `${this.name} was removed from the game.`; }
}/*-----------------------------------------*/

/*=== CharacterStats ===*/
class CharacterStats extends GameObject {
   constructor( params ) {
      super( params );
      this.healthPoints = params.healthPoints;
   }
   takeDamage( amount = 100 ) {
      this.healthPoints -= amount;
      return `${this.name} took ${amount} damage.`;
   } 
}/*-----------------------------------------*/

/*=== Humanoid ===*/
class Humanoid extends CharacterStats {
   constructor( params ) {
      super( params );
      this.team = params.team;
      this.weapons = params.weapons;
      this.language = params.language;
   }
   greet() { return `${this.name} offers a greeting in ${this.language}.`; }
}/*-----------------------------------------*/

/*=== Hero ===*/
class Hero extends Humanoid {
   constructor( params ) {
      super( params );
      this.alignment = 'good';
   }
}/*-----------------------------------------*/

/*=== Villain ===*/
class Villain extends Humanoid {
   constructor( params ) {
      super( params );
      this.alignment = 'evil';
   }
}/*-----------------------------------------*/

/*=== Objects ==================================================*/
/*=== Humanoids ===*/
const mage = new Humanoid({
   createdAt: new Date(),
   dimensions: {
      length: 2,
      width: 1,
      height: 1,
   },
   healthPoints: 5,
   name: 'Bruce',
   team: 'Mage Guild',
   weapons: [
      'Staff of Shamalama',
   ],
   language: 'Common Tongue',
});
//---
const swordsman = new Humanoid({
   createdAt: new Date(),
   dimensions: {
      length: 2,
      width: 2,
      height: 2,
   },
   healthPoints: 15,
   name: 'Sir Mustachio',
   team: 'The Round Table',
   weapons: [
      'Giant Sword',
      'Shield',
   ],
   language: 'Common Tongue',
});
//---
const archer = new Humanoid({
   createdAt: new Date(),
   dimensions: {
      length: 1,
      width: 2,
      height: 4,
   },
   healthPoints: 10,
   name: 'Lilith',
   team: 'Forest Kingdom',
   weapons: [
      'Bow',
      'Dagger',
   ],
   language: 'Elvish',
});/*-----------------------------------------*/

/*=== Heros & Villains ===*/
const myHero = new Hero( {
   createdAt: new Date(),
   dimensions: {
      length: 2,
      width: 2,
      height: 2,
   },
   healthPoints: 15,
   name: 'Goody Two-shoes',
   team: 'The Round Table',
   weapons: [
      'Giant Sword',
      'Shield',
   ],
   language: 'Common Tongue'
});
//---
const myVillain = new Villain({
   createdAt: new Date(),
   dimensions: {
      length: 2,
      width: 2,
      height: 2,
   },
   healthPoints: 15,
   name: 'Dr. Evil',
   team: 'The Square Table',
   weapons: [
      'Giant Sword',
      'Shield',
   ],
   language: 'Common Tongue'
});/*-----------------------------------------*/

/*=== Tests ==================================================*/
log( 'prototype-refactor.js tests' );
log(mage.createdAt); // Today's date
log(archer.dimensions); // { length: 1, width: 2, height: 4 }
log(swordsman.healthPoints); // 15
log(mage.name); // Bruce
log(swordsman.team); // The Round Table
log(mage.weapons); // Staff of Shamalama
log(archer.language); // Elvish
log(archer.greet()); // Lilith offers a greeting in Elvish.
log(mage.takeDamage()); // Bruce took damage.
log(swordsman.destroy()); // Sir Mustachio was removed from the game.

log('prototype-refactor.js stretch');
/*===========================================================================*/
let bothFightersLive = true;
let defender = myHero;
let lastDefender = "";
//---
log(`${myVillain.name} is about to attack ${myHero.name}`);
//---
const fight = ( def ) => {
   let dmg = Math.floor( Math.random()  * 5 ) + 1;
   log( def.takeDamage( dmg ) );
};
//---
do {
   defender = lastDefender !== myHero ? myHero : myVillain;
   fight(defender);
   bothFightersLive = defender.healthPoints > 0 ? true : false;
   lastDefender = defender;
} while ( bothFightersLive );
//---
if ( myHero.healthPoints > 0 ) { 
   log( `The winner is: ${myHero.name}` );
   log( myHero );
   log( myVillain.destroy() );
} else {
   log( `The winner is: ${myVillain.name}` );
   log(  myVillain )
   log( myHero.destroy() );
}
/*=== EoF ==================================================*/