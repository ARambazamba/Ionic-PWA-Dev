import { Voucher } from "../../shared/model/model";
import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

// DemoState Slice

export const demo_slice = "demo_slice";

//Defines local State
export interface DemoState {
  showFilter: boolean;
  favFood: string;
  currVoucherId: number | null;
  vouchers: Voucher[];
}

//Extends State from Root with props from lazy loaded module
export interface State extends fromRoot.State {
  demos: DemoState;
}

export const initialDemoState: DemoState = {
  showFilter: false,
  vouchers: [],
  currVoucherId: null,
  favFood: "Russian Beef Stroganoff with Mashed Potatoes"
};
//Define Selectors ... Order matters!

const getDemoFeatureState = createFeatureSelector<DemoState>(demo_slice);

export const getShowFilter = createSelector(
  getDemoFeatureState,
  state => state.showFilter
);

export const getFavFood = createSelector(
  getDemoFeatureState,
  state => state.favFood
);

export const getCurrentVoucher = createSelector(
  getDemoFeatureState,
  state => state.currVoucherId
);

export const getAllVouchers = createSelector(
  getDemoFeatureState,
  state => state.vouchers
);
