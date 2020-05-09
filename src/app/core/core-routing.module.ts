import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { LayoutComponent } from './themes/layout/layout.component';
import { NavComponent } from './themes/nav/nav.component';
import { ModalComponent } from './themes/modal/modal.component';
import { YaFormComponent } from './person/ya-form/ya-form.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonFormComponent } from './person/person-form/person-form.component';
import { HowToComponent } from './how-to/how-to.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'nav', component: NavComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'yaForm', component: YaFormComponent },
  { path: 'personneList', component: PersonListComponent },
  { path: 'personneForm', component: PersonFormComponent },
  { path: 'howTo', component: HowToComponent },
  { path: '**', component: HomeComponent },

  // { path: 'core', component: CoreComponent,
  // children: [
  //   { path: 'home', component: HomeComponent },
  //   { path: 'sandbox', component: SandboxComponent },
  //   { path: '**', component: HomeComponent }
  // ]},
  // { path: 'home', redirectTo: 'core/home', pathMatch: 'full' },
  // { path: 'sandbox', redirectTo: 'core/sandbox', pathMatch: 'full' },
  // { path: '', redirectTo: 'core/home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'spine/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
