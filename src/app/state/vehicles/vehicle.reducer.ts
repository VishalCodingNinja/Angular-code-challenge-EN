import { createReducer, on } from '@ngrx/store';
import {
  addVehicle,
  removeVehicle,
  loadVehicles,
  loadVehiclesSuccess,
  loadVehiclesFailure,
  loadVehicleTypes,
  loadVehicleTypesSuccess,
  loadVehicleTypesFailure,
  addVehicleType,
  removeVehicleType,
  updateVehicleType,
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

export const VehicleReducer = createReducer(
  // Supply the initial state
  initialState,
  // Add the new Vehicle to the Vehicles array
  on(addVehicle, (state, {vehicle}) => ({
    ...state,
    Vehicles: [...state.Vehicles, { id: Date.now().toString(), typeDescription : {id: vehicle.typeDescription.id,subType: vehicle.typeDescription.subType, type: vehicle.typeDescription.type, VehicleTypeUrl: vehicle.typeDescription.VehicleTypeUrl, IsSelected: vehicle.typeDescription.IsSelected}, number: vehicle.number }],
  })),
  // Remove the Vehicle from the Vehicles array
  on(removeVehicle, (state, { id }) => ({
    ...state,
    Vehicles: state.Vehicles.filter((Vehicle) => Vehicle.id !== id),
  })),
  // Trigger loading the Vehicles
  on(loadVehicles, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded Vehicles
  on(loadVehiclesSuccess, (state, { Vehicles }) => ({
    ...state,
    Vehicles: Vehicles,
    error: null,
    status: 'success',
  })),
  // Handle Vehicles load failure
  on(loadVehiclesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);


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
