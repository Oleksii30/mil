import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelIconComponent } from './travel-icon.component';

describe('TravelIconComponent', () => {
  let component: TravelIconComponent;
  let fixture: ComponentFixture<TravelIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
