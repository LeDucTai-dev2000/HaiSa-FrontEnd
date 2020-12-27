import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketofshowtimeComponent } from './ticketofshowtime.component';

describe('TicketofshowtimeComponent', () => {
  let component: TicketofshowtimeComponent;
  let fixture: ComponentFixture<TicketofshowtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketofshowtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketofshowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
