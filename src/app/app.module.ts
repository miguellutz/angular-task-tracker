import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // used to interact with the DOM

import { AppComponent } from './app.component'; // root component; When importing components through CLI will do this automatically

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], // global services
  bootstrap: [AppComponent]
})
export class AppModule { }
