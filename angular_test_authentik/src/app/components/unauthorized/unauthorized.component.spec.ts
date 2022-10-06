import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaothorizedComponent } from './unauthorized.component';

describe('UnaothorizedComponent', () => {
  let component: UnaothorizedComponent;
  let fixture: ComponentFixture<UnaothorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnaothorizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnaothorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
