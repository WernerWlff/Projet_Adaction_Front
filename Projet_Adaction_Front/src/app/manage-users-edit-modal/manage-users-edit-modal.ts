import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { Volunteer } from '../services/volunteer';
import { MatInputModule } from "@angular/material/input";
import { MatDialogActions } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'app-manage-users-edit-modal',
  imports: [MatInputModule, MatDialogContent, MatDialogActions, MatDialogModule, ReactiveFormsModule, CommonModule, MatFormFieldModule],
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
      firstname: [data.volunteer.firstname, [Validators.required]], 
      lastname: [data.volunteer.lastname, [Validators.required]],
      email: [data.volunteer.email, [Validators.required, Validators.email]],
      password: [data.volunteer.password, [Validators.required]],
      location: [data.volunteer.location, [Validators.required]],
      updated_at: [this.formatCurrentDate()],
      total_points: [data.volunteer.total_points],
      donation_points: [data.volunteer.donation_points]
    });
  }

  formatCurrentDate(): string {
    const now = new Date();
    return now.toISOString().split('T')[0];
  }

  ngOnInit(): void {};

  onSave(): void {};

  onCancel(): void {
    this.dialogRef.close();
  }
}
