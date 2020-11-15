import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipnIconComponent } from './hipn-icon.component';

describe('HipnIconComponent', () => {
  let component: HipnIconComponent;
  let fixture: ComponentFixture<HipnIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipnIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipnIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
