import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrIconComponent } from './arr-icon.component';

describe('ArrIconComponent', () => {
  let component: ArrIconComponent;
  let fixture: ComponentFixture<ArrIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
