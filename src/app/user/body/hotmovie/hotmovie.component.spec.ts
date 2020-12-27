import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotmovieComponent } from './hotmovie.component';

describe('HotmovieComponent', () => {
  let component: HotmovieComponent;
  let fixture: ComponentFixture<HotmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
