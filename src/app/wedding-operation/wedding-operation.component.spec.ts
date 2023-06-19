import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingOperationComponent } from './wedding-operation.component';

describe('WeddingOperationComponent', () => {
  let component: WeddingOperationComponent;
  let fixture: ComponentFixture<WeddingOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
