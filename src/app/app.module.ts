import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // used to interact with the DOM

import { AppComponent } from './app.component'; // root component; When importing components through CLI will do this automatically
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [], // global services
  bootstrap: [AppComponent]
})
export class AppModule { }
