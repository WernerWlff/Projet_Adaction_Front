import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ManageUsersEditModal } from '../manage-users-edit-modal/manage-users-edit-modal';
import { Volunteer, VolunteerService } from '../services/volunteer';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { ManageUsersAddModal } from '../manage-users-add-modal/manage-users-add-modal';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-manage-users',
  imports: [CommonModule, MatIconModule, MatButtonModule, FormsModule, MatSelectModule, MatFormFieldModule, MatInputModule],
  templateUrl: './manage-users.html',
  styleUrls: ['./manage-users.css']
})
export class ManageUsers implements OnInit {
  volunteers : Volunteer[] = [];
  searchQuery: string = '';
  selectedCity: string = '';
  cities: string[] = [];

  constructor(private volunteerService : VolunteerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadVolunteers();
  }

  loadVolunteers(): void {
    this.volunteerService.getAllVolunteers().subscribe(
      (volunteers) =>  {
        this.volunteers = volunteers; 
        this.extractCities();
      },
      (error) => {
        console.error("Erreur lors du chargement des bénévoles :", error);
      }
    );
  }

  deleteVolunteer(id: number): void {
    if(confirm("Êtes-vous sûr de vouloir supprimer ce bénévole ?")) {
      this.volunteerService.deleteVolunteer(id).subscribe(
        () => {
          this.loadVolunteers();
        },
        (error) => {
          console.error("Erreur lors de la suppression :", error);
        }
      );
    }
  }

  extractCities(): void {
    this.cities = [...new Set(this.volunteers.map(volunteer => volunteer.location))];
  }

  get filteredVolunteers(): Volunteer[] {
    return this.volunteers.filter(volunteer => {
    const matchesSearch = volunteer.firstname.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                          volunteer.lastname.toLowerCase().includes(this.searchQuery.toLowerCase());
    
    const matchesCity = this.selectedCity ? volunteer.location === this.selectedCity : true;
    return matchesSearch && matchesCity;
    })
  };

  openEditModal(volunteer: Volunteer): void {
    const dialogRef = this.dialog.open(ManageUsersEditModal, {
      width: '400px',
      data: {volunteer: {...volunteer}},
    });

    dialogRef.afterClosed().subscribe((updatedVolunteer) => {
      if(updatedVolunteer) {
        this.volunteerService.updateVolunteer(volunteer.id, updatedVolunteer).subscribe(
          () => {
            this.loadVolunteers();
          }, 
        (error) => {
          console.error("Erreur lors de la mise à jour :", error);
        }
        );
      }
    });
  }

  openAddModal(): void {
    const dialogRef = this.dialog.open(ManageUsersAddModal, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((newVolunteer) => {
      if(newVolunteer) {
        this.volunteerService.addVolunteer(newVolunteer).subscribe(
          () => {
            this.loadVolunteers();
          }, (error) => {
            console.error("Erreur lors de l'ajout :" + error)
          }
        );
      }
    });
  }
}
