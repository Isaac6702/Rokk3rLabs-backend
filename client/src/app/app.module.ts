import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule } from '@angular/material';
import 'hammerjs';

//Layouts
import { SimpleLayoutPage } from './pages/layouts/simple-layout';

//Pages
import { Search } from './pages/search/search';

//Directive
import { EqualValidator } from "./common/directive/equal-validator.directive";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleLayoutPage,
    Search,
    EqualValidator
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
