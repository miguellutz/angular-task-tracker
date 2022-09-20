import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // used to interact with the DOM

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component'; // root component; When importing components through CLI will do this automatically

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], // global services
  bootstrap: [AppComponent]
})
export class AppModule { }
