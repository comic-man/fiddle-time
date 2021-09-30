import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiddlerComponent } from './fiddler/fiddler.component';
import { TheFiddleComponent } from './the-fiddle/the-fiddle.component';
import { TheStringsComponent } from './the-fiddle/the-strings/the-strings.component';

@NgModule({
  declarations: [
    AppComponent,
    FiddlerComponent,
    TheFiddleComponent,
    TheStringsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
