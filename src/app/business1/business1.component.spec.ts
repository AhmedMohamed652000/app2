import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Business1Component } from './business1.component';

describe('Business1Component', () => {
  let component: Business1Component;
  let fixture: ComponentFixture<Business1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Business1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Business1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
