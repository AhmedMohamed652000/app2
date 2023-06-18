import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videography2Component } from './videography2.component';

describe('Videography2Component', () => {
  let component: Videography2Component;
  let fixture: ComponentFixture<Videography2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Videography2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videography2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
