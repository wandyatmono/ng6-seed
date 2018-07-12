import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeaturesModule } from './features/features.module';
import { MzModule } from './mz/mz.module';

import { ScrollService } from './services/scroll.service';
import { UtilityService } from './services/utility.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    MzModule
  ],
  providers: [
    ScrollService,
    UtilityService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
