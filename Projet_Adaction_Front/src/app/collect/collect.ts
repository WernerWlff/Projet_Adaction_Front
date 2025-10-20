import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectService } from '../services/collect';
import { CityService } from '../services/city';
import { VolunteerService } from '../services/volunteer';
import { City } from '../services/city';
import { Volunteer } from '../services/volunteer';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.html',
  styleUrls: ['./collect.css'],
  imports: [CommonModule, RouterModule, ReactiveFormsModule]
})

export class CollectComponent implements OnInit {
  collectForm: FormGroup;
  cities: City[];
  volunteers: Volunteer[];

  constructor(
    private fb: FormBuilder,
    private collectService: CollectService,
    private cityService: CityService,
    private volunteerService: VolunteerService
  ) {
    this.collectForm = this.fb.group({
      date: ['', Validators.required],
      city_id: ['', Validators.required],
      glass_nb: [0, Validators.required],
      butt_nb: [0, Validators.required],
      plastic_nb: [0, Validators.required],
      electronics_nb: [0, Validators.required],
      others_nb: [0, Validators.required],
      volunteer_id: ['', Validators.required]
    });

    this.cities = [];
    this.volunteers = [];
  }

  ngOnInit() {
    this.getCities();
    this.getVolunteers();
  }

  increment(field: string) {
    const control = this.collectForm.get(field);
    if (control) {
      control.setValue((control.value || 0) + 1 );
    }
  }

  decrement(field: string) {
    const control = this.collectForm.get(field);
    if (control && control.value > 0) {
      control.setValue(control.value - 1);
    }
  }

  onSubmit() {
    if (this.collectForm.valid) {
      const formValue = this.collectForm.value;
      const payload = {
        ...formValue,
        city: { id: formValue.city_id },
        volunteer: { id: formValue.volunteer_id }
      };
      delete payload.city_id;
      delete payload.volunteer_id;

      this.collectService.createCollect(payload).subscribe(
        (collect) => {
          console.log('Collecte enregistrée :', collect);
          this.collectForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement de la collecte :', error);
        }
    );
  }
}

  private getCities() {
    this.cityService.getAllCities().subscribe(
      (cities) => {
        this.cities = cities;
      },
      (error) => {
        console.error('Erreur lors de la récupération des villes:', error);
      }
    );  
  }

  private getVolunteers() {
    this.volunteerService.getAllVolunteers().subscribe(
      (volunteers) => {
        this.volunteers = volunteers;
      },
      (error) => {
        console.error('Erreur lors de la récupération des bénévoles:', error);
      }
    );
  }
}