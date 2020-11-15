import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepIconComponent } from './sleep-icon.component';

describe('SleepIconComponent', () => {
  let component: SleepIconComponent;
  let fixture: ComponentFixture<SleepIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
