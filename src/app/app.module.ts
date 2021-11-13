import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CRUDService} from "./shared/services/CRUDservice";
import {CardComponent} from "./components/card/card.component";
import { EditCarComponent } from './components/edit-car/edit-car.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Add', component: EditCarComponent},
  {path: 'Edit', component: EditCarComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EditCarComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
  ],
  providers: [CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
