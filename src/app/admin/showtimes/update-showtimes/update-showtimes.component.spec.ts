import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShowtimesComponent } from './update-showtimes.component';

describe('UpdateShowtimesComponent', () => {
  let component: UpdateShowtimesComponent;
  let fixture: ComponentFixture<UpdateShowtimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateShowtimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShowtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
