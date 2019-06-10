import { Action } from '@ngrx/store';
import { Voucher } from '../../shared/model/model';

//Create Enum for Action Types

export enum DemoActionTypes {
	ToggleShowFilter = '[Demo] Toggle Show Filter',
	UpdateFood = '[Demo] Update Food',
	Load = '[Vouchers] Load',
	LoadSuccess = '[Vouchers] Load Success',
	LoadErr = '[Vouchers] Load Err',
	SetCurrentVoucher = '[Voucher] SetCurrentVoucher',
	ClearCurrentVoucher = '[Voucher] ClearCurrentVoucher',
	InitializeVoucher = '[Voucher] InitializeVoucher',
	DeleteVoucher = '[Voucher] DeleteVoucher',
	DeleteVoucherSuccess = '[Voucher] DeleteVoucher Success',
	DeleteVoucherErr = '[Voucher] DeleteVoucher Err'
}

//Implement Action Creators

export class ToggleShowFilter implements Action {
	readonly type = DemoActionTypes.ToggleShowFilter;
	constructor(public payload: boolean) {}
}

export class UpdateFood implements Action {
	readonly type = DemoActionTypes.UpdateFood;
	constructor(public payload: string) {}
}

export class Load implements Action {
	readonly type = DemoActionTypes.Load;
}

export class LoadSuccess implements Action {
	readonly type = DemoActionTypes.LoadSuccess;
	constructor(public payload: Voucher[]) {}
}

export class LoadErr implements Action {
	readonly type = DemoActionTypes.LoadErr;
	constructor(public payload: string) {}
}

export class SetCurrentVoucher implements Action {
	readonly type = DemoActionTypes.SetCurrentVoucher;
	constructor(public payload: number) {}
}

export class ClearCurrentVoucher implements Action {
	readonly type = DemoActionTypes.ClearCurrentVoucher;
}

export class DeleteVoucher implements Action {
	readonly type = DemoActionTypes.DeleteVoucher;
	constructor(public payload: number) {}
}

export class DeleteVoucherSuccess implements Action {
	readonly type = DemoActionTypes.DeleteVoucherSuccess;

	constructor(public payload: number) {}
}

export class DeleteVoucherErr implements Action {
	readonly type = DemoActionTypes.DeleteVoucherErr;

	constructor(public payload: string) {}
}

export class InitializeVoucher implements Action {
	readonly type = DemoActionTypes.InitializeVoucher;
}

// Create Union Type to serve as a second param for Reducer

export type DemoActions =
	| ToggleShowFilter
	| UpdateFood
	| SetCurrentVoucher
	| ClearCurrentVoucher
	| InitializeVoucher
	| Load
	| LoadSuccess
	| LoadErr
	| DeleteVoucher
	| DeleteVoucherSuccess
	| DeleteVoucherErr;
