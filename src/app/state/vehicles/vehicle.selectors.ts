import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { VehicleTypesState } from './vehicle.reducer';

export const selectVehicleTypes = (state: AppState) => state.VehicleTypes;
export const selectAllVehicleTypes = createSelector(
  selectVehicleTypes,
  (state: VehicleTypesState) => state.VehicleTypes
);

