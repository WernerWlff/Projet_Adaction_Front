import { Routes } from '@angular/router';
import { VolunteerListComponent } from './volunteers/volunteer-list/volunteer-list';
import { CollectComponent } from './collect/collect';

export const routes: Routes = [
  { path: 'volunteers', component: VolunteerListComponent },
  { path: 'collects', component: CollectComponent}
];
