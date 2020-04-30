import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const SHARED_ENTITIES = []

const SHARED_MODULES = [
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
export class SharedModule { }
