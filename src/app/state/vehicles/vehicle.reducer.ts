import { createReducer, on } from '@ngrx/store';
import {
  loadVehicleTypes,
  loadVehicleTypesSuccess,
  loadVehicleTypesFailure,
  updateVehicleTypesSuccess,
} from './vehicle.actions';
import { Vehicle, VehicleTypeDescription } from 'src/app/models/vehicle.model';


export interface VehicleState {
  Vehicles: Vehicle[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: VehicleState = {
  Vehicles: [],
  error: null,
  status: 'pending',
};

export interface VehicleTypesState {
  VehicleTypes: VehicleTypeDescription[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialStateVehicleTypes: VehicleTypesState = {
  VehicleTypes: [],
  error: null,
  status: 'pending',
};

export const VehicleTypeReducer = createReducer(
    // Supply the initial state
    initialStateVehicleTypes,
    // Trigger loading the VehicleTypes
    on(loadVehicleTypes, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded Vehicles
    on(loadVehicleTypesSuccess, (state, { VehicleTypes }) => ({
      ...state,
      VehicleTypes: VehicleTypes,
      error: null,
      status: 'success',
    })),
    // Handle Vehicles load failure
    on(loadVehicleTypesFailure, (state, { error }) => ({
      ...state,
      error: error,
      status: 'error',
    })),
  // update the vehicletype from the vehicle type array
  on(updateVehicleTypesSuccess, (state, { vehicleTypes }) => ({
    ...state,
    VehicleTypes: vehicleTypes
}))
);
