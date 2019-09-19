// CODE here for your Lambda Classes

/*=== Classes ==================================================*/
/*=== Person ===*/
class Person {
   constructor( params ) {
      this.name = params.name;
      this.age = params.age;
      this.location = params.location;
   }
   speak() { log( `Hello my name is ${this.name}, I am from ${this.location}` ); }
}/*-----------------------------------------*/

/*=== Instructor ===*/
class Instructor extends Person {
   constructor( params ) {
      super( params );
      this.specialty = params.specialty;
      this.favLanguage = params.favLanguage;
      this.catchPhrase = params.catchPhrase;
   }
   demo( subject ) { log( `Today we are learning about ${subject}` ); }
   grade( student, subject ) { log( `${student.name} receives a perfect score on ${subject}` ); }
}/*-----------------------------------------*/

/*=== Student ===*/
class Student extends Person {
   constructor( params ) {
      super( params );
      this.previousBackground = params.previousBackground;
      this.className = params.className;
      this.favSubjects = params.favSubjects;
   }
   listsSubjects() { log( this.favSubjects ); }
   prAssignment( subject ) { log( `${this.name} has submitted a PR for ${subject}` ); }
   sprintChallenge( subject ) { log( `${this.name} has begun sprint challenge on ${subject}` ); }
}/*-----------------------------------------*/

/*=== Project Manager ===*/
class ProjectManager extends Instructor {
   constructor( params ) {
      super( params );
      this.gradClassName = params.gradClassName;
      this.favInstructor = params.favInstructor;
   }
   standUp( channel ) { log( `${this.name} announces to ${channel}, @channel standUp time!` ); }
   debugsCode( student, subject ) { log( `${this.name} debugs ${student.name}'s code on ${subject}` ); }
}/*-----------------------------------------*/


/*=== Objects ==================================================*/
/*=== Persons ===*/
const bob = new Person({
  name: 'Bob',
  age: 37,
  location: 'SomewhereTown'
});
//---
const sara = new Person({
  name: 'Sara',
  age: 37,
  location: 'SomewhereTown'
});/*-----------------------------------------*/

/*=== Instructors ===*/
const sally = new Instructor({
   name: 'Sally',
   age: 42,
   location: 'Florida',
   specialty: 'Front-end',
   favLanguage: 'HTML',
   catchPhrase: "You're doing it wrong"
});
//---
const frank = new Instructor({
   name: 'Frank',
   age: 36,
   location: 'Beach',
   specialty: 'Full-stack',
   favLanguage: 'Javascript',
   catchPhrase: "Follow me"
});/*-----------------------------------------*/

/*=== Students ===*/
const fred = new Student({
   name: 'Fred',
   age: 37,
   location: 'Bedrock',
   previousBackground: 'None',
   className: 'WEB28',
   favSubjects: ['Html', 'CSS', 'Javascript']
});
//---
const wilma = new Student({
   name: 'Wilma',
   age: 34,
   location: 'Bedrock',
   previousBackground: 'None',
   className: 'CS123',
   favSubjects: ['Python', 'Javascript']
});/*-----------------------------------------*/

/*=== Project Managers ===*/
const chris = new ProjectManager({
   name: 'Chris',
   age: 44,
   location: 'New York',
   specialty: 'Back-end',
   favLanguage: 'PHP',
   catchPhrase: 'Get out',
   gradClassName: 'CS1',
   favInstructor: 'Sally'
});
//---
const chey = new ProjectManager({
   name: 'Cheyenne',
   age: 42,
   location: 'Tampa',
   specialty: 'Full-stack',
   favLanguage: 'Javascript',
   catchPhrase: 'Maybe later',
   gradClassName: 'FSWeb2',
   favInstructor: 'Sally'
});/*-----------------------------------------*/

log( 'lambda-classes.js tests' );
/*=== Tests ==================================================*/
bob.speak();
sara.speak();
//---
sally.demo( 'Advanced CSS' );
frank.grade( wilma, 'Javascript' );
//---
fred.listsSubjects();
fred.prAssignment( 'Javascript-III' );
wilma.sprintChallenge( 'Advanced CSS' );
//--
chris.debugsCode( wilma, 'Advanced CSS' );
chey.standUp( 'web28' );
/*=== EoF ==================================================*/