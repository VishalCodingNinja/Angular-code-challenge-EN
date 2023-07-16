import { createAction, props } from '@ngrx/store';
import { VehicleTypeDescription } from 'src/app/models/vehicle.model';


export const loadVehicleTypes = createAction('[Vehicle Types API] Load VehicleTypes');

export const loadVehicleTypesSuccess = createAction(
  '[Vehicle Types API] Vehicle Types Load Success',
  props<{ VehicleTypes: VehicleTypeDescription[] }>()
);

export const loadVehicleTypesFailure = createAction(
  '[Vehicle Types API] Vehicle Load Failure',
  props<{ error: string }>()
);

export const updateVehicleType = createAction(
  '[Vehicle Types API] Update Vehicle Type',
  (id: string)=>({id})
);

export const updateVehicleTypesSuccess = createAction(
  '[Vehicle Types API] Update Vehicle Type Success',
  (vehicleTypes: VehicleTypeDescription[])=>({vehicleTypes})
);

export const updateVehicleTypesFailure = createAction(
  '[Vehicle Types API] Update Vehicle Type Failure',
  props<{ error: string }>()
);

