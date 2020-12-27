import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdComponent } from './layout-ad.component';

describe('LayoutAdComponent', () => {
  let component: LayoutAdComponent;
  let fixture: ComponentFixture<LayoutAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
