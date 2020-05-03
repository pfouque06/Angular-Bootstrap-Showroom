import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ModalComponent } from './modal/modal.component';
import { YaFormComponent } from './ya-form/ya-form.component';
import { PersonListComponent, SortableHeader } from './person/person-list/person-list.component';
import { PersonFormComponent } from './person/person-form/person-form.component';


@NgModule({
  declarations: [
    CoreComponent,
    HomeComponent,
    SandboxComponent,
    ModalComponent,
    YaFormComponent,
    PersonListComponent,
    PersonFormComponent,
    SortableHeader,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule,
  ],
  exports: [SortableHeader],
  providers: [DecimalPipe],
  bootstrap: [SortableHeader]
})
export class CoreModule { }
