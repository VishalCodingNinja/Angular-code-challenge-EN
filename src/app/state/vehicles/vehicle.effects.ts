import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addVehicle,
  removeVehicle,
  loadVehicles,
  loadVehiclesSuccess,
  loadVehiclesFailure,
  loadVehicleTypes,
  loadVehicleTypesSuccess,
  updateVehicleType,
  updateVehicleTypesSuccess,
} from './vehicle.actions';

import { of, from, EMPTY } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, tap, concatMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllVehicleTypes, selectAllVehicles } from './vehicle.selectors';
import { AppState } from './app.state';
import { VehicleService } from 'src/app/service/vehicle.service';

@Injectable()
export class VehicleEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private VehicleService: VehicleService
  ) {}

  // Run this code when a loadVehicles action is dispatched
  loadVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVehicles),
      switchMap(() =>
        // Call the getVehicles method, convert it to an observable
        from(this.VehicleService.getVehicles()).pipe(
          // Take the returned value and return a new success action containing the Vehicles
          map((Vehicles) => loadVehiclesSuccess({ Vehicles: Vehicles })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadVehiclesFailure({ error })))
        )
      )
    )
  );

  // Run this code when the addVehicle or removeVehicle action is dispatched
  saveVehicles$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addVehicle, removeVehicle),
        withLatestFrom(this.store.select(selectAllVehicles)),
        switchMap(([action, Vehicles]) => from(this.VehicleService.saveVehicles(Vehicles)))
      ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );

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
         catchError((error) => of(loadVehiclesFailure({ error })))
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
        catchError(()=>EMPTY))
        )
      )
  );
}
