import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyOperationComponent } from './photography-operation.component';

describe('PhotographyOperationComponent', () => {
  let component: PhotographyOperationComponent;
  let fixture: ComponentFixture<PhotographyOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographyOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographyOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
