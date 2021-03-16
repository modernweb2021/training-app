import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninBComponent } from './signin-b.component';

describe('SigninBComponent', () => {
  let component: SigninBComponent;
  let fixture: ComponentFixture<SigninBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
