import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../shared/models/Car";
import {CRUDService} from "../../shared/services/CRUDservice";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  public car: Car = this.crudService.currentCar;
  public title: string = "Add new Car";

  constructor(private crudService: CRUDService, private router: Router, private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      if (params['action'] == 'Edit') {
        this.title = "Edit Car";
      } else {
        this.car = new Car();
      }
    });

  }

  saveCar() {
    for(let property of Object.getOwnPropertyNames(this.car).filter(prop => prop != "uniquePath")) {
      if(!(this.car as any)[property]) {
        return;
      }
    }
    this.crudService.updateCar(this.car).then(car => {
      this.router.navigate(['/']);
    })
  }
}
