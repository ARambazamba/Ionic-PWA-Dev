import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Voucher } from '../../shared/model/model';
import * as demoActions from '../state/demo.actions.creator';
import * as fromDemo from '../state/demo.reducer.typed';

@Component({
	selector: 'app-ngrx-effects',
	templateUrl: './ngrx-effects.component.html',
	styleUrls: [ './ngrx-effects.component.scss' ]
})
export class NgRxEffectsComponent implements OnInit {
	vouchers: Voucher[];
	dataSource: MatTableDataSource<Voucher>;
	displayedColumns = [ 'ID', 'Text', 'Date', 'Amount', 'Edit' ];
	showFilterPane: boolean = false;

	constructor(private store: Store<fromDemo.State>) {}

	ngOnInit() {
		this.store.pipe(select(fromDemo.getShowFilter)).subscribe((hide) => {
			this.showFilterPane = hide;
		});

		this.store.dispatch(new demoActions.Load());

		this.store.pipe(select(fromDemo.getAllVouchers)).subscribe((vouchers: Voucher[]) => {
			console.log('Data received from store', vouchers);
			this.dataSource = new MatTableDataSource(vouchers);
		});
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	hideFilter(val) {
		this.store.dispatch(new demoActions.ToggleShowFilter(val));
	}

	deleteVoucher(id: number) {
		this.store.dispatch(new demoActions.DeleteVoucher(id));
	}
}
