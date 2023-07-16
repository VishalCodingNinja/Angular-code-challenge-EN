import { Injectable } from '@angular/core';

import { VehicleTypeDescription } from '../models/vehicle.model';


@Injectable({ providedIn: 'root' })
export class VehicleService {
  constructor() { }

  async getVehicleTypes(): Promise<VehicleTypeDescription[]> {
    if (!localStorage.getItem('VehicleTypeDescriptions')) {
      await this.storeStaticDataForVehicleTypeDescription();
    };

    return JSON.parse(localStorage.getItem('VehicleTypeDescriptions')?? '[]')||[] ;
  }

  async updateVehicleTypes(id: string): Promise<VehicleTypeDescription[]> {
    if (!localStorage.getItem('VehicleTypeDescriptions')) {
      await this.storeStaticDataForVehicleTypeDescription();
    };
    var vehicleTypes: VehicleTypeDescription[] = JSON.parse(localStorage.getItem('VehicleTypeDescriptions')?? '[]')||[]
    vehicleTypes.forEach(vehicleType=> {
        if(vehicleType.id==id){
          vehicleType.IsSelected = true;
        }
        else{
          vehicleType.IsSelected = false;
        }
  });

    localStorage.setItem('VehicleTypeDescriptions', JSON.stringify(vehicleTypes))
    return JSON.parse(localStorage.getItem('VehicleTypeDescriptions')?? '[]')||[] ;
  }

  private async storeStaticDataForVehicleTypeDescription() {

    const vehicleTypeDescriptions: VehicleTypeDescription[] = [{
      id: '1',
      type: 'Auto',
      subType: ['Hatchback', 'Sedan', 'Station', 'Cabriolet', 'Coupé', 'Multi Purpose Vehicle (MVP)', 'Terreinauto'],
      VehicleTypeUrl: './assets/auto.jpg',
      IsSelected: true
    },
    {
      id: '2',
      type: 'Motor',
      subType: ['All-road', 'Naked', 'Enduro', 'Race', 'Toermotor', 'Chopper', 'Zijspan'],
      VehicleTypeUrl: './assets/motor.jpg',
      IsSelected: false
    },
    {
      id: '3',
      type: 'Scooter',
      subType: [],
      VehicleTypeUrl: './assets/scooter.jpg',
      IsSelected: false
    }
    ];
    localStorage.setItem('VehicleTypeDescriptions', JSON.stringify(vehicleTypeDescriptions))
  }

}


