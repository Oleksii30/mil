import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutePageComponent } from './aboute-page.component';

describe('AboutePageComponent', () => {
  let component: AboutePageComponent;
  let fixture: ComponentFixture<AboutePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
