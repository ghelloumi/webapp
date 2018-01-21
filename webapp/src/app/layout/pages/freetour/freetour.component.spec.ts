import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetourComponent } from './freetour.component';

describe('FreetourComponent', () => {
  let component: FreetourComponent;
  let fixture: ComponentFixture<FreetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
