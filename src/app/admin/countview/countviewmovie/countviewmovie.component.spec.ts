import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountviewmovieComponent } from './countviewmovie.component';

describe('CountviewmovieComponent', () => {
  let component: CountviewmovieComponent;
  let fixture: ComponentFixture<CountviewmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountviewmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountviewmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
