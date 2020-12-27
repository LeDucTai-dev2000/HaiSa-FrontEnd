import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShowtimesComponent } from './add-showtimes.component';

describe('AddShowtimesComponent', () => {
  let component: AddShowtimesComponent;
  let fixture: ComponentFixture<AddShowtimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShowtimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShowtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
