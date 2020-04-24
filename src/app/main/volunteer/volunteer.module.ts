import { NgModule } from "@angular/core";
import { VolunteerView } from './volunteer.view';
import { VolunteerRoutingModule } from './volunteer-routting.module';
import { CommonModule } from '@angular/common';
import { VolunteerComponent } from 'src/app/components';

@NgModule({
    declarations:[
        VolunteerView,
        VolunteerComponent
    ],
    imports:[
        CommonModule,
        VolunteerRoutingModule
    ],
    exports:[],
    providers:[]
})

export class VolunteerModule {}