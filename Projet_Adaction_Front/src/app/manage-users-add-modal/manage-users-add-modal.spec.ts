import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersAddModal } from './manage-users-add-modal';

describe('ManageUsersAddModal', () => {
  let component: ManageUsersAddModal;
  let fixture: ComponentFixture<ManageUsersAddModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUsersAddModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUsersAddModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
