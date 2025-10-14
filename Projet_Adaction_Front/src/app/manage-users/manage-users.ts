import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ManageUsersEditModal } from '../manage-users-edit-modal/manage-users-edit-modal';
import { Volunteer, VolunteerService } from '../services/volunteer';

@Component({
  selector: 'app-manage-users',
  imports: [CommonModule],
  templateUrl: './manage-users.html',
  styleUrls: ['./manage-users.css']
})
export class ManageUsers implements OnInit {
  volunteers : Volunteer[] = [];

  constructor(private volunteerService : VolunteerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadVolunteers();
  }

  loadVolunteers(): void {
    this.volunteerService.getAllVolunteers().subscribe(
      (volunteers) =>  {
        this.volunteers = volunteers; 
      },
      (error) => {
        console.error("Erreur lors du chargement des bénévoles :", error);
      }
    );
  }

  deleteVolunteer(id: number): void {
    this.volunteerService.deleteVolunteer(id).subscribe(
      () => {
        this.loadVolunteers();
      },
      (error) => {
        console.error("Erreur lors de la suppression :", error);
      }
    );
  }

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
}
