import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcinemaofmonthComponent } from './totalcinemaofmonth.component';

describe('TotalcinemaofmonthComponent', () => {
  let component: TotalcinemaofmonthComponent;
  let fixture: ComponentFixture<TotalcinemaofmonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalcinemaofmonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcinemaofmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
