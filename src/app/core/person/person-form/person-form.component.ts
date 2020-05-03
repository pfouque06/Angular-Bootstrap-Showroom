import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/shared/class/person';
import { PersonService } from 'src/app/shared/service/personne.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})

export class PersonFormComponent implements OnInit {

  public personId: number;
  public personCurrent: Person = new Person();
  public person: Person = new Person();
  public personTypes: string[];
  // public types: string[] = [
  //   "Noob",
  //   "Really Smart",
  //   "Super Flexible",
  //   "Super Hot",
  //   "Weather Changer",
  // ];
  public type: string;
  public submitted: boolean = false;

  // dev monitoring
  public monitoringHeadsUp = false;

  constructor(private personService: PersonService,  private route: ActivatedRoute, private modalService: NgbModal) {
    this.personTypes = Person.types;
  }

  ngOnInit(): void {
    // get Person by ID if any provided by calling Component
    this.route.queryParams.subscribe(param => {
      if ( param.personId != null) {
        console.log("param.personId: " + param.personId);
        this.personId = param.personId;
        this.personCurrent = this.personService.getPerson(param.personId);
        if (this.personCurrent == null || this.personId != this.personCurrent.id) {
          console.log("personId not found => new One");
        }
        console.log("this.personCurrent.id= " + this.personCurrent.id);
        // update Person process : push data to temporary person Drive model
        this.person.nom = this.personCurrent.nom;
        this.person.prenom = this.personCurrent.prenom;
        this.person.type = this.personCurrent.type;
      }
    });
  }

  // natural method called on submit type button click action
  // onSubmit() { this.submitted = true; }

  update(): void {
    // check if we process an update or a new Person
    if (this.personId == null) {
      // Add a new Person
      this.person = new Person(this.person.prenom, this.person.nom, this.person.type);
      this.personService.addPerson(this.person);
    } else {
      // update Person process : pull back data to current person to be updated
      this.personCurrent.nom = this.person.nom;
      this.personCurrent.prenom = this.person.prenom;
      this.personCurrent.type = this.person.type;
      // rollback to person for result display
      this.person = this.personCurrent;
    }
    this.submitted = true;
  }

  reset(): void {
    // this.personne = new Personne();
    this.person.nom = "";
    this.person.prenom = "";
  }

  new(): void {
    this.personId = null;
    this.personCurrent = null;
    this.person = new Person();
    this.type = "";
    this.submitted = false;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.person);
  }

  /////////////////////////////////////////////////////
  // ADD PERSON Modal Operations
  /////////////////////////////////////////////////////

  openAddPersonModal(addPersonModal, person: Person) {

    console.log("addPersonModal(person: " + Person.toString + ")");
    this.modalService
    .open(addPersonModal, { size: 'lg', centered: true, keyboard: true, scrollable: true , ariaLabelledBy: "modal-basic-title" })
    .result.then(
      (result) => {
        // console.log("modal result: " + result)
        console.log("addPersonModal confirmed.");
        // add/update Person
        this.update();
      },
      (reason) => {
        console.log("addPersonModal aborted.");
      }
    );
  }
}
