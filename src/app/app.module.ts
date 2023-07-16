import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VehicleModule } from './vehicle/vehicle.module';
import { EffectsModule } from '@ngrx/effects';
import { VehicleEffects } from './state/vehicles/vehicle.effects';
import { VehicleReducer, VehicleTypeReducer } from './state/vehicles/vehicle.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(({ Vehicles: VehicleReducer, VehicleTypes: VehicleTypeReducer })),
    VehicleModule,
   
    EffectsModule.forRoot([VehicleEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
