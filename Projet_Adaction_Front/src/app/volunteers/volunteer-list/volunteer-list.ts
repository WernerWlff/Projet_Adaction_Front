import { Component, OnInit } from '@angular/core';
import { VolunteerService, Volunteer } from '../../services/volunteer';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.html',
  styleUrls: ['./volunteer-list.css']
})
export class VolunteerListComponent implements OnInit {
  volunteers: Volunteer[] = [];

  constructor(private volunteerService: VolunteerService) {}

  ngOnInit(): void {
    this.volunteerService.getVolunteers().subscribe(data => {
      this.volunteers = data;
    });
  }
}

