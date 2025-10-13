import { Routes } from '@angular/router';
import { VolunteerListComponent } from './volunteers/volunteer-list/volunteer-list.component';
import { AddVolunteerComponent } from './add-volunteer/add-volunteer.component';


export const routes: Routes = [
  { path: 'volunteers', component: VolunteerListComponent },
  { path: 'add-volunteer', component: AddVolunteerComponent }
];
