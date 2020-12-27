import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGenremovieComponent } from './update-genremovie.component';

describe('UpdateGenremovieComponent', () => {
  let component: UpdateGenremovieComponent;
  let fixture: ComponentFixture<UpdateGenremovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGenremovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGenremovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
