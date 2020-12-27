import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComingComponent } from './list-coming.component';

describe('ListComingComponent', () => {
  let component: ListComingComponent;
  let fixture: ComponentFixture<ListComingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
