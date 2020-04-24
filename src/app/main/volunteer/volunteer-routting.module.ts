import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { VolunteerView } from './volunteer.view';

const volunteerRoutes:Routes = [
    {path:'',component:VolunteerView}
]

@NgModule({
    imports:[RouterModule.forChild(volunteerRoutes)],
    exports:[RouterModule]
})

export class VolunteerRoutingModule{}