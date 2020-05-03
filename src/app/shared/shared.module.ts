import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const SHARED_ENTITIES = []

const SHARED_MODULES = [
  FormsModule,
  ReactiveFormsModule,
  NgbModule,
  FontAwesomeModule,
]

@NgModule({
  declarations: [
    ...SHARED_ENTITIES
  ],
  imports: [
    CommonModule,
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES
  ]
})
// export class SharedModule { }
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
