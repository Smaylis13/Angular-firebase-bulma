import {Injectable} from '@angular/core';
import {initializeApp} from 'firebase/app';
import {Car} from '../models/Car';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  setDoc,
  doc,
  updateDoc,
  deleteField,
  deleteDoc,
  where,
} from 'firebase/firestore/lite';

@Injectable()
export class CRUDService {
  public loading: boolean = false;
  public cars: Car[] = [];
  public currentCar: Car = new Car();

  private _db;

  constructor() {
    const firebaseConfig = {
      apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      authDomain: 'cars-d6cc7.firebaseapp.com',
      projectId: 'cars-d6cc7',
      storageBucket: 'cars-d6cc7.appspot.com',
      messagingSenderId: '782923804466',
      appId: '1:782923804466:web:58df55d770d2908c10f12b',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    this._db = getFirestore(app);
  }

  getAllCars(): Promise<Car[]> {
    this.loading = true;
    this.cars = [];
    const q = query(collection(this._db, 'cars'));
    return getDocs(q).then((docs) => {
      docs.forEach((doc) => {
        const data = doc.data();
        this.cars.push(new Car(data.brand, data.model, data.price, data.year, data.url, data.uniquePath));
      });
      this.loading = false;
      return this.cars;
    });
  }

  updateCar(car: Car): Promise<Car> {
    this.loading = true;
    car.uniquePath = car.uniquePath ? car.uniquePath : new Date().getTime().toString();
    return setDoc(doc(this._db, "cars", car.uniquePath), {
      uniquePath: car.uniquePath,
      brand: car.brand,
      model: car.model,
      year: car.year,
      price: car.price,
      url: car.url
    }).then(value => {
      console.log("Success");
    }).catch(err => {
      console.error(err)
    }).then(() => {
      this.loading = false;
      return car;
    })
  }

  deleteCar(car: Car): Promise<Car> {
    this.loading = true;
    return deleteDoc(doc(this._db, "cars", car.uniquePath)).then(v => {
      console.log(v);
    }).catch((e) => {
      console.error(e)
    }).then(() => {
      this.loading = false;
      return car;
    })
  }

  searchByBrand(brand: string): Promise<Car[]> {
    this.loading = true;
    this.cars = [];
    const q = query(collection(this._db, 'cars'), where('brand', '==', brand) );
    return getDocs(q).then((docs) => {
      docs.forEach((doc) => {
        const data = doc.data();
        console.log(data)
        this.cars.push(new Car(data.brand, data.model, data.price, data.year, data.url, data.uniquePath));
      });
      this.loading = false;
      return this.cars;
    });
  }
}
