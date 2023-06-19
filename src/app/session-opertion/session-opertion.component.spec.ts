import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionOpertionComponent } from './session-opertion.component';

describe('SessionOpertionComponent', () => {
  let component: SessionOpertionComponent;
  let fixture: ComponentFixture<SessionOpertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionOpertionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionOpertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
