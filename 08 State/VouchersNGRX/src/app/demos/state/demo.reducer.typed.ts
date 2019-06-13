import { TOGGLE_SHOW_FILTER } from "./demo.actions";
import { Voucher } from "../../shared/model/model";
import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UPDATE_FOOD } from "./demo.actions";
import { DemoActions, DemoActionTypes } from "./demo.actions.creator";

//Change import in demos.modules.ts to use this:
// import { demo_slice, reducer } from "./state/demo.reducer.typed";

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

//Reducer

//TODO: Use this until before Action Creators

export function reducer(state: DemoState = initialDemoState, action) {
  switch (action.type) {
    case TOGGLE_SHOW_FILTER:
      {
        return {
          ...state,
          showFilter: action.payload
        };
      }
      break;
    case UPDATE_FOOD:
      {
        return {
          ...state,
          favFood: action.payload
        };
      }
      break;
    default:
      return state;
  }

  //TODO: Use this until starting with Action Creators

  // export function reducer(state: DemoState = initialDemoState, action: DemoActions) {
  // 	switch (action.type) {
  // 		case DemoActionTypes.ToggleShowFilter: {
  // 			return {
  // 				...state,
  // 				showFilter: action.payload
  // 			};
  // 		}
  // 		case DemoActionTypes.UpdateFood: {
  // 			return {
  // 				...state,
  // 				favFood: action.payload
  // 			};
  // 		}
  // 		case DemoActionTypes.SetCurrentVoucher: {
  // 			return {
  // 				...state,
  // 				currVoucherId: action.payload
  // 			};
  // 		}
  // 		case DemoActionTypes.ClearCurrentVoucher: {
  // 			return {
  // 				...state,
  // 				currVoucherId: null
  // 			};
  // 		}
  // 		case DemoActionTypes.InitializeVoucher: {
  // 			return {
  // 				...state,
  // 				currVoucherId: 0
  // 			};
  // 		}
  // 		case DemoActionTypes.LoadSuccess: {
  // 			return {
  // 				...state,
  // 				vouchers: action.payload
  // 			};
  // 		}
  // 		case DemoActionTypes.DeleteVoucherSuccess:
  // 			return {
  // 				...state,
  // 				products: state.vouchers.filter((v) => v.ID !== action.payload),
  // 				currentProductId: null,
  // 				error: ''
  // 			};

  // 		case DemoActionTypes.DeleteVoucherErr:
  // 			return {
  // 				...state,
  // 				error: action.payload
  // 			};

  // 		default:
  // 			return state;
  // 	}
}
