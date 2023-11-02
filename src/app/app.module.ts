import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './screens/projects/projects.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';

const routes: Routes = [
  // Existing routes...
  { path: '', component: ProjectsComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
