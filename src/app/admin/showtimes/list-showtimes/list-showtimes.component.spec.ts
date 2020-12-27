import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShowtimesComponent } from './list-showtimes.component';

describe('ListShowtimesComponent', () => {
  let component: ListShowtimesComponent;
  let fixture: ComponentFixture<ListShowtimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListShowtimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShowtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
