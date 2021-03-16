import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninAComponent } from './signin-a.component';

describe('SigninAComponent', () => {
  let component: SigninAComponent;
  let fixture: ComponentFixture<SigninAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
