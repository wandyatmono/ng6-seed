import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoremComponent } from './components/lorem/lorem.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoremComponent,
    SidenavComponent
  ],
  exports: [
    LoremComponent,
    SidenavComponent
  ]
})
export class FeaturesModule { }
