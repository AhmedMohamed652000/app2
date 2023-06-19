import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHellComponent } from './edit-hell.component';

describe('EditHellComponent', () => {
  let component: EditHellComponent;
  let fixture: ComponentFixture<EditHellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
