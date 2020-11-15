import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngIconComponent } from './eng-icon.component';

describe('EngIconComponent', () => {
  let component: EngIconComponent;
  let fixture: ComponentFixture<EngIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
