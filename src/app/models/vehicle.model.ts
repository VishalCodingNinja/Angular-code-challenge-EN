export interface Vehicle {
    id: string;
    typeDescription: VehicleTypeDescription;
    number: string;
  }

export interface VehicleTypeDescription {
      id: string;
      type: string;
      subType: string[];
      VehicleTypeUrl: string;
      IsSelected: boolean;
  }
  