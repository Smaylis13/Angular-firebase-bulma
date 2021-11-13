import {Component, OnInit} from '@angular/core';
import {Car} from "../../shared/models/Car";
import {CRUDService} from "../../shared/services/CRUDservice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cars: Car[] = [];
  public brand: string = "";

  constructor(private crudService: CRUDService, private router: Router) {
    this.initCars();
  }

  private initCars() {
    this.crudService.getAllCars().then(cars => {
      this.cars = cars;
    });
  }

  ngOnInit(): void {
  }


  editCar(car: Car) {
    this.crudService.currentCar = car;
    this.router.navigate(['/Edit'])
  }

  deleteCar(car: Car) {
    this.crudService.deleteCar(car).then(v => {
      this.initCars();
    })
  }

  searchByBrand() {
    this.crudService.searchByBrand(this.brand).then(cars => {
      this.cars = cars;
    })
  }
}
