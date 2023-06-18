import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widding2Component } from './widding2.component';

describe('Widding2Component', () => {
  let component: Widding2Component;
  let fixture: ComponentFixture<Widding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Widding2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Widding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
