import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MzButtonModule, MzIconMdiModule, MzIconModule } from 'ngx-materialize';

@NgModule({
  imports: [
    CommonModule,
    MzButtonModule,
    MzIconMdiModule,
    MzIconModule
  ],
  exports: [
    MzButtonModule,
    MzIconMdiModule,
    MzIconModule
  ],
  declarations: []
})
export class MzModule { }
