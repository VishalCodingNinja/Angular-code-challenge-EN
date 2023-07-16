import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { VehNumberComponent } from './veh-number/veh-number.component';
import { VehImgComponent } from './veh-img/veh-img.component';
import { VehSubTypeComponent } from './veh-sub-type/veh-sub-type.component';
import { VehTypeComponent } from './veh-type/veh-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    VehTypeComponent,
    VehSubTypeComponent,
    VehImgComponent,
    VehNumberComponent,
    VehicleComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    VehicleComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VehicleModule { }
