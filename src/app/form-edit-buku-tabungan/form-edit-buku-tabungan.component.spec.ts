import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditBukuTabunganComponent } from './form-edit-buku-tabungan.component';

describe('FormEditBukuTabunganComponent', () => {
  let component: FormEditBukuTabunganComponent;
  let fixture: ComponentFixture<FormEditBukuTabunganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditBukuTabunganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditBukuTabunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
