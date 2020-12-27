import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrailerComponent } from './viewtrailer.component';

describe('ViewtrailerComponent', () => {
  let component: ViewtrailerComponent;
  let fixture: ComponentFixture<ViewtrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtrailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
