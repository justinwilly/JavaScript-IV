// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
};

class Instructor extends Person {
    constructor(child){
        super(child);
            this.specialty = child.specialty;
            this.favLanguage = child.favLanguage;
            this.catchPhrase = child.catchPhrase;
    }
    demo(subjects) {
        console.log(`Today we are learning about ${subjects}`);
    }
    grade(student,subjects) {
        console.log(`${student} recieves a perfect score on ${subjects}`);
    }
};

class Student extends Person {
    constructor(students){
        super(students);
            this.previousBackGround = students.previousBackGround
            this.className = students.className;
            this.favSubjects = students.favSubjects;
    }
    listSubjects(){
        console.log(`${this.name} favorite subjects are ${this.favSubjects}`);
    }
    PRAssignment(subjects) {
        console.log (`${this.name} has submitted a PR for ${subjects}`);
    }
    sprintChallenge(subjects){
        console.log (`${this.name} has begun sprint challegne on ${subjects}`);
    }
};

class TeamLeads extends Instructor {
    constructor(teamLead){
        super(teamLead);
            this.gradClassName = teamLead.gradClassName;
            this.favInstructor = teamLead.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel stand up time!`);
    }
    debugsCode(names, subjects) {
        console.log(`${this.name} debugs ${names} code.`);
    }
};

const school = new Person({
    name: 'Lambda',
    age: 6,
    location: 'San Fransisco',
    subjects: 'Computer Science'
})

const todd = new Instructor({
    specialty: 'Redux',
    name: 'Todd',
    age: 35,
    favLanguage: 'JavaScript',
    catchPhrase: 'Send it!'
});

const justin = new Student({
    name: 'Justin',
    age: 27,
    location: 'Orlando',
    previousBackGround: 'basic ruby',
    className: 'Web24',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const josh = new TeamLeads ({
    name: 'Josh',
    age: 28,
    gradClassName: 'CS1',
    favInstructor: 'Britt',
});

school.speak();
todd.demo('JS IV');
todd.grade('Justin', 'JS IV');

justin.listSubjects();
justin.PRAssignment('JS');
justin.sprintChallenge('JavaScript Fundamentals');

josh.standUp('CS1');
josh.debugsCode('Justin', 'JS');