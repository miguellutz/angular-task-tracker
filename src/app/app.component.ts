import { Component } from '@angular/core';

@Component({ /* component declaration with three items:
  selector: html tag to embed component)
  templateURL: html file
  styleUrls: CSS file */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // properties of the component and methods (custom, lifecycle...)
}
