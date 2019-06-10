import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TOGGLE_SHOW_FILTER } from '../state/demo.actions';
import { demo_slice } from '../state/demo.reducer';

@Component({
	selector: 'app-ngrx-store',
	templateUrl: './ngrx-store.component.html',
	styleUrls: [ './ngrx-store.component.scss' ]
})
export class NgRxStoreComponent implements OnInit {
	constructor(private store: Store<any>) {}

	showFilterPane: boolean;

	ngOnInit() {
		this.store.pipe(select(demo_slice)).subscribe((demo_slice) => {
			this.showFilterPane = demo_slice.showFilter;
		});
	}

	checkChanged(val: boolean) {
		this.store.dispatch({
			type: TOGGLE_SHOW_FILTER,
			payload: val
		});
	}
}
