import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagIconComponent } from './mag-icon.component';

describe('MagIconComponent', () => {
  let component: MagIconComponent;
  let fixture: ComponentFixture<MagIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
