import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideographyFormComponent } from './videography-form.component';

describe('VideographyFormComponent', () => {
  let component: VideographyFormComponent;
  let fixture: ComponentFixture<VideographyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideographyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideographyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
