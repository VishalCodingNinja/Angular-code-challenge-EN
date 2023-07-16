import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadVehicleTypes } from '../state/vehicles/vehicle.actions';
import { selectAllVehicleTypes } from '../state/vehicles/vehicle.selectors';
import { AppState } from '../state/vehicles/app.state';
import { VehicleTypeDescription } from '../models/vehicle.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  @Output() deviceTypesEmit = new EventEmitter<Observable<VehicleTypeDescription[]>>();
  public vehForm = this.fb.group({
    licencePlateNumber: ['', Validators.required]
  });
  public allVehicleTypes$ = this.store.select(selectAllVehicleTypes);
  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadVehicleTypes());
    this.deviceTypesEmit.emit(this.allVehicleTypes$);
 }
}
