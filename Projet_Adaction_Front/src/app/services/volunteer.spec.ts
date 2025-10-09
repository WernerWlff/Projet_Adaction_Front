import { TestBed } from '@angular/core/testing';

import { VolunteerService } from './volunteer';

describe('VolunteerService', () => {
  let service: VolunteerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VolunteerService]
    });
    service = TestBed.inject(VolunteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
