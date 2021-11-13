import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../shared/models/Car";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() car: Car = new Car();

  @Output() ouDelete: EventEmitter<Car> = new EventEmitter();
  @Output() ouEdit: EventEmitter<Car> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  EditCar() {
    this.ouEdit.emit(this.car);
  }

  DeleteCar() {
    this.ouDelete.emit(this.car);
  }
}
