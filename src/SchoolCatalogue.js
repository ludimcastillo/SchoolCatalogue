class School {
  constructor(name, level, numberOfStudents, schoolOverview, averageTestScores) {    
    this._name = name;    
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._schoolOverview = schoolOverview;
    this._averageTestScores = averageTestScores;
  }
  
  get name() {
    return this._name;
  }
  
  set name(newName) {
    this._name = newName;
  }
  
  get level() {
    return this._level;
  }
  
  set level(newLevel) {
    this._level = newLevel;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }
  
  set numberOfStudents(newNumberOfStudents) {
    if(newNumberOfStudents instanceof 'number') {
      this._numberOfStudents = numberOfStudents;
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  
  get schoolOverview() {
    return this._schoolOverview;
  }

  set schoolOverview(newSchoolOverview) {
    this._schoolOverview = newSchoolOverview;
  }
  
  get averageTestScores() {
    return this._averageTestScores;
  }

  set averageTestScores(newAverageTestScores) {
    this._averageTestScores = newAverageTestScores;
  }
    
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  
  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * (substituteTeachers.length - 1));
    return substituteTeachers[randomIndex];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
  
  set pickupPolicy(newPickupPolicy) {
    this._pickupPolicy = newPickupPolicy;
  }
}

class MiddleSchool extends School{
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams() {
    return this._sportsTeams;
  }
  
  set sportsTeams(newSportsTeams) {
    this._sportsTeams = newSportsTeams;
  }
}

class SchoolCatalog {
  constructor(schools){
    this._schools = schools;
  }
  
  get schools() {
    return this._schools;
  }
}