import { Injectable } from '@angular/core';
import { Person } from '../class/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private persons:Array<Person> = new Array<Person>();

  constructor() {
    // inection of starter samples
    // this.Persons.push({ num: 10, nom: 'wick', prenom: 'john' });
    // this.persons.push(new Person('John', 'Wick'));
    // this.persons.push(new Person("Bob", "Green"));
    this.reset();
  }

  getAll(){
    return this.persons;
  }

  addPerson(p: Person){
    this.persons.push(p);
  }

  getPerson(id: number): Person {
    console.log("getPerson(id: " + id + ")");
    return this.persons.find(p => p.id == id);
  }

  delPerson(id: number): boolean{
    console.log("delPerson(id: " + id + ")");

    // const index: number = this.Persons.indexOf(p);
    const index: number = this.persons.findIndex(p => p.id == id);
    console.log("index: " + index);

    if (index == -1) {
      return false;
    }
    console.log("size before: " + this.persons.length);
    if (this.persons.splice(index, 1) == null) {
      return false;
    }
    console.log("size after: " + this.persons.length);
    return true;
  }

  reset() {
    this.persons.splice(0, this.persons.length);
    this.persons.push(new Person('John', 'Wick'));
    this.persons.push(new Person("Bob", "Green", "Lemming"));
    this.persons.push(new Person("Khloe", "Goodman", "Noob"));
    this.persons.push(new Person("Marian", "Tasker", "Really Smart"));
    this.persons.push(new Person("Sharise", "Richards", "Super Flexible"));
    this.persons.push(new Person("Alexus", "Beake", "Super Hot"));
    this.persons.push(new Person("Lyndon", "Nei Beake", "Time Jumper"));
    this.persons.push(new Person("Paula", "Abdoul", "Weather Changer"));
    this.persons.push(new Person("Jack", "Nei Sparrow", "Lycanthrope"));
  }
}
