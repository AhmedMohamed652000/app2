import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerListComponent } from './photographer-list.component';

describe('PhotographerListComponent', () => {
  let component: PhotographerListComponent;
  let fixture: ComponentFixture<PhotographerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
