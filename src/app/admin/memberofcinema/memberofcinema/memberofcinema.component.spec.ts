import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberofcinemaComponent } from './memberofcinema.component';

describe('MemberofcinemaComponent', () => {
  let component: MemberofcinemaComponent;
  let fixture: ComponentFixture<MemberofcinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberofcinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberofcinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
