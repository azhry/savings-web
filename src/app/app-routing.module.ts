import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBukuTabunganComponent } from './data-buku-tabungan/data-buku-tabungan.component';
import { FormDataBukuTabunganComponent } from './form-data-buku-tabungan/form-data-buku-tabungan.component';
import { FormEditBukuTabunganComponent } from './form-edit-buku-tabungan/form-edit-buku-tabungan.component';

const routes: Routes = [
	{
		path: '',
		component: DataBukuTabunganComponent,
	},
	{
		path: 'add-data',
		component: FormDataBukuTabunganComponent,
	},
	{
		path: 'edit-data/:id',
		component: FormEditBukuTabunganComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
