import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPg } from './login-pg';

describe('LoginPg', () => {
  let component: LoginPg;
  let fixture: ComponentFixture<LoginPg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
