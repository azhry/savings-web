import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataBukuTabunganComponent } from './form-data-buku-tabungan.component';

describe('FormDataBukuTabunganComponent', () => {
  let component: FormDataBukuTabunganComponent;
  let fixture: ComponentFixture<FormDataBukuTabunganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDataBukuTabunganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataBukuTabunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
