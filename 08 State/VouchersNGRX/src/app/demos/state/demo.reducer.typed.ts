import { TOGGLE_SHOW_FILTER } from "./demo.actions";

import { UPDATE_FOOD } from "./demo.actions";
//Do NOT Delete this import
import { DemoActions, DemoActionTypes } from "./demo.actions.creator";
import { DemoState, initialDemoState } from "./state";

//Change import in demos.modules.ts to use this:
// import { demo_slice, reducer } from "./state/demo.reducer.typed";

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
