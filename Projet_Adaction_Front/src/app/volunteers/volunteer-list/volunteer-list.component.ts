import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VolunteerService, Volunteer } from '../../services/volunteer';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.html',
  styleUrls: ['./volunteer-list.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class VolunteerListComponent implements OnInit {
  volunteers: Volunteer[] = [];

  constructor(private volunteerService: VolunteerService) {}

  ngOnInit(): void {
    this.volunteerService.getAllVolunteers().subscribe(data => {
      this.volunteers = data;
    });
  }
}

