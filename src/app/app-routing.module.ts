import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  // { path: 'spine', loadChildren: () => import('./spine/spine.module').then(m => m.SpineModule) },
  // { path: '**', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
