export interface ICodeBlock {name: string; code: string;}
export const codeBlocks: ICodeBlock[] = [
{
name: 'install_codebloc_01',
code:
`sudo apt install npm nodejs
npm -v
nodejs -v
npm install g @angular/cli
ng version`,
},
{
name: 'install_codebloc_02',
code:
`cd source_directory
ng new project_name --skipTests=true --routing=true --style=css
# without routing and style options, please select when prompted :
# routing: y
# stylesheet format: CSS
cd project_name`,
},
{
  name: 'install_codebloc_03',
  code:
`rm -rf .git
`,
},
{
  name: 'install_codebloc_04',
  code:
`<title>«Your title»</title>
`,
},
{
  name: 'install_codebloc_05',
  code:
`export class AppComponent {
  public title: string = '«Your title»';
}`,
},
{
  name: 'install_codebloc_06',
  code:
` ng serve [--port xxxx] [--open]
`,
},
{
  name: 'install_codebloc_07',
  code:
`npm cache verify
npm cache clear
npm install
`,
},
{
  name: 'imports_codebloc_01',
  code:
` # stop ng runtime !!
ng add @ng-bootstrap/ng-bootstrap
ng add @fortawesome/angular-fontawesome
# When prompted, as required :
# Free Solid Icons
# Free Regular Icons
# Free Brands Icons

# restart Angular
ng serve [--port xxxx] [--open]
`,
},
{
  name: 'imports_codebloc_02',
  code:
`(..)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  (..)
  imports: [
  (..)
  NgbModule,
  FontAwesomeModule,
  (..)
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
(..)
`,
},
{
  name: 'imports_codebloc_03',
  code:
`<div class="container my-5">
<hr>
<h2>{{ title }}</h2>
<h4>Angular works ! </h4>
<hr>
<ngb-alert type='info' [dismissible]="false">
  <code>ng-bootstrat</code> seems to be installed and operational as well !!
</ngb-alert>
<hr>
<p><code>Fontawesome</code> works also !! <fa-icon icon="check"></fa-icon> ...<fa-icon icon="coffee"></fa-icon></p>
<hr>
<router-outlet></router-outlet>
</div>
`,
},
{
  name: 'foundations_codebloc_01',
  code:
`
`,
},
{
  name: 'foundations_codebloc_02',
  code:
`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const SHARED_ENTITIES = []

const SHARED_MODULES = [
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
`,
},
{
  name: 'foundations_codebloc_03',
  code:
`(..)
import { CoreModule } from './core.module';
(..)

  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
  ],
export class AppModule { }
`,
},
{
  name: 'foundations_codebloc_04',
  code:
`import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';

(..)

  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule,
  ],
`,
},
{
  name: 'starters_codebloc_01',
  code:
`ng g c core/header --module=app --skipTests=true
ng g c core/footer --module=app --skipTests=true
`,
},
{
  name: 'starters_codebloc_02',
  code:
`ng g c core/home --module=core --skipTests=true
`,
},
{
  name: 'starters_codebloc_03',
  code:
`<!-- <app-header></app-header> -->
<app-header [title]="title"></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
`,
},
{
  name: 'starters_codebloc_04',
  code:
`import { Component, OnInit, Input } from "@angular/core";
(..)
export class HeaderComponent implements OnInit {

  @Input() public title: string;
  public isNavbarCollapsed: boolean =true;
(..)
`,
},
{
  name: 'starters_codebloc_05',
  code:
`/* .nofocus:focus { outline: none;} */
.navbar-brand:focus { outline: none;}
.nav-link:focus { outline: none; }
`,
},
{
  name: 'starters_codebloc_06',
  code:
`<nav class="navbar fixed-top navbar-expand-md navbar-light bg-white">
<div class="container border-bottom">
  <div class="navbar-header">
    <a class="navbar-brand" href="#">{{ title }}</a>
  </div>
  <button class="navbar-toggler" type="button"
    data-toggle="collapse" data-target="#thisNavbar" (click)="isNavbarCollapsed = !isNavbarCollapsed"
    aria-controls="thisNavbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- <p class="navbar-text">Some text</p> -->

  <!-- collapse content -->
  <div [ngbCollapse]="isNavbarCollapsed" class="collapse navbar-collapse" id="thisNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a routerLink="home" class="nav-link" routerLinkActive="active"  (click)="isNavbarCollapsed = true">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" routerLinkActive="active"  (click)="isNavbarCollapsed = true">Contact</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`,
},
{
  name: 'starters_codebloc_07',
  code:
`<div class="container">
<footer class="footer border-top text-center ">
  <div class="row">
    <div class="col-md-12">
      Your footer
    </div>
  </div>
</footer>
</div>
`,
},
{
  name: 'starters_codebloc_08',
  code:
`import { HomeComponent } from './core/home/home.component';
(..)
const routes: Routes = [
  { path: '', component: HomeComponent },
];
`,
},
{
  name: 'starters_codebloc_09',
  code:
`import { HomeComponent } from './core/home/home.component';
(..)
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];
`,
},
{
  name: 'starters_codebloc_10',
  code:
`ng g c core/sandbox --module=core --skipTests=true
ng g c core/yaForm --module=core --skipTests=true
ng g c core/person/personForm --module=core --skipTests=true
ng g c core/person/personList --module=core --skipTests=true
`,
},
{
  name: 'starters_codebloc_11',
  code:
`(.. import missing components according to above routes ..)
const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'sandbox', component: SandboxComponent },
{ path: 'yaForm', component: YaFormComponent },
{ path: 'personneList', component: PersonListComponent },
{ path: 'personneForm', component: PersonFormComponent },
{ path: '**', component: HomeComponent },
];
`,
},
{
  name: 'starters_codebloc_12',
  code:
`<li class="nav-item">
<a routerLink="sandbox" class="nav-link" routerLinkActive="active" (click)="isNavbarCollapsed = true">Sandbox</a>
</li>
<li class="nav-item dropdown" ngbDropdown>
<a class="nav-link dropdown-toggle" ngbDropdownToggle id="personDropdown" role="button"
data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Persons
</a>
<div class="dropdown-menu" ngbDropdownMenu aria-labelledby="personDropdown">
  <a class="dropdown-item" routerLink="personneList" (click)="isNavbarCollapsed = true">List</a>
  <a class="dropdown-item" routerLink="personneForm" (click)="isNavbarCollapsed = true">Form</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" routerLink="yaForm">Yet another Form</a>
</div>
</li>
`,
},
{
  name: 'customs_codebloc_01',
  code:
`ng g class shared/class/person
ng g interface shared/interface/person
ng g service shared/service/personne --skipTests=true
`,
},
];
