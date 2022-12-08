import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewCourseComponent } from './view-course/view-course.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:AddComponent
  },
  {
    path:"view",
    component:ViewCourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewCourseComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
