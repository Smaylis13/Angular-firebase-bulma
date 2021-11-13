import { Component } from '@angular/core';
import {CRUDService} from "./shared/services/CRUDservice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public crudService: CRUDService) {
  }
  title = 'cars';
}
