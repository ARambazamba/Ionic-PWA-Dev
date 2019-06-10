import { TOGGLE_SHOW_FILTER } from './demo.actions';

//Change import in demos.modules.ts to use this:
// import { demo_slice, reducer } from "./state/demo.reducer";

export const demo_slice = 'demo_slice';

export const initialState = { showFilter: false };

export function reducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_SHOW_FILTER: {
			return {
				...state,
				showFilter: action.payload
			};
		}

		default:
			return state;
	}
}
