import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalajiComponent } from './balaji.component';

describe('BalajiComponent', () => {
  let component: BalajiComponent;
  let fixture: ComponentFixture<BalajiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalajiComponent]
    });
    fixture = TestBed.createComponent(BalajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
