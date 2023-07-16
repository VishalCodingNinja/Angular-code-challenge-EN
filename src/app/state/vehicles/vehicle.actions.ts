import { createAction, props } from '@ngrx/store';
import { Vehicle, VehicleTypeDescription } from 'src/app/models/vehicle.model';

export const addVehicle = createAction(
  '[Vehicle Page] Add Vehicle',
  props<{vehicle: { id: string; typeDescription: VehicleTypeDescription; number: string; }}>()
);

export const removeVehicle = createAction(  
  '[Vehicle Page] Remove Vehicle',
  props<{ id: string }>()
);

export const loadVehicles = createAction('[Vehicle Page] Load Vehicles');

export const loadVehiclesSuccess = createAction(
  '[Vehicle API] Vehicle Load Success',
  props<{ Vehicles: Vehicle[] }>()
);

export const loadVehiclesFailure = createAction(
  '[Vehicle API] Vehicle Load Failure',
  props<{ error: string }>()
);


export const addVehicleType = createAction(
  '[Vehicle Types Page] Add Vehicle',
  props<{vehicleType: { id: number; type: string; subType: string; vehicleTypeUrl: string;}}>()
);

export const removeVehicleType = createAction(  
  '[Vehicle Types Page] Remove Vehicle',
  props<{ id: string }>()
);
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
