import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photographer2Component } from './photographer2.component';

describe('Photographer2Component', () => {
  let component: Photographer2Component;
  let fixture: ComponentFixture<Photographer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Photographer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Photographer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
