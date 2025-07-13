import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPg } from './signup-pg';

describe('SignupPg', () => {
  let component: SignupPg;
  let fixture: ComponentFixture<SignupPg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupPg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupPg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
