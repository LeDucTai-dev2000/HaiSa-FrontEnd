import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackloginComponent } from './backlogin.component';

describe('BackloginComponent', () => {
  let component: BackloginComponent;
  let fixture: ComponentFixture<BackloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
