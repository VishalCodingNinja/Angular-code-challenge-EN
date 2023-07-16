import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {KentekenCheck} from 'rdw-kenteken-check'
@Component({
  selector: 'app-veh-number',
  templateUrl: './veh-number.component.html',
  styleUrls: ['./veh-number.component.css']
})
export class VehNumberComponent implements OnInit {
  @Input() formGroupVehicle: FormGroup= this.fb.group({
    licencePlateNumber: ['', Validators.required],
    });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  onFocusOutEvent(event: any){
    //JFK01P
    console.log(event.target.value);
    const kt2 = new KentekenCheck(event.target.value)
    let formattedValue = kt2.formatLicense();
    if(kt2.valid){
      let formattedValue = kt2.formatLicense();
      this.formGroupVehicle.controls['licencePlateNumber'].setValue(formattedValue);
      this.formGroupVehicle.controls['licencePlateNumber'].setErrors(null);
    } else {
      this.formGroupVehicle.controls['licencePlateNumber'].setErrors({'incorrect': true});
    }
  }
}
