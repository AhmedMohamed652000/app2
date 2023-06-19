import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideographyListComponent } from './videography-list.component';

describe('VideographyListComponent', () => {
  let component: VideographyListComponent;
  let fixture: ComponentFixture<VideographyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideographyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideographyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
