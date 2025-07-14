import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vadarecipe } from './vadarecipe';

describe('Vadarecipe', () => {
  let component: Vadarecipe;
  let fixture: ComponentFixture<Vadarecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vadarecipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vadarecipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
