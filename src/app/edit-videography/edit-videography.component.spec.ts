import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVideographyComponent } from './edit-videography.component';

describe('EditVideographyComponent', () => {
  let component: EditVideographyComponent;
  let fixture: ComponentFixture<EditVideographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVideographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVideographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
