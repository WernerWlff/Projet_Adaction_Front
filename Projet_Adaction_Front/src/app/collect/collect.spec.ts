import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collect } from './collect';

describe('Collect', () => {
  let component: Collect;
  let fixture: ComponentFixture<Collect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Collect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Collect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
