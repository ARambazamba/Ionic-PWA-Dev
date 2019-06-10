import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VouchersService } from '../../vouchers/voucher.service';
import * as demoActions from './demo.actions.creator';
import { Voucher } from '../../shared/model/model';

@Injectable()
export class VouchersEffects {
	constructor(private actions$: Actions, private vs: VouchersService) {}

	@Effect()
	loadVouchers$: Observable<Action> = this.actions$.pipe(
		ofType(demoActions.DemoActionTypes.Load),
		mergeMap((action) =>
			this.vs
				.getVouchers()
				.pipe(
					map((vouchers: Voucher[]) => new demoActions.LoadSuccess(vouchers)),
					catchError((err) => of(new demoActions.LoadErr(err)))
				)
		)
	);

	@Effect()
	deleteVoucher$: Observable<Action> = this.actions$.pipe(
		ofType(demoActions.DemoActionTypes.DeleteVoucher),
		map((action: demoActions.DeleteVoucher) => action.payload),
		mergeMap((vid: number) =>
			this.vs
				.deleteVoucher(vid)
				.pipe(
					map(() => new demoActions.DeleteVoucherSuccess(vid)),
					catchError((err) => of(new demoActions.DeleteVoucherErr(err)))
				)
		)
	);

	//Todo: Implement Effects for: create, update
}
