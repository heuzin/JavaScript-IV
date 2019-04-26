// CODE here for your Lambda Classes


class Person {
    constructor(atributes){
        this.name = atributes.name;
        this.age = atributes.age;
        this.location = atributes.location;
        this.gender = atributes.gender;   
    }
    introduction(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAtt){
        super(instructorAtt);
        this.specialty = instructorAtt.specialty;
        this.favLanguage = instructorAtt.favLanguage;
        this.catchPhrase = instructorAtt.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(subject){
        return `${this.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentsAtt){
        super(studentsAtt);
        this.previousBackground = studentsAtt.previousBackground;
        this.className = studentsAtt.className;
        this.favSubjects = studentsAtt.favSubjects
    }
    listSubjects(){
        console.log(this.favSubjects.forEach())
    }
    PRassigment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(managerAtt){
        super(managerAtt);
        this.gradClassName = managerAtt.gradClassName;
        this.favInstructor = managerAtt.favInstructor;
    }
    standUp(name, channel){
        return `${name} announces ${channel}, @channel standy times!`;
    }
    debugsCode(name, subject){
        `${name} debugs ${this.name}'s code on ${subject}.`; 
    }
}

const matheus = new Person({
    name: 'Matheus',
    location: 'Connectcut',
    age: 26,
    gender: 'male'
  });

  console.log(matheus.introduction());
 
const tania = new Person({
    name: 'Tania',
    location: 'Brazil',
    age: 37,
    gender: 'female'
  });

  console.log(tania.gender);  

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(fred.demo('HTML'));

const filipe = new Instructor({
    name: 'Filipe',
    location: 'California',
    age: 48,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `I am here for you.`
  });

  console.log(filipe.catchPhrase);

  const anna = new Student({
    name: 'Anna',
    location: 'New York',
    age: 21,
    gender: 'female',
    favLanguage: 'React',
    specialty: 'Back-end',
    catchPhrase: 'Im a Lady',
    previousBackground: 'Model',
    className: 'CS132',
    favSubjects: 'CSS'
  });

  console.log(anna.favSubjects);

  