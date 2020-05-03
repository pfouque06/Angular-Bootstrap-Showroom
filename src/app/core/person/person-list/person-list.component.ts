import { Component, OnInit, PipeTransform, Directive, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/shared/class/person';
import { PersonService } from 'src/app/shared/service/personne.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


/////////////////////////////////////////////////////
// SORTABLE TOOLS
/////////////////////////////////////////////////////

export type SortColumn = keyof Person | '';
export type SortDirection = 'asc' | 'desc' | '';
export type SortFaIcon = 'sort-up' | 'sort-down' | 'sort';
const rotateDirection: {[key: string]: SortDirection} = { '': 'asc', 'asc': 'desc', 'desc': '' };
const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
const rotateFaIcon: {[key: string]: SortFaIcon} = { 'sort': 'sort-up', 'sort-up': 'sort-down', 'sort-down': 'sort' };

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class SortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Input() faIcon: SortFaIcon = 'sort';
  @Output() sort = new EventEmitter<SortEvent>();

  reset() {
    this.direction = '';
    this.faIcon = 'sort';
    console.log("sortableHeader.reset() => "+this.toPrint());
  }

  rotate() {
    this.direction = rotateDirection[this.direction];
    this.faIcon = rotateFaIcon[this.faIcon];
    this.sort.emit({column: this.sortable, direction: this.direction});
    console.log("sortableHeader.rotate() => "+this.toPrint());
  }

  toPrint() : string {
    var result = "["+this.sortable+", "+ ( this.direction ? this.direction : "none" ) +", "+this.faIcon+"]";
    return result;
  }
}

/////////////////////////////////////////////////////
// PERSON LIST COMPONENT
/////////////////////////////////////////////////////

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

  // sorting
  public headerIcons: Map<SortColumn, SortFaIcon> = new Map();

  // dev monitoring
  public monitoringHeadsUp = false;

  // constructor(private personService: PersonService, private router: Router) {
  constructor(private personService: PersonService, private router: Router, private pipe: DecimalPipe, private modalService: NgbModal) {
    console.log("PersonListComponent()");
    this.loadData()
    this.loadFilteredData(pipe);

    // init sorting headerIcons
    let sortedHeaders: SortColumn[] = ['prenom', 'nom', 'type'];
    sortedHeaders.forEach(key => {
      this.headerIcons.set(key, "sort");
      // console.log("headerIcons[" + key + ", " + this.headerIcons.get(key) + "]")
    });
    this.headerIcons.forEach(function(value, key) { console.log("- [" + key + ", " + value + "]") });

    // let pAArray: SortColumn[] = GET A WAY TO USE KEYOF PERSON !!!
    // for (var property in Person) {
    //   if (Person.hasOwnProperty(property)) { console.log("PersonOwn: " + property, ' ', Person[property]); }
    //   else { console.log("Person: " + property, ' ', Person[property]); }
    // };
    // Object.entries(Person).forEach(property => {
    //   console.log("Object.entries(Person): " + property);
    // });
    // Object.keys(Person).forEach(property => {
    //   console.log("Object.keys(Person): " + property, ' ', Person[property]);
    // });

    // Object.getOwnPropertyNames(Person).forEach(property => {
    //   if (property == "prototype") {
    //     console.log("Object.getOwnPropertyNames(Person): " + property, ' ', Person[property]);
    //     for (var prop in Person["prototype"]) {
    //       console.log("Person[\"prototype\"]: " + prop.toString());
    //     }
    //     console.log("Person.constructor :"+ Person[property].constructor);
    //     console.log("Person.constructor.tostring :"+ Person[property].constructor.toString);
    //     // console.log("Person.constructor.length :"+ Person[property].constructor.length);
    //     console.log("Person.constructor.name :"+ Person[property].constructor.name);
    //     console.log("Person.constructor.prototype :"+ Person[property].constructor.prototype);
    //     console.log("Person.constructor.prototype.toString :"+ Person[property].constructor.prototype.toString);
    //     // console.log("Person.constructor.prototype[] :"+ Person[property].constructor.prototype.join('\n'));
    //     for (var prop in Person[property].constructor.prototype) {
    //       console.log("Person.constructor.prototype[] :"+ prop);
    //     }
    //   }
    // });
    // console.log();

    // pAArray.forEach(key => this.headerIcons.set(key, "sort"));
    // this.headerIcons.forEach(function(value, key) { console.log("- [" + key + ", " + value + "]") });
  }

  ngOnInit(): void {
    console.log("ngOnInit()");
  }

  loadData() {
    console.log("loadData()");
    this.persons = this.personService.getAll();
  }

  /////////////////////////////////////////////////////
  // PAGINATION PROCESS
  /////////////////////////////////////////////////////

  get personPages(): Person[] {
    console.log("personPages()");
    // return Pageable Person List
    return this.persons
      .map((person) => (person))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  /////////////////////////////////////////////////////
  // FILTER OUT PROCESS with filter input value using formcontrol !
  /////////////////////////////////////////////////////

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

  /////////////////////////////////////////////////////
  // Sort process
  /////////////////////////////////////////////////////

  @ViewChildren(SortableHeader) headers: QueryList<SortableHeader>;

  onSort({column, direction}: SortEvent) {
    console.log("onSort("+ column +", "+ direction +")");

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) { header.reset(); }
    });

    // sorting column
    if (direction === '' || column === '') {
      // no sort directives provided => clean data table
      this.flushFilteredData();
    } else {
      // sort process
      this.filteredPersons = this.filteredPersons.sort((a, b) => {
        const res = compare(`${a[column]}`, `${b[column]}`);
        return direction === 'asc' ? res : -res;
      });
    }

    // update header icons types
    this.headers.forEach(header => {
      this.headerIcons.set(header.sortable, header.faIcon);
      console.log("- " + header.toPrint());
    })

  }

    /////////////////////////////////////////////////////
  // EDIT PERSON Operations
  /////////////////////////////////////////////////////

  editPerson(id: number) {
    console.log("editPerson(id: " + id +")");
    // navigate to simulation-start component to effectively launch the submitted goal
    this.router.navigate(["/personneForm"], {
      queryParams: { personId: id },
    });
  }

  /////////////////////////////////////////////////////
  // DELETE PERSON Operations
  /////////////////////////////////////////////////////

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

  /////////////////////////////////////////////////////
  // RESET LIST PERSON Operations
  /////////////////////////////////////////////////////

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
