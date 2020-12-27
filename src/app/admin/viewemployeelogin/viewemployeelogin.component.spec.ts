import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeeloginComponent } from './viewemployeelogin.component';

describe('ViewemployeeloginComponent', () => {
  let component: ViewemployeeloginComponent;
  let fixture: ComponentFixture<ViewemployeeloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewemployeeloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewemployeeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
