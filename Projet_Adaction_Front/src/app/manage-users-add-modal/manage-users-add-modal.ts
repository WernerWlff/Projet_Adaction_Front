import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogActions } from '@angular/material/dialog';


@Component({
  standalone: true,
  selector: 'app-manage-users-add-modal',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogContent, MatDialogActions],
  templateUrl: './manage-users-add-modal.html',
  styleUrls: ['./manage-users-add-modal.css']
})

export class ManageUsersAddModal implements OnInit{
  addForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ManageUsersAddModal>) {
    this.addForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      location: ['' , [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSave(): void {
    if (this.addForm.valid) {
      this.dialogRef.close(this.addForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
