import { VehicleState, VehicleTypesState } from './vehicle.reducer';

export interface AppState {
  Vehicles: VehicleState;
  VehicleTypes: VehicleTypesState
}
