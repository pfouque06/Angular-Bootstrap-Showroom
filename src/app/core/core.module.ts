import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { CodeRendererComponent } from './themes/code-renderer/code-renderer.component';
import { CollapseComponent } from './themes/collapse/collapse.component';
import { LayoutComponent } from './themes/layout/layout.component';
import { ModalComponent } from './themes/modal/modal.component';
import { NavComponent } from './themes/nav/nav.component';
import { PersonListComponent, SortableHeader } from './person/person-list/person-list.component';
import { PersonFormComponent } from './person/person-form/person-form.component';
import { YaFormComponent } from './person/ya-form/ya-form.component';
import { HowToComponent } from './how-to/how-to.component';
import { FoundationsComponent } from './how-to/foundations/foundations.component';
import { FontawesomeComponent } from './how-to/fontawesome/fontawesome.component';
import { NgAnimateComponent } from './how-to/ng-animate/ng-animate.component';
import { NgxHighlightjsComponent } from './how-to/ngx-highlightjs/ngx-highlightjs.component';


@NgModule({
  declarations: [
    CoreComponent,
    HomeComponent,
    SandboxComponent,
    CodeRendererComponent,
    CollapseComponent,
    LayoutComponent,
    ModalComponent,
    NavComponent,
    PersonListComponent,
    PersonFormComponent,
    SortableHeader,
    YaFormComponent,
    HowToComponent,
    FoundationsComponent,
    FontawesomeComponent,
    NgAnimateComponent,
    NgxHighlightjsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule,
    HighlightModule,
    HighlightPlusModule,
  ],
  exports: [SortableHeader],
  providers: [DecimalPipe],
  bootstrap: [SortableHeader]
})
export class CoreModule { }
