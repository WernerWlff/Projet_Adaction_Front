import { Routes } from '@angular/router';
import { VolunteerListComponent } from './volunteers/volunteer-list/volunteer-list.component';
import { CollectComponent } from './collect/collect';
import { AddVolunteerComponent } from './add-volunteer/add-volunteer.component';
import { ManageUsers } from './manage-users/manage-users';


export const routes: Routes = [
  { path: 'volunteers', component: VolunteerListComponent },
  { path: 'add-volunteer', component: AddVolunteerComponent },
  { path: 'collects', component: CollectComponent},
  { path: 'manage-users', component: ManageUsers}
];
