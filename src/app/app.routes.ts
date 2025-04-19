import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { SummaryComponent } from './summary/summary.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    {path:'', component : HomeComponent},
    {path:'activity', component : ActivityComponent},
    { path: 'activity/:name', component: ActivityComponent },
    {path:'add', component : AddActivityComponent},
    {path:'summary', component : SummaryComponent},
    {path:'settings', component : SettingsComponent}
];
