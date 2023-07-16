import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { VehicleTypeDescription } from 'src/app/models/vehicle.model';
import { AppState } from 'src/app/state/vehicles/app.state';
import { updateVehicleType } from 'src/app/state/vehicles/vehicle.actions';
import { selectAllVehicleTypes } from 'src/app/state/vehicles/vehicle.selectors';

@Component({
  selector: 'app-veh-type',
  templateUrl: './veh-type.component.html',
  styleUrls: ['./veh-type.component.css']
})
export class VehTypeComponent implements OnInit {
  @Input() inputVehicleTypes: Observable<VehicleTypeDescription[]> = of([]);
  @Output() selectedVehicleTypeEmitter = new EventEmitter<Observable<VehicleTypeDescription>>();
  public selectedVehicle: Observable<VehicleTypeDescription> =  of({} as VehicleTypeDescription);
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.inputVehicleTypes.subscribe(deviceTypes=> {
      this.selectedVehicle = of(deviceTypes.find(device=>device.IsSelected==true) ?? {} as VehicleTypeDescription);
      this.selectedVehicleTypeEmitter.emit(this.selectedVehicle);
     } );
  }

  onChangeEvent(e: any){
    this.inputVehicleTypes.subscribe(deviceTypes=> {
     this.selectedVehicle = of(deviceTypes.find(device=>device.id==e.target.value) ?? {} as VehicleTypeDescription);
     this.selectedVehicleTypeEmitter.emit(this.selectedVehicle);
    } );

    this.store.dispatch(updateVehicleType(e.target.value));
    this.inputVehicleTypes = this.store.select(selectAllVehicleTypes);
    console.log(this.inputVehicleTypes)
  }
}
