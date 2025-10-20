import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersEditModal } from './manage-users-edit-modal';

describe('ManageUsersEditModal', () => {
  let component: ManageUsersEditModal;
  let fixture: ComponentFixture<ManageUsersEditModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUsersEditModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUsersEditModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
