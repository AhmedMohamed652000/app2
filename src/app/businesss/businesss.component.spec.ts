import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesssComponent } from './businesss.component';

describe('BusinesssComponent', () => {
  let component: BusinesssComponent;
  let fixture: ComponentFixture<BusinesssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinesssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
