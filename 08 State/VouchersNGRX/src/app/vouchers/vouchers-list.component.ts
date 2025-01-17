import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Voucher } from '../shared/model/model';
import { VouchersService } from './voucher.service';
import { DataStoreService } from '../shared/data-store/data-store-service';

@Component({
	selector: 'app-vouchers-list',
	templateUrl: './vouchers-list.component.html',
	styleUrls: [ './vouchers-list.component.scss' ]
})
export class VouchersListComponent implements OnInit {
	dataSource: MatTableDataSource<Voucher>;
	displayedColumns = [ 'ID', 'Text', 'Date', 'Amount', 'Delete', 'Edit' ];

	constructor(private ds: DataStoreService, private router: Router) {}

	ngOnInit() {
		this.initVouchers();
	}

	private initVouchers() {
		this.ds.getAllVouchers().subscribe((data) => {
			this.dataSource = new MatTableDataSource(data);
		});
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	editItem(v: Voucher) {
		console.log('Edit Row', v);
		this.router.navigate([ '/vouchers/' + v.ID ]);
	}

	deleteVoucher(id: number) {
		this.ds.deleteVoucher(id);
		this.initVouchers();
	}
}
