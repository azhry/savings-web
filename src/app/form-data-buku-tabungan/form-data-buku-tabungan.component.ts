import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form-data-buku-tabungan',
  templateUrl: './form-data-buku-tabungan.component.html',
  styleUrls: ['./form-data-buku-tabungan.component.css']
})
export class FormDataBukuTabunganComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  public createTabungan() {
  	const tabungan = {
  		no_rekening: document.getElementById('no_rekening').value,
  		nama: document.getElementById('no_rekening').value,
  		alamat: document.getElementById('no_rekening').value,
  		no_telepon: document.getElementById('no_rekening').value
  	};

  	this.apiService.createTabungan(tabungan).subscribe((response) => {
  		console.log(response);
  		this.router.navigate(['']);
  	});
  }
}
