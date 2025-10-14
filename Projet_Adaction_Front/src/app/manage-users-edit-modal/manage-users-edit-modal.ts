import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { Volunteer } from '../services/volunteer';
import { MatFormField, MatInputModule } from "@angular/material/input";
import { MatDialogActions } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-users-edit-modal',
  imports: [MatInputModule, MatDialogContent, MatDialogActions, MatFormField, MatDialogModule, ReactiveFormsModule],
  templateUrl: './manage-users-edit-modal.html',
  styleUrls: ['./manage-users-edit-modal.css']
})

export class ManageUsersEditModal implements OnInit {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ManageUsersEditModal>,
    @Inject(MAT_DIALOG_DATA) public data: {volunteer: Volunteer}
  ) {
    this.editForm = this.fb.group({
      firstname: [data.volunteer.firstname], 
      lastname: [data.volunteer.lastname],
      email: [data.volunteer.email],
      password: [data.volunteer.password], 
      location: [data.volunteer.location] 
    });
  }

  ngOnInit(): void {};

  onSave(): void {};

  onCancel(): void {
    this.dialogRef.close();
  }
}
