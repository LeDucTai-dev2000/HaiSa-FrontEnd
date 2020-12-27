import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemashowtimeComponent } from './cinemashowtime.component';

describe('CinemashowtimeComponent', () => {
  let component: CinemashowtimeComponent;
  let fixture: ComponentFixture<CinemashowtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemashowtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemashowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
