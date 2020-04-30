import { Component, OnInit, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/shared/class/person';
import { PersonService } from 'src/app/shared/service/personne.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {


  public persons: Array <Person> = new Array <Person>();

  // filtering
  public filteredPersons: Array<Person> = [];
  public filter = new FormControl('');

  // initial pagination settings
  public page = 1;
  public pageSize = 5;

  // constructor(private personService: PersonService, private router: Router) {
  constructor(private personService: PersonService, private router: Router, private pipe: DecimalPipe, private modalService: NgbModal) {
    console.log("PersonListComponent()");
    this.loadData()
    this.loadFilteredData(pipe);
    // console.log(this.filteredPersons);
  }

  ngOnInit(): void {
    console.log("ngOnInit()");
  }

  loadData() {
    console.log("loadData()");
    this.persons = this.personService.getAll();
  }

  /////////////////////////
  // PAGINATION PROCESS

  get personPages(): Person[] {
    console.log("personPages()");
    // return Pageable Person List
    return this.persons
      .map((person) => (person))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  /////////////////////////
  // FILTER OUT PROCESS with filter input value using formcontrol !

  search(pattern: string, pipe: PipeTransform): Person[] {
    console.log("search pattern : " + pattern);
    return this.personService.getAll().filter(person => {
      const term = pattern.toLowerCase();
      return person.prenom.toLowerCase().includes(term)
          || person.nom.toLowerCase().includes(term)
          || person.type.toLowerCase().includes(term);
          // || pipe.transform(person.id).includes(term);
    });
  }

  loadFilteredData(pipe: PipeTransform) {
    console.log("loadDataFiltered()");
    // load filtered Person List via observable filter result
    this.filter.valueChanges
      .pipe(
        startWith(''),
        map(match => this.search(match, this.pipe))
      )
      .subscribe(persons => {
        console.log("filter.subscribe()");
        this.filteredPersons = persons;
        this.page = 1; //reset page number
        console.log("filteredPersons.length : " + this.filteredPersons.length);
      });
  }

  get filteredPersonPages(): Person[] {
    console.log("filteredPersonPages()");
    // return Pageable filtered Person List
    return  this.filteredPersons
      .map((person) => (person))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

  ////////////////////////////////
  // DELETE PERSON Operations

  openDeletePersonModal(deletePersonModal, index: number) {
    console.log("deletePersonModal(index: " + index + ")");
    this.modalService
    .open(deletePersonModal, { /*size: 'sm', */centered: true, keyboard: true, scrollable: true , ariaLabelledBy: "modal-basic-title" })
    .result.then(
      (result) => {
        // console.log("modal result: " + result)
        console.log("deletePersonModal confirmed.");
        // delete Person
        this.delPerson( index);
      },
      (reason) => {
        console.log("deletePersonModal aborted.");
      }
    );
  }

  delPerson(id: number) {
    console.log("delPerson(id: " + id +")");
    this.personService.delPerson(id);
    this.flushFilteredData();
  }

  ////////////////////////////////
  // EDIT PERSON Operations

  editPerson(id: number) {
    console.log("editPerson(id: " + id +")");
    // navigate to simulation-start component to effectively launch the submitted goal
    this.router.navigate(["/personneForm"], {
      queryParams: { personId: id },
    });
  }

  ////////////////////////////////
  // RESET LIST PERSON Operations

  openResetListModal(resetListModal) {
    console.log("openResetListModal()");
    this.modalService
    .open(resetListModal, { /*size: 'sm', */centered: true, keyboard: true, scrollable: true , ariaLabelledBy: "reset-list-modal" })
    .result.then(
      (result) => {
        console.log("resetListModal confirmed.");
        this.reset();
      },
      (reason) => {
        console.log("resetListModal aborted.");
      }
    );
  }

  reset() {
    console.log("reset()");
    this.personService.reset();
    this.flushFilteredData();
  }

  flushFilteredData() {
    console.log("flushFilteredData()");
    // reload filteres person list
    this.loadFilteredData(this.pipe);
    // flush filter process
    this.filter.setValue(this.filter.value);
  }
}
