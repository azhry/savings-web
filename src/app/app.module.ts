import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBukuTabunganComponent } from './data-buku-tabungan/data-buku-tabungan.component';
import { FormDataBukuTabunganComponent } from './form-data-buku-tabungan/form-data-buku-tabungan.component';
import { FormEditBukuTabunganComponent } from './form-edit-buku-tabungan/form-edit-buku-tabungan.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBukuTabunganComponent,
    FormDataBukuTabunganComponent,
    FormEditBukuTabunganComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
