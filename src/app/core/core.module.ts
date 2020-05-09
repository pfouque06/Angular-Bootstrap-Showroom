import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { LayoutComponent } from './themes/layout/layout.component';
import { NavComponent } from './themes/nav/nav.component';
import { ModalComponent } from './themes/modal/modal.component';
import { PersonListComponent, SortableHeader } from './person/person-list/person-list.component';
import { PersonFormComponent } from './person/person-form/person-form.component';
import { YaFormComponent } from './person/ya-form/ya-form.component';
import { HowToComponent } from './how-to/how-to.component';


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
    HowToComponent,
    LayoutComponent,
    NavComponent,
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
