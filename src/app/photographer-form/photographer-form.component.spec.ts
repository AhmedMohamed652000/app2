import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerFormComponent } from './photographer-form.component';

describe('PhotographerFormComponent', () => {
  let component: PhotographerFormComponent;
  let fixture: ComponentFixture<PhotographerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
