import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenremovieComponent } from './add-genremovie.component';

describe('AddGenremovieComponent', () => {
  let component: AddGenremovieComponent;
  let fixture: ComponentFixture<AddGenremovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGenremovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGenremovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
