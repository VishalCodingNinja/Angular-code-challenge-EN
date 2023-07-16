import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleTypeDescription } from 'src/app/models/vehicle.model';


@Component({
  selector: 'app-veh-sub-type',
  templateUrl: './veh-sub-type.component.html',
  styleUrls: ['./veh-sub-type.component.css']
})
export class VehSubTypeComponent implements OnInit {
  @Input() selectedVehicleType: Observable<VehicleTypeDescription> | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeEvent(e: any){
    console.log(e.target.value);
  }

}
