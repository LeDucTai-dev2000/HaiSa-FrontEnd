import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGenremovieComponent } from './list-genremovie.component';

describe('ListGenremovieComponent', () => {
  let component: ListGenremovieComponent;
  let fixture: ComponentFixture<ListGenremovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGenremovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGenremovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
