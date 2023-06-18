import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiddingComponent } from './widding.component';

describe('WiddingComponent', () => {
  let component: WiddingComponent;
  let fixture: ComponentFixture<WiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
