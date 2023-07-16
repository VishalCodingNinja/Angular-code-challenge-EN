import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { VehicleTypeDescription } from 'src/app/models/vehicle.model';
import { AppState } from 'src/app/state/vehicles/app.state';
import { selectAllVehicleTypes } from 'src/app/state/vehicles/vehicle.selectors';

@Component({
  selector: 'app-veh-sub-type',
  templateUrl: './veh-sub-type.component.html',
  styleUrls: ['./veh-sub-type.component.css']
})
export class VehSubTypeComponent implements OnInit {
  @Input() selectedVehicleType: Observable<VehicleTypeDescription> | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeEvent(e: any){
    console.log(e.target.value);
  }

}
