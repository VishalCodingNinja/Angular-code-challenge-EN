import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { VehicleState, VehicleTypesState } from './vehicle.reducer';

export const selectVehicles = (state: AppState) => state.Vehicles;
export const selectAllVehicles = createSelector(
  selectVehicles,
  (state: VehicleState) => state.Vehicles
);

export const selectVehicleTypes = (state: AppState) => state.VehicleTypes;
export const selectAllVehicleTypes = createSelector(
  selectVehicleTypes,
  (state: VehicleTypesState) => state.VehicleTypes
);