import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerList } from './volunteer-list';

describe('VolunteerList', () => {
  let component: VolunteerList;
  let fixture: ComponentFixture<VolunteerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
