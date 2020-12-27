import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharttotalcinemaComponent } from './charttotalcinema.component';

describe('CharttotalcinemaComponent', () => {
  let component: CharttotalcinemaComponent;
  let fixture: ComponentFixture<CharttotalcinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharttotalcinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharttotalcinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
