import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiddinglistComponent } from './widdinglist.component';

describe('WiddinglistComponent', () => {
  let component: WiddinglistComponent;
  let fixture: ComponentFixture<WiddinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiddinglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WiddinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
