import { Component } from '@angular/core';
import { VolunteerService, Volunteer } from '../services/volunteer';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class AddVolunteerComponent {
  volunteerForm: FormGroup;

  constructor(private fb: FormBuilder, private volunteerService: VolunteerService) {
    this.volunteerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  submit() {
    if (this.volunteerForm.valid) {
      const newVolunteer: Volunteer = this.volunteerForm.value;
      this.volunteerService.addVolunteer(newVolunteer).subscribe({
        next: (v: Volunteer) => {
          console.log('Bénévole ajouté', v);
          this.volunteerForm.reset(); // réinitialise le formulaire
        },
        error: (err: any) => console.error('Erreur ajout bénévole', err)
      });
    }
  }
}
