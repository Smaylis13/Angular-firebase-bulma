import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../shared/models/Car";
import {CRUDService} from "../../shared/services/CRUDservice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  car: Car = this.crudService.currentCar;

  constructor(private crudService: CRUDService, private router: Router) {

  }

  ngOnInit(): void {
  }

  saveCar() {
    this.crudService.updateCar(this.car).then(car => {
      this.router.navigate(['/']);
    })
  }
}
