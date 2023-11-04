import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CvAccordianComponent } from './cv-accordian.component';

@NgModule({
  declarations: [CvAccordianComponent],
  exports: [BrowserModule, CvAccordianComponent],
  imports: [
    BrowserModule,

  ],
})
export class CvAccordianModule {

}