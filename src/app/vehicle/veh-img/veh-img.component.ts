import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VehicleTypeDescription } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-veh-img',
  templateUrl: './veh-img.component.html',
  styleUrls: ['./veh-img.component.css']
})
export class VehImgComponent implements OnInit {
  @Input() inputVehicleTypes: Observable<VehicleTypeDescription[]> = of([]);
  constructor() { }

  ngOnInit(): void {
  }
}
