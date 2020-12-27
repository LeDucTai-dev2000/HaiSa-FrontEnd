import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteShowtimesComponent } from './delete-showtimes.component';

describe('DeleteShowtimesComponent', () => {
  let component: DeleteShowtimesComponent;
  let fixture: ComponentFixture<DeleteShowtimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteShowtimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteShowtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
