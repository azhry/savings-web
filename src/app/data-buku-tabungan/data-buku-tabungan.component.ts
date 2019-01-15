import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-buku-tabungan',
  templateUrl: './data-buku-tabungan.component.html',
  styleUrls: ['./data-buku-tabungan.component.css']
})
export class DataBukuTabunganComponent implements OnInit {

	private tabungan: Array<object> = [];	

	constructor(private apiService: ApiService, private router: Router, private location: Location) { }

	ngOnInit() {
		this.getTabungan();
	}

	public getTabungan() {
		this.apiService.getTabungan().subscribe(data => {
			this.tabungan = data.values;
		});
	}

	public deleteTabungan(id) {
		this.apiService.deleteTabungan(id).subscribe(response => {
			console.log(response);
			location.reload();
		});
	}

}
