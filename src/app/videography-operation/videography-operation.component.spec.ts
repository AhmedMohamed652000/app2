import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideographyOperationComponent } from './videography-operation.component';

describe('VideographyOperationComponent', () => {
  let component: VideographyOperationComponent;
  let fixture: ComponentFixture<VideographyOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideographyOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideographyOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
