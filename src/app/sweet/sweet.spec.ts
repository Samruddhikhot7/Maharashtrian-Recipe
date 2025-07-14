import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweet } from './sweet';

describe('Sweet', () => {
  let component: Sweet;
  let fixture: ComponentFixture<Sweet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sweet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sweet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
