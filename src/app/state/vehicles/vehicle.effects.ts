import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadVehicleTypes,
  loadVehicleTypesFailure,
  loadVehicleTypesSuccess,
  updateVehicleType,
  updateVehicleTypesFailure,
  updateVehicleTypesSuccess,
} from './vehicle.actions';

import { of, from, EMPTY } from 'rxjs';
import { switchMap, map, catchError, tap, concatMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { VehicleService } from 'src/app/service/vehicle.service';

@Injectable()
export class VehicleEffects {
  constructor(
    private actions$: Actions,
    private VehicleService: VehicleService
  ) {}

 // Run this code when a loadVehicleTypes action is dispatched
 getVehicleTypes$ = createEffect(() =>
 this.actions$.pipe(
   ofType(loadVehicleTypes),
   switchMap(() =>
     // Call the getVehicleTypes method, convert it to an observable
     from(this.VehicleService.getVehicleTypes()).pipe(
       // Take the returned value and return a new success action containing the VehicleTypes
       map((VehicleTypes) => loadVehicleTypesSuccess({ VehicleTypes: VehicleTypes })),
       // Or... if it errors return a new failure action containing the error
       catchError((error) => of(loadVehicleTypesFailure({ error })))
     )
   )
 )
);

 // Run this code when the addVehicle or removeVehicle action is dispatched
 updateSelectedVehicleType$ = createEffect(
  () =>
    this.actions$.pipe(
      ofType(updateVehicleType),
      tap((id)=>console.log(id)),
      concatMap(({id}) => from(this.VehicleService.updateVehicleTypes(id)).pipe(map((VehicleTypes)=>updateVehicleTypesSuccess(VehicleTypes)),
      catchError((error) => of(updateVehicleTypesFailure({ error })))
      )
    )
  )
);
}
