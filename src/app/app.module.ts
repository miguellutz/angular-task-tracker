import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // used to interact with the DOM
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'; // root component; When importing components through CLI will do this automatically
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [ // declarations for components
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent
  ],
  imports: [ // imports for modules
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [], // global services
  bootstrap: [AppComponent]
})
export class AppModule { }
