import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstatiscalComponent } from './liststatiscal.component';

describe('ListstatiscalComponent', () => {
  let component: ListstatiscalComponent;
  let fixture: ComponentFixture<ListstatiscalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListstatiscalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstatiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
