import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class ApiService {

	API_URL = 'http://localhost:3000';

	constructor(private httpClient: HttpClient) { }

	getTabungan() {
		return this.httpClient.get(this.API_URL + '/tabungan');
	}

	createTabungan(tabungan) {
		return this.httpClient.post(this.API_URL + '/tabungan', tabungan);
	}

	deleteTabungan(id) {
		return this.httpClient.post(this.API_URL + '/delete-tabungan', { id: id });
	}

	updateTabungan(data) {
		return this.httpClient.post(this.API_URL + '/update-tabungan', data);
	}

	findTabungan(id) {
		return this.httpClient.get(this.API_URL + '/tabungan/' + id);
	}
}
