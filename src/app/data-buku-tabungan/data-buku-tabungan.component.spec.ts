import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBukuTabunganComponent } from './data-buku-tabungan.component';

describe('DataBukuTabunganComponent', () => {
  let component: DataBukuTabunganComponent;
  let fixture: ComponentFixture<DataBukuTabunganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBukuTabunganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBukuTabunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
